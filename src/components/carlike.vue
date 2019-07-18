<template>
	<div class="cailike">
		<a href="" class="caini">
			<img src="https://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt="" />
		</a>
		<div class="tuijina">
			<router-link :to="item.dizhi" class="tjitem" v-for="(item,index) in itemlist" :key="index">
				<img v-lazy.container="item.urlimg" alt="" />
				<p class="tile">{{item.title}}</p>
				<p class="pri">
					<span class="colorf">¥</span>{{item.pri}}
				</p>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'cailike',
		data(){
			return {
				itemlist:[
				{title:'柴犬米兔',urlimg:'https://i8.mifile.cn/b2c-mimall-media/7aae7bc0976c673950ac66a05f3567ce!360x360.jpg',pri:'49',dizhi:'shoppublic'},
				{title:'小米巨能写中性笔10支装',urlimg:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6a8abf50e2134139e24c30c9293871c.jpg?thumb=1&w=360&h=360',pri:'9.99',dizhi:'shoppublic'},
				{title:'小米平板4 Plus 10英寸 LTE版 128GB',urlimg:'https://i8.mifile.cn/b2c-mimall-media/c0bee80d76b0d3da60013c86a8e773ca!360x360.jpg',pri:'2099',dizhi:'shoppublic'},
				{title:'AirDots 真无线蓝牙耳机',urlimg:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d39a4ad7456ebd9b6ea2ebeabe00e069.jpg?thumb=1&w=360&h=360',pri:'99.9',dizhi:'shoppublic'},
				{title:'悟空米兔',urlimg:'https://i8.mifile.cn/b2c-mimall-media/ce5362f14526ced8e20ae687eadeed5c!360x360.jpg',pri:'49.9',dizhi:'shoppublic'},
				{title:'小米蓝牙语音遥控器',urlimg:'https://i8.mifile.cn/b2c-mimall-media/726c0c8817868d360eb9d68df8c96176!360x360.jpg',pri:'99',dizhi:'shoppublic'},
				{title:'黑鲨游戏手机 2 8GB+256GB',urlimg:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1095eb1dcf8175aa55874fc4fe1eb9be.jpg?thumb=1&w=360&h=360',pri:'3299',dizhi:'shoppublic'},
				{title:'小米电视4S 65英寸PRO',urlimg:'https://i8.mifile.cn/b2c-mimall-media/0453a7ac57c18ede3533f4d5cf6acb90!360x360.jpg',pri:'3799',dizhi:'shoppublic'},
				{title:'小米电视4C 32英寸',urlimg:'https://i8.mifile.cn/b2c-mimall-media/b8ef4bce02ff3fdb538fb9260a5215e2!360x360.jpg',pri:'769',dizhi:'shoppublic'},
				{title:'小米蓝牙项圈耳机 青春版',urlimg:'https://i8.mifile.cn/b2c-mimall-media/1b1a372f6977434973c18d5e8950cf4a!360x360.jpg',pri:'169',dizhi:'shoppublic'},
				{title:'米家小相机手持云台',urlimg:'https://i8.mifile.cn/b2c-mimall-media/63c2322d0eea6d6a753bd184b12ec69a!360x360.jpg',pri:'699',dizhi:'shoppublic'},
				{title:'小米USB充电器30W快充版（1A1C）',urlimg:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a8c4e23bb75fc5e4c14151c46b796dd.jpg?thumb=1&w=360&h=360',pri:'59',dizhi:'shoppublic'},
				{title:'小米平板4 智能翻盖支架保护套',urlimg:'https://i8.mifile.cn/b2c-mimall-media/d8e70f4d3537eb08a7f0c0e204505d81!360x360.jpg',pri:'69',dizhi:'shoppublic'},
				{title:'贝医生声波电动牙刷头（敏感型）2支装',urlimg:'https://i8.mifile.cn/b2c-mimall-media/3a6ba6d6d2eca687a9037e219853eacc!360x360.jpg',pri:'39.9',dizhi:'shoppublic'},
				{title:'米家投影仪',urlimg:'https://i8.mifile.cn/b2c-mimall-media/0adfec1b55d3d9e4417d28e4dd074a59!360x360.jpg',pri:'2999',dizhi:'shoppublic'},
				{title:'小米全面屏电视E43A',urlimg:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/feb604ccb87dfd5a9ec5761380a987c7.jpg?thumb=1&w=360&h=360',pri:'1599',dizhi:'shoppublic'},
				{title:'8H多功能青春床垫X1',urlimg:'https://i8.mifile.cn/b2c-mimall-media/9a3d60e8947d19eb5cc2d2cb0e0822fa!360x360.jpg',pri:'339',dizhi:'shoppublic'},
				{title:'USB-C 电源适配器',urlimg:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/648060ed1a8ef00f5756679ef7ba6971.jpg?thumb=1&w=360&h=360',pri:'89',dizhi:'shoppublic'},
				{title:'悦米机械键盘Pro静音版',urlimg:'https://i8.mifile.cn/b2c-mimall-media/d67b10a1ab4a6a3d4bdc7c32d5493954!360x360.jpg',pri:'559',dizhi:'shoppublic'},
				{title:'蓝牙音频接收器 通用版',urlimg:'https://i8.mifile.cn/b2c-mimall-media/465f5e860a2a717c8ac9ba56297d5e94!360x360.jpg',pri:'69',dizhi:'shoppublic'},
				]
			}
		}
	}
	
</script>

<style lang="less" scoped="scoped">
	.cailike{
		width: 100%;
		background: #fff;
		.caini{
			display: block;
			height: 69/64rem;
			width: 100%;
			img{
				height: 69/64rem;
				width: 100%;
			}
		}
		.tuijina{
			display: flex;
			flex-wrap: wrap;
			.tjitem{
				display: inline-block;
				color: #3c3c3c;
				width: 202/64rem;
				height: 270/64rem;
				img{
					width: 202/64rem;
					height: 205/64rem;
				}
				.tile{
					font-size: 16/64rem;
					margin-top: 6/64rem;
					margin-left: 8/64rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.pri{
					color: #ff6700;
					font-size: 18/64rem;
					margin-left: 8/64rem;
					.colorf{
						font-size: 14/64rem;
						vertical-align: 2/64rem;
						margin-right: 3/64rem;
					}
				}
				&:nth-child(odd){
					margin-right: 5/64rem;
				}
			}
		}
	}
	
</style>