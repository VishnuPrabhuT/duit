if (!self.define) {
    let e,
        s = {};
    const i = (i, n) => (
        (i = new URL(i + ".js", n).href),
        s[i] ||
            new Promise((s) => {
                if ("document" in self) {
                    const e = document.createElement("script");
                    (e.src = i), (e.onload = s), document.head.appendChild(e);
                } else (e = i), importScripts(i), s();
            }).then(() => {
                let e = s[i];
                if (!e)
                    throw new Error(`Module ${i} didn’t register its module`);
                return e;
            })
    );
    self.define = (n, r) => {
        const c =
            e ||
            ("document" in self ? document.currentScript.src : "") ||
            location.href;
        if (s[c]) return;
        let d = {};
        const t = (e) => i(e, c),
            o = { module: { uri: c }, exports: d, require: t };
        s[c] = Promise.all(n.map((e) => o[e] || t(e))).then(
            (e) => (r(...e), d)
        );
    };
}
define(["./workbox-3e4da89b"], function (e) {
    "use strict";
    self.addEventListener("message", (e) => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
    }),
        e.precacheAndRoute(
            [
                {
                    url: "chunks/vendor.js",
                    revision: "d63a13a34aa9b8d8474cdc5d57fba6aa",
                },
                {
                    url: "css/main.css",
                    revision: "567df10fa3b6e71d2ef71e1c4735ae4c",
                },
                {
                    url: "main.js",
                    revision: "03d4ecdb705cac43bcc5f7d39f4645d1",
                },
                {
                    url: "registerSW.js",
                    revision: "1872c500de691dce40960bb85481de07",
                },
                {
                    url: "manifest.json",
                    revision: "ca0b8b782c100354fdf19f6b2fafdd7c",
                },
            ],
            {}
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")));
});
