const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	important: true,
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				gray: {
					1000: "#F3F3F3"
				}
			},
			transitionTimingFunction: {},
			fontFamily: {
				brownLLWeb: ["BrownLLWeb", '"Noto Sans JP"', '"Noto Sans KR"', '"Noto Sans"', "sans-serif"],
				brownLLSubAra: ["BrownLLSubAra", '"Noto Sans JP"', '"Noto Sans KR"', '"Noto Sans"', "sans-serif"]
			}
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			red: colors.red,
			yellow: colors.amber,
			green: colors.emerald,
			blue: colors.blue,
			indigo: colors.indigo,
			purple: colors.violet,
			pink: colors.pink
		},
		fontFamily: {
			sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
			mono: [
				"ui-monospace",
				"SFMono-Regular",
				"Menlo",
				"Monaco",
				"Consolas",
				'"Liberation Mono"',
				'"Courier New"',
				"monospace"
			]
		}
	},
	variants: {
		animation: ["motion-safe"]
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/line-clamp")
	]
};
