<template>
	<div class="box">
		<div class="Commodity">
			<div @click="back">
			</div>
			<div>
				<a href="#">服务</a>
			</div>
			<div  @click.prevent="goSearch">	
			</div>
		</div>
		<div class="serve">
			自助服务
		</div>
		<div class="serveli">
			<ul>
				<li v-for="(item,index) in obje">
					<img :src="item.img" />
				</li>
			</ul>
		</div>
		<div class="servehonen">
			<div class="kefu">
				<a href="#">7x24小时在线客服</a>
			</div>
            <div class="fuwu">
				<div class="ihope">
					<div class="dianhua">
						<p>商城热线</p>
						<p>400-100-5678</p>
						<p>8:00-18:00</p>
					</div>
				</div>
				<div class="ihopeone">
					<div class="dianhua">
						<p>金融热线</p>
						<p>400-100-3399</p>
						<p>9:00-19:00</p>
					</div>
				</div>
				<div class="ihopetwo">
					<div class="dianhua">
						<p>小米移动</p>
						<p>400-922-3838</p>
						<p>8:00-18:00</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {
			obje:[
		   {img:require("../../assets/images/mine/30bc2339-742e-bb1d-e502-0ae28daeed25.png")},
		   {img:require("../../assets/images/mine/df270244-1d4e-08f5-407b-9e76b02df338.png")},
		   {img:require("../../assets/images/mine/0d35b4ac-8735-6e0f-dab8-cfb1248387d6.png")},
		   {img:require("../../assets/images/mine/4f075e4e-23db-1bd7-23f9-50eb1fa55b21.png")},
		   {img:require("../../assets/images/mine/1c6b29ff6f55ca6dde01036d4a83a086.jpg")},
		   {img:require("../../assets/images/mine/a71febf3-e4dd-25f9-af6d-7503888f97c4.png")},
		   {img:require("../../assets/images/mine/043f196f-3ef0-48ce-3c7e-9ac9b706d90c.png")},
		   {img:require("../../assets/images/mine/f6c78ec3-59be-131d-0c48-ebbdc4dc5d29.png")}
		      ]
			}
		},
		methods:{
			back(){
				this.$router.push('/Mine')
			},
			goSearch(){
				this.$router.push('/homeSearch')
			}
		}
	}
</script>
<style lang="less" scoped="scoped">
	.box{font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular, Hiragino Sans GB, Microsoft Yahei, sans-serif;}
	.Commodity{height:50/64rem;background-color: rgb(242,242,242);display: flex;justify-content: space-between;text-align: center;
	line-height:50/64rem;}
	.Commodity a{color: rgb(102,102,102);font-size: 17/64rem;}
	.Commodity div:nth-last-child(3){width:100/64rem;height:50/64rem;background-image: url(../../assets/images/icon/xiangleft.png);
	background-repeat: no-repeat;background-position:6% 48%;background-size:29% 51%;}
	.Commodity div:nth-last-child(2){width:100/64rem;height:50/64rem;}
	.Commodity div:nth-last-child(1){width:100/64rem;height:50/64rem;background-image: url(../../assets/images/icon/search.png);
	background-repeat: no-repeat;background-position:87% 37%;background-size:34% 70%;}
    .serve{height:38/64rem;border-bottom:1px solid rgb(246,246,246);
    color: rgb(145,145,145);font-size:13.5/64rem;line-height:38/64rem;margin-left:10/64rem;}
    .serveli{height:200/64rem;}
	.serveli ul{overflow: hidden;display:inline-block;padding: 0 17/64rem; }
    .serveli li{float: left;width:93.73/64rem;height:82/64rem;box-sizing: border-box;overflow: hidden;}
    .serveli li img{width:93.73/64rem;height:82/64rem;transform: scale(1.1);}
    .servehonen{height:200/64rem;}
    .kefu{height:62.5/64rem;border-bottom:1px solid rgb(246,246,246);text-align: center;
    background-image: url(../../assets/images/mine/OeXfxMT3yz8wXoorlHLvGmotnFDYx1XoILBBro50AV+BC5QNzy0NQjks2aqQuDkcRPFBQXDUelAYnwM0IqTMhBsetp5EKxbiIKJaz8J8AAIL76CTpCd7cAAAAASUVORK5CYII=.png);
    background-repeat: no-repeat;background-position:31% 42%;background-size:9% 50%;}
    .kefu a{line-height:62.5/64rem;color: black;font-size:13/64rem;display: block;text-align: center;}
    .ihope{width:120/64rem;height:98.41/64rem;flex: 1;text-align: center;
    background-image: url(../../assets/images/mine/59cZsn+JxgLsAXYkgXYAmwBtmQBjiT9K8AAGRGbIIvanJ0AAAAASUVORK5CYII=.png);
    background-repeat: no-repeat;background-position:42% 10%;background-size:28% 34%;}
	.fuwu{display: flex;}
    .ihopeone{width:120/64rem;height:98.41/64rem;flex: 1;text-align: center;
      background-image: url(../../assets/images/mine/68AAAAAElFTkSuQmCC.png);
    background-repeat: no-repeat;background-position:42% 10%;background-size:28% 34%;}
    .ihopetwo{width:120/64rem;height:98.41/64rem;flex: 1;text-align: center;
     background-image:url(../../assets/images/mine/CTAACPu4trIKPQsAAAAASUVORK5CYII=.png);
    background-repeat: no-repeat;background-position:42% 10%;background-size:28% 34%;}
    .dianhua{width:120/64rem;height:50/64rem;margin-top:47/64rem;text-align: center;}
    .dianhua p:nth-last-child(3){font-size:13.5/64rem;}
    .dianhua p:nth-last-child(2){font-size:12/64rem;color: rgb(255,103,0);}
    .dianhua p:nth-last-child(1){font-size:11/64rem;color: rgb(166,159,169);}
</style>