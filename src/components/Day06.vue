<template>
	<div class="demo" id="demo" ref="demo">
		<div class="content">
			<header>
				<div
					class="icon-show"
					@click="
						() => {
							this.$refs.demo.classList.toggle('active');
						}
					"
				>
					<svg-icon iconClass="align-justify"></svg-icon>
				</div>
				Notifications
				<div
					class="icon-search"
					@click="
						() => {
							this.$refs.input.classList.toggle('active');
						}
					"
				>
					<svg-icon iconClass="search"></svg-icon>
				</div>
				<input type="text" ref="input" class="input" placeholder="Search..." />
			</header>
			<div class="timeline">
				<div class="line line1">
					<small>9:24 AM</small>
					<strong>John Walker</strong> posted a photo on your wall.
				</div>
				<div class="line line2">
					<small>9:24 AM</small>
					<strong>John Walker</strong> posted a photo on your wall.
				</div>
				<div class="line line3">
					<small>9:24 AM</small>
					<strong>John Walker</strong> posted a photo on your wall.
				</div>
			</div>
		</div>
		<div class="sub-content">
			<div class="sub-content-item"><svg-icon iconClass="align-justify"></svg-icon>Dashboard</div>
			<div class="sub-content-item"><svg-icon iconClass="align-justify"></svg-icon>Profile</div>
			<div class="sub-content-item"><svg-icon iconClass="align-justify"></svg-icon>Notifications</div>
			<div class="sub-content-item"><svg-icon iconClass="align-justify"></svg-icon>Message</div>
			<div class="sub-content-item"><svg-icon iconClass="align-justify"></svg-icon>Setting</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Day06",
	mounted() {
		setTimeout(() => {
			document.querySelector("#demo").classList.add("loaded");
		}, 200);
	}
};
</script>

<style scoped lang="less">
.demo {
	display: flex;
	width: 100vw;
	height: 100vh;
	align-items: center;
	justify-content: center;
	background-color: #264056;
	font-size: 14px;
	.content {
		position: relative;
		width: 300px;
		height: 300px;
		background-color: #fff;
		transition: all 0.4s ease-in-out;
		overflow: hidden;
		z-index: 2;
		header {
			position: relative;
			line-height: 50px;
			background-color: #6199cb;
			color: white;
			text-align: center;
			.icon-search,
			.icon-show {
				position: absolute;
				top: 50%;
				left: 10px;
				line-height: 1;
				transform: translateY(-50%);
			}
			.icon-search {
				left: auto;
				right: 10px;
			}
			input {
				position: absolute;
				display: block;
				padding: 10px;
				top: 50%;
				left: 10px;
				width: 70%;
				height: 70%;
				border: none;
				border-radius: 20px;
				transform: translate3d(15%, -50%, 0);
				opacity: 0;
				transition: transform 0.3s linear;
				&.active {
					transform: translate3d(0, -50%, 0);
					opacity: 1;
					transition: transform 0.3s linear;
				}
			}
		}
	}
	.timeline {
		position: relative;
		height: 250px;
		padding: 15px 30px;
		overflow: hidden;
		&:before {
			position: absolute;
			display: block;
			content: "";
			width: 2px;
			height: 100%;
			background-color: #ebebeb;
			left: 20px;
			top: 0;
			z-index: 3;
		}
		.line {
			position: relative;
			margin-bottom: 30px;
			opacity: 0;
			transform: translateY(100%);
			transition: all 0.5s linear;
			z-index: 4;
			small {
				display: block;
			}
			strong {
				font-weight: bold;
			}
			&:before {
				position: absolute;
				display: block;
				content: "";
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background-color: #43627c;
				top: 0;
				left: -14px;
				z-index: 4;
			}
			&.line2 {
				transition-delay: 0.5s;
			}
			&.line3 {
				transition-delay: 1s;
			}
		}
	}
	.sub-content {
		display: flex;
		position: absolute;
		background-color: #43627c;
		top: 50%;
		left: 50%;
		height: 250px;
		flex-direction: column;
		border-radius: 10px 0 0 10px;
		transform: translate3d(-35%, -50%, 0);
		transition: all 0.4s ease-in-out;
		color: #ffffff;
		z-index: 1;
		&-item {
			display: flex;
			flex: 1;
			padding: 0 15px;
			align-items: center;
		}
	}
	&.active {
		.content {
			transition: all 0.4s ease-in-out;
			transform: translateX(30%);
		}
		.sub-content {
			transition: all 0.4s ease-in-out;
			transform: translate3d(-135%, -50%, 0);
		}
	}

	&.loaded {
		.timeline {
			.line {
				opacity: 1;
				transform: none;
			}
		}
	}
}
</style>
