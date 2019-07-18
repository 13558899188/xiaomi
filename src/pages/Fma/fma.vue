<template>
	<div class="box">
		<div class="Commodity">
			<div @click="back">
				
			</div>
			<div>
				<a href="#">F码购买</a>
			</div>
			<div @click.prevent="goSearch">
				
			</div>
		</div>
		
		<div class="fma">
			<input type="text" placeholder="    请输入任意产品F码"/>
		</div>
		
		<div class="fmaone">
			<div class="title">F码就是朋友特权</div>
			<br />
			<div>F码是小米产品优先购买码，无需预约排队，直接购买热门商品。</div>
			<div>F = Friend，它是为小米的好朋友提供的“友情特权”。部分商品的</div>
			<div>特权购买，无法保证7天内发货。</div>
			<div>红米Note 4X 初音未来限量套装 预计6-8周发货。</div>
		</div>
		<br />
		<div class="fmatwo">
			<div class="title">谁会有F码？</div>
			<br />
			<div>我们把F码发放给以下论坛资深用户：</div>
			<div>1. 小米论坛的版主们、顾问团、资源组成员、同城会会长</div>
			<div>2. MIUI论坛的版主们、荣誉开发组、资源组、主题创意组和粉丝站长组的成员</div>
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			back(){
				this.$router.push('/Mine')
			},
			goSearch(){
				this.$router.push('/homeSearch')
			}
		}
	}
</script>
<style lang="less" scoped="scoped">
	.box{font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular, Hiragino Sans GB, Microsoft Yahei, sans-serif;}
    .fma{display: flex;justify-content: center;margin-top:10px;}
	.fma input{width:352/64rem;height:34/64rem;border:1px solid rgb(246,246,246);font-size: 14/64rem;outline: none;}
	.Commodity{height:50/64rem;background-color: rgb(242,242,242);display: flex;justify-content: space-between;text-align: center;
	line-height:50/64rem;}
	.Commodity a{color: rgb(102,102,102);font-size: 16/64rem;}
	.Commodity div:nth-last-child(3){width:100/64rem;height:50/64rem;background-image: url(../../assets/images/icon/xiangleft.png);
	background-repeat: no-repeat;background-position:6% 48%;background-size:29% 51%;}
	.Commodity div:nth-last-child(2){width:100/64rem;height:50/64rem;}
	.Commodity div:nth-last-child(1){width:100/64rem;height:50/64rem;background-image: url(../../assets/images/icon/search.png);
	background-repeat: no-repeat;background-position:87% 37%;background-size:34% 70%;}
	.fmaone{font-size:13/64rem;color: rgb(119,119,119);margin-top:49/64rem;margin-left:3/64rem;padding: 0 16/64rem;box-sizing: border-box;}
	.fmatwo{font-size:13/64rem;color: rgb(119,119,119);margin-top:1px;margin-left:1px;padding: 0 16/64rem;box-sizing: border-box;}
	.title{
		font-size: 14/64rem;
	}
</style>