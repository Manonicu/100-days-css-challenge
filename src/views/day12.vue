<template>
	<div class="demo" id="demo" ref="demo">
		<div class="content">
			<div class="item" @click.stop="_toggleStatus">
				<img src="@/assets/images/avatar.png" alt="" />
			</div>
			<div class="item" @click.stop="_toggleStatus">
				<img src="@/assets/images/avatar.png" alt="" />
			</div>
			<div class="item" @click.stop="_toggleStatus">
				<img src="@/assets/images/avatar.png" alt="" />
			</div>
			<div class="item" @click.stop="_toggleStatus">
				<img src="@/assets/images/avatar.png" alt="" />
			</div>
			<div
				class="content__close"
				@click.stop="
					() => {
						$refs.demo.classList.remove('active');
					}
				"
			>
				&#10006;
			</div>
			<img src="@/assets/images/avatar.png" alt="" class="avatar" />
			<div class="content__top"></div>
			<div class="content__bottom">
				<h3>Julia Toth</h3>
				<div class="btns">
					<div class="btn">1</div>
					<div class="btn">2</div>
					<div class="btn">3</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Day12",
	methods: {
		_toggleStatus() {
			this.$refs.demo.classList.add("active");
		}
	}
};
</script>

<style scoped lang="less">
.demo {
	display: flex;
	width: 100vw;
	height: 100%;
	align-items: center;
	justify-content: center;
	background-color: #264056;
	font-size: 14px;
	.content {
		position: relative;
		display: flex;
		width: 50vw;
		height: 50vw;
		flex-wrap: wrap;
		overflow: hidden;
		&__top,
		&__bottom {
			position: absolute;
			width: 100%;
			height: 50%;
			top: 0;
			left: 0;
			background: url("../assets/images/header.jpg") no-repeat;
			background-size: cover;
			transform: translateY(calc(-100% - 60px));
			z-index: 3;
			transition: all 1s linear;
		}
		.avatar {
			position: absolute;
			left: 50%;
			top: 50%;
			width: 120px;
			height: 120px;
			margin: -60px 0 0 -60px;
			transform: translateY(calc(-50vw - 100%));
			border-radius: 50%;
			z-index: 4;
			border: 2px solid #ffffff;
			box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
			transition: all 1s linear;
		}
		&__bottom {
			display: flex;
			flex-direction: column;
			background: #ea6668;
			align-items: center;
			justify-content: center;
			color: #ffffff;
			top: auto;
			bottom: 0;
			z-index: 2;
			transform: translateY(100%);
			.btns {
				display: flex;
				.btn {
					margin: 30px;
					width: 60px;
					height: 60px;
					line-height: 60px;
					text-align: center;
					border-radius: 50%;
					border: 2px solid #ffffff;
					transition: all 0.25s linear;
					cursor: pointer;
					&:hover {
						background-color: #ffffff;
						color: #ea6668;
						transition: all 0.25s linear;
					}
				}
			}
		}
		&__close {
			position: absolute;
			color: #ffffff;
			width: 60px;
			height: 60px;
			line-height: 60px;
			text-align: center;
			top: 15px;
			right: 15px;
			z-index: 5;
			background-color: #ea6668;
			border-radius: 50%;
			font-size: 30px;
			transition: all 1s linear;
			transform: translateY(-75px);
			&:hover {
				background-color: #fff;
				color: #ea6668;
				transition: all 0.25s linear;
			}
		}
	}
	&.active {
		.content {
			&__close,
			&__bottom,
			&__top,
			.avatar {
				transform: none;
				transition: all 1s linear;
			}
			.avatar {
				transition-delay: 0.35s;
			}
			&__close {
				transition-delay: 0.7s;
			}
		}
	}
	.item {
		position: relative;
		width: 50%;
		height: 50%;
		img {
			width: 100%;
			object-fit: cover;
		}
		&:before,
		&:after {
			position: absolute;
			display: block;
			content: "";
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.5);
			transition: all 0.25s linear;
			top: 0;
			left: 0;
			opacity: 0;
		}
		&:after {
			width: 30%;
			height: 30%;
			background-color: #ea6668;
			border-radius: 50%;
			top: 50%;
			left: 50%;
			transform: translate3d(-50%, -50%, 0) scale(1.5);
			transition-delay: 0.1s;
			content: "+";
			font-size: 50px;
			line-height: 15vw;
			color: #ffffff;
			text-align: center;
		}
		&:hover {
			&:before,
			&:after {
				transition: all 0.25s linear;
				opacity: 1;
			}
			&:after {
				transform: translate3d(-50%, -50%, 0) scale(1);
				transition-delay: 0.1s;
			}
		}
	}
}
</style>
