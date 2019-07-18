<template>
	<div>
		<div class="Commodity">
			<div @click="back">
			</div>
			<div>
				<a href="#">选择城市</a>
			</div>
			<div   @click.prevent="goSearch">	
			</div>
		</div>
		<div class="mhsearch">
			<span class="icon"></span>
			<input type="text" class="mhinput" placeholder="请输入城市名称或拼音查询"/>
		</div>
	</div>
	
</template>


<script>
	export default{
		name:'Mhome',
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
	.Commodity{height:50/64rem;background-color: rgb(242,242,242);display: flex;justify-content: space-between;text-align: center;
	line-height:50/64rem;}
	.Commodity a{color: rgb(102,102,102);font-size: 16/64rem;}
	.Commodity div:nth-last-child(3){width:100/64rem;height:50/64rem;background-image: url(../../assets/images/icon/xiangleft.png);
	background-repeat: no-repeat;background-position:6% 48%;background-size:29% 51%;}
	.Commodity div:nth-last-child(2){width:100/64rem;height:50/64rem;}
	.Commodity div:nth-last-child(1){width:100/64rem;height:50/64rem;background-image: url(../../assets/images/icon/search.png);
	background-repeat: no-repeat;background-position:87% 37%;background-size:34% 70%;}
	.mhsearch{
		width: 380/64rem;
		margin: 10/64rem auto 0;
		height: 36/64rem;
		display: flex;
		align-items: center;
		border:1px solid #eee;
		border-radius: 4/64rem;
		box-sizing: border-box;
		padding: 0 10/64rem;
		.icon{
			display: inline-block;
			width: 23/64rem;
			height: 23/64rem;
			background: url(../../assets/images/icon/search.png) center center no-repeat;
			background-size: 23/64rem 23/64rem;
		}
		.mhinput{
			line-height: 26/64rem;
			width: 100%;
			outline: none;
			border: none;
			font-size: 14/64rem;
		}
	}
</style>