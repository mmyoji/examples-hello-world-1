import { serveFile } from "jsr:@std/http/file-server";

Deno.serve((req: Request) => {
    const path = (new URL(req.url).pathname);
    if (path === "/manifest.json") {
        return serveFile(req, "./manifest.json");
    }

    return serveFile(req, "./index.html");
});
