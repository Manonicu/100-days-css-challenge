<template>
	<div class="demo" id="demo">
		<svg-icon iconClass="bycicle"></svg-icon>
		<div class="lines">
			<div class="line1"></div>
			<div class="line2"></div>
			<div class="line3"></div>
			<div class="line4"></div>
			<div class="line5"></div>
			<div class="line6"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "day13"
};
</script>

<style lang="less" scope>
.generate-columns(@n, @i: 1) when (@i =< @n) {
	.line@{i} {
		width: (@i * 5px);
	}
	.generate-columns(@n, (@i + 1));
}
.demo {
	display: flex;
	width: 80vw;
	height: 50vw;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #fecd5a;
	filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.3));
	overflow: hidden;
	.svg-icon {
		display: block;
		margin: 0 auto;
		width: 80%;
		height: 60%;
		animation: bycicle 0.6s linear infinite;
		transform-origin: 50% 100%;
	}
	.lines {
		margin: 0 auto;
		width: 100%;
		display: flex;
		justify-content: space-around;
		animation: line 2s linear infinite both;
		> div {
			height: 2px;
			background-color: #000;
		}
	}
	// .lines1 {
	// 	transform: translateX(100%);
	// 	animation-delay: line 4s linear infinite both;
	// }
	.generate-columns(6);
}
@keyframes bycicle {
	0%,
	50%,
	100% {
		transform: scaleY(1);
	}
	25% {
		transform: scaleY(1.03);
	}
	75% {
		transform: scaleY(0.97);
	}
}
@keyframes line {
	to {
		transform: translateX(-100%);
	}
}
</style>
