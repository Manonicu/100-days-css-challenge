<template>
	<div
		class="codepen sample"
		:data-height="height"
		:data-theme-id="themeId"
		:data-default-tab="defaultTab"
		:data-user="height"
		:data-slug-hash="slugHash"
	></div>
</template>

<script>
export default {
	name: "Sample",
	props: {
		tag: {
			type: String,
			default() {
				return "";
			}
		}
	},
	data() {
		return {
			height: "265",
			themeId: "light",
			defaultTab: "result",
			user: "roydigerhund",
			slugHash: "ZQmbNm"
		};
	}
};
</script>

<style scoped lang="less">
.sample {
	width: 100%;
	height: 50vh;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid;
	margin: 1em 0;
	padding: 1em;
}
</style>
