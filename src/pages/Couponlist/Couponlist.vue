<template>
	<div class="box">
		<div class="Commodity">
			<div @click="back">
				
			</div>
			<div>
				<a href="#">优惠券列表</a>
			</div>
			<div  @click.prevent="goSearch">
				
			</div>
		</div>
		<div class="Couponlist">
			<ul>
				<li v-for="(item,index) in obje" @click="enter(index)">
					{{item}}
				</li>
			</ul>
			<div class="Couponlistimg">
				<img :src="arr.img" />
			</div>
			<div class="Couponlistfize">
				<a href="#">{{arr.title}}</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {
				obje:["未使用","已使用/已过期"],
				arr:{}
			}
		},
		mounted(){
			this.enter()
		},
		methods:{
			enter:function(index){
				if(index==0){
					this.arr={
						img:require("../../assets/images/mine/empty.png"),
						title:"您没有未使用的优惠券"
					}
				}else{
					this.arr={
						img:require("../../assets/images/mine/empty.png"),
						title:"您没有已使用/已过期的优惠券"
					}
				}
			},
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
	.Commodity{height:50/64rem;background-color: rgb(242,242,242);display: flex;justify-content: space-between;text-align: center;
	line-height:50/64rem;}
	.Commodity a{color: rgb(102,102,102);font-size: 17/64rem;}
	.Commodity div:nth-last-child(3){width:100/64rem;height:50/64rem;background-image: url(../../assets/images/icon/xiangleft.png);
	background-repeat: no-repeat;background-position:6% 48%;background-size:29% 51%;}
	.Commodity div:nth-last-child(2){width:100/64rem;height:50/64rem;}
	.Commodity div:nth-last-child(1){width:100/64rem;height:50/64rem;background-image: url(../../assets/images/icon/search.png);
	background-repeat: no-repeat;background-position:87% 37%;background-size:34% 70%;}
	.Couponlist{height:50/64rem;}
	.Couponlist ul{display: flex;justify-content: space-around;line-height:50/64rem;}
	.Couponlistimg{height:150/64rem;display: flex;
	justify-content: center;}
	.Couponlistimg img{width:100/64rem;height:100/64rem;margin-top:30/64rem;border-radius:50/64rem;}
	.Couponlistfize{height:30/64rem;text-align: center;}
	.Couponlistfize a{line-height:30/64rem;font-size:13/64rem;color: rgb(153,153,153);}
</style>