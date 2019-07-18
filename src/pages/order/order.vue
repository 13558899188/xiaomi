<template>
	<div class="order">
		<div class="orderh">
			用户结算
			<span class="icon" @click="back"></span>
		</div>
		<div class="addres">
			<a class="adrbox">
				<h3>张三  135****9188</h3>
				<p>广东省 深圳市 南山区 深南大道 TCL大厦601</p>
			</a>
		</div>
		<div class="pay">
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
		<div class="payqita">
			<div class="payqitai">
				<span class="title">运费</span>
				<span class="cont">包邮</span>
			</div>
			<div class="payqitai">
				<span class="title">电子发票</span>
				<span class="cont">个人<i class="icon"></i></span>
			</div>
			<div class="payqitai">
				<span class="title">运费</span>
				<span class="cont">优惠劵<span class="txtcolor">{{pyouh}}元</span><i class="icon"></i></span>
			</div>
		</div>
		<div class="qingdan">
			<a class="qditem" v-for="(item,index) in qingdanlist" :key="index">
				<div class="qdright">
					<img :src="item.urlimg" alt="" />
					<p>{{item.title}}</p>
				</div>
				<span class="pri">{{item.jiage}}</span>
			</a>
		</div>
		<div class="jgqingdan">
			<p><span class="title">商品价格：</span>1199.00</p>
			<p><span class="title">已优惠：</span>0.00</p>
			<p><span class="title">配送配送：</span>0.00</p>
		</div>
		<div class="footer">
			<div class="adr">
				配送至：广东 深圳市 南山区 深南大道 TCL大厦601室
			</div>
			<div class="fukuan">
				<span class="right">
					共{{3*allNum}}件 合计：<span class="pri">{{allsum}}</span>
				</span>
				<span class="left" @click.prevent="gopay">
				   去付款
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
        name:'order',
        data(){
        	return{
        		pyouh:0,
        		mypay:'使用',
        		cishow:false,
        		paylist:[
        		{urlimg:'https://s1.mi.com/m/images/m/pay_zfb2.png',txt:'支付宝',ishow:true,youhui:'',gouxuan:false},
        		{urlimg:'https://s1.mi.com/m/images/m/pay_wx.png',txt:'微信支付',ishow:true,youhui:'',gouxuan:false},
        		{urlimg:'https://s1.mi.com/m/images/m/micash_wap.png',txt:'小米钱包',ishow:true,youhui:'享最高立减99元',gouxuan:false},
        		{urlimg:'https://s1.mi.com/m/images/m/pay_yl1.png',txt:'银联支付',ishow:false,youhui:'',gouxuan:false},
        		{urlimg:'https://s1.mi.com/m/images/m/pay_yzf.png',txt:'翼支付',ishow:false,youhui:'',gouxuan:false},
        		{urlimg:'https://s1.mi.com/m/images/m/pay_mifinanceinstal.png',txt:'小米分期',ishow:false,youhui:'',gouxuan:false},
        		{urlimg:'https://s1.mi.com/m/images/m/pay_antinstalment.png',txt:'花呗分期',ishow:false,youhui:'',gouxuan:false}
        		],
        		qingdanlist:[
        		{urlimg:'https://i1.mifile.cn/a1/pms_1547020892.79242496!80x80.jpg',title:'Redmi Note 7 全网通 4GB 梦幻蓝 64GB',jiage:'1199.00'},
        		{urlimg:'https://i1.mifile.cn/a1/pms_1501236937.96732594!80x80.jpg',title:'米粉卡日租卡',jiage:'0.00'},
        		{urlimg:'https://i1.mifile.cn/a1/pms_1515404353.30516645!80x80.jpg',title:'小米移动电源2 (5000mAh版) 银色',jiage:'0.00'}
        		],
        		allsum:'',
        		allNum:''
        	}
        },
        mounted(){
        	var temp = window.sessionStorage.getItem('shop');
			if(temp!=null){
				var shopList = JSON.parse(temp);
				this.qingdanlist[0].urlimg=shopList.urlimg;
				this.qingdanlist[0].title=shopList.title;
				this.qingdanlist[0].jiage=shopList.pri;
				this.allNum=shopList.shopNum;
				this.allsum=shopList.shopNum*shopList.pri;
			}
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
			gopay(){
				this.$router.push('/orderpublic')
			},
			back(){
				this.$router.push('/shopCar')
			}
        }
	}
</script>

