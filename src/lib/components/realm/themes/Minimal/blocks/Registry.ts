import type { ComponentType } from "svelte";
import TextBlock from "./TextBlock.svelte";
import AccordionBlock from "./AccordionBlock.svelte";
import LinkBlock from "./LinkBlock.svelte";
import ImageBlock from "./ImageBlock.svelte";

const blockRegistry: { [key: string]: ComponentType } = {
    text: TextBlock,
    accordion: AccordionBlock,
    link: LinkBlock,
    image: ImageBlock,
};

export function getBlock(type: string): ComponentType {
    return blockRegistry[type] || TextBlock;
}
