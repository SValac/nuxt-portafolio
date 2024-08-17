import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography';

// module.exports = {
// 	darkMode: 'class'
// };

export default {
	content: [],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif']
			}
		}
	},
	plugins: [
		typography
		// require('@tailwindcss/forms'),
		// require('@tailwindcss/aspect-ratio'),
		// require('@tailwindcss/container-queries')
	],
	darkMode: 'class'
} satisfies Config;
