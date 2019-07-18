<template>
	<div class="box">
		<div class="Commodity">
			<div @click="back">
				
			</div>
			<div>
				<a href="#">售后记录</a>
			</div>
			<div  @click.prevent="goSearch">
				
			</div>
		</div>
		<div class="applyafter">
			<a href="#">申请售后</a>
		</div>
		<div class="applyafterimg">
			
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
<style lang='less' scoped="scoped">
    .box{background-color: rgb(238,238,238);font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular, Hiragino Sans GB, Microsoft Yahei, sans-serif;}
	.Commodity{height:50/64rem;background-color: rgb(242,242,242);display: flex;justify-content: space-between;text-align: center;
	line-height:50/64rem;font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular, Hiragino Sans GB, Microsoft Yahei, sans-serif;}
	.Commodity a{color: rgb(102,102,102);font-size: 17/64rem}
	.Commodity div:nth-last-child(3){width:100/64rem;height:50/64rem;background-image: url(../../assets/images/icon/xiangleft.png);
	background-repeat: no-repeat;background-position:6% 48%;background-size:29% 51%;}
	.Commodity div:nth-last-child(2){width:100/64rem;height:50/64rem;}
	.Commodity div:nth-last-child(1){width:100/64rem;height:50/64rem;background-image: url(../../assets/images/icon/search.png);
	background-repeat: no-repeat;background-position:87% 37%;background-size:34% 70%;}
	.applyafter{width:343.75/64rem;height:46/64rem;border:1px solid rgb(119,119,119);background-color: rgb(255,255,255);
	margin:20px auto;text-align: center;}
	.applyafter a{line-height:46/64rem;font-size:18/64rem;color: rgb(119,119,119);}
	.applyafterimg{width:305/64rem;height:200px;margin: auto;
	background-image: url(../../assets/images/mine/O6PtrHNVl+3pMF97YaLqX4SJy34f6KBODXedNYnAAAAAElFTkSuQmCC.png);
	background-repeat: no-repeat;background-position:50% 91%;background-size:50% 80%;}
</style>