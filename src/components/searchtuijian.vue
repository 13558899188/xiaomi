<template>
	<div class="serachTuijian">
		<h2>为你推荐</h2>
		<ul class="TuijianList">
			<li v-for="(item,index) in tuijianArr" :key="index">
				<img :src="item.imgurl"/>
				<div class="TuijianName">
					<p class="goods-name">{{item.titleName}}</p>
					<p class="goods-price"><span class="priceCol">{{item.newPrice}}</span> <span class="beforeCor">{{item.beforePrice}}</span></p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tuijianArr:[]
			}
		},
		mounted(){
			this.$axios.get('../../static/data/TuijianData.json').then(
				res=>{
					this.tuijianArr = res.data.TuijianList
				},err=>{
					console.log("err",err)
				}
			)
		}
	}
</script>

<style lang="less">
	.serachTuijian{
		margin: 20/64rem;
		h2{
			font-weight: normal;
			color: #000;
		}
		.TuijianList{
			width: 100%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			margin-top: 20/64rem;
			li{
				width: 2.74rem;
				img{
					width: 2.74rem;
					height: 2.74rem;
					border-radius: .3rem;
				}
				.TuijianName{
					width: 2.74rem;
					padding: 10/64rem;
					.goods-name{
						height: 20/64rem;
						color: rgba(0,0,0,.84);
						font-size: .20rem;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.goods-price{
						font-size: .25rem;
						margin-top: .1rem;
						.priceCol{
							color: #ff6700;
						}
						.beforeCor{
							text-decoration: line-through;
						}
					}
				}
			}
		}
	}
</style>