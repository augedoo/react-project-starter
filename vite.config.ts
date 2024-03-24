import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@/': '/src',
			'@/util': '/src/util',
			'@/assets': '/src/assets',
			'@/pages': '/src/pages',
			'@/styles': '/src/styles',
			'@/features': '/src/features',
			'@/components': '/src/components',
		},
	},
});
