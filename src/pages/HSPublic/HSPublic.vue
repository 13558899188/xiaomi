<template>
	<div class="publicbox">
		<div class="header">
			<i class="left" @click="back"></i>
			<input type="text" placeholder="红米" @focus="huoqu" @blur="shiqu">
			<i class="right" @click="sear"></i>
		</div>
		<div class="zhinan">
			<a href="javascript:;"><img src="https://i8.mifile.cn/b2c-mimall-media/7e6f1f652ccc78e3bf84c2e85585a6f4.png?w=1080&h=300&bg=E8EDF1" alt=""></a>
		</div>
		<div class="sxuan">
			<a href="javascript:;"  @click="zhshow">综合<i class="iconfont">&#xe845;</i>
			<div class="itemx" v-show="myshow">
				<div class="itemxi" @click.stop ="gshow" :class="{'itemxi1':gouishow}"><span>综合排序</span><span :class="{'gou':gouishow}"></span></div>
				<div class="itemxi" @click.stop ="gshow" :class="{'itemxi1':!gouishow}"><span>新品优先</span><span :class="{'gou':!gouishow}"></span></div>
				<div class="itemz" @click.stop ="zhshow"></div>
			</div>
			</a>
			<a href="javascript:;">销量</a>
			<a href="javascript:;">价格<span class="fxbox"><i class="iconfont">&#xe846;</i><i class="iconfont">&#xe845;</i></span></a>
			<a href="javascript:;" class="colortext" @click="shanxuan">筛选</a>
		</div>
		<div class="itembox">
			<span class="topbox" v-for="(item,index) in itemlist" :key="index" @click="itemshow(index)" :class="{'myitem':item.ishow}">{{item.title}}<i class="iconfont">&#xe845;</i>
				<div class="itemdown" v-show="item.ishow">
					<div class="item" v-for="(item1,index1) in item.cont" :key="index1">
						<span class="title">{{item1.ite}}</span>
						<span>{{item1.ite1}}</span>
					</div>
					<div class="anniu">
						<span class="cz">重置</span>
						<span class="qd">确定</span>
					</div>
					<div class="itemzz" @click="itemshowi(index)"></div>
				</div>
			</span>
		</div>
		<div class="navimg">
			<router-link :to="item.adr" v-for="(item,index) in navimgList" :key="index">
				<img v-lazy.container="item.urlimg" alt="">
				<span>{{item.title}}</span>
			</router-link>
		</div>
		<div class="shoplist">
			<div class="listitem" v-for="(item,index) in shopObj" :keys="index" @click.prevent="goPublic">
				<a href="" class="left">
					<img v-lazy.container="item.urlimg" alt="">
				</a>
				<div class="right">
					<p class="name">{{item.pt1}}</p>
					<p class="title">{{item.title}}</p>
					<p class="pri"><i>¥</i>{{item.pt2}}起</p>
					<p class="pingjia"><span>{{item.pt3}}条评价 </span><span>{{ item.pt4}}%满意</span></p>
				</div>
				<span class="duibi">PK</span>
			</div>
			<div class="sjxiang">
				<p>手机的相关商品分类</p>
				<div class="sjxitem">
					<router-link v-for="(item,index) in xjlist" to='' class="item" :key="index">{{item.title}}</router-link>
				</div>
			</div>
			<div class="qtitem" v-for="(item,index) in qtitem" :keys="index">
				<a href="#" class="qtleft">
					<img v-lazy.container="item.urlimg" alt="" />
				</a>
				<div class="qtright">
					<h3>{{item.title}}</h3>
					<p>有<span class="colort">{{item.num1}}件</span>商品与<span class="colort">{{item.num2}}</span>相关产品 <span class="xrigth">></span></p>
				</div>
			</div>
		</div>
		<carlike></carlike>
		<div class="yincsx" v-show="ishow">
			<div class="left" @click="shanxuanyc"></div>
			<div class="sxitem">
				<div class="sxitemtop" v-for="(item,index) in shanxlist" :key="index">
					<p><span>{{item.leix}}</span><span class="icon" v-show="item.jiantou1" @click="qiehuan(index)" :class="{'icon1':!item.jiantou}"></span></p>
					<div class="sxitemb" :class="{'sxitemb1':!item.jiantou}">
						<span :class="{'active':item1.sishow}" v-for="(item1,index1) in item.item" :key="index1" @click="dianji(index,index1)">{{item1.title}}</span>
					</div>
				</div>
				<span class="peisong"><i class="icon" ></i>选择配送地址</span>
				<div class="anniu">
					<span class="cz">重置</span>
					<span class="qd">确定</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import '../../assets/iconfont/iconfont.css'
	import carlike from "../../components/carlike"
	export default {
		name: "HSPublic",
		components: {
			carlike
		},
		methods: {
			huoqu() {

			},
			shiqu() {

			},
			shanxuan() {
				this.ishow = !this.ishow;
			},
			shanxuanyc() {
				this.ishow = !this.ishow;
			},
			dianji(index,index3){
				this.shanxlist[index].item[index3].sishow=!this.shanxlist[index].item[index3].sishow
			},
			qiehuan(index){
				this.shanxlist[index].jiantou=!this.shanxlist[index].jiantou;
			},
			zhshow(){
				this.myshow=!this.myshow;
			},
			gshow(){
				this.gouishow=!this.gouishow;
			},
			itemshow(index){
				for(var i in this.itemlist){
					this.itemlist[i].ishow=false;
				}
				this.itemlist[index].ishow=true;
			},
			itemshowi(index){
                for(var i in this.itemlist){
                	this.itemlist[i].ishow=false;
                }
			},
			back(){
				this.$router.push('/homeSearch')
			},
			sear(){
				this.$router.push('/homeSearch')
			},
			goPublic(){
				this.$router.push('/shoppublic')
			}
		},
		data() {
			return {
				myshow:false,
				gouishow:true,
				ishow: false,
				itemlist:[
					{title:'拍照像素',ishow:false,cont:[
						{ite:'三摄像头',ite1:'后置相机拥有3个摄像头'},{ite:'三摄像头',ite1:'后置相机拥有3个摄像头'}
					]},
					{title:'屏幕大小',ishow:false,cont:[
						{ite:'超大屏',ite1:'屏幕超过6英寸'}
					]},
					{title:'运行内存',ishow:false,cont:[
						{ite:'极速畅玩',ite1:'运行内存在5GB以上'},{ite:'高速',ite1:'运行内存为4GB'}
					]},
					{title:'电池续航',ishow:false,cont:[
						{ite:'超长待机',ite1:'电池容量在3500mAh以上'}
					]}
				],
				shanxlist: [{
					item: [{
						title: '促销',sishow:false
					}, {
						title: '分期',sishow:false
					}, {
						title: '仅看有货',sishow:false
					}],
						leix: '服务',jiantou:false,jiantou1:false
				}, {
					item: [{
						title: '手机',sishow:false
					}, {
						title: '笔记本',sishow:false
					}, {
						title: '洗衣机',sishow:false
					}, {
						title: '手机贴膜',sishow:false
					}, {
						title: '手机保护壳',sishow:false
					}],
						leix: '分类',jiantou:true,jiantou1:true
				}, {
					item: [{
						title: '骁龙845八核',sishow:false
					}, {
						title: '骁龙636八核',sishow:false
					}, {
						title: '骁龙660八核',sishow:false
					}, {
						title: 'Helio A22',sishow:false
					}, {
						title: 'Helio P22八核',sishow:false
					}, {
						title: '联发科P35八核',sishow:false
					}, {
						title: '骁龙855八核',sishow:false
					}, {
						title: '骁龙712八核',sishow:false
					}, {
						title: '骁龙632八核',sishow:false
					}, {
						title: '骁龙675八核',sishow:false
					}, {
						title: '骁龙730八核',sishow:false
					}, {
						title: '骁龙SDM439八核',sishow:false
					}, {
						title: '骁龙710',sishow:false
					}, {
						title: '骁龙665',sishow:false
					}],
						leix: 'CPU',jiantou:true,jiantou1:true
				}, {
					item: [{
						title: '最高2.8GHz',sishow:false
					}, {
						title: '最高1.8GHz',sishow:false
					}, {
						title: '最高2.2Ghz',sishow:false
					}, {
						title: '最高2.0Ghz',sishow:false
					}, {
						title: '最高2.3Ghz',sishow:false
					}, {
						title: '最高2.84Ghz',sishow:false
					}, {
						title: '2.0Ghz',sishow:false
					}, {
						title: '2.2Ghz',sishow:false
					}],
						leix: 'CPU主频',jiantou:true,jiantou1:true
				}, {
					item: [{
						title: '三摄像头',sishow:false
					}, {
						title: '双摄像头',sishow:false
					}, {
						title: '高清拍摄',sishow:false
					},{
						title: '三摄像头',sishow:false
					}],
						leix: '后置摄像头',jiantou:true,jiantou1:true
				}, {
					item: [{
						title: '500万像素',sishow:false
					}, {
						title: '800万像素',sishow:false
					}, {
						title: '1300万像素',sishow:false
					}, {
						title: '2000万像素',sishow:false
					}, {
						title: '2400万像素',sishow:false
					}, {
						title: '2400万+2000万像素',sishow:false
					}, {
						title: '3200万像素',sishow:false
					}],
						leix: '前置摄像头',jiantou:true,jiantou1:true
				}, {
					item: [{
						title: '全面屏',sishow:false
					}, {
						title: '三星AMOLED屏幕',sishow:false
					}, {
						title: '水滴全面屏',sishow:false
					}, {
						title: '三星AMOLED水滴屏',sishow:false
					}, {
						title: '三星AMOLED 全面屏',sishow:false
					}, {
						title: '三星AMOLED屏幕',sishow:false
					}],
						leix: '屏幕',jiantou:true,jiantou1:true
				}, {
					item: [{
						title: '超大屏',sishow:false
					}, {
						title: '中小屏',sishow:false
					}],
						leix: '屏幕分辨率',jiantou:false,jiantou1:false
				}, {
					item: [{
						title: '1440×720',sishow:false
					}, {
						title: '1520×720',sishow:false
					}, {
						title: '2160×1080',sishow:false
					}, {
						title: '2160×1080',sishow:false
					}, {
						title: '2248×1080',sishow:false
					}, {
						title: '2280×1080',sishow:false
					}, {
						title: '2340×1080',sishow:false
					}],
						leix: '屏幕分辨率',jiantou:true,jiantou1:true
				}, {
					item: [{
						title: '急速畅玩',sishow:false
					}, {
						title: '高速',sishow:false
					}, {
						title: '流畅',sishow:false
					}, {
						title: '实用',sishow:false
					}],
						leix: '运行内存',jiantou:true,jiantou1:true
				}, {
					item: [{
						title: '16GB',sishow:false
					}, {
						title: '32GB',sishow:false
					}, {
						title: '64GB',sishow:false
					},{
						title: '128GB',sishow:false
					},{
						title: '256GB',sishow:false
					}],
						leix: '存储容量',jiantou:true,jiantou1:true
				}, {
					item: [{
						title: '支持',sishow:false
					}],
						leix: 'NFC',jiantou:false,jiantou1:false
				}, {
					item: [{
						title: '支持',sishow:false
					}],
						leix: '红外遥控',jiantou:false,jiantou1:false
				}, {
					item: [{
						title: '支持',sishow:false
					}],
						leix: '独立AI键',jiantou:false,jiantou1:false
				}, {
					item: [{
						title: '后置指纹',sishow:false
					}, {
						title: '压感屏幕指纹',sishow:false
					}, {
						title: '第五代屏幕指纹',sishow:false
					},{
						title: '第七代屏幕指纹',sishow:false
					}],
						leix: '指纹识别',jiantou:true,jiantou1:true
				}, {
					item: [{
						title: '厚实',sishow:false
					},{
						title: '普通厚度',sishow:false
					}, {
						title: '薄',sishow:false
					}],
						leix: '机身厚度',jiantou:false,jiantou1:false
				}, {
					item: [{
						title: '超长待机',sishow:false
					}, {
						title: '持久待机',sishow:false
					}],
						leix: '电池容量',jiantou:false,jiantou1:false
				}, {
					item: [{
						title: '无线充电+有限充电',sishow:false
					}, {
						title: '有限快充',sishow:false
					}, {
						title: '有线充电',sishow:false
					},{
						title: '无线闪充+有线闪充',sishow:false
					}],
						leix: '电池充电',jiantou:true,jiantou1:true
				}, {
					item: [{
						title: '移动4G+',sishow:false
					}, {
						title: '4G全网通',sishow:false
					}],
						leix: '网络类型',jiantou:false,jiantou1:false
				}, {
					item: [{
						title: '双卡双待',sishow:false
					}],
						leix: '网络模式',jiantou:false,jiantou1:false
				}],
				navimgList: [{
					title: '手机',
					urlimg: 'https://i8.mifile.cn/b2c-mimall-media/96f96a1dcc30aad39635034d1ef0918c.png',
					adr: ''
				}, {
					title: '笔记本',
					urlimg: 'https://i8.mifile.cn/b2c-mimall-media/5956d1099f6b730d28e858f0c37f0ea2.png',
					adr: ''
				}, {
					title: '洗衣机',
					urlimg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/66a06396fe93b417a1f908cf61f38077.jpg',
					adr: ''
				}, {
					title: '手机贴膜',
					urlimg: 'https://i8.mifile.cn/b2c-mimall-media/bba614490136300f9b15f8a24170a6a6.png',
					adr: ''
				}, {
					title: '手机保护壳',
					urlimg: 'https://i8.mifile.cn/b2c-mimall-media/b70bef074164de6f9b3e6e1fe5cf1681.png',
					adr: ''
				}],
				shopObj: [{
					title: '骁龙8核高性能处理器，最高主频2.0GHz / 4000mAh超长续航，标配10W充电器 / 大字体，大音量，无线收音机 / AI人脸解锁 / 整机生活防泼溅 / 极简模式，亲情守护',
					urlimg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c1af9783bdc53ed843af5655ca92009.jpg',
					pt1: 'Redmi 7A',
					pt2: '549',
					pt3: '745',
					pt4: '91'
				}, {
					title: '骁龙8核高性能处理器，最高主频2.0GHz / 4000mAh超长续航，标配10W充电器 / 大字体，大音量，无线收音机 / AI人脸解锁 / 整机生活防泼溅 / 极简模式，亲情守护',
					urlimg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c1af9783bdc53ed843af5655ca92009.jpg',
					pt1: 'Redmi 7A 3GB+32GB',
					pt2: '799',
					pt3: '108',
					pt4: '92'
				}, {
					title: '骁龙8核高性能处理器，最高主频2.0GHz / 4000mAh超长续航，标配10W充电器 / 大字体，大音量，无线收音机 / AI人脸解锁 / 整机生活防泼溅 / 极简模式，亲情守护',
					urlimg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c1af9783bdc53ed843af5655ca92009.jpg',
					pt1: 'Redmi 7A 2GB+32GB',
					pt2: '599',
					pt3: '448',
					pt4: '94'
				}, {
					title: '骁龙8核高性能处理器，最高主频2.0GHz / 4000mAh超长续航，标配10W充电器 / 大字体，大音量，无线收音机 / AI人脸解锁 / 整机生活防泼溅 / 极简模式，亲情守护',
					urlimg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c1af9783bdc53ed843af5655ca92009.jpg',
					pt1: 'Redmi 7A 2GB+16GB',
					pt2: '549',
					pt3: '489',
					pt4: '98'
				}, {
					title: '「全版本赠移动电源。购机享分期6期免息，低至417元起/期。可选加20元得27W快充」',
					urlimg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg',
					pt1: 'Redmi K20 Pro ',
					pt2: '2499',
					pt3: '22374',
					pt4: '98'
				}, {
					title: '「全版本赠移动电源。购机享分期6期免息，低至417元起/期。可选加20元得27W快充」',
					urlimg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg',
					pt1: 'Redmi K20 Pro 8GB+256GB',
					pt2: '2999',
					pt3: '7914',
					pt4: '94.4'
				}, {
					title: '「全版本赠移动电源。购机享分期6期免息，低至417元起/期。可选加20元得27W快充」',
					urlimg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg',
					pt1: 'Redmi K20 Pro 8GB+128GB',
					pt2: '2799',
					pt3: '7031',
					pt4: '93.7'
				}, {
					title: '「全版本赠移动电源。购机享分期6期免息，低至417元起/期。可选加20元得27W快充」',
					urlimg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg',
					pt1: 'Redmi K20 Pro 6GB+128GB',
					pt2: '2599',
					pt3: '6469',
					pt4: '88.9'
				}, {
					title: '「全版本赠移动电源。购机享分期6期免息，低至417元起/期。可选加20元得27W快充」',
					urlimg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg',
					pt1: 'Redmi K20 Pro 6GB+64GB',
					pt2: '2499',
					pt3: '996',
					pt4: '91.6'
				}, {
					title: '「全版本赠移动电源。购机享分期6期免息，低至334元起/期」',
					urlimg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d7a5b37db87530ce1f8c62c2b9b53da9.png',
					pt1: 'Redmi K20',
					pt2: '1999',
					pt3: '2332',
					pt4: '91'
				}],
				qtitem: [{
					title: '笔记本',
					urlimg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b6833f4c22b5e0b9d6f547748c6eeae3.jpg',
					num1: '5',
					num2: '红米'
				}, {
					title: '洗衣机',
					urlimg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg',
					num1: '1',
					num2: '红米'
				}, {
					title: '手机贴膜',
					urlimg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e1d12ff179c4120f9c2680ab16e4c42.jpg',
					num1: '7',
					num2: '红米'
				}, {
					title: '手机保护壳',
					urlimg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3887637feab4aea5895fdb17e34c6db9.jpg',
					num1: '6',
					num2: '红米'
				}],
				xjlist: [{
					title: '手机'
				}, {
					title: '汽车用品'
				}, {
					title: '电源电池'
				}, {
					title: '配件'
				}, {
					title: '手机贴膜'
				}, {
					title: '手机保护壳'
				}, {
					title: '服务'
				}]
			}
		}

	}
