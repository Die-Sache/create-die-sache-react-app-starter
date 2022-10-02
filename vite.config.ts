import {defineConfig, UserConfig} from "vite";
import react from "@vitejs/plugin-react";
import zipPack from "vite-plugin-zip-pack";

const viteConfig = ({ mode }: UserConfig) => {
    return defineConfig({
        plugins: [react(), zipPack()],
        define: {
            "process.env.NODE_ENV": `"${mode}"`,
        }
    })
}

export default  viteConfig;