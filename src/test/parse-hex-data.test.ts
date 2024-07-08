import {
    extractHexData,
    type ParsedHexData,
} from "$lib/protocols/atomicals/vanilla";

const jsonData1 = {
    mint_data: {
        fields: {
            args: {
                bitworkc: "1234",
                nonce: 9810124,
                time: 1695805192,
            },
            "punk0810.png": {
                $auto: true,
                $b: "89504e470d0a1a0a0000000d4948445200000018000000180806000000e0773df8000000ac4944415478da636018055404ff9130f50d0e0d0d85636a5a8462303aa6d412bc86536a095186936b09aef0c6c0e45a82a2e9f6c6069c185d2d4916201bae11b111c3709818b27ab25daf1338158c912d808991ea0bac4103e26bdaa56015438e0fb22d201444c45a80916af04530b24f88b584280bd0e5a86e01cd7cb02c4f070353dd026439722cc0b084141f909c4cb1c501a58613cc6cb80a3cb24a537c16505a1fe0b5004b118e170000d78041f7ad6cf3880000000049454e44ae426082",
                $len: 262,
            },
        },
    },
};

const jsonData2 = {
    mint_data: {
        fields: {
            args: {
                bitworkc: "1234",
                nonce: 9810124,
                time: 1695805192,
            },
            "punk0810.png": {
                $b: {
                    $auto: true,
                    $b: "89504e470d0a1a0a0000000d4948445200000018000000180806000000e0773df8000000ac4944415478da636018055404ff9130f50d0e0d0d85636a5a8462303aa6d412bc86536a095186936b09aef0c6c0e45a82a2e9f6c6069c185d2d4916201bae11b111c3709818b27ab25daf1338158c912d808991ea0bac4103e26bdaa56015438e0fb22d201444c45a80916af04530b24f88b584280bd0e5a86e01cd7cb02c4f070353dd026439722cc0b084141f909c4cb1c501a58613cc6cb80a3cb24a537c16505a1fe0b5004b118e170000d78041f7ad6cf3880000000049454e44ae426082",
                    $len: 262,
                },
                $ct: "image/png",
            },
        },
    },
};

export function extract_hex_data() {
    const parsedData1 = extractHexData(jsonData1);
    const parsedData2 = extractHexData(jsonData2);

    console.log("Parsed Data 1:", parsedData1);
    console.log("Parsed Data 2:", parsedData2);
}
