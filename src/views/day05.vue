<template>
	<div class="demo" id="demo">
		<div class="content">
			<div class="side">
				<div class="avatar">
					<img src="@/assets/images/avatar.png" alt="" />
				</div>
				<div class="info">
					Jessica Potter
					<small>Visual Artist</small>
				</div>
				<div class="btn">Follow</div>
				<div class="btn">Message</div>
			</div>
			<div class="side">
				<div class="child">
					<div class="count">
						523
						<span>Posts</span>
					</div>
				</div>
				<div class="child">
					<div class="count">
						1387
						<span>Likes</span>
					</div>
				</div>
				<div class="child">
					<div class="count">
						146
						<span>Follower</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Day05"
};
</script>

<style lang="less" scoped>
@color: #786450;
.demo {
	display: flex;
	width: 100vw;
	height: 100vh;
	align-items: center;
	justify-content: center;
	background: linear-gradient(to top right, #ecbd72, #c97c53);
	.content {
		display: flex;
		width: 300px;
		height: 300px;
		background-color: #fff;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
		border-radius: 15px;
		overflow: hidden;
	}
	.side {
		display: flex;
		flex: 1;
		flex-direction: column;
		&:nth-child(1) {
			flex: 2;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
		.avatar {
			display: flex;
			position: relative;
			margin-bottom: 15px;
			width: 80px;
			height: 80px;
			align-items: center;
			justify-content: center;
			&:before,
			&:after {
				position: absolute;
				display: block;
				content: "";
				top: 0;
				left: 0;
				width: 80px;
				height: 80px;
				border-width: 1px;
				border-style: solid;
				border-color: transparent @color @color @color;
				border-radius: 50%;
				transition: transform 1s cubic-bezier(0.78, 0.17, 0.24, 1.08);
			}
			&:after {
				width: 72px;
				height: 72px;
				top: 4px;
				left: 4px;
				border-width: 1px;
				border-style: solid;
				border-color: @color @color transparent @color;
				transition-duration: 0.4s;
				transition-delay: 0.2s;
			}
			&:hover {
				&:before,
				&:after {
					transform: rotateZ(360deg);
					transition: transform 1s cubic-bezier(0.78, 0.17, 0.24, 1.08);
				}
				&:after {
					transform: rotateZ(-360deg);
					transition-duration: 0.4s;
					transition-delay: 0.2s;
				}
			}
			img {
				display: block;
				width: 64px;
				height: 64px;
				margin: auto;
				border-radius: 50%;
				overflow: hidden;
			}
		}
		.info {
			margin-bottom: 60px;
			font-size: 16px;
			color: @color;
			small {
				display: block;
			}
		}
		.btn {
			margin-bottom: 15px;
			width: 45%;
			height: 30px;
			line-height: 30px;
			color: @color;
			border: 1px solid @color;
			transition: background-color linear 0.25s;
			border-radius: 20px;
			font-size: 14px;
			&:hover {
				background-color: @color;
				transition: background-color linear 0.25s;
				color: #ffffff;
			}
		}
		.child {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: 600;
			text-align: center;
			background-color: #f5e8e0;
			font-size: 16px;
			border-bottom: 1px solid #ffffff;
			transition: background-color linear 0.25s;
			cursor: pointer;
			&:hover {
				background-color: #e1cfc3;
				transition: background-color linear 0.25s;
			}
			&:last-child {
				border-bottom: none;
			}
			span {
				display: block;
				font-weight: 400;
				font-size: 14px;
			}
		}
	}
}
</style>
