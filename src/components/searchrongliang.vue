<template>
	<div class="searchRongliang">
		<ul>
			<li v-for="(item,index) in rongliangArr" :key="index">
				<div>
					<img :src="item.imgurl"/>
					<p>{{item.Rongliangname}}</p>
					<p class="xingneng">{{item.Rongliangtall}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				rongliangArr:[
					{
						"imgurl":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png",
						"Rongliangname":"CPU",
						"Rongliangtall":"骁龙660八核"
					},{
						"imgurl":"https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png",
						"Rongliangname":"双摄像头",
						"Rongliangtall":"1200万+500万像素"
					},{
						"imgurl":"https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png",
						"Rongliangname":"超大屏",
						"Rongliangtall":"6.26英寸"
					},{
						"imgurl":"https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png",
						"Rongliangname":"屏幕分辨率",
						"Rongliangtall":"2280×1080"
					},{
						"imgurl":"https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png",
						"Rongliangname":"极速畅玩",
						"Rongliangtall":"6GB"
					},{
						"imgurl":"https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png",
						"Rongliangname":"存储容量",
						"Rongliangtall":"64GB"
					},{
						"imgurl":"https://i8.mifile.cn/b2c-mimall-media/52ad10a73685342e437e44ea3d29cbff.png",
						"Rongliangname":"薄",
						"Rongliangtall":"7.5mm"
					},{
						"imgurl":"https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png",
						"Rongliangname":"持久待机",
						"Rongliangtall":"3350mAh"
					},{
						"imgurl":"https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png",
						"Rongliangname":"运营商网络",
						"Rongliangtall":"4G全网通"
					},{
						"imgurl":"https://i8.mifile.cn/b2c-mimall-media/bfd5ba9ae72c365dee42db14dfae4b0f.png",
						"Rongliangname":"网络模式",
						"Rongliangtall":"双卡双待"
					}
				]
			}
		}
	}
</script>

<style lang="less">
	.searchRongliang{
		padding: 15/64rem 0;
		width: 100%;
		ul{
			display: flex;
			align-items: center;
			flex-wrap: nowrap;
			width: 100%;
			overflow: scroll;
			&::-webkit-scrollbar{
				display: none;
			}
			li{
				width: 1.36rem;
				border-right: 1px solid #ccc;
				div{
					text-align: center;
					width: 1.36rem;
					img{
						width: .4rem;
					}
					p{
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						font-size: 13/64rem;
						color: #3c3c3c;
					}
					.xingneng{
						color: #676767;
					}
				}
			}
			li:last-child{
				border: none;
			}
		}
	}
</style>