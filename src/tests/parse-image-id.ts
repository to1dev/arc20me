import {
    parseSingleLine,
    type ParsedId,
} from "$lib/protocols/atomicals/vanilla";

const data = `
atom:btc:id:189550
atom:btc:dat:1f643872ef3d8a1c61c3f98abf77eaebbbe3d06bbbd354dd56ed07d3ae9b8775i0
atom:btc:id:00d4e5086795093ac04df9fe9de75560341f9e66297160c5e93d7c32bfcf45e0i0/bullrun.gif
atom:btc:id:302faf8681a35135d0d7cf38a972f488a2e0bdf926cf142d83b51eca03c1c4b6i0
atom:btc:id:68793944abd0f40aa4ebd272f51447032fc32599f320f63e1fd2c74335e3831di0/image.webp
atom:btc:id:1f65be1b93f922a65aa4ef73833c7c5271fc6dd28f2fc37e60646d34aed7ffddi0
ord:btc:id:4b31771df21656d2a77e6fa18720a6dd94b04510b9065a7c67250d5c89ad2079i198
atom:btc:dat:atom:btc:dat:fa347963c92e40518754d71e3607778d7091564b292dea381e9148d46214c718i0/logo.png
`;

export const parseIds = async (): Promise<ParsedId[]> => {
    const lines = data.split("\n").filter((line) => line.trim() !== "");
    const parsedIds: ParsedId[] = [];

    for (const line of lines) {
        const parsedId = parseSingleLine(line);
        if (parsedId) {
            parsedIds.push(parsedId);
        }
    }

    return parsedIds;
};
