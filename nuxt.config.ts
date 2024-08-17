// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// future: {
	// 	compatibilityVersion: 4
	// },

	// compatibilityDate: '2024-04-03',
	srcDir: 'app',
	serverDir: 'server',

	app: {
		pageTransition: { name: 'page', mode: 'out-in' }
	},

	// plugins: [{ src: '@/plugins/preview', ssr: false }]
	devtools: { enabled: true },

	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content'],
	content: {
		highlight: {
			theme: {
				default: 'min-light',
				dark: 'min-dark'
			}
		}
	},
	colorMode: {
		classSuffix: ''
	},
	nitro: {
		prerender: {
			routes: ['/sitemap.xml', 'hola']
		}
	}
});
