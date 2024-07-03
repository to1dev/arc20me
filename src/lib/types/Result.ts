interface Args {
    bitworkc: string;
    nonce: number;
    time: number;
}

interface Payload {
    args: Args;
    d: string;
}

export interface Info {
    payload: Payload;
}

interface Result {
    info: Info;
}

export interface ResponseResult {
    response: {
        result: Result[];
    };
}

interface Translation {
    enUS: string;
    zhCN: string;
}

interface Links {
    w: Array<string | { n: string; l: string }>;
    x: string;
    t: string;
    d: string;
    g: string;
}

export interface Content {
    v: string;
    n: string;
    i: string;
    b: string;
    d: Translation;
    p: {
        b: string[];
        n: string[];
    };
    l: Links;
}

export interface Realm {
    id: string;
    name: string;
    pid: string;
}
