<template>
	<div class="miBackTop" @click="backTop()" v-show="visible">
		<a href="javascript:;">
			<img src="../assets/images/icon/App.gif" alt="" />
		</a>
		<img src="../assets/images/icon/top.451d650ecd.png" alt="" />
	</div>
</template>

<script>
	export default {
		props: {
			backTopObj: {
				type: String
			}
		},
		data() {
			return {
				visible: false
			}
		},
		methods: {
			backTop() {
				document.querySelector('.navContent').scrollTop = 0;
				this.visible = false
			},
			scrollToTop() {
				let scrollTop = document.querySelector('.navContent').scrollTop;
				if(scrollTop > 300) {
					this.visible = true
				} else {
					this.visible = false
				}
			}

		},
		mounted() {
			document.querySelector('.navContent').addEventListener("scroll", this.scrollToTop);
		}
	}
</script>

<style lang='less'>
	.miBackTop {
		width: 40/64rem;
		position: fixed;
		right: 20/64rem;
		bottom: 80/64rem;
		z-index: 99999;
		img {
			width: 40/64rem;
		}
	}
</style>