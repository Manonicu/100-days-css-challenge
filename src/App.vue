<template>
	<div id="app">
		<DropdownMenu class="dropdown">
			<DropdownItem v-model="selected" :options="options" @select="_select"></DropdownItem>
		</DropdownMenu>
		<div class="main">
			<!--			<Sample />-->
			<div :is="curCom"></div>
		</div>
	</div>
</template>

<script>
import { DropdownMenu, DropdownItem } from "vant";

export default {
	name: "app",
	components: {
		DropdownMenu,
		DropdownItem,
		// Sample: () => import("@/common/Sample"),
		Day01: () => import("@/components/Day01"),
		Day02: () => import("@/components/Day02"),
		Day03: () => import("@/components/Day03"),
		Day04: () => import("@/components/Day04"),
		Day05: () => import("@/components/Day05"),
		Day06: () => import("@/components/Day06")
	},
	data() {
		return {
			selected: "01",
			options: []
		};
	},
	created() {
		for (let i = 1; i <= 100; i++) {
			this.options.push({
				text: `day${i < 10 ? "0" + i : i}`,
				value: i < 10 ? "0" + i : i
			});
		}
	},
	computed: {
		curCom() {
			return `Day${this.selected}`;
		}
	},
	methods: {
		_select(item) {
			this.selected = item.value;
		}
	}
};
</script>

<style lang="less">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.main {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: calc(100vh - 50px);
	background: #70ac83;
}
</style>
