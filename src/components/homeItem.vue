<template>
	<div>
	<div class="homeItemWrap" v-for="(item,index) in reception" :key="index">
		<div class="homeImgBox">
			<img class="homeItemFirstImg" v-lazy.container="item.firstImg" />
			
		</div>
		<ul class="homeItemList">
			<li v-for="(item2,index2) in item.homeItemList" :key="index2">
				<router-link to="/search">
					<router-link to="/shoppublic"><img v-lazy.container="item2.productImg" /></router-link>
					<div class="homeListTxt">
						<h2>{{item2.productName}}</h2>
						<p>{{item2.productdet}}</p>
						<p>
							<span>{{item2.productPrice | format("￥")}}</span>
							<span v-show="item2.oldPriceShow">{{item2.oldPrice | format("￥")}}</span>
						</p>
					</div>
					<div class="homeXianshi" v-show="item2.xianshiShow">
						<img v-lazy.container="item2.xianshi" alt="" />
					</div>
				</router-link>
			</li>			
		</ul>
		<a href="#" class="homeMore">{{item.homeMore}}</a>
		<div class="homeLastImg">
			<img class="homeItemSecImg" v-lazy.container="item.secImg" />
		</div>
	</div>
	</div>
</template>

<script>
	export default {
			props:{
				reception:Array,default:[]
			},
			filters:{
			format(val,arg){
				return `${arg}${val}`
			}
		}
	}
</script>

<style lang='less'>
	.homeItemWrap {
		width: 100%;
		.homeImgBox {
			
			background-color: #EFEFEF;
			.homeItemFirstImg {
				width: 100%;
				margin-top: 10/64rem;
			}
			
		}
		.homeLastImg{
			background-color: #EFEFEF;
			.homeItemSecImg {
				width: 100%;
				margin-top: 10/64rem;
			}
		}
		.homeItemList {
			width: 100%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			li {
				width: 200/64rem;
				position: relative;
				a {
					color: #333;
					display: inline-block;
					img {
						width: 200/64rem;
					}
					.homeListTxt {
						padding: 5/64rem 15/64rem 15/64rem;
						h2 {
							font-size: 12px;
							font-weight: normal;
						}
						p {
							font-size: 12px;
							color: #999;	
							margin-top:3/64rem;				
							&:nth-of-type(1),&:nth-of-type(2) {
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
							}
							&:nth-of-type(2) {
								span {
									color: #ea625b;
									&:last-of-type {
										margin-left: 10/64rem;
										color: #999;
										text-decoration: line-through;
									}
								}
							}
						}
					}
					.homeXianshi {
						position: absolute;
						right: 0;
						bottom: 85/64rem;
						img {
							width: 50/64rem;
							height: 50/64rem;
						}
					}
				}
			}
		}
		.homeMore{
			display: block;
			width: 100%;
			height: 60/64rem;
			line-height: 60/64rem;
			color: #999;
			font-size: 12px;
			text-align: center;
			border-top: 1px solid #ccc;
		}
	}
</style>