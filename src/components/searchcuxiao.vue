<template>
	<div class="searchcuxiao">
		<p class="cuXiao">促销 <i class="close"></i></p>
		<div class="zengPing">
			<span>赠品</span>
			<p>赠米粉卡，最高含100元话费</p>
		</div>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style lang="less">
	.searchcuxiao{
		width: 100%;
		height: 5rem;
		border-top-left-radius: 10/64rem;
		border-top-right-radius: 10/64rem;
		position: relative;
		.cuXiao{
			text-align: center;
			height: .8rem;
			line-height: .8rem;
			font-family: "微软雅黑";
			margin: 0 .3rem;
			border-bottom: 1px solid #ccc;
			.close{
				position: absolute;
				display: inline-block;
				background: url(../assets/images/icon/close.png) no-repeat center;
				background-image: 10/64rem 10/64rem;
				/*border: 1px solid red;*/
				width: 18/64rem;
				height: 18/64rem;
				top:20/64rem;
				right: 25/64rem;
			}
		}
		.zengPing{
			margin: 0.2rem .3rem;
			line-height: .5rem;
			font-size: 16/64rem;
			border-bottom: 1px solid #f5f5f5;
			span{
				color: #FF6700;
				padding: .02rem;
				border: 1px solid #FF6700;
				
			}
		}
	}
</style>