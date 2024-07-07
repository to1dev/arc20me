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

export interface Meta {
    v: string;
    id: string;
    pid: string;
    image: string;
}

export interface RealmData {
    realm: string;
}

export interface ProfileBase {
    v: string;
    image?: string;
    i?: string;
}

export interface DKProfile extends ProfileBase {
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

interface Ids {
    [key: string]: {
        t: string;
        v: string;
    };
}

interface Wallets {
    btc: {
        address: string;
    };
    doge: {
        address: string;
    };
    nostr: {
        nip05: string;
        [key: string]: any;
    };
}

interface LinkItem {
    type: string;
    name: string;
    url: string;
}

interface LinksGroup {
    group: string;
    items: LinkItem[];
}

interface Style {
    border?: string;
    [key: string]: string | undefined;
}

interface PreviewBox {
    type: string;
    text: string;
    name: string;
    url: string;
    img?: string;
    class: string[];
    style: Style;
}

interface CollectionMeta {
    order: number;
    note: string;
    display: string;
}

interface Collection {
    name: string;
    image?: string;
    desc?: string;
    meta: CollectionMeta;
    preview: PreviewBox[];
    links: LinksGroup[];
}

interface Collections {
    [key: string]: Collection;
}

export interface RealProfile extends ProfileBase {
    name: string;
    image: string;
    desc: string;
    ids: Ids;
    wallets: Wallets;
    links: LinksGroup[];
    collections: Collections;
}
