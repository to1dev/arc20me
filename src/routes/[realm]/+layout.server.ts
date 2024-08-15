import type { LayoutServerLoad } from "./$types";
import { toASCII } from "punycode";

function parseQueryString(queryString: string): {
    [key: string]: string | string[] | undefined;
} {
    const params = new URLSearchParams(queryString);
    const query: { [key: string]: string | string[] | undefined } = {};

    for (const [key, value] of params.entries()) {
        if (query[key]) {
            if (!Array.isArray(query[key])) {
                query[key] = [query[key] as string];
            }
            (query[key] as string[]).push(value);
        } else {
            query[key] = value;
        }
    }

    return query;
}

let isSvg = false;
let imgSrc = "";

async function fetchImage(imageUrl: string) {
    try {
        const response = await fetch(imageUrl);
        if (response.ok) {
            const contentType = response.headers.get("content-type");

            if (contentType && contentType.includes("image/svg+xml")) {
                isSvg = true;
                imgSrc = imageUrl;
            } else {
                const text = await response.text();
                if (text.includes("<svg")) {
                    isSvg = true;
                    imgSrc =
                        "data:image/svg+xml;charset=utf-8," +
                        encodeURIComponent(text);
                } else {
                    imgSrc = imageUrl;
                }
            }
        }
    } catch (error) {
        console.error("Error fetching the image:", error);
    }
}

export const load: LayoutServerLoad = async ({
    fetch,
    params,
    url,
    platform,
}) => {
    const realm = toASCII(params.realm).trim().toLowerCase();
    const search = url.search;
    const query = parseQueryString(search);

    try {
        let response: any | null = null;
        let result: any | null = null;

        if (platform) {
            response = await platform?.env?.MY_SERVICE.realm(realm, query);
            result = JSON.parse(response);
        } else {
            response = await fetch(
                `https://ep.arc20.me/api/realm/${realm}${search}`
            );
            result = await response.json();
        }

        if (result?.meta?.image) {
            await fetchImage(result?.meta?.image);
            result.meta.image = imgSrc;
        }

        return {
            realm,
            query,
            meta: result?.meta,
            profile: result?.profile,
            realmData: { realm },
        };
    } catch (e) {
        return {
            realm: realm,
            query,
            meta: null,
            profile: null,
            realmData: { realm },
        };
    }
};
