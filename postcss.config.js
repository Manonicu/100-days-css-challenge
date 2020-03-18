module.exports = {
	plugins: [
		require("postcss-pxtorem")({
			rootValue: 37.5,
			minPixelValue: 1,
			propList: ["*"],
			propBlackList: ["html"]
		})
	]
};
