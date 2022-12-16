/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			sm: '320px',
			// => @media (min-width: 320px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			fontFamily: {
				red: ['Red Hat Display', 'sans-serif']
			},
			colors: {
				background: '#E5E5E5',
				secondary: '#444444'
			}
		}
	}
};

module.exports = config;
