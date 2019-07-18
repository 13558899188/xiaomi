<template>
	<div class="headerWrap">
		<span>{{txt}}</span>
		<slot name="HleftImg"  class="HleftImg"></slot>				
		<slot name="search" class="headerSearch"></slot>
		<slot name="HrightImg" class="HrightImg" ></slot>	
		<slot name="homeNav" class="homenav" ></slot>	
		
	</div>
</template>

<script>

	export default {
		props:["txt"]
	}
</script>

<style lang='less'>
	.headerWrap{
		width: 100%;
		height:60/64rem;
		line-height: 60/64rem;
		background: #eee;
		color: #333;
		text-align: center;
		position: fixed;
		font-size: 16/64rem;
		top: 0;
		left: 0;
		z-index: 88;
		box-sizing: border-box;
		img{
			width: 30/64rem;
		}
		.HleftImg{
			position: absolute;
			top: 50%;
			left: 10/64rem;
			transform: translateY(-50%);
			display: inline-block;
			width: 24/64rem;
			height: 24/64rem;
		}
		.HrightImg{
			position: absolute;
			top: 50%;
			right: 10/64rem;
			transform: translateY(-50%);
		}
		.headerSearch{
			position: relative;			
			input{
				width:70%;
				height: 35/64rem;
				border: none;
				padding-left: 40/64rem;
				box-sizing: border-box;			
			}
			.searchImg{
				position: absolute;
				top: 15/64rem;
				left: 64/64rem;
			}
		}
	}
</style>