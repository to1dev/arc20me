type AtomId = string;

export interface ParsedId {
    prefix: string | null;
    protocol: string | null;
    type: string | null;
    id: AtomId | null;
}

const removeDuplicatePrefixes = (line: string): string => {
    const parts = line.split(":");
    const seen = new Set<string>();
    const result: string[] = [];

    for (let i = 0; i < parts.length; i++) {
        if (!seen.has(parts[i])) {
            result.push(parts[i]);
            seen.add(parts[i]);
        }
    }

    return result.join(":");
};

export const parseAtomicalIdfromURN = (line: string): ParsedId | null => {
    const correctedLine = removeDuplicatePrefixes(line);
    const parts = correctedLine.split(":");

    if (parts.length >= 4) {
        const prefix = parts[0];
        const protocol = parts[1];
        const type = parts[2];
        const idPart = parts.slice(3).join(":");

        const id = idPart.split("/")[0];

        return {
            prefix: prefix,
            protocol: protocol,
            type: type,
            id: id,
        };
    }

    return null;
};
