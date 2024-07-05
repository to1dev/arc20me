import {
    fetchRealmAtomicalId,
    fetchRealmProfile,
    fetchRealmProfileId,
} from "$lib/protocols/atomicals/vanilla";

export async function onRequest(context: any): Promise<Response> {
    const url = new URL(context.request.url);
    const realm = url.searchParams.get("realm");

    if (!realm) {
        return new Response(
            JSON.stringify({ error: "Missing realm parameter" }),
            { status: 400 }
        );
    }

    const _id = await fetchRealmAtomicalId(realm);
    if (_id.id) {
        const pid = await fetchRealmProfileId(_id.id);
        if (pid.pid) {
            const _profile = await fetchRealmProfile(pid.pid);
            if (_profile.profile) {
                return new Response(
                    JSON.stringify({
                        meta: { v: _profile.profile.v },
                        realm: { id: _id.id, realm: realm, pid: pid.pid },
                        profile: _profile.profile,
                    }),
                    { status: 200 }
                );
            }
        }
    }

    return new Response(
        JSON.stringify({
            meta: null,
            realm: null,
            profile: null,
        }),
        { status: 200 }
    );
}
