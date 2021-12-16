import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default () => {
    // console.log(path.resolve(__dirname, "./src/assets/sass"));

    return defineConfig({
        mode: "production",
        publicDir: "./src/assets",
        build: {
            outDir: "../public",
            assetsDir: "fonts",
            assetsInlineLimit: 50000,
            emptyOutDir: true,
            rollupOptions: {
                input: { main: "./src/main.jsx" },
                output: {
                    format: "es",
                    entryFileNames: "[name].js",
                    assetFileNames: "[ext]/[name].[ext]",
                    chunkFileNames: "chunks/[name].js",
                },
            },
        },
        resolve: {
            alias: {
                "/@components/": path.join(__dirname, "./src/components/"),
            },
        },
        cssPreprocessOptions: {
            sass: {
                modifyVars: {
                    $env: true,
                },
            },
        },
        plugins: [react()],
    });
};
