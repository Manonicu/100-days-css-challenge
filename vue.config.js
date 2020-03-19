const path = require("path");
//resovle file
const resolve = dir => {
	return path.join(__dirname, "./", dir);
};

module.exports = {
	configureWebpack: config => {
		// 转为CND外链方式的npm包，键名是import的npm包名，键值是该库暴露的全局变量，参考https://webpack.js.org/configuration/externals/#src/components/Sidebar/Sidebar.jsx
		config.externals = {
			vue: "Vue"
		};
	},
	chainWebpack: config => {
		//使用 SVG 组件
		const svgRule = config.module.rule("svg");
		svgRule.uses.clear();
		svgRule.exclude.add(/node_modules/);
		svgRule
			.test(/\.svg$/)
			.use("svg-sprite-loader")
			.loader("svg-sprite-loader")
			.options({
				symbolId: "icon-[name]"
			});

		const imagesRule = config.module.rule("images");
		imagesRule.exclude.add(resolve("src/icons"));
		config.module.rule("images").test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);

		config.module
			.rule("image-webpack-loader")
			.test(/\.(png|jpe?g|svg)$/i)
			.use("file-loader")
			.loader("image-webpack-loader")
			.tap(() => ({
				disable: process.env.NODE_ENV !== "production"
			}))
			.end();

		// CDN外链，会插入到index.html中
		const cdn = {
			// 生产环境
			js: ["https://unpkg.com/vue@2.6.10/dist/vue.min.js"]
		};
		/**
		 * 添加CDN参数到htmlWebpackPlugin配置中
		 */
		config.plugin("html").tap(args => {
			args[0].cdn = cdn;
			return args;
		});
	}
};
