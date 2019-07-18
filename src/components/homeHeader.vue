<template>
	<div class="homeHeaderWrap">
		<div class="headerWrap">
			<img src="../assets/images/icon/logo.png" alt="" />
			<form class="headerSearch">
				<img class="searchImg" src="../assets/images/icon/search.png" alt="" />
				<input type="text" name="search" placeholder="搜索商品名称"  @focus="homesearch"/>
			</form>
			<img src="../assets/images/tabbar/tabbar4.png" alt="" @click="gotoLogin"/>
		</div>
		<div class="navBox">

			<div class="homenav" v-show="isShow">
				<div class="headerDown" @click="navShow">
					<img src="../assets/images/icon/down.png" alt="" />
				</div>
				<ul class="homeNavList">
					<li :class="{'homeNavActive':currIndex==index}" v-for="(item,index) in navArr" @click="headerNav(index)">
						<router-link href="#" :to="item.toPath">{{item.navName}}</router-link>
					</li>
				</ul>
			</div>
			<div class="homeNavTwo" v-show="!isShow">
				<div class="HomeAllNav">
					<span>全部</span>
					<div class="headerUp" @click="navShow">
						<img src="../assets/images/icon/down.png" />
					</div>
				</div>
				<ul class="homeNavListTwo">
					<li :class="{'currActive':currIndex==index}" v-for="(item,index) in navArr" @click="headerNav(index)">
						<router-link href="#" :to="item.toPath">{{item.navName}}</router-link>
					</li>
				</ul>
			</div>
			<div class="navContent" @scroll="myScroll">
				<router-view>
					<!--占位符-->
				</router-view>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
				return {
					myFlag: false,
					isShow: true,
					currIndex: 0,
					navArr: [{
						toPath: "/home/homeTuijian",
						navName: "推荐"
					}, {
						toPath: "/home/homePhone",
						navName: "手机"
					}, {
						toPath: "/home/homeBiyeJi",
						navName: "毕业季"
					}, {
						toPath: "/home/homeZhineng",
						navName: "智能"
					}, {
						toPath: "/home/homeTV",
						navName: "电视"
					}, {
						toPath: "/home/homeCompute",
						navName: "笔记本"
					}, {
						toPath: "/home/homeJiadian",
						navName: "家电"
					}, {
						toPath: "/home/homeShenghuo",
						navName: "生活周边"
					}]
				}
			},
			methods: {
				navShow() {
					this.isShow = !this.isShow
				},
				headerNav(index) {
					this.currIndex = index;
				},
				myScroll(e) {
					e.srcElement.scrollTop > 300 ? this.myFlag = true : ''
				},
				gotoLogin(){
					this.$router.push('/Mine')
				},
				homesearch(){
					this.$router.push('/homeSearch')
				}
			}
	}
</script>

<style lang='less'>
	.homeHeaderWrap {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 66666;
		bottom: 50/64rem;
		display: flex;
		flex-direction: column;
		flex: 1;
		.headerWrap {
			background: #EEEEEE;
			color: #333;
			text-align: center;
			height: 45/64rem;
			display: flex;
			/*flex: none;*/
			align-items: center;
			justify-content: space-around;
			box-sizing: border-box;
			position: relative;
			img {
				width: 25/64rem;
			}
			.headerSearch {
				position: relative;
				input {
					width: 290/64rem;
					height: 35/64rem;
					border: none;
					padding-left: 40/64rem;
					box-sizing: border-box;
					font-size: 14/64rem;
					outline: none;
				}
				.searchImg {
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					left: 10/64rem;
				}
			}
		}
		.navBox {
			position: relative;
			display: flex;
			flex-direction: column;
			flex: 1;
			.navContent {
				overflow-y: scroll;
			}
		}
		.homenav {
			/*width: 100%;*/
			overflow: scroll;
			display: flex;
			flex: none;
			&::-webkit-scrollbar {
				display: none;
			}
			.headerDown {
				width: 30/64rem;
				height: 20/64rem;
				background: #EFEFEF;
				position: absolute;
				top: 7/64rem;
				right: 0;
				box-shadow: -10/64rem -1/64rem 15/64rem #EEEEEE;
				img {
					width: 20/64rem;
				}
			}
		}
		.homeNavList {
			width: 150%;
			display: flex;
			flex-wrap: nowrap;
			background: #EEEEEE;
			li {
				white-space: nowrap;
				padding: 0 15/64rem;
				line-height: 35/64rem;
				a {
					display: inline-block;
					color: #999;
					font-size: 14px;
				}
				&.homeNavActive a {
					color: orangered;
					border-bottom: 2px solid orangered;
				}
			}
		}
		.homeNavTwo {
			width: 100%;
			padding: 0 15/64rem;
			box-sizing: border-box;
			background: #EEEEEE;
			position: absolute;
			top: 0px;
			left: 0px;
			z-index: 5555;
			.HomeAllNav {
				height: 40/64rem;
				line-height: 40/64rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
				span {
					color: #333333;
					font-size: 12px;
				}
				.headerUp {
					padding: 5/64rem;
					img {
						width: 25/64rem;
						height: 25/64rem;
						transform: rotate(180deg);
					}
				}
			}
			.homeNavListTwo {
				display: flex;
				flex-wrap: wrap;
				/*flex: none;*/
				justify-content: space-between;
				li {
					width: 80/64rem;
					height: 30/64rem;
					line-height: 30/64rem;
					text-align: center;
					margin-bottom: 15/64rem;
					border: 1px solid #e5e5e5;
					background: #fff;
					border-radius: 5/64rem;
					a {
						color: #999;
						font-size: 12px;
					}
					&.currActive {
						border: 1px solid orangered;
						background-color: #fde0d5;
						a {
							color: orangered;
						}
					}
				}
			}
		}
	}
</style>