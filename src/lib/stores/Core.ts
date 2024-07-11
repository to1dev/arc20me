import { writable } from "svelte/store";

export const debug = writable<boolean>(false);
