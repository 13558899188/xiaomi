<template>
	<div class="box">
		<div class="Commodity">
			<div @click.prevent="back">
				
			</div>
			<div>
				<a href="#">{{obje.title}}</a>
			</div>
			<div @click.prevent="goSearch">
				
			</div>
		</div>
		<div class="navigta">  <!--路由导航-->
			<ul>
				<li v-for="(item,index) in time" @click="logan(index)">
					<a href="#">{{item}}</a>
				</li>
			</ul>
			<div class="whold">
			<div  v-show="dingdanshow">	
				<img :src="obje.img"/>
			</div>
			<div  v-show="dingdanshow">
				<h3>{{obje.h3}}</h3>
			</div>
			</div>
		</div>
		<div class="img">
			<img src="../../assets/images/mine/2Q==.jpg" />
		</div>
		<div class="one">
		   <ul>
		   	  <li v-for="(two,index) in arr">
		   	  	<img :src="two.img" />
		   	  	<p>{{two.name}}</p>
		   	  	<p>{{two.money}}</p>
		   	  </li>
		   </ul>
		</div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {
				time:["全部","待付款","待收货"],
				dingdanshow:true,
				obje:{},
				arr:[
				 {img:require("../../assets/images/mine/电压力锅.jpg"),name:"米家|双立人 平底不粘锅",money:"¥299"},
				 {img:require("../../assets/images/mine/电子手表.jpg"),name:"小米手环4",money:"¥169"},
				 {img:require("../../assets/images/mine/米家驱驱蚊器.jpg"),name:"米家驱蚊器 智能版",money:"¥59"},
				 {img:require("../../assets/images/mine/小米MIX 3.jpg"),name:"小米MIX 3 8GB+256G",money:"¥3999"},
				 {img:require("../../assets/images/mine/9k=.jpg"),name:"小米电视4S 55英寸",money:"¥2999"},
				 {img:require("../../assets/images/mine/Z.jpg"),name:"RedmiBook 14 独显版",money:"¥4299"},
				 {img:require("../../assets/images/mine/11.jpg"),name:"米家互联网立式空调C1",money:"¥3499"},
				 {img:require("../../assets/images/mine/333.jpg"),name:"后视镜行车记录仪",money:"¥399"},
				 {img:require("../../assets/images/mine/888.jpg"),name:"小米移动电源310000毫安",money:"¥129"},
				 {img:require("../../assets/images/mine/999.jpg"),name:"小米体脂枰2",money:"¥99"},
				 {img:require("../../assets/images/mine/000.jpg"),name:"小米电动剃须刀 旋转...",money:"¥79"},
				 {img:require("../../assets/images/mine/小米MIX 3.jpg"),name:"小米MIX 3 6GB+128G",money:"¥3299"},
				 {img:require("../../assets/images/mine/99999.jpg"),name:"小米移动电源3 20000",money:"¥199"},
				 {img:require("../../assets/images/mine/7878.jpg"),name:"米家经典方框太阳镜",money:"¥99"},
				 {img:require("../../assets/images/mine/0000.jpg"),name:"米家飞行员太阳镜",money:"¥99"},
				 {img:require("../../assets/images/mine/768.jpg"),name:"小米高清数据线-1.5米",money:"¥29"},
				 {img:require("../../assets/images/mine/878.jpg"),name:"小米蓝牙耳机Air",money:"¥379"},
				 {img:require("../../assets/images/mine/uyu.jpg"),name:"小米盒子3 增强版",money:"¥399"},
				 {img:require("../../assets/images/mine/222.jpg"),name:"米家插线板延长线",money:"¥49"},
				 {img:require("../../assets/images/mine/990909.jpg"),name:"小米9 潮流拼接保护壳",money:"¥49"},
				]
			}
		},
		mounted(){
			this.logan()
		},
		methods:{
			logan:function(index){
				if(index==0){
					this.obje={
						title:"我的订单",
						img:require("../../assets/images/mine/empty.png"),
						h3:"您还没有 订单"
					}
				}else if(index==1){
					this.obje={
						title:"待付款",
						img:require("../../assets/images/mine/empty.png"),
						h3:"您还没有待付款 订单"
					}
				}else{
					this.obje={
						title:"待收货",
						img:require("../../assets/images/mine/empty.png"),
						h3:"您还没有待收货 订单"
					}
				}
			},
			back(){
				this.$router.push('/Mine')
			},
			goSearch(){
				this.$router.push('/homeSearch')
			},
			dingdan(){
				if(window.sessionStorage.getItem('dingdan')!=null){
					this.dingdanshow=false;
					
				}
			}

		}
	}
</script>
<style lang="less" scoped="scoped">
    .box{background-color: rgb(245,245,245);font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular, Hiragino Sans GB, Microsoft Yahei, sans-serif;}
	.Commodity{height:50/64rem;background-color: rgb(242,242,242);display: flex;justify-content: space-between;text-align: center;
	line-height:50/64rem;}
	.Commodity a{color: rgb(102,102,102);}
	.Commodity div:nth-last-child(3){width:100/64rem;height:50/64rem;background-image: url(../../assets/images/icon/xiangleft.png);
	background-repeat: no-repeat;background-position:6% 48%;background-size:29% 51%;}
	.Commodity div:nth-last-child(2){width:100/64rem;height:50/64rem;font-size: 16/64rem;}
	.Commodity div:nth-last-child(1){width:100/64rem;height:50/64rem;background-image: url(../../assets/images/icon/search.png);
	background-repeat: no-repeat;background-position:87% 37%;background-size:34% 70%;}
	.navigta{height:32/64rem;border:1px solid rgb(236,236,236);background-color: rgb(255,255,255);}
	.navigta ul{display: flex;justify-content: space-around;}
	.navigta li{float: left;line-height:32/64rem;}
	.navigta li a{color: rgb(60,60,60);font-size:15/64rem;}
	.whold{height:187.2/64rem;}
	.whold img{width:100/64rem;height:100/64rem;margin-top:30/64rem;}
	.whold div:nth-last-child(2){height:134.2/64rem;display: flex;justify-content: center;
	background-color: rgb(255,255,255);}
	.whold div:nth-last-child(1){height:50.2/64rem;text-align: center;background-color: rgb(255,255,255);}
	h3{font-weight:500;line-height:50.2/64rem;color: rgb(153,153,153);font-size:18/64rem;}
	.img{height:62.5/64rem;background-color: rgb(245,245,245);margin-top:184/64rem;}
	.img img{width:100%;height:62.5/64rem;}
	.one{overflow: hidden;width: 100%;height: 100%;margin-bottom: 30/64rem;}
	.one ul{overflow: hidden;height: 100%;width: 100%;}
	.one li{width:201/64rem;height:245.63/64rem;float: left;}
	.one li:nth-child(even){margin-left: 7/64rem;}
	.one li img{width:201/64rem;height:185.63/64rem;}
	.one li p:nth-last-child(2){margin-left:10/64rem;font-size:15/64rem;}
	.one li p:nth-last-child(1){color: rgb(255,103,0);margin-left:10/64rem;}
</style>