// vite.config.ts
import { defineConfig } from "file:///C:/Users/tiago/OneDrive/Documentos/GitHub/home/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/tiago/OneDrive/Documentos/GitHub/home/node_modules/@vitejs/plugin-react/dist/index.mjs";

// tsconfig.app.json
var compilerOptions = {
  composite: true,
  tsBuildInfoFile: "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
  target: "ES2020",
  useDefineForClassFields: true,
  lib: ["ES2020", "DOM", "DOM.Iterable"],
  module: "ESNext",
  skipLibCheck: true,
  moduleResolution: "bundler",
  allowImportingTsExtensions: true,
  resolveJsonModule: true,
  isolatedModules: true,
  moduleDetection: "force",
  noEmit: true,
  jsx: "react-jsx",
  strict: true,
  noUnusedLocals: true,
  noUnusedParameters: true,
  noFallthroughCasesInSwitch: true,
  paths: {
    "@components/*": ["./src/components/*"],
    "@config/*": ["./src/config/*"],
    "@features/*": ["./src/features/*"],
    "@hooks/*": ["./src/hooks/*"],
    "@utils/*": ["./src/utils/*"],
    "@views/*": ["./src/views/*"],
    "@stylesheets/*": ["./src/stylesheets/*"],
    "@app/*": ["./src/*"]
  }
};

