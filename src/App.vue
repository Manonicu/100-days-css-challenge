<template>
	<div class="app" id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "app",
};
</script>
<style lang="less">
#app {
	display: flex;
	width: 100vw;
	height: 100vh;
	background-color: green;
	align-items: center;
	justify-content: center;
}
</style>
