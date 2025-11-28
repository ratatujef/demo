import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";

// https://vite.dev/config/

function generateAliases(directory: string) {
  const aliases: { [key: string]: string } = {};

  const directories = fs.readdirSync(resolve(__dirname, directory), {
    withFileTypes: true,
  });
  directories.forEach((dir) => {
    if (dir.isDirectory()) {
      const name = dir.name;
      aliases[name] = resolve(__dirname, `${directory}/${name}`);
    }
  });

  return aliases;
}

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  resolve: {
    alias: generateAliases("src"),
  },
  base: "/demo/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
