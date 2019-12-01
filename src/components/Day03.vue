<template>
	<div class="demo" id="demo">
		<div class="sun"></div>
		<div class="pyramid">
			<div class="shadow"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Day01",
	methods: {
		_click(e) {
			e.currentTarget.classList.toggle("active");
			document.body.classList.remove("load");
		}
	}
};
</script>

<style lang="less" scoped>
.demo {
	position: relative;
	width: 50vw;
	height: 50vw;
	background-color: #a3dcfb;
	border-radius: 100%;
	overflow: hidden;
	clip-path: circle();
}
.demo::after {
	position: absolute;
	display: block;
	content: "";
	width: 50vw;
	height: 10vw;
	background-color: #ebde79;
	left: 0;
	bottom: 0;
}
.sun {
	position: absolute;
	width: 10vw;
	height: 10vw;
	background-color: #faed27;
	border-radius: 50%;
	transform: translate3d(-5vw, 100%, 0);
}
.pyramid {
	position: absolute;
	display: flex;
	left: 50%;
	bottom: 10vw;
	transform: translateX(-50%);
	/* overflow: hidden; */
}
.pyramid::after,
.pyramid::before {
	display: block;
	content: "";
	width: 0;
	height: 0;
	border: 8vw solid;
}
.pyramid::after {
	border-color: transparent transparent #eeeeee transparent;
	transform: skewX(52deg) translateX(-65%);
	/* transform: scaleY(1) skewX(-30deg) rotate(30deg); */
}
.pyramid::before {
	border-color: transparent transparent #ffffff transparent;
	transform: skewX(-35deg) translateX(35%);
	/* transform: scaleY(1) skewX(30deg) rotate(30deg); */
}
.pyramid .shadow {
	position: absolute;
	border: 16vw solid;
	border-color: rgba(0, 0, 0, 0.1) transparent transparent transparent;
	left: 0;
	bottom: 0;
	transform: translateY(100%);
}
@keyframes sun {
	0% {
	}
	25% {
	}
	50% {
	}
	75% {
	}
	100% {
	}
}
</style>
