<template>
	<div class="miBackTop" @click="backTop(backTopObj)" v-show="visible">
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
			backTop(ele) {
				this.visible = false
				if(ele) {
					document.querySelector('.' + ele).scrollTop = 0
				} else {
					document.body.scrollTop = 0
				}
			}
		},
		mounted() {
			window.onscroll = () => {
				this.visible = document.body.scrollTop > 300 ? true : false
			}
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