export async function onRequest(context: any): Promise<Response> {
    const url = new URL(context.request.url);
    const realm = url.searchParams.get("realm");

    if (!realm) {
        return new Response(
            JSON.stringify({ error: "Missing realm parameter" }),
            { status: 400 }
        );
    }

    return new Response(
        JSON.stringify({
            meta: { v: "1.2" },
            realm: { id: "8888", realm: realm, pid: "7878" },
            profile: {},
        }),
        { status: 200 }
    );
}
