<template>
	<div id="app">
		<DropdownMenu class="dropdown">
			<DropdownItem v-model="selected" :options="options" @select="_select"></DropdownItem>
		</DropdownMenu>
		<div :is="curCom"></div>
	</div>
</template>

<script>
import { DropdownMenu, DropdownItem } from "vant";

export default {
	name: "app",
	components: {
		DropdownMenu,
		DropdownItem,
		Day01: () => import("@/components/Day01"),
		Day02: () => import("@/components/Day02"),
		Day03: () => import("@/components/Day03"),
		Day04: () => import("@/components/Day04"),
		Day05: () => import("@/components/Day05")
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
body {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background: #70ac83;
}
.dropdown {
	position: absolute;
	width: 100vw;
	height: 5vh;
	top: 0;
	left: 0;
}
</style>
