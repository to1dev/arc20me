import { writable } from "svelte/store";

export const mintData = writable<string | null>(null);
export const isDk = writable<boolean>(false);
export const debug = writable<boolean>(false);
