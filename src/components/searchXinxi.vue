<template>
	<div class="serachxinxi">
		<div class="searchcuxiao" @click.prevent="showZengPin">
			<a href="javaScript:;">
				<p>
					<span class="cuxiao">促销</span>
					<span class="zengping">赠品</span>
					<span>赠米粉卡，最高含100元话费</span>
					<i class="icon-right"></i>
				</p>
			</a>
		</div>
		<ul class="xinxiList">
			<li @click.prevent="showshop">
				<a href="javaScript:;">
					<p>
						<span class="cuxiao">已选</span>
						<span class="zengping">小米8 青春版 6GB+64GB 深空灰 x 1</span>
						<i class="icon-right"></i>
					</p>
				</a>
			</li>
			<li @click.prevent="AdrShow">
				<a href="javaScript:;">
					<p>
						<span class="cuxiao">送至</span>
						<span class="zengping">深圳市 南山区</span>
						<span class="xianhuo">有现货</span>
						<i class="icon-right"></i>
					</p>
				</a>
			</li>
			<li @click.prevent="fwpShow">
				<a href="javaScript:;">
					<p>
						<span class="cuxiao"><i class="Miziying"></i>小米自营</span>
						<span class="cuxiao"><i class="Miziying"></i>小米发货</span>
						<span class="cuxiao"><i class="Miziying"></i>7天无理由退货</span>
						<i class="icon-right"></i>
					</p>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>

	export default{
		data(){
			return{
				
			}
		},
		methods:{
			showshop(){
				this.$store.state.shopSelect=!this.$store.state.shopSelect
			},
			AdrShow(){
				this.$store.state.shopAdrShow=!this.$store.state.shopAdrShow
			},
			showZengPin(){
				this.$store.state.ZengPinShow=!this.$store.state.ZengPinShow
			},
			fwpShow(){
				this.$store.state.fuwuPublicShow=!this.$store.state.fuwuPublicShow
			}
		}
	}
</script>
<style lang="less">
	.serachxinxi{
		margin: 0 20/64rem;
		position: relative;
		.searchcuxiao{
			height: .65rem;
			line-height: .65rem;
			background-color: #fafafa;
			border: 1px solid #e5e5e5;
			border-radius: 10/64rem;
			margin-bottom: 15/64rem;
			a{
				font-size: 13/64rem;
				color: rgba(0,0,0,.87);
				text-indent: 1em;
				.cuxiao{
					color: rgba(0,0,0,.54);
				}
				.zengping{
					border: 1px solid #f56600;
					color: #f56600;
					margin-left: 10/64rem;
					padding: .02rem .02rem;
				}
				.icon-right{
					position: absolute;
					background: url(../assets/images/icon/down.png) no-repeat;
					width: 25/64rem;
					height: 25/64rem;
					background-size: 25/64rem 25/64rem;
					transform: rotate(-90deg);
					right: 10/64rem;
					top: 10/64rem;
				}
			}
		}
		.xinxiList{
			background-color: #fafafa;
			border: 1px solid #e5e5e5;
			border-radius: 10/64rem;
			li{
				height: .65rem;
				line-height: .65rem;
				border-bottom: 1px solid #e5e5e5;
				position: relative;
				a{
					font-size: 13/64rem;
					color: rgba(0,0,0,.87);
					text-indent: 1em;
					.icon-right{
					position: absolute;
					background: url(../assets/images/icon/down.png) no-repeat;
					width: 25/64rem;
					height: 25/64rem;
					background-size: 25/64rem 25/64rem;
					transform: rotate(-90deg);
					right: 10/64rem;
					top: 10/64rem;
				}
					.cuxiao{
						color: rgba(0,0,0,.54);
						.Miziying{
							display: inline-block;
							background: url(../assets/images/icon/iconOK.png) no-repeat bottom;
							width: 20/64rem;
							height: 20/64rem;
							background-size: 12/64rem;
						}
					}
					.zengping{
						margin-left: 10/64rem;
					}
					.xianhuo{
						color: #FF6700;
					}
				}
			}
			li:last-child{
				border-bottom: none;
			}
		}
	}
</style>