module.exports = {
	configureWebpack: config => {
		// 转为CND外链方式的npm包，键名是import的npm包名，键值是该库暴露的全局变量，参考https://webpack.js.org/configuration/externals/#src/components/Sidebar/Sidebar.jsx
		config.externals = {
			vue: "Vue"
		};
	},
	chainWebpack: config => {
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
