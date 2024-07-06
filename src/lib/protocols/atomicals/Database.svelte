<script lang="ts">
    import { onMount } from "svelte";

    interface Data {
        id: number;
        name: string;
        data: string;
    }

    let db: IDBDatabase;
    let storedData: string = "";
    let exists: boolean = false;

    onMount(async () => {
        db = await openDB();
        const data1 = { id: 1, name: "example", data: "data to be saved" };
        exists = await saveData(data1);
        const data2 = await getData(1);
        storedData = JSON.stringify(data2, null, 4);
    });

    function openDB(): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open("myDatabase", 1);
            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBOpenDBRequest).result;
                db.createObjectStore("myStore", { keyPath: "id" });
            };
            request.onsuccess = (event) =>
                resolve((event.target as IDBOpenDBRequest).result);
            request.onerror = (event) =>
                reject((event.target as IDBOpenDBRequest).error);
        });
    }

    async function saveData(data: Data): Promise<boolean> {
        const existingData = await getData(data.id);
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(["myStore"], "readwrite");
            const objectStore = transaction.objectStore("myStore");

            let request: IDBRequest;
            if (existingData) {
                request = objectStore.put(data);
            } else {
                request = objectStore.add(data);
            }

            request.onsuccess = () => resolve(!!existingData);
            request.onerror = (event) =>
                reject((event.target as IDBRequest).error);
        });
    }

    function getData(id: number): Promise<Data> {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(["myStore"], "readonly");
            const objectStore = transaction.objectStore("myStore");
            const request = objectStore.get(id);
            request.onsuccess = (event) =>
                resolve((event.target as IDBRequest).result as Data);
            request.onerror = (event) =>
                reject((event.target as IDBRequest).error);
        });
    }
</script>

<div
    class="flex flex-col justify-center items-center p-4 border-t mx-auto bg-white"
>
    <h1 class="mb-4">
        IndexedDB Example
        {#if exists}
            <span class="mr-1">(exists)</span>
        {/if}
    </h1>
    <div class="flex">{storedData}</div>
</div>
