import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/user/authenticate": {
				target: "http://127.0.0.1:5000",
				changeOrigin: true,
				rewrite: (path) =>
					path.replace(/^\/user\/authenticate/, "/user/authenticate"),
			},
			"/user/list": {
				target: "http://127.0.0.1:5000",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/user\/list/, "/user/list"),
			},
		},
	},
});