// vite.config.ts
import { URL, fileURLToPath } from "node:url";
var __vite_injected_original_import_meta_url = "file:///C:/Users/tiago/OneDrive/Documentos/GitHub/home/vite.config.ts";
function mountAliasPaths() {
  const paths = compilerOptions.paths;
  const aliases = {};
  Object.keys(paths).forEach((alias) => {
    const aliasArray = paths[alias].map(
      (aliasPath) => fileURLToPath(new URL(aliasPath.replace("/*", ""), __vite_injected_original_import_meta_url))
    );
    aliases[alias.replace("/*", "")] = aliasArray[0];
  });
  return aliases;
}
var vite_config_default = defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/styles/includes" as *;`
      }
    },
    postcss: {
      plugins: []
    }
  },
  resolve: {
    alias: mountAliasPaths()
  },
  build: {
    target: "es2015"
  },
  server: {
    open: "index.html",
    port: 4e3,
    host: "0.0.0.0"
  },
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidHNjb25maWcuYXBwLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0aWFnb1xcXFxPbmVEcml2ZVxcXFxEb2N1bWVudG9zXFxcXEdpdEh1YlxcXFxob21lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0aWFnb1xcXFxPbmVEcml2ZVxcXFxEb2N1bWVudG9zXFxcXEdpdEh1YlxcXFxob21lXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy90aWFnby9PbmVEcml2ZS9Eb2N1bWVudG9zL0dpdEh1Yi9ob21lL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IGNvbXBpbGVyT3B0aW9ucyB9IGZyb20gJy4vdHNjb25maWcuYXBwLmpzb24nO1xyXG5pbXBvcnQgeyBVUkwsIGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCc7XHJcblxyXG5mdW5jdGlvbiBtb3VudEFsaWFzUGF0aHMoKSB7XHJcbiAgY29uc3QgcGF0aHMgPSBjb21waWxlck9wdGlvbnMucGF0aHMgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nW10+O1xyXG5cclxuICBjb25zdCBhbGlhc2VzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XHJcblxyXG4gIE9iamVjdC5rZXlzKHBhdGhzKS5mb3JFYWNoKChhbGlhcykgPT4ge1xyXG4gICAgY29uc3QgYWxpYXNBcnJheSA9IHBhdGhzW2FsaWFzXS5tYXAoKGFsaWFzUGF0aCkgPT5cclxuICAgICAgZmlsZVVSTFRvUGF0aChuZXcgVVJMKGFsaWFzUGF0aC5yZXBsYWNlKCcvKicsICcnKSwgaW1wb3J0Lm1ldGEudXJsKSlcclxuICAgICk7XHJcblxyXG4gICAgYWxpYXNlc1thbGlhcy5yZXBsYWNlKCcvKicsICcnKV0gPSBhbGlhc0FycmF5WzBdO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYWxpYXNlcztcclxufVxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Nzczoge1xyXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQHVzZSBcIi9zcmMvc3R5bGVzL2luY2x1ZGVzXCIgYXMgKjtgLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBvc3Rjc3M6IHtcclxuICAgICAgcGx1Z2luczogW10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IG1vdW50QWxpYXNQYXRocygpLFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHRhcmdldDogJ2VzMjAxNScsXHJcbiAgfSxcclxuXHJcbiAgc2VydmVyOiB7XHJcbiAgICBvcGVuOiAnaW5kZXguaHRtbCcsXHJcbiAgICBwb3J0OiA0MDAwLFxyXG4gICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW3JlYWN0KCldLFxyXG59KTtcclxuIiwgIntcbiAgXCJjb21waWxlck9wdGlvbnNcIjoge1xuICAgIFwiY29tcG9zaXRlXCI6IHRydWUsXG4gICAgXCJ0c0J1aWxkSW5mb0ZpbGVcIjogXCIuL25vZGVfbW9kdWxlcy8udG1wL3RzY29uZmlnLmFwcC50c2J1aWxkaW5mb1wiLFxuICAgIFwidGFyZ2V0XCI6IFwiRVMyMDIwXCIsXG4gICAgXCJ1c2VEZWZpbmVGb3JDbGFzc0ZpZWxkc1wiOiB0cnVlLFxuICAgIFwibGliXCI6IFtcIkVTMjAyMFwiLCBcIkRPTVwiLCBcIkRPTS5JdGVyYWJsZVwiXSxcbiAgICBcIm1vZHVsZVwiOiBcIkVTTmV4dFwiLFxuICAgIFwic2tpcExpYkNoZWNrXCI6IHRydWUsXG5cbiAgICBcIm1vZHVsZVJlc29sdXRpb25cIjogXCJidW5kbGVyXCIsXG4gICAgXCJhbGxvd0ltcG9ydGluZ1RzRXh0ZW5zaW9uc1wiOiB0cnVlLFxuICAgIFwicmVzb2x2ZUpzb25Nb2R1bGVcIjogdHJ1ZSxcbiAgICBcImlzb2xhdGVkTW9kdWxlc1wiOiB0cnVlLFxuICAgIFwibW9kdWxlRGV0ZWN0aW9uXCI6IFwiZm9yY2VcIixcbiAgICBcIm5vRW1pdFwiOiB0cnVlLFxuICAgIFwianN4XCI6IFwicmVhY3QtanN4XCIsXG5cbiAgICBcInN0cmljdFwiOiB0cnVlLFxuICAgIFwibm9VbnVzZWRMb2NhbHNcIjogdHJ1ZSxcbiAgICBcIm5vVW51c2VkUGFyYW1ldGVyc1wiOiB0cnVlLFxuICAgIFwibm9GYWxsdGhyb3VnaENhc2VzSW5Td2l0Y2hcIjogdHJ1ZSxcblxuICAgIFwicGF0aHNcIjoge1xuICAgICAgXCJAY29tcG9uZW50cy8qXCI6IFtcIi4vc3JjL2NvbXBvbmVudHMvKlwiXSxcbiAgICAgIFwiQGNvbmZpZy8qXCI6IFtcIi4vc3JjL2NvbmZpZy8qXCJdLFxuICAgICAgXCJAZmVhdHVyZXMvKlwiOiBbXCIuL3NyYy9mZWF0dXJlcy8qXCJdLFxuICAgICAgXCJAaG9va3MvKlwiOiBbXCIuL3NyYy9ob29rcy8qXCJdLFxuICAgICAgXCJAdXRpbHMvKlwiOiBbXCIuL3NyYy91dGlscy8qXCJdLFxuICAgICAgXCJAdmlld3MvKlwiOiBbXCIuL3NyYy92aWV3cy8qXCJdLFxuICAgICAgXCJAc3R5bGVzaGVldHMvKlwiOiBbXCIuL3NyYy9zdHlsZXNoZWV0cy8qXCJdLFxuICAgICAgXCJAYXBwLypcIjogW1wiLi9zcmMvKlwiXVxuICAgIH1cbiAgfSxcbiAgXCJpbmNsdWRlXCI6IFtcInNyY1wiXVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVSxTQUFTLG9CQUFvQjtBQUN2VyxPQUFPLFdBQVc7OztBQ0FoQixzQkFBbUI7QUFBQSxFQUNqQixXQUFhO0FBQUEsRUFDYixpQkFBbUI7QUFBQSxFQUNuQixRQUFVO0FBQUEsRUFDVix5QkFBMkI7QUFBQSxFQUMzQixLQUFPLENBQUMsVUFBVSxPQUFPLGNBQWM7QUFBQSxFQUN2QyxRQUFVO0FBQUEsRUFDVixjQUFnQjtBQUFBLEVBRWhCLGtCQUFvQjtBQUFBLEVBQ3BCLDRCQUE4QjtBQUFBLEVBQzlCLG1CQUFxQjtBQUFBLEVBQ3JCLGlCQUFtQjtBQUFBLEVBQ25CLGlCQUFtQjtBQUFBLEVBQ25CLFFBQVU7QUFBQSxFQUNWLEtBQU87QUFBQSxFQUVQLFFBQVU7QUFBQSxFQUNWLGdCQUFrQjtBQUFBLEVBQ2xCLG9CQUFzQjtBQUFBLEVBQ3RCLDRCQUE4QjtBQUFBLEVBRTlCLE9BQVM7QUFBQSxJQUNQLGlCQUFpQixDQUFDLG9CQUFvQjtBQUFBLElBQ3RDLGFBQWEsQ0FBQyxnQkFBZ0I7QUFBQSxJQUM5QixlQUFlLENBQUMsa0JBQWtCO0FBQUEsSUFDbEMsWUFBWSxDQUFDLGVBQWU7QUFBQSxJQUM1QixZQUFZLENBQUMsZUFBZTtBQUFBLElBQzVCLFlBQVksQ0FBQyxlQUFlO0FBQUEsSUFDNUIsa0JBQWtCLENBQUMscUJBQXFCO0FBQUEsSUFDeEMsVUFBVSxDQUFDLFNBQVM7QUFBQSxFQUN0QjtBQUNGOzs7QUQ5QkYsU0FBUyxLQUFLLHFCQUFxQjtBQUg4SyxJQUFNLDJDQUEyQztBQUtsUSxTQUFTLGtCQUFrQjtBQUN6QixRQUFNLFFBQVEsZ0JBQWdCO0FBRTlCLFFBQU0sVUFBa0MsQ0FBQztBQUV6QyxTQUFPLEtBQUssS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVO0FBQ3BDLFVBQU0sYUFBYSxNQUFNLEtBQUssRUFBRTtBQUFBLE1BQUksQ0FBQyxjQUNuQyxjQUFjLElBQUksSUFBSSxVQUFVLFFBQVEsTUFBTSxFQUFFLEdBQUcsd0NBQWUsQ0FBQztBQUFBLElBQ3JFO0FBRUEsWUFBUSxNQUFNLFFBQVEsTUFBTSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUM7QUFBQSxFQUNqRCxDQUFDO0FBRUQsU0FBTztBQUNUO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxTQUFTLENBQUM7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTyxnQkFBZ0I7QUFBQSxFQUN6QjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUVBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQ25CLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
