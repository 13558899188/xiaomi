<template>
	<div class="ordersucc">
		<div class="header">
			<span class="titlecolor">订单提交订单</span>
			<p>请在0小时{{minutes}}分{{seconds}}秒内完成支付，超时订单将关闭。</p>
		</div>
		<div class="orderpub">
			<div class="jine">
				<span class="jinen">
					订单金额：{{allsum}}元
				</span>
				<span class="bianhao">
					订单编号：{{shopdingdan}}
				</span>
			</div>
			<div class="adr">
				<span class="adrleft">
					收货信息
				</span>
				<div class="adrright">
					<p>张三 135****9188</p>
					<p>广东省深圳市南山区深南大道TCL大厦601室</p>
				</div>
			</div>
			<p class="fapiao">发票类型：电子发票</p>
			<p class="fapiao">发票抬头：个人</p>
		</div>
		<div class="pay">
			<div class="head">请选择支付方式</div>
			<div class="payitem" v-for="(item,index) in paylist" :key="index" v-show="item.ishow" @click="payqh(index)">
				<div class="payiright">
					<img :src="item.urlimg" alt="" />
					<span class="payfs">{{item.txt}}</span>
					<span class="youhui">{{item.youhui}}</span>
				</div>
				<span class="weigoux" :class="{'wgactive':item.gouxuan}"></span>
			</div>
			<div class="paymore" @click="qiehuan">
				<span>{{mypay}}其他支付方式 </span>
				<span class="fangxiang" :class="{'upfx':cishow}"></span>
			</div>
		</div>
		<div class="gofukuan" @click.prevent="goHome">
			去付款
		</div>
	</div>

</template>

<script>
	export default {
		name: 'ordersucc',
		data() {
			return {
				pyouh:0,
        		mypay:'使用',
        		cishow:false,
				shopdingdan:'',
				paylist: [{
					urlimg: 'https://s1.mi.com/m/images/m/pay_zfb2.png',
					txt: '支付宝',
					ishow: true,
					youhui: '',
					gouxuan: false
				}, {
					urlimg: 'https://s1.mi.com/m/images/m/pay_wx.png',
					txt: '微信支付',
					ishow: true,
					youhui: '',
					gouxuan: false
				}, {
					urlimg: 'https://s1.mi.com/m/images/m/micash_wap.png',
					txt: '小米钱包',
					ishow: true,
					youhui: '享最高立减99元',
					gouxuan: false
				}, {
					urlimg: 'https://s1.mi.com/m/images/m/pay_yl1.png',
					txt: '银联支付',
					ishow: false,
					youhui: '',
					gouxuan: false
				}, {
					urlimg: 'https://s1.mi.com/m/images/m/pay_yzf.png',
					txt: '翼支付',
					ishow: false,
					youhui: '',
					gouxuan: false
				}, {
					urlimg: 'https://s1.mi.com/m/images/m/pay_mifinanceinstal.png',
					txt: '小米分期',
					ishow: false,
					youhui: '',
					gouxuan: false
				}, {
					urlimg: 'https://s1.mi.com/m/images/m/pay_antinstalment.png',
					txt: '花呗分期',
					ishow: false,
					youhui: '',
					gouxuan: false
				}],
				allsum:'',
				minutes:30,
				seconds:''
			}
		},
		mounted(){
			var temp = window.sessionStorage.getItem('shop');
			if(temp!=null){
				var shopList = JSON.parse(temp);
				this.allsum=shopList.shopNum*shopList.pri;
			};
			this.add();
			this.shopdingdan=window.sessionStorage.getItem('dingdan')
		},
		methods:{
        	qiehuan(){
        		this.cishow=!this.cishow;
        		for(var i=3;i<this.paylist.length;i++){
        			this.paylist[i].ishow=!this.paylist[i].ishow;
        		};
        		if(this.mypay=='使用'){
        			this.mypay='收起'
        		}else{
        			this.mypay='使用'
        		}
        	},
        	payqh(index){
        		for(var i=0;i<this.paylist.length;i++){
        			this.paylist[i].gouxuan=false;
        		}
        		this.paylist[index].gouxuan=true;
        	},
			goHome(){
				this.$router.push("/Commodity")
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
	.ordersucc {
		color: #3e3e3e;
		font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular, Hiragino Sans GB, Microsoft Yahei, sans-serif;
		.header {
			font-size: 15/64rem;
			padding: 18/64rem 0;
			text-align: center;
			.titlecolor {
				color: #91b953;
				font-size: 20/64rem;
				line-height: 26/64rem;
				font-weight: 500;
			}
			p {
				line-height: 28/64rem;
			}
		}
		.orderpub {
			padding: 12/64rem 20/64rem;
			box-sizing: border-box;
			background: #f8f8f8;
			border: 1px solid #eee;
			color: #666;
			.fapiao {
				line-height: 22/64rem;
			}
			.jine {
				line-height: 22/64rem;
				.jinen {
					margin-right: 8/64rem;
				}
			}
			.adr {
				display: flex;
				height: 48/64rem;
				.adrleft {
					width: 70/64rem;
				}
				.adrright {
				
					p {
						line-height: 20/64rem;
					}
				}
			}
		}
		.pay {
			padding: 0 20/64rem;
			box-sizing: border-box;
			background: #fff;
			transition: all 0.3s;
			color: #666;
			margin-bottom: 58/64rem;
			.head{
				line-height: 40px;
				font-size: 18/64rem;
			}
			.payitem {
				line-height: 50/64rem;
				height: 50/64rem;
				display: flex;
				align-content: center;
				justify-content: space-between;
				position: relative;
				border-bottom: 1px solid #eee;
				.payiright {
					display: flex;
					align-content: center;
					position: relative;
					img {
						width: 26/64rem;
						height: 26/64rem;
						position: absolute;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
					}
					.payfs {
						margin-left: 30/64rem;
					}
				}
				.weigoux {
					display: inline-block;
					height: 22/64rem;
					width: 22/64rem;
					background: url(../../assets/images/icon/check_normal.png) no-repeat center center;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					right: 0;
					background-size: 22/64rem 22/64rem;
				}
				.wgactive {
					background: url(../../assets/images/icon/check_press.png) no-repeat center center;
					background-size: 22/64rem 22/64rem;
				}
			}
			.paymore {
				height: 47/64rem;
				line-height: 47/64rem;
				border-bottom: 1px solid #eee;
				display: flex;
				align-items: center;
				justify-content: center;
				.fangxiang {
					display: inline-block;
					height: 23/64rem;
					width: 23/64rem;
					background: url(../../assets/images/icon/down.png) no-repeat center center;
					background-size: 26/64rem 26/64rem;
				}
				.upfx {
					background: url(../../assets/images/icon/up.png) no-repeat center center;
					background-size: 17/64rem 10/64rem;
					display: inline-block;
					height: 23/64rem;
					width: 23/64rem;
				}
			}
		}
		.gofukuan{
			max-width: 640px;
			width: 10rem;
			margin: 0 auto;
			height: 58/64rem;
			line-height: 58/64rem;
			text-align: center;
			background: #ff5722;
			color: #fff;
			font-size: 18/64rem;
			position: fixed;
			transform: translateX(-50%);
			left: 50%;
			bottom: 0;
		}
	}
</style>