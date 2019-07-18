<template>
	<div class="searchPinglun">
		<ul class="serchping">
			<li class="serchPinglun" v-for="(item,index) in PinglunArr" :key="index">
				<div class="PinglunName">
					<div class="Pinglunleft">
						<img class="touxiang" :src="item.Topimg"/>
						<div class="renming">
							<p>{{item.userName}}</p>
							<p class="Pinglundata">{{item.data}}</p>
						</div>
					</div>
					<div class="dianzan">
						<img class="zan" src="../assets/images/icon/zan.png"/>
						<span>{{item.Dianzanshu}}</span>
					</div>
				</div>
				<div class="Pinglunke">
					<p>{{item.Ketalk}}</p>
					<div class="imgUrl">
						<img :src="item.Keimg1"/>
						<img :src="item.Keimg2"/>
						<img :src="item.Keimg3"/>
					</div>
				</div>
				<div class="guanfangPinglun">
					<p>
						<span>{{item.Guanhuifu}}</span>
						{{item.Guancontent}}
					</p>
				</div>
			</li>
		</ul>
		<div class="morePinglun">
			<p>更多评论</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				PinglunArr:[],
				
			}
		},
		mounted(){
			this.$axios.get('../../static/data/PinglunData.json').then(
				res=>{
					this.PinglunArr = res.data.PinglunList
				},err=>{
					console.log("err",err)
				}
			)
		}
	}
</script>

<style lang="less">
	.searchPinglun{
		padding: 15/64rem 0 20/64rem 20/64rem;
		.serchping{
			display: -webkit-box;
			overflow: scroll;
			&::-webkit-scrollbar{
				display: none;
			}
			.serchPinglun{
				width: 5.5rem;
				height: 4.2rem;
				padding: .32rem;
				box-sizing: border-box;
				background: #fafafa;
				border-radius: 15/64rem;
				border: 1px solid #F2F2F2;
				margin-right: 15/64rem;
				.PinglunName{
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.Pinglunleft{
						display: flex;
						.touxiang{
							width: 38/64rem;
							height: 38/64rem;
							border-radius: 50%;
						}
						.renming{
							padding-left: 10/64rem;
							p{
								font-size: .24rem;
								color: rgba(0,0,0,.87);
							}
							.Pinglundata{
								color: rgba(0,0,0,.54);
							}
						}
					}
					.dianzan{
						display: flex;
						align-items: flex-end;
						.zan{
							width: 20/64rem;
						}
						span{
							font-size: .20rem;
							padding-left: 5/64rem;
						}
					}
				}
				.Pinglunke{
					margin: .12rem 0;
					p{
						font-size: .24rem;
						color: #000;
						overflow: hidden;
					}
					.imgUrl{
						padding-top: 6/64rem;
						display: flex;
						justify-content: space-around;
						flex-wrap: nowrap;
						img{
							width: 85/64rem;
							height: 65/64rem;;
							border-radius: .15rem;
						}
					}
				}
				.guanfangPinglun{
					font-size: .2rem;
					p{
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 3;
						overflow: hidden;
						span{
							color: #ff6700;
						}
					}
				}
			}
		}
		.morePinglun{
			text-align: center;
			color: #4E72A5;
			padding-top: 20/64rem;
		}
	}
</style>

					
					