/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"purple-blue": "#1D299A",
			},
			backgroundColor: {
				bodyColour: "#F4ECEC",
			},
			fontFamily: {
				sans: ["Poppins", "Roboto", "sans"],
			},
			screens: {
				tablet: "640px",
				// => @media (min-width: 640px) { ... }

				laptop: "1024px",
				// => @media (min-width: 1024px) { ... }

				desktop: "1280px",
				// => @media (min-width: 1280px) { ... }
			},
		},
	},
	plugins: [],
};
