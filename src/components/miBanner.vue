<template>
	<div class="bannerSwiper">
		<!--由于整个项目可能存在多个轮播图，一般会传入一个轮播图唯一id-->
		<div :class="swiperId">
			<div class="swiper-wrapper">
				<slot name="bannerImg"></slot>				
			</div>
			<!-- 如果需要分页器 -->
			<div :class="{'swiper-pagination':paginationShow}"></div>

			<!-- 如果需要导航按钮 --> 
			<div :class="{'swiper-button-prev':navigationShow}"></div>
			<div :class="{'swiper-button-next':navigationShow}"></div>
			<!--轮播的定位处-->
			<slot name="lunbleft"></slot>
			<slot name="lunbright"></slot>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	export default {
		props:{
			swiperId:{type:String,default:''},  //唯一标识
			loopShow:{type:Boolean,default:false},//是否循环模式
			autoplayShow:{type:Boolean,default:true},//是否自动切换
			effectType:{type:String,default:'slide'},//切换效果
			paginationShow:{type:Boolean,default:true},//是否显示分页器
			paginationType:{type:String,default:'bullets'},//分页器的样式
			navigationShow:{type:Boolean,default:false}//是否显示前进后退按钮
		},
		mounted() {
			var mySwiper = new Swiper('.'+this.swiperId, {
//				loop: this.loopShow, 
//				autoplay:this.autoplayShow,
//				effect:this.effectType,
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
					type:this.paginationType
				},
				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			
			})
		}
	}
</script>

<style lang='less'>
	.bannerSwiper{
		width: 100%;
		height:100%;
		overflow: hidden;
		position: relative;
	}
	.bannerSwiper .swiper-slide img{
		width: 100%;
	}
	.swiper-pagination-bullet {
			width: 8/64rem;
			height:8/64rem;
			border-radius: 50%;
		}
		.swiper-pagination-bullet-active {
			background: #fff;
		}
	
</style>