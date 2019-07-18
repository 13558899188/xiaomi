<template>
	<div class="bottomItemWrap">
		<div class="bottomImg">
				<a href="#"  v-for="(item,index) in homeBottomObj.bottomImg" :key="index">
					<img v-lazy.container="item" alt="" />
			  </a>		
		</div>	
		<a href="#" class="yiqiBuy">
			<img v-lazy.container="homeBottomObj.yiqiBuy" alt="" />
		</a>
		<a href="#" class="aboutMi">
			{{homeBottomObj.aboutMi}}
		</a>				
	</div>
</template>

<script>
	export default {
		props:{
			homeBottomObj:{
				type:Object,default:''
			}
		}
	}
</script>

<style lang='less'>
.bottomItemWrap{
	background: #EFEFEF;
}

	.bottomImg{
		/*width: 100%;*/
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background: #fff;
		a{
			display: block;
			width: 200/64rem;
			img{
				width: 200/64rem;
			}
		}
}	
	.yiqiBuy{
		width: 100%;
		img{
			width: 100%;
		}
	}
	.aboutMi{
		display: block;
		width: 100%;
		height:50/64rem;
		line-height: 50/64rem;
		text-align: center;
		color: #999;
		margin:5/64rem 0;
		background:rgba(255,255,255,.8);
	}
</style>