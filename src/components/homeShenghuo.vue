<template>
	<div class="tvbox">
		<a class="tvheader">
			<img src="https://i8.mifile.cn/v1/a1/00f2000c-897d-e246-a911-cc42a0b52583!720x360.webp" alt="">
		</a>
		<ul class="nav">
			<li class="navItem" v-for="item in navList">
				<a href="">
					<img v-lazy.container="item" alt="">
				</a>
			</li>
		</ul>
		<div class="fenlei">
			 <ul class="shopItemBox" v-for="item in tuijlist" :class="item.cla">
				<img class="fimg" v-lazy.container="item.urlimg" alt="">
				<li class="shopItem" v-for="item2 in item.conent">
					<a href="#" class="aimg">
						<img v-lazy.container="item2.productImg" alt="" />
					</a>
					<div class="shopb">
						<p class="title">{{item2.productName}}</p>
						<p class="tedian">{{item2.productdet}}</p>
						<p class="num"><span class="fuhao">￥</span>{{item2.productPrice}}起</p>
						<span class="shopbtn">立即购买</span>
					</div>
				</li>
			</ul>
			<ul class="shopItemBox" v-for="item in qitaList" :class="item.cla">
				 <img class="fimg" v-lazy.container="item.urlimg" alt="">
				 <div class="banNav">
					<div class="banNavItem">
						<a href="#" class="aimg"><img v-lazy.container="item.shopurl" alt="" /></a>
						<div class="banNavPub">
							<div class="htitle">
								<p class="title">{{item.title}}</p>
								<p class="num"><span class="fuhao">￥</span>{{item.pri}}起</p>
							</div>
							<div class="btn">
								<p class="pub">{{item.txt}}</p>
								<span class="shopbtn">立即购买</span>
							</div>
						</div>
					</div>
				</div>
				<li class="shopItem" v-for="item2 in item.conent">
					<a href="#" class="aimg">
						<img v-lazy.container="item2.productImg" alt="" />
					</a>
					<div class="shopb">
						<p class="title">{{item2.productName}}</p>
						<p class="tedian">{{item2.productdet}}</p>
						<p class="num"><span class="fuhao">￥</span>{{item2.productPrice}}起</p>
						<span class="shopbtn">立即购买</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

	export default {
		name:'homeTv',
		components:{
		},
		data(){
			return{
				navList:[
					'https://i8.mifile.cn/v1/a1/d6b89c95-3a83-fe66-be3a-ef2ee70e0de5!144x152.webp',
					'https://i8.mifile.cn/v1/a1/9ff81c6e-4fcc-ba35-1c5a-d1474440022e!144x152.webp',
					'https://i8.mifile.cn/v1/a1/6330648c-e1ee-1cf0-6dfc-0f4a4d9c13e0!144x152.webp',
					'https://i8.mifile.cn/v1/a1/ce318598-2014-1e0d-ec78-f95f488b532b!144x152.webp',
					'https://i8.mifile.cn/v1/a1/56a22178-20a2-5ed2-2830-f3235d71ca43!144x152.webp'
				],
				tuijlist:[
					{urlimg:'https://i8.mifile.cn/v1/a1/e4f2ad18-be05-929a-e847-450ad068d74a!720x100.webp',cla:'itbb1',shopurl:'',conent:[
						{
							"productImg": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d20e4c39b6967319e89b1f779332b0e.jpg?thumb=1&w=344&h=280",
							"productName": "小米电视4A 32英寸",
							"productdet": "人工智能系统，高清液晶屏",
							"productPrice": "769"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/f9811c5f-a585-e62d-b5d2-4fd721a9d9aa!344x280.webp",
							"productName": "小米全面屏电视E55A",
							"productdet": "全面屏设计，人工智能语音",
							"productPrice": "2099"
						},{
							"productImg": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/896d989bcdae584906c36f4a4e5fa89b.jpg?thumb=1&w=344&h=280",
							"productName": "小米电视4C 50英寸",
							"productdet": "4K HDR，钢琴烤漆",
							"productPrice": "1699"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/621208d5-0777-3071-3e06-e3e7254a8522!344x280.webp",
							"productName": "小米电视4X 55英寸",
							"productdet": "4K HDR，人工智能语音",
							"productPrice": "1999"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/82003442-c6b7-3258-cc7a-2a851216ce8a!344x280.webp",
							"productName": "小米电视4A 65英寸",
							"productdet": "4K HDR，人工智能语音系统",
							"productPrice": "2999"
						},{
							"productImg": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cd59729b9a02407979848839c0e5343.jpg?thumb=1&w=344&h=280",
							"productName": "小米电视4X 43英寸",
							"productdet": "FHD全高清屏，人工智能语音",
							"productPrice": "1399"
						},{
							"productImg": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/89231a26e27564be66fe878708774d3a.jpg?thumb=1&w=344&h=280",
							"productName": "小米电视4C 40英寸",
							"productdet": "FHD全高清屏，钢琴烤漆",
							"productPrice": "1099"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/707ab125-9d19-3c4f-9a8c-6a116524f919!344x280.webp",
							"productName": "小米电视4A 55英寸",
							"productdet": "4K HDR，人工智能语音系统",
							"productPrice": "1999"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/03fdf4b6-69cd-e7e9-9017-0c68b581c9ff!344x280.webp",
							"productName": "小米全面屏电视E65A",
							"productdet": "全面屏设计，人工智能语音",
							"productPrice": "3199"
						},{
							"productImg": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/06bd0cdc9a6d3cc76850633a8ffb9d74.png?thumb=1&w=344&h=280",
							"productName": "小米电视4A 50英寸",
							"productdet": "4K HDR，人工智能语音系统",
							"productPrice": "1699"
						},
						
					]},
					{urlimg:'https://i8.mifile.cn/v1/a1/afb1059c-f00c-4b34-f654-33cbbf0f08e5!720x100.webp',cla:'itbb2',conent:[
						{
							"productImg": "https://i8.mifile.cn/v1/a1/03fdf4b6-69cd-e7e9-9017-0c68b581c9ff!344x280.webp",
							"productName": "小米全面屏电视E65A",
							"productdet": "全面屏设计，人工智能语音",
							"productPrice": "3199"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/f9811c5f-a585-e62d-b5d2-4fd721a9d9aa!344x280.webp",
							"productName": "小米全面屏电视E55A",
							"productdet": "全面屏设计，人工智能语音",
							"productPrice": "2099"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/780f660e-d9be-31e0-7f18-762e54ceffcf!344x280.webp",
							"productName": "小米全面屏电视E55C",
							"productdet": "全面屏设计，人工智能语音",
							"productPrice": "2099"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/aa684eb2-0f10-88f5-08d8-34520b3191c9!344x280.webp",
							"productName": "小米全面屏电视E43A",
							"productdet": "全面屏设计，人工智能语音",
							"productPrice": "1599"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/0e222e09-4439-0dcb-0efa-cc7a8acf94af!344x280.webp",
							"productName": "小米全面屏电视E32A",
							"productdet": "全面屏设计，人工智能语音",
							"productPrice": "899"
						},{
							"productImg": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/86959ccaf4e8aeda4ce4424b3016036f.jpg?thumb=1&w=344&h=280",
							"productName": "小米壁画电视 65英寸",
							"productdet": "壁画外观，全面屏，远场语音",
							"productPrice": "6999"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/43e95bd9-ba7b-0bc9-e530-ea291251867f!344x280.webp",
							"productName": "小米电视55全面屏PRO",
							"productdet": "金属机身全面屏，4K超清",
							"productPrice": "3499"
						},{
							"productImg": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b798cc0d7e234b42bd1e965df617321e.jpg?thumb=1&w=344&h=280",
							"productName": "小米电视65全面屏PRO",
							"productdet": "金属机身全面屏，4K超清",
							"productPrice": "6299"
						}
					]}
				],
				qitaList:[
					{urlimg:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/517b37f2f405709ff671b28856ac7670.jpg?thumb=1&w=720&h=100',title:'小米电视4A 55英寸影院版',txt:'55"电视4A+小米电视音响',cla:'itbb3',pri:'2298',shopurl:'https://i8.mifile.cn/v1/a1/b364cfa9-ff51-98b8-2d7f-da43b5c8b017!696x436.webp',conent:[
						{
							"productImg": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1da09078bbff6a3124214e40947ffbd0.jpg?thumb=1&w=344&h=280",
							"productName": "电视4A 50 影院版",
							"productdet": "50电视4A+小米电视音响",
							"productPrice": "1998"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/eca8bde1-696d-c0bc-23a5-5e68eaef2ccd!344x280.webp",
							"productName": "电视4A 43 影院版",
							"productdet": "43电视4A 青春版+电视音响",
							"productPrice": "1698"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/bfd91b62-bcd6-8afa-d9e2-a1cc28ec3e6e!344x280.webp",
							"productName": "电视4C 50 影院版",
							"productdet": "50电视4C+小米电视音响",
							"productPrice": "1198"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/18ad0c5a-e5d7-3e56-1a82-c46cb1383d75!344x280.webp",
							"productName": "电视4C 55 影院版",
							"productdet": "55电视4C+小米电视音响",
							"productPrice": "2298"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/00a30cd9-4ee9-9f5b-5c2e-a486d9e7612c!344x280.webp",
							"productName": "电视4 55 影院版",
							"productdet": "55电视4+小米电视音响",
							"productPrice": "3498"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/5b097d82-2622-ce62-50b3-1d0d631847a9!344x280.webp",
							"productName": "电视4 65 影院版",
							"productdet": "65电视4旗舰版+小米电视音响",
							"productPrice": "5298"
						}
					]},
					{urlimg:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9640a5240c489d6a88d9b65b72e7eb09.jpg?thumb=1&w=720&h=100',title:'小米电视4A 65英寸',txt:'4K HDR，人工智能语音系统，超窄边设计',cla:'itbb6',pri:'2999',shopurl:'https://i8.mifile.cn/v1/a1/4af0de11-fb67-1d74-7654-f1a995fd6a23!696x436.webp',conent:[
						{
							"productImg": "https://i8.mifile.cn/v1/a1/707ab125-9d19-3c4f-9a8c-6a116524f919!344x280.webp",
							"productName": "小米电视4A 55英寸",
							"productdet": "4K HDR，人工智能语音系统",
							"productPrice": "1999"
						},{
							"productImg": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cd59729b9a02407979848839c0e5343.jpg?thumb=1&w=344&h=280",
							"productName": "小米电视4X 43英寸",
							"productdet": "FHD全高清屏，人工智能语音",
							"productPrice": "1399"
						},{
							"productImg": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d20e4c39b6967319e89b1f779332b0e.jpg?thumb=1&w=344&h=280",
							"productName": "小米电视4A 32英寸",
							"productdet": "人工智能系统，高清液晶屏",
							"productPrice": "769"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/621208d5-0777-3071-3e06-e3e7254a8522!344x280.webp",
							"productName": "小米电视4X 55英寸",
							"productdet": "4K HDR，人工智能语音",
							"productPrice": "1999"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/5bdbf690-2dda-68bd-f6c8-149d6f3e251d!344x280.webp",
							"productName": "小米电视4A 58英寸",
							"productdet": "4K HDR，人工智能语音系统",
							"productPrice": "2199"
						},{
							"productImg": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5e7f36faf81397be44e4ba003e0bba45.jpg?thumb=1&w=344&h=280",
							"productName": "小米电视4A 49英寸",
							"productdet": "人工智能语音，FHD全高清屏",
							"productPrice": "1499"
						},{
							"productImg": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/06bd0cdc9a6d3cc76850633a8ffb9d74.png?thumb=1&w=344&h=280",
							"productName": "小米电视4A 50英寸",
							"productdet": "4K HDR，人工智能语音系统",
							"productPrice": "1699"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/75ab4767-00fc-e1a8-2e46-1971c4c76321!344x280.webp",
							"productName": "电视4A 43 青春版",
							"productdet": "人工智能语音，FHD全高清屏",
							"productPrice": "1399"
						}
						
					]},{urlimg:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/656ca63bd7fcbf43c57ad0845b00c48f.jpg?thumb=1&w=720&h=100',title:'小米电视4 55英寸',txt:'4.9mm 极超薄机身，人工智能语音',cla:'itbb4',pri:'3199',shopurl:'https://i8.mifile.cn/v1/a1/910957fc-b2cd-1732-19e7-2136cf2dbeed!696x436.webp',conent:[
						{
							"productImg": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f34a7ac66bdc0dd900b2f15932d818fc.jpg?thumb=1&w=344&h=280",
							"productName": "电视4 65 旗舰版",
							"productdet": "全面屏人工智能语音电视",
							"productPrice": "4999"
						},{
							"productImg": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08ea3b2dde61f43b16a1b03d946480ae.jpg?thumb=1&w=344&h=280",
							"productName": "小米电视4 75英寸",
							"productdet": "超薄金属机身，4K HDR",
							"productPrice": "8999"
						}
					]},{urlimg:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e98239015507329af59f9fd00fdb3b80.jpg?thumb=1&w=720&h=100',title:'小米电视音响',txt:'电视好伴侣，浸享好声音',cla:'itbb5',pri:'399',shopurl:'https://i8.mifile.cn/v1/a1/dbbf29ff-d31e-1ddb-4452-51897f84070d!696x436.webp',conent:[
						{
							"productImg": "https://i8.mifile.cn/v1/a1/3b1b448d-129d-d54e-4808-09240e199c2e!344x280.webp",
							"productName": "小米红外遥控器",
							"productdet": "11键极简设计，软硅胶按键",
							"productPrice": "39"
						},{
							"productImg": "https://i8.mifile.cn/v1/a1/9bbc290e-d13d-cef3-9013-3fa78814b442!344x280.webp",
							"productName": "小米蓝牙语音遥控器",
							"productdet": "语音智能搜片，舒适握感",
							"productPrice": "99"
						}
					]}
				]
			}
		}
	}