<style scoped="scoped" lang="less">
.order{
	font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #f2f2f2;
	.orderh {
		width: 100%;
		background: #f2f2f2;
		color: #333;
		text-align: center;
		line-height: 50/64rem;
		height: 50/64rem;
		position:relative;
		font-size:17/64rem;
		.icon{
			display: inline-block;
			height: 29/64rem;
			width: 29/64rem;
			background: url(../../assets/images/icon/xiangleft.png) no-repeat center center;
			background-size: 29/64rem 29/64rem;
			position: absolute;
			left: 12/64rem;
			top: 50%;
			transform: translateY(-50%);
		}
	}
	.addres{
		padding:21/64rem 20/64rem 20/64rem ;
		box-sizing: border-box;
		background-image: url(http://s1.mi.com/m/images/m/bd1.png);
		background-position: 0 0;
		background-repeat: repeat-x;
		background-size: 30/64rem 4/64rem;
		background-color: #fff;
		border-bottom: 1px solid #ccc;
		.adrbox{
			line-height: 47/64rem;
			height: 47/67rem;
			display: block;
			color: #333;
			h3{
				line-height: 28/64rem;
				font-size: 18/64rem;
				margin-bottom: 8/64rem;
			}
			p{
				line-height: 20/64rem;
			}
		}
	}
	.pay{
		padding: 0 20/64rem;
		box-sizing: border-box;
		background: #fff;
		transition: all 0.3s;
		.payitem{
			line-height: 50/64rem;
			height: 50/64rem;
			display: flex;
			align-content: center;
			justify-content: space-between;
			position: relative;
			border-bottom:1px solid #eee;
			.payiright{
				display: flex;
				align-content: center;
				position: relative;
				img{
					width: 26/64rem;
					height: 26/64rem;
				    position: absolute;
				    left: 0;
				    top: 50%;
				    transform: translateY(-50%);
				}
				.payfs{
					margin-left: 30/64rem;
				}
			}
			.weigoux{
					display: inline-block;
					height: 22/64rem;
					width: 22/64rem;
                    background:url(../../assets/images/icon/check_normal.png) no-repeat center center;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 0;
                    background-size: 22/64rem 22/64rem;
            }
            .wgactive{
            	background:url(../../assets/images/icon/check_press.png) no-repeat center center;
            	background-size: 22/64rem 22/64rem;
            }
		}
		.paymore{
			height: 47/64rem;
			line-height: 47/64rem;
			border-bottom: 1px solid #eee;
			display: flex;
			align-items: center;
			justify-content: center;
			.fangxiang{
				display: inline-block;
				height: 23/64rem;
				width: 23/64rem;
				background: url(../../assets/images/icon/down.png) no-repeat center center;
				background-size: 26/64rem 26/64rem;
			}
			.upfx{
				background: url(../../assets/images/icon/up.png) no-repeat center center;
				background-size: 17/64rem 10/64rem;
				display: inline-block;
				height: 23/64rem;
				width: 23/64rem;
			}
		}
	}
	.payqita{
		padding: 0 20/64rem;
		box-sizing: border-box;
		background: #fff;
		margin-top: 10/64rem;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		.payqitai{
			line-height: 45/64rem;
			height: 45/64rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom:1px solid #eee;
			.title{
				font-weight: bold;
				color: #333;
			}
			.cont{
				color: #999;
				display: flex;
				align-items: center;
				.icon{
					display: inline-block;
					height: 23/64rem;
					width: 23/64rem;
					background: url(../../assets/images/icon/down.png) no-repeat center center;
					background-size: 23/64rem 23/64rem;	
				}
				.txtcolor{
					color: #F56600;
					font-size: 15/64rem;
				    margin: 0 2/64rem;
				}
			}
		}
	}
	.qingdan{
		padding: 0 20/64rem;
		box-sizing: border-box;
		background: #fff;
		margin-top: 10/64rem;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		.qditem{
			display: flex;
			align-items: center;
			line-height: 64/64rem;
			height: 64/64rem;
			border-bottom: 1px solid #eee;
			justify-content: space-between;
			.qdright{
				display: flex;
				align-items: center;
				img{
					height: 46/64rem;
					width: 46/64rem;
				}
			}
			.pri{
				color: #333;
				font-weight: bold;
			}
		}
	}
	.jgqingdan{
		padding: 8/64rem 20/64rem;
		box-sizing: border-box;
		background: #fff;
		margin-top: 10/64rem;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		margin-bottom: 108/64rem;
		p{
			line-height: 27/64rem;
			.title{
				font-weight: bold;
			}
		}
	}
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		border-top: 1px solid #ccc;
		height: 88/64rem;
        width: 100%;
        background: #fff;
        .adr{
        	line-height: 30/64rem;
        	background: #FCF6D6;
        	color: #b57842;
        	padding: 0 16/64rem;
        	box-sizing: border-box;
        }
        .fukuan{
        	line-height: 58/64rem;
        	display: flex;
        	align-items: center;
        	justify-content: center;
        	.right{
        		width: 50%;
        		text-align: center;
        		background: #fff;
        		color: #FF5722;
        		font-size: 16/64rem;
        		.pri{
        			font-weight: bold;
        		}
        	}
        	.left{
        		width: 50%;
        		text-align: center;
        		font-size: 18/64rem;
        		background: #FF5722;
        		color: #fff;
        	}
        }
	}
}
	
</style>