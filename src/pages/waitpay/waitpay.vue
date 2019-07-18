<template>
	<div class="waitpay">
		<div class="header">
		   <h3>等待付款</h3>
		</div>
		<div class="dingdan">
			<p><span class="title">订单编号：</span>{{dingdNum}}</p>
			<p><span class="title">付款总额：</span>1199.00</p>
		</div>
		<div class="tchong"></div>
		<a class="more">
			<span class="title">请谨防钓鱼链接或诈骗电话</span>
			<span class="fx"></span>
		</a>
		<div class="tchong"></div>
		<div class="footer">
			<router-link to="/order" class="cdingd">查看订单</router-link>
			<router-link to="/home" href="#" class="home">返回首页</router-link>
		</div>
	</div>
</template>
  
<script>
	export default{
		name:'waitpay',
		data(){
			return{
				dingdNum:''
			}
		},
		mounted(){
			this.dingdNum=parseInt(Math.random()*1000000000000000);
		}
	}
	
</script>

<style scoped="scoped" lang="less">
	.waitpay{
		font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
		.header{
			width: 100%;
			line-height: 265/64rem;
			background: #8bc34a;
			text-align: center;
			color: #fff;
			h3{
				font-size: 40/64rem;
			}
		}
		.dingdan{
			background: #fff;
			padding: 12/64rem 16/64rem;
			p{
				line-height: 20/64rem;
				.title{
					font-weight: bold;
				}
			}
		}
		.more{
			padding: 0 16/64rem;
			line-height: 54/64rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #F56600;
			.fx{
				display: inline-block;
				width: 10/64rem;
				height: 10/64rem;
				transform:rotate(45deg);
				border-right: 1px solid #F56600;
				border-top: 1px solid #F56600;
				margin-right: 20/64rem;
			}
			
		}
		.tchong{
			width: 100%;
			height: 12/64rem;
			background: #f5f5f5;
		}
		.footer{
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 56/64rem;
			line-height: 56/64rem;
			border-top: 1px solid #eee;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 18/64rem;
			.cdingd{
				line-height: 56/64rem;
				text-align: center;
				color: #333;
				width: 50%;
			}
			.home{
				line-height: 56/64rem;
				text-align: center;
				color: #333;
				width: 50%;
				border-left: 1px solid #eee;
			}
		}
	}
	
</style>