<template>
	<div class="serachMi">
		<div class="Mitxt">
			<h2>小米8 青春版</h2>
			<p class="Mijieshao">
				<span class="MiCol">「6GB+64GB 限时秒杀价1099元」</span>
				索尼2400万旗舰自拍 / 潮流镜面渐变色 / 手持超级夜景 / Dual PD 双核对焦 / 7.5mm超薄机身 / 6.26"小刘海全面屏 / 骁龙660AIE处理器
			</p>
			<p class="Miprice">
				<span>￥1099</span>
				<span class="beforePrice">￥1699</span>
			</p>
		</div>
	</div>	
</template>

<script>
	export default{
		
	}
</script>

<style lang="less">
	.serachMi{
		.Mitxt{
			padding: .32rem .26rem 0 .26rem;
			h2{
				font-weight: normal;
				font-size: .4rem;
			}
			.Mijieshao{
				font-size: .2rem;
				line-height: .38rem;
				color: rgba(0,0,0,.54);
				.MiCol{
					color: rgb(255,74,0);
				}
			}
			.Miprice{
				color: #ff6700;
				font-size: .42rem;
				.beforePrice{
					font-size: .24rem;
					color: rgba(0,0,0,.54);
					text-decoration: line-through;
				}
			}
		}
	}
</style>