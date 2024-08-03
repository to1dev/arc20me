<script lang="ts">
    import { sanitize } from "@jill64/universal-sanitizer";
    import type { IOptions } from "sanitize-html";
    //import { marked } from "marked";

    export let text;

    let clean: string | Promise<string> | null = null;

    const defaultConfig: IOptions = {
        allowedTags: [
            // Sections derived from MDN element categories and limited to the more
            // benign categories.
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
            // Content sectioning
            "address",
            "article",
            "aside",
            "footer",
            "header",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "hgroup",
            "main",
            "nav",
            "section",
            // Text content
            "blockquote",
            "dd",
            "div",
            "dl",
            "dt",
            "figcaption",
            "figure",
            "hr",
            "li",
            "main",
            "ol",
            "p",
            "pre",
            "ul",
            // Inline text semantics
            "a",
            "abbr",
            "b",
            "bdi",
            "bdo",
            "br",
            "cite",
            "code",
            "data",
            "dfn",
            "em",
            "i",
            "kbd",
            "mark",
            "q",
            "rb",
            "rp",
            "rt",
            "rtc",
            "ruby",
            "s",
            "samp",
            "small",
            "span",
            "strong",
            "sub",
            "sup",
            "time",
            "u",
            "var",
            "wbr",
            // Table content
            "caption",
            "col",
            "colgroup",
            "table",
            "tbody",
            "td",
            "tfoot",
            "th",
            "thead",
            "tr",
        ],
        // Tags that cannot be boolean
        nonBooleanAttributes: [
            "abbr",
            "accept",
            "accept-charset",
            "accesskey",
            "action",
            "allow",
            "alt",
            "as",
            "autocapitalize",
            "autocomplete",
            "blocking",
            "charset",
            "cite",
            "class",
            "color",
            "cols",
            "colspan",
            "content",
            "contenteditable",
            "coords",
            "crossorigin",
            "data",
            "datetime",
            "decoding",
            "dir",
            "dirname",
            "download",
            "draggable",
            "enctype",
            "enterkeyhint",
            "fetchpriority",
            "for",
            "form",
            "formaction",
            "formenctype",
            "formmethod",
            "formtarget",
            "headers",
            "height",
            "hidden",
            "high",
            "href",
            "hreflang",
            "http-equiv",
            "id",
            "imagesizes",
            "imagesrcset",
            "inputmode",
            "integrity",
            "is",
            "itemid",
            "itemprop",
            "itemref",
            "itemtype",
            "kind",
            "label",
            "lang",
            "list",
            "loading",
            "low",
            "max",
            "maxlength",
            "media",
            "method",
            "min",
            "minlength",
            "name",
            "nonce",
            "optimum",
            "pattern",
            "ping",
            "placeholder",
            "popover",
            "popovertarget",
            "popovertargetaction",
            "poster",
            "preload",
            "referrerpolicy",
            "rel",
            "rows",
            "rowspan",
            "sandbox",
            "scope",
            "shape",
            "size",
            "sizes",
            "slot",
            "span",
            "spellcheck",
            "src",
            "srcdoc",
            "srclang",
            "srcset",
            "start",
            "step",
            "style",
            "tabindex",
            "target",
            "title",
            "translate",
            "type",
            "usemap",
            "value",
            "width",
            "wrap",
            // Event handlers
            "onauxclick",
            "onafterprint",
            "onbeforematch",
            "onbeforeprint",
            "onbeforeunload",
            "onbeforetoggle",
            "onblur",
            "oncancel",
            "oncanplay",
            "oncanplaythrough",
            "onchange",
            "onclick",
            "onclose",
            "oncontextlost",
            "oncontextmenu",
            "oncontextrestored",
            "oncopy",
            "oncuechange",
            "oncut",
            "ondblclick",
            "ondrag",
            "ondragend",
            "ondragenter",
            "ondragleave",
            "ondragover",
            "ondragstart",
            "ondrop",
            "ondurationchange",
            "onemptied",
            "onended",
            "onerror",
            "onfocus",
            "onformdata",
            "onhashchange",
            "oninput",
            "oninvalid",
            "onkeydown",
            "onkeypress",
            "onkeyup",
            "onlanguagechange",
            "onload",
            "onloadeddata",
            "onloadedmetadata",
            "onloadstart",
            "onmessage",
            "onmessageerror",
            "onmousedown",
            "onmouseenter",
            "onmouseleave",
            "onmousemove",
            "onmouseout",
            "onmouseover",
            "onmouseup",
            "onoffline",
            "ononline",
            "onpagehide",
            "onpageshow",
            "onpaste",
            "onpause",
            "onplay",
            "onplaying",
            "onpopstate",
            "onprogress",
            "onratechange",
            "onreset",
            "onresize",
            "onrejectionhandled",
            "onscroll",
            "onscrollend",
            "onsecuritypolicyviolation",
            "onseeked",
            "onseeking",
            "onselect",
            "onslotchange",
            "onstalled",
            "onstorage",
            "onsubmit",
            "onsuspend",
            "ontimeupdate",
            "ontoggle",
            "onunhandledrejection",
            "onunload",
            "onvolumechange",
            "onwaiting",
            "onwheel",
        ],
        disallowedTagsMode: "discard",
        allowedAttributes: {
            a: ["href", "name", "target"],
            // We don't currently allow img itself by default, but
            // these attributes would make sense if we did.
            img: [
                "src",
                "srcset",
                "alt",
                "title",
                "width",
                "height",
                "loading",
            ],
        },
        //allowedEmptyAttributes: ["alt"],
        // Lots of these won't come up by default because we don't allow them
        selfClosing: [
            "img",
            "br",
            "hr",
            "area",
            "base",
            "basefont",
            "input",
            "link",
            "meta",
        ],
        // URL schemes we permit
        allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
        allowedSchemesByTag: {},
        allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
        allowProtocolRelative: true,
        enforceHtmlBoundary: false,
        parseStyleAttributes: true,
    };

    const customConfig: IOptions = {
        ...defaultConfig,
        allowedTags: [...(defaultConfig.allowedTags || []), "video", "track"],
        allowedAttributes: {
            ...defaultConfig.allowedAttributes,
            div: ["class"],
            a: ["class", "href", "target"],
            h1: ["class"],
            h2: ["class"],
            video: ["class", "src", "autoplay", "muted", "loop", "controls"],
            track: ["kind"],
        },
        allowedSchemes: ["http", "https"],
    };

    const blocks = {
        metadata: {
            timestamp: "2024-08-03T12:00:00Z",
            author: "author1",
        },
        blocks: [
            {
                id: 0,
                name: "block1",
                type: "text",
                content: "This is the content of block1",
                metadata: {
                    timestamp: "2024-08-03T12:00:00Z",
                },
                children: [],
            },
            {
                id: 1,
                name: "block2",
                type: "text",
                content: "This is the content of block2",
                metadata: {},
                children: [],
            },
            {
                id: 2,
                name: "block3",
                type: "container",
                content: null,
                metadata: {},
                children: [
                    {
                        id: 0,
                        name: "sub-block1",
                        type: "text",
                        content: "This is a sub-block within block3",
                        metadata: {},
                        children: [],
                    },
                ],
            },
        ],
    };

    const text2 = `
            <div class='mb-4'>
                from <a class='text-purple-800' href='https://proton.me/wallet/bitcoin-guide-for-newcomers' target='_blank'>https://proton.me/wallet/bitcoin-guide-for-newcomers</a>
            </div>
            <div class='mb-4'>
                <h2 class='font-bold mb-2'>Introduction</h2>
                    In this article, we review some important history and features of Bitcoin for newcomers. We also look at how Bitcoin enables financial sovereignty and freedom. Finally, we explore the challenges facing Bitcoin and its future potential.
            </div>

            <div class='mb-4'>
                <h2 class='font-bold mb-2'>The Bitcoin network</h2>
                Bitcoin the network officially started on January 3, 2009, when the pseudonymous developer Satoshi Nakamoto created the first block of the Bitcoin blockchain.
            </div>

            <div class='mb-4'>The Bitcoin blockchain is the public ledger that records all historic transactions. Satoshi received the first 50 bitcoins (BTC), the network's token asset, as a reward for mining this block. Since then, over 840,000 blocks have been added, resulting in over 19 million bitcoins, all created through mining.</div>

            <div class='mb-4'>There are four main players in the Bitcoin network: developers, full nodes, miners, and bitcoin users.</div>

            <div class='mb-4'>
                <h2 class="font-bold mb-2">Developers</h2>
                Developers write the open source code for Bitcoin, which implements rules, such as what is a valid transaction, how a block of transactions should be added to the blockchain, and how miners are rewarded with new bitcoins. They publish their code and anyone else can take that code for free and modify or use it.
            </div>

            <div class='mb-4'>
                <h2 class="font-bold mb-2">Full Nodes</h2>
                Full nodes are servers on the internet that run Bitcoin code and enforce the network rules by rejecting invalid transactions and blocks. In order to verify any transaction without trusting a third party, each full node builds and stores the complete history of all Bitcoin transactions, starting with the first block. Full nodes also maintain the mempool, which is where all valid but unconfirmed transactions wait to be added to a new block.
            </div>

            <div class='mb-4'>
                <h2 class="font-bold mb-2">Miners</h2>
                Miners are a special type of full node that take the pending transactions from the mempool and try to create the next valid block of transactions through the proof-of-work (PoW) process. Once a miner succeeds in the computational challenge before other miners, it tells other full nodes, which verify if the miner followed all the rules. If yes, each full node then adds the valid block to its copy of the blockchain and tells other full nodes, until the network reaches consensus. The miner that solved the PoW challenge for the new block gets some new bitcoins as a reward for their computational contribution. Miners basically convert computing power into new bitcoins and secure the network from attacks. On average, a new block is added every 10 minutes and each block can contain thousands of transactions. A difficulty adjustment on mining happens every 2,016 blocks to try to maintain the 10 minute tempo.
            </div>

            <div class='mb-4'>
                <h2 class="font-bold mb-2">Bitcoin users</h2>
                Users can hold BTC and use it for transactions. They do this by using a cryptographic public key to generate Bitcoin addresses and receive BTC at those addresses. To send BTC to another address, they use the private key to sign the transaction. Thus, whoever owns the private key owns the associated BTC. Users can either trust third-party services like exchanges to hold their bitcoin, or use a self-custodial Bitcoin wallet like Proton Wallet to store the key themselves. When users want their transactions added to the blockchain, they will often pay transaction fees that go to the miners as another incentive to include their transaction. This network fee goes up when there is more demand for Bitcoin transactions.
            </div>

            <div class='text-center mb-4 px-4 italic'>In the early days, Satoshi played all the roles to kickstart the network. But because Bitcoin is an open permissionless network, more and more people joined by contributing to the codebase, running full nodes, mining, or transacting with bitcoin. By the end of 2010, Satoshi voluntarily disappeared, never again moving the 1 million bitcoins that he had mined and ending his influence on how Bitcoin develops. The Bitcoin network has now grown to tens of thousands of nodes run by individuals and organizations around the world with tens of millions of users. This decentralized network is the key to Bitcoin’s long-term security and reliability.</div>

            <div class='mb-4'>
                <h2 class='font-bold mb-2'>Importance of decentralization</h2>
                    Bitcoin has a system of checks and balances among the developers, full node operators, and mining node operators. Developers can update the open source Bitcoin code but cannot force their updates on the node operators. Miners are needed to keep adding new blocks that confirm new transactions. Full nodes have the most power over the state of the network by enforcing rules and approving new blocks from miners.
            </div>
    `;
    try {
        if (text2) {
            clean = sanitize(text2, {
                sanitizeHtml: customConfig,
            });
        }
    } catch (e) {
        console.error((e as Error).message);
        clean = null;
    }

    function scrollToSection(sectionId: string) {
        document
            .getElementById(sectionId)
            ?.scrollIntoView({ behavior: "smooth" });
    }
</script>

<div class="mt-2 text-black">
    {#if clean}
        {@html clean}
    {/if}
</div>

<style lang="postcss">
</style>