</script>

<style lang="less" scoped="scoped">
	.publicbox {
		background: #FAFAFA;
		position: relative;
		.header {
			height: 50/64rem;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			padding: 0 15/64rem;
			.left {
				display: inline-block;
				width: 27/64rem;
				;
				height: 27/64rem;
				;
				background: url("../../assets/images/icon/xiangleft.png") no-repeat center center;
				background-size: 27/64rem 27/64rem;
				;
			}
			.right {
				display: inline-block;
				width: 32/64rem;
				;
				height: 32/64rem;
				;
				background: url("../../assets/images/icon/search.png") no-repeat center center;
				background-size: 32px 32px;
			}
			input {
				width: 276/64rem;
				height: 28/64rem;
				outline: none;
				border: none;
				border-radius: 3/64rem;
				text-indent: 1em;
				font-size: 16/64rem;
			}
		}
		.zhinan {
			height: 105/64rem;
			a {
				display: block;
				img {
					height: 105/64rem;
					width: 100%;
				}
			}
		}
		.sxuan {
			width: 100%;
			line-height: 37/64rem;
			display: flex;
			justify-content: space-between;
			font-size: 17/64rem;
			a {
				display: inline-block;
				width: 94/64rem;
				text-align: center;
				color: rgba(0, 0, 0, .54);
				display: flex;
				align-content: center;
				justify-content: center;
				&:first-of-type {
					color: #F56600;
				}
				.itemx{
					z-index: 120;
					position: fixed;
					left: 0;
					top: 190/64rem;
					width: 100%;
					height: 100%;
					.itemxi{
						box-sizing: border-box;
						padding: 0 15/64rem;
						line-height: 44/64rem;
						height: 44/64rem;
						background: #fff;
						font-size: 14/64rem;
						border-bottom: 1px solid rgba(0,0,0,.15);
						display: flex;
						justify-content: space-between;
						align-items: center;
						color: #3E3E3E;
						.gou{
							width: 21/64rem;
							height: 14/64rem;
							background: url('../../assets/images/icon/gou.png') no-repeat 0 0;
							background-size: 21/64rem 14/64rem;
						}
						
					}
					.itemz{
						width: 100%;
						height: 100%;
						background: rgba(0, 0, 0, .46);
					}
					.itemxi1{
						color: #F56600;
					}
				}
				
			}
			.colortext {
				color: #FF6700;
			}
			.fxbox {
				display: flex;
				flex-wrap: wrap;
				width: 16/64rem;
				height: 18/64rem;
				margin-top: 11/64rem;
				i {
					display: inline-block;
					line-height: 2/64rem;
					height: 4/64rem;
				}
			}
		}
		.itembox {
			width: 100%;
			display: flex;
			align-items: center;
			height: 32/64rem;
			justify-content: space-around;
			background: #FAFAFA;
			margin: 14/64rem 0;
			color: #bdbdbd;
			position: relative;
			.topbox {
				display: inline-block;
				line-height: 32/64rem;
				width: 80/64rem;
				background: #FAFAFA;
				border: 1px solid #e2e2e2;
				padding: 0 8/64rem;
				color: rgba(0, 0, 0, .54);
				text-align: center;
				
				.itemdown{
					position: absolute;
					width: 100%;
					z-index: 100;
					background: #fff;
					left: 0;
					top: 37px;
					.item{
						text-align: left;
						margin:0 15/64rem;
						padding: 10/64rem 0;
						background: #fff;
						span{
							color: #777;
							line-height: 14/64rem;
						}
						.title{
							display: block;
							font-size: 15/64rem;
							color: #3E3E3E;
						}
						&:first-of-type{
							border-bottom:1px solid #ccc;
						}
					}
					.anniu{
					width: 100%;
					line-height: 58/64rem;
					display: flex;
					justify-content: space-between;
					span{
						width: 50%;
						line-height: 58/64rem;
						text-align: center;
						background: #fff;
					}
					.cz{
						color: rgba(0,0,0,.87);
						border-bottom: 1px solid #ccc;
						border-top: 1px solid #ccc;
					}
					.qd{
						background: #FF6700;
						color: #fff;
					}
				}
				.itemzz{
					width: 100%;
					background: rgba(0, 0, 0, .54);
					
				}
				}
			}
			.myitem{
				background: #fff;
				border-bottom: none;
			}
		}
		.navimg {
			background: #F4F4F4;
			width: 100%;
			height: 93/64rem;
			justify-content: space-around;
			align-items: center;
			padding: 15/64rem 6/64rem 8/64rem;
			box-sizing: border-box;
			a {
				display: inline-block;
				width: 71/64rem;
				height: 86/64rem;
				background: #fff;
				font-size: 12px;
				text-align: center;
				margin-right: 8/64rem;
				color: #3e3e3e;
				img {
					width: 66/64rem;
					height: 66/64rem;
				}
				span {
					display: block;
					line-height: 14/64rem;
				}
				&:first-of-type {
					color: #ff6700;
					margin-left: 2/64rem;
				}
			}
		}
		.shoplist {
			box-sizing: border-box;
			margin-top: 14/64rem;
			background: #fff;
			width: 100%;
			.listitem {
				margin: 15/64rem 0;
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid #ccc;
				padding-right: 8/64rem;
				box-sizing: border-box;
				position: relative;
				.left {
					display: inline-block;
					width: 132/64rem;
					height: 132/64rem;
					img {
						width: 132/64rem;
						height: 132/64rem;
					}
				}
				.right {
					text-align: left;
					padding-top: 11/64rem;
					.title {
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
						color: rgba(0, 0, 0, .54);
						font-size: 12/64rem;
						line-height: 16/64rem;
					}
					.name {
						font-size: 16/64rem;
						margin-bottom: 4/64rem;
					}
					.pri {
						margin: 4/64rem 0;
						color: #ff6700;
						font-size: 18/64rem;
						i {
							font-size: 12/64rem;
							font-style: normal;
							padding: 0 2/64rem;
						}
					}
					.pingjia {
						color: rgba(0, 0, 0, .54);
						font-size: 12px;
					}
				}
				.duibi {
					display: inline-block;
					height: 26/64rem;
					width: 26/64rem;
					line-height: 26/64rem;
					border: 1px solid rgba(0, 0, 0, .15);
					position: absolute;
					right: 20/64rem;
					font-size: 14/64rem;
					color: rgba(0, 0, 0, .54);
					border-radius: 50%;
					bottom: 20/64rem;
					text-align: center;
					background: #fff;
					z-index: 3;
				}
			}
			.qtitem {
				display: flex;
				align-content: space-between;
				align-items: center;
				border-bottom: 1px solid #ccc;
				.qtleft {
					display: inline-block;
					height: 146/64rem;
					width: 146/64rem;
					img {
						height: 146/64rem;
						width: 146/64rem;
					}
				}
				.qtright {
					h3 {
						color: #3E3E3E;
						font-weight: 400;
					}
					p {
						color: rgba(0, 0, 0, .54);
						font-size: 12/64rem;
						line-height: 20/64rem;
						.colort {
							color: #F56600;
						}
						.xrigth {
							font-size: 16/64rem;
							vertical-align: -2/64rem;
						}
					}
				}
			}
		}
		.yincsx {
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.4);
			z-index: 100;
			display: flex;
			overflow: auto;
			font-family: Microsoft Yahei;
			.sxitem {
				width: 350/64rem;
				box-sizing: border-box;
				background: #fff;
				position: absolute;
				right: 0;
				padding: 16/64rem 0 0;
				.sxitemtop {
					color: #777;
					font-size: 16/64rem;
					p{
						display: block;
						margin-top: 10/64rem;
						padding:0 16/64rem;
						box-sizing: border-box;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.icon{
							width: 13/64rem;
							height: 8/64rem;
							background: url('../../assets/images/icon/sdown.png') no-repeat 0 0;
							background-size: 13/64rem 8/64rem;
							margin-right: 10/64rem;
						}
						.icon1{
							width: 13/64rem;
							height: 8/64rem;
							background: url('../../assets/images/icon/up.png') no-repeat 0 0;
							background-size: 13/64rem 8/64rem;
							margin-right: 10/64rem;
						}
					}
					.sxitemb{
						display: flex;
						flex-wrap: wrap;
						width: 100%;
						padding:0 16/64rem;
						line-height: 37/64rem;
						height: 37/64rem;
						overflow: hidden;
						box-sizing: border-box;
						span{
							display: inline-block;
							width: 90/64rem;
							text-align: center;
							height: 26/64rem;
							line-height: 26/64rem;
							background: #f5f5f5;
							color: rgba(0,0,0,.87);
							font-size: 13/64rem;
							border: 1px solid #f5f5f5;
							border-radius: 4/64rem;
							margin-right: 8/64rem;
							margin-top: 8/64rem;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						.active{
							border: 1px solid #ff6700;
							color: #ff6700;
							background: #fde0d5;
						}
					}
					.sxitemb1{
						height: 100%;
						overflow: visible;
					}
				}
				.peisong {
					color: #ff6b00;
					position: absolute;
					top: 18/64rem;
					right: 13/64rem;
					font-size: 14/64rem;
					.icon {
						display: inline-block;
						width: 11/64rem;
						height: 15/64rem;
						background: url(../../assets/images/icon/peisong.png) no-repeat center center;
						background-size: 11/64rem 15/64rem;
						vertical-align: -2/64rem;
						margin-right: 4/64rem;
					}
				}
				.anniu{
					width: 100%;
					line-height: 58/64rem;
					display: flex;
					justify-content: space-between;
					margin-top: 10/64rem;
					span{
						width: 50%;
						line-height: 58/64rem;
						text-align: center;
					}
					.cz{
						color: rgba(0,0,0,.87);
						border-bottom: 1px solid #ccc;
						border-top: 1px solid #ccc;
					}
					.qd{
						background: #FF6700;
						color: #fff;
					}
				}
			}
			.left {
				width: 64/64rem;
				height: 100%;
				position: fixed;
			}
		}
		.sjxiang {
			padding-left: 15/64rem;
			border-bottom: 1px solid #ccc;
			padding-bottom: 15/64rem;
			p {
				line-height: 30/64rem;
				font-size: 16/64rem;
			}
			.sjxitem {
				margin-top: 10/64rem;
				.item {
					display: inline-block;
					width: 80/64rem;
					height: 32/64rem;
					background: #F5F5F5;
					line-height: 32/64rem;
					text-align: center;
					color: #3E3E3E;
					margin: 4/64rem 4/64rem;
				}
			}
		}
	}
</style>