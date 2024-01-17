/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			orange: "#FCAA67",
			red: "#B0413E",
			yellow: "#FFFFC7",
			blue: "#548687",
			brown: "#473335",
		},
		fontFamily: {
			tenor: ["Tenor Sans", "sans-serif"],
			carter: ["Carter One", "system-ui"],
		},
		extend: {
			keyframes: {
				changeHeight: {
					"0%, 10%": { height: "30px" },
					"50%, 60%": { height: "400px" },
					"100%": { height: "30px" },
				},
			},
			animation: {
				changeHeight:
					"changeHeight 10s infinite linear",
			},
		},
	},
	plugins: [],
};
