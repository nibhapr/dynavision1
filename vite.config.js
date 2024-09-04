import { defineConfig } from "vite";

export default defineConfig({
	resolve: {
		alias: {
			"@styles": "/src/styles",
		},
	},
});