</script>

<style lang='less' scoped="scoped">
	img{
		display: block;
	}
	.tvbox{
		background: #1663E6;
		.tvheader{
			display: block;
			img{
				width: 100%;
				height: 229/64rem;
			}
		}
		.nav{
			width: 100%;
			display: flex;
			border-bottom: 1px solid #fff;
			box-sizing: border-box;
			overflow: hidden;
			.navItem{
				width: 20%;
				height: 97/64rem;
				flex: 1;
				a{
					display: block;
					img{
						width: 88/64rem;
						height: 97/64rem;
					}
				}
			}
		}
		.banNav {
			.titleimg {
				width: 100%;
				height: 88/64rem;
				display: block;
			}
			.banNavItem {
				box-sizing: border-box;
				.aimg {
					display: block;
					img {
						width: 100%;
						height: 250/64rem;
						display: block;
					}
				}
				.banNavPub {
					background: #fff;
					display: flex;
					padding: 12/64rem 10/64rem;
					display: flex;
					flex-wrap: wrap;
					.htitle {
						width: 100%;
						display: flex;
						align-items: center;
						line-height: 21/64rem;
						justify-content: space-between;
						margin-bottom: 5/64rem;
						.title {
							color: rgba(0, 0, 0, .87);
							font-size: 16/64rem;
						}
						.num {
							font-size: 15/64rem;
							color: red;
							.fuhao {
								font-size: 12/64rem;
							}
						}
					}
					.btn {
						width: 100%;
						display: flex;
						align-items: center;
						justify-content: space-between;
						line-height: 17/64rem;
						.pub {
							font-size: 13/64rem;
							color: #777;
						}
						.shopbtn {
							display: block;
							width: 116/64rem;
							height: 34/64rem;
							line-height: 34/64rem;
							background: #ea625b;
							text-align: center;
							color: #fff;
							border-radius: 4/64rem;
							font-size: 14/64rem;
						}
					}
				}
			}
		}
		.shopItemBox{
			display: flex;
			flex-wrap: wrap;
			padding: 0 8/64rem;
			box-sizing: border-box;
			.fimg{
				width: 100%;
				height: 64/64rem;
			}
			.shopItem{
				width: 193/64rem;
				height: 276/64rem;
				overflow:hidden;
				margin-top: 7/64rem;
				.aimg{
					display: block;
					img{
						width: 193/64rem;
						height: 161/64rem;
						display: block;
					}
				}
				&:nth-child(even){
					margin-left: 7/64rem;
					width: 194/64rrem;
					img{
						width: 194/64rem;
					}
				}
				.shopb{
					height: 110/64rem;
					background: #fff;
					width: 100%;
					text-align: center;
					padding-top: 10/64rem;
					.title{
						color:rgba(0,0,0,.87);
						font-size: 16/64rem;
						line-height: 20/64rem;
					}
					.tedian{
						color: rgba(0,0,0,.54);
						font-size: 12/64rem;
						line-height: 20/64rem;
					}
					.num{
						color: #ea625b;
						line-height: 20/64rem;
					}
					.shopbtn {
							display: inline-block;
							width: 116/64rem;
							height: 34/64rem;
							line-height: 34/64rem;
							background: #ea625b;
							text-align: center;
							color: #fff;
							border-radius: 4/64rem;
							font-size: 14/64rem;
							margin-top: 4/64rem;
						}
				}

			}
		}
		.itbb2{
			background: #ED5F29;
		}
		.itbb3{
			background: #ED5F29;
		}
		.itbb4{
			background: #F5A92F;
		}
		.itbb5{
			background: #EC602D;
		}
		.itbb6{
			background: #F5A92F;
		}
	}
</style>