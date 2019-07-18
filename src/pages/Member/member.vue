<template>
	<div class="box">
		<div class="Commodity">
			<div  @click="back">
				
			</div>
			<div>
				<a href="#">会员中心</a>
			</div>
			<div @click="gotoSearch">
				
			</div>
		</div>
		<div class="member">
			请前往小米商城App查看会员福利
		</div>
		<div class="member-button">
			立即下载小米商城App
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			back(){
				this.$router.push('/Mine')
			},
			gotoSearch(){
				this.$router.push('/homeSearch')
			}
		}
	}
</script>
<style lang="less" scoped="scoped">
	.box{font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular, Hiragino Sans GB, Microsoft Yahei, sans-serif;}
	.Commodity{height:50/64rem;background-color: rgb(242,242,242);display: flex;justify-content: space-between;text-align: center;
	line-height:50/64rem;}
	.Commodity a{color: rgb(102,102,102);font-size: 17/64rem;}
	.Commodity div:nth-last-child(3){width:100/64rem;height:50/64rem;background-image: url(../../assets/images/icon/xiangleft.png);
	background-repeat: no-repeat;background-position:6% 48%;background-size:29% 51%;}
	.Commodity div:nth-last-child(2){width:100/64rem;height:50/64rem;}
	.Commodity div:nth-last-child(1){width:100/64rem;height:50/64rem;background-image: url(../../assets/images/icon/search.png);
	background-repeat: no-repeat;background-position:87% 37%;background-size:34% 70%;}
	.member{height:30/64rem;line-height:30/64rem;color:rgb(60,60,60);
	text-align: center;font-size:18/64rem;margin-top:70/64rem;}
	.member-button{width:333.34/64rem;height:52.08/64rem;background-color: rgb(255,103,0);color: rgb(255,255,255);
	text-align: center;line-height:52.08/64rem;margin:50/64rem auto;font-size:15/64rem;}
</style>