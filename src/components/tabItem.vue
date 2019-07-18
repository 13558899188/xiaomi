<template>
	<div class="tabItemWrap" @click="fn">
		<span v-show="!bol"><slot name="normalImg"></slot></span>
		<span v-show="bol"><slot name="activeImg"></slot></span>
		<br />
		<span :class="{activeTabItem:bol}">{{txt}}</span>
	</div>
</template>

<script>
	export default {
		name: "tabItem",
		props: ["txt", "mark", "selected"],
		computed: {
			bol() {
				if(this.mark==this.selected) {
					return true;
				}
				return false
			}
		},
		methods: {
			fn() {
				this.$emit("change", this.mark);
				this.$router.push('/' + this.mark)
			}
		}
	}
</script>

<style lang='less'>
	.tabItemWrap {
		width: 25%;
		color: #999;
		font-weight: 700;
		text-align: center;
	}
	
	.tabItemWrap img {
		width: 20/64rem;
	}
	.activeTabItem{
		color: #F56D03;
	}
</style>