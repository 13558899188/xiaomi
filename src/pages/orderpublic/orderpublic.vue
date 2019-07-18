<template>
	<div class="orderpublic">
		<div class="header">
			<span class="hleft" @click.prevent="back"></span> 订单详情
			<span class="searchi" @click.prevent="goSearch"></span>
		</div>
		<div class="ddshijian">
			请在0小时{{minutes}}分{{seconds}}秒内完成支付，超时订单将关闭。
		</div>
		<div class="dingdan">
			<p><span class="title">订单编号：</span>{{dingdNum}}</p>
			<p><span class="title">付款总额：</span>{{qingdanlist[0].jiage*this.allNum}}</p>
		</div>
		<div class="tchong"></div>
		<ol class="jindu">
			<li class="jditem" v-for="(item,index) in jindulist">
				<span class="title" :class="{'jdactive':item.ishow}">{{item.txt}}</span>
				<span class="ddtimer">{{item.timer}}</span>
			</li>
		</ol>
		<div class="qingdan">
			<a class="qditem" v-for="(item,index) in qingdanlist" :key="index">
				<div class="qdright">
					<img :src="item.urlimg" alt="" />
					<p>{{item.title}}</p>
				</div>
				<span class="pri">{{item.jiage}}</span>
			</a>
		</div>
		<div class="tchong"></div>
		<div class="feiyong">
            <p v-for="item in fylist">
            	<span>{{item.title}} : </span>
            	<span>{{item.jiage}} 元</span>
            </p>
		</div>
		<div class="tchong"></div>
		<div class="ddpub">
			<p v-for="item in ddlist">
				<span>{{item.title}} : </span>
            	<span>{{item.jiage}}</span>
			</p>
		</div>
		<div class="kehuduan">
			<p>下载小米商城客户端后可以查看电子发票</p>
			<a href="#">下载小米商城客户端</a>
		</div>
		<div class="dfukuan">
			<div class="dfleft" @click.prevent="goToCar"><span>取消订单</span></div>
			<div class="dfright" @click.prevent="goPaySuc"><span>立即付款</span></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'orderpublic',
		data() {
			return {
				dingdNum: '',
				fylist:[
				{title:'商品价格',jiage:'1199.00'},
				{title:'配送费用',jiage:'0'},
				{title:'应付金额',jiage:'1199.00'}
				],
				ddlist:[
				{title:'下单时间',jiage:'2019/07/07 16:44'},{title:'收货地址',jiage:'广东省深圳市南山区深南大道TCL大厦601室'},
				{title:'收货人名',jiage:'张三 135****9188'},{title:'收货时间',jiage:'不限发货时间'},
				{title:'发票类型',jiage:'电子发票'},{title:'发票抬头',jiage:'个人'},
				],
				jindulist: [{
					txt: '下单',
					timer: '',
					ishow: true
				}, {
					txt: '付款',
					timer: '',
					ishow: true
				}, {
					txt: '配货',
					timer: '',
					ishow: true
				}, {
					txt: '出库',
					timer: '',
					ishow: true
				}, {
					txt: '交易成功',
					timer: '',
					ishow: true
				}, ],
				qingdanlist: [{
					urlimg: 'https://i1.mifile.cn/a1/pms_1547020892.79242496!80x80.jpg',
					title: 'Redmi Note 7 全网通 4GB 梦幻蓝 64GB',
					jiage: '1199.00'
				}, {
					urlimg: 'https://i1.mifile.cn/a1/pms_1501236937.96732594!80x80.jpg',
					title: '米粉卡日租卡',
					jiage: '0.00'
				}, {
					urlimg: 'https://i1.mifile.cn/a1/pms_1515404353.30516645!80x80.jpg',
					title: '小米移动电源2 (5000mAh版) 银色',
					jiage: '0.00'
				}],
				allsum:'',
        		allNum:'',
				minutes:30,
				seconds:''
			}
		},
		mounted() {
			this.dingdNum = parseInt(Math.random() * 1000000000000000);
			window.sessionStorage.setItem('dingdan',this.dingdNum);			
			var temp = new Date();
			for(var i =0;i<this.jindulist.length;i++){
				this.jindulist[i].timer=temp.getFullYear()+'/'+(temp.getMonth()+1)+'/'+temp.getDate()+' '+temp.getHours()+':'+temp.getMinutes();
			}
			var temp = window.sessionStorage.getItem('shop');
			if(temp!=null){
				var shopList = JSON.parse(temp);
				this.qingdanlist[0].urlimg=shopList.urlimg;
				this.qingdanlist[0].title=shopList.title;
				this.qingdanlist[0].jiage=shopList.pri;
				this.allNum=shopList.shopNum;
				this.allsum=shopList.shopNum*shopList.pri;
				this.fylist[0].jiage=shopList.pri;
				this.fylist[2].jiage=shopList.shopNum*shopList.pri;
			};
			this.add();
		},
		methods:{
			goToCar(){
				this.$router.push('/car')
			},
			goPaySuc(){
				this.$router.push('/Commodity')
			},
			back(){
				this.$router.push('/car')
			},
			goSearch(){
				this.$router.push('/homeSearch')
			},
			 num: function (n) {
			return n < 10 ? '0' + n : '' + n
		  },
		  add: function () {
			var _this = this
			var time = window.setInterval(function () {
			  if (_this.seconds == 0 && _this.minutes !== 0) {
				_this.seconds = 59
				_this.minutes -= 1
			  } else if (_this.minutes == 0 && _this.seconds == 0) {
				_this.seconds = 0
				window.clearInterval(time)
			  } else {
				_this.seconds -= 1
			  }
			}, 1000)
		  }
		},
		 watch: {
		  second: {
			handler (newVal) {
			  this.num(newVal)
			}
		  },
		  minute: {
			handler (newVal) {
			  this.num(newVal)
			}
		  }
		},
		computed: {
		  second: function () {
			return this.num(this.seconds)
		  },
		  minute: function () {
			return this.num(this.minutes)
		  }
		}
	}
