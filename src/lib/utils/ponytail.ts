import { base64, hex } from "@scure/base";
import * as btc from "@scure/btc-signer";

export function strim(str: string): string {
    return str.replace(/[^\w.]/g, "");
}

const mainnet = {
    bech32: "bc",
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
};

export function scriptAddress(hexScript: string): string | null {
    if (!hexScript) {
        return null;
    }

    const addr = btc.Address(mainnet);
    const script = hex.decode(hexScript);
    const parsedScript = btc.OutScript.decode(script);
    const parsedAddress = addr.encode(parsedScript);

    return parsedAddress;
}

export function addressScript(address: string): string | null {
    if (!address) {
        return null;
    }

    const addr = btc.Address(mainnet);
    const outScript = btc.OutScript.encode(addr.decode(address));
    const hexScript = hex.encode(outScript);

    return hexScript;
}
