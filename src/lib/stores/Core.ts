import { writable } from "svelte/store";

export const debug = writable<boolean>(false);
export const seq = writable<string | null>(null);
