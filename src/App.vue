<template>
	<div class="h-screen w-screen bg-green-600 flex items-center justify-center" id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	name: "app",
	watch: {
		$route() {
			this.$forceUpdate();
		}
	}
};
</script>
