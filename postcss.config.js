const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
	plugins: [
		require("postcss-pxtorem")({
			rootValue: 37.5,
			minPixelValue: 1,
			propList: ["*"],
			propBlackList: ["html"]
		}),
		tailwindcss("./tailwind.config.js"),
		autoprefixer({
			add: true,
			grid: true
		}),
		// //Only add purgecss in production
		// process.env.NODE_ENV === "production"
		// 	? purgecss({
		// 			content: ["./src/**/*.html", "./src/**/*.vue"]
		// 	  })
		// 	: ""
	]
};