</script>

<style lang="less" scoped="scoped">
	.orderpublic {
		font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular, Hiragino Sans GB, Microsoft Yahei, sans-serif;
		.ddshijian{
			line-height: 26/64rem;
			background: #F9F3D3;
			color: #b57842;
			padding:4/64rem  10/64rem;
			opacity: .7;

		}
		.header {
			line-height: 50/64rem;
			background: #f5f5f5;
			position: relative;
			text-align: center;
			font-size: 17/64rem;
			color: #666;
			.hleft {
				position: absolute;
				left: 16/64rem;
				top: 50%;
				height: 26/64rem;
				width: 26/64rem;
				transform: translateY(-50%);
				background: url(../../assets/images/icon/xiangleft.png) no-repeat center center;
				background-size: 26/64rem 26/64rem;
			}
			.searchi {
				position: absolute;
				right: 16/64rem;
				top: 50%;
				height: 34/64rem;
				width: 34/64rem;
				transform: translateY(-50%);
				background: url(../../assets/images/icon/search.png) no-repeat center center;
				background-size: 34/64rem 34/64rem;
			}
		}
		.dingdan {
			background: #fff;
			padding: 12/64rem 16/64rem;
			color: #3c3c3c;
			p {
				line-height: 20/64rem;
			}
		}
		.tchong {
			width: 100%;
			height: 10/64rem;
			background: #f5f5f5;
		}
		.jindu {
			display: flex;
			box-sizing: border-box;
			padding: 16/64rem;
			border-bottom: 1px solid #eee;
			.jditem {
				width: 20%;
				text-align: center;
				margin-right: 2/64rem;
				.title {
					background: #CCCCCC;
					display: flex;
					justify-content: center;
					margin-bottom: 8/64rem;
					padding: 4/64rem 0;
					color: #fff;
				}
				.jdactive {
					background: #00CC66;
				}
				.ddtimer {
					font-size: 12/64rem;
				}
			}
		}
		.qingdan {
			box-sizing: border-box;
			background: #fff;
			margin-top: 10/64rem;
			.qditem {
				display: flex;
				align-items: center;
				line-height: 94/64rem;
				height: 94/64rem;
				border-bottom: 1px solid #eee;
				justify-content: space-between;
				padding: 0 20/64rem;
				.qdright {
					display: flex;
					align-items: center;
					img {
						height: 65/64rem;
						width: 65/64rem;
					}
				}
				.pri {
					color: #333;
				}
			}
		}
		.ddpub,.feiyong{
			padding: 16/64rem;
			p{
				line-height: 24/64rem;
			}
		}
		.kehuduan{
			text-align: center;
			background: #f5f5f5;
			padding: 16/64rem 0;
			box-sizing: border-box;
			margin-bottom: 58/64rem;
			p{
				color: #777;
				margin-bottom: 10/64rem;
			}
			a{
				display: inline-block;
				width: 230/64rem;
				line-height: 32/64rem;
				background: #fff;
				margin: 0 auto;
				color: #333;
				border: 1px solid #ccc;
			}
		}
		.dfukuan{
			padding: 10/64rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			line-height: 38/64rem;
			position: fixed;
			box-sizing: border-box;
			width: 100%;
			background: #fff;
			left: 0;
			bottom: 0;
			.dfleft{
				width: 50%;
				display: flex;
				align-items: center;
				text-align: left;
				span{
					width: 86/64rem;
					line-height: 35/64rem;
					display: inline-block;
					border: 1px solid #ccc;
					text-align: center;
					color: #666;
				}
			}
			.dfright{
				width: 50%;
				align-items: center;
				text-align: right;
				color: #333;
				span{
					width: 88/64rem;
					line-height: 37/64rem;
					display: inline-block;
					text-align: center;
					background: #f95b07;
					color: #fff;
				}
			}
		}
	}
</style>