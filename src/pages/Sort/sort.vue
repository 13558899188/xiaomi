<template>
	<div class="box">
	<div class="bbb">	
		<miHeader txt="分类">
			<img slot="HleftImg" class="HleftImg" src="../../assets/images/icon/xiangleft.png" alt="" />
			<img slot="HrightImg" class="HrightImg"  src="../../assets/images/icon/search.png" alt="" />
		</miHeader>	
	</div>
	<div class="box">	
		<div class="sortleft"> <!--左边导航栏-->
			
			<ul>
				<li v-for="(item,index) in arr" @click="logan(item,index)" :class="{actives:gameName==item}">
				
				<a :href="item.know">{{item.honep}}</a>
				
				</li>
			</ul>
		</div>
		<div class="sortrigth">  <!--右边商品栏-->
		<div class="sortimg">
			<img src="../../assets/images/SOrt/17dbc837b82de528f8f4abf4ede0753a.jpg" />
		</div>
		<div class="sortname">
			<ul>
				<li></li>
				<li><a name="two">手机</a></li>
				<li></li>
			</ul>
		</div>
		<div class="sorthonep">
		   <ul>
		   	  <li v-for="(like,index) in obje">
		   	  	<img v-lazy.container="like.img" />
		   	  	<div>{{like.honep}}</div>
		   	  </li>
		   </ul>
		</div>
		
		<div class="sortname">
			<ul>
				<li></li>
				<li><a name="one">家电</a></li>
				<li></li>
			</ul>
		</div>
		<div class="feel">
			<ul>
				<li v-for="gameName in haven">
					<img v-lazy.container="gameName.img" />
					<div>{{gameName.honep}}</div>
				</li>
			</ul>
		</div>
		
		<div class="sortname">
			<ul>
				<li></li>
				<li><a name="was">电脑</a></li>
				<li></li>
			</ul>
		</div>
		<div class="that">
			<ul>
				<li v-for="had in you">
					<img v-lazy.container="had.img" />
					<div>{{had.honep}}</div>
				</li>
			</ul>
		</div>
		
		<div class="sortname">
			<ul>
				<li></li>
				<li><a name="xiaomi">众筹好物</a></li>
				<li></li>
			</ul>
		</div>
		<div class="this">
			<ul>
				<li v-for="told in just">
					<img v-lazy.container="told.img" />
					<div>{{told.honep}}</div>
				</li>
			</ul>
		</div>
		
		<div class="sortname">
			<ul>
				<li></li>
				<li><a name="xiaomi">家庭装</a></li>
				<li></li>
			</ul>
		</div>
		<div class="the">
			<ul>
				<li v-for="world in whene">
					<img v-lazy.container="world.img" />
					<div>{{world.honep}}</div>
				</li>
			</ul>
		</div>
		
		<div class="sortname">
			<ul>
				<li></li>
				<li><a name="xiaomi">小米手机</a></li>
				<li></li>
			</ul>
		</div>
		<div class="ever">
			<ul>
				<li v-for="ber in anyone">
					<img v-lazy.container="ber.img" />
					<div>{{ber.honep}}</div>
				</li>
			</ul>
		</div>
		
		<div class="sortname">
			<ul>
				<li></li>
				<li><a name="xiaomi">红米Redmi</a></li>
				<li></li>
			</ul>
		</div>
		<div class="sorthonep">
		   <ul>
		   	  <li v-for="(like,index) in obje">
		   	  	<img v-lazy.container="like.img" />
		   	  	<div>{{like.honep}}</div>
		   	  </li>
		   </ul>
		</div>
		
		<div class="sortname">
			<ul>
				<li></li>
				<li><a name="xiaomi">移动4G+专区</a></li>
				<li></li>
			</ul>
		</div>
		<div class="critic">
		   <ul>
		   	  <li v-for="(anytwo,index) in zing">
		   	  	<img v-lazy.container="anytwo.img" />
		   	  	<div>{{anytwo.honep}}</div>
		   	  </li>
		   </ul>
		</div>
		
		<div class="have">
			进入手机频道>
		</div>
		<div class="sortname">
			<ul>
				<li></li>
				<li><a name="xiaomi">手机配件</a></li>
				<li></li>
			</ul>
		</div>
		<div class="wang">
		   <ul>
		   	  <li v-for="(remem,index) in people">
		   	  	<img v-lazy.container="remem.img" />
		   	  	<div>{{remem.honep}}</div>
		   	  </li>
		   </ul>
		</div>
		<div class="sortname">
			<ul>
				<li></li>
				<li><a name="xiaomi">电脑</a></li>
				<li></li>
			</ul>
		</div>
		<div class="that">
			<ul>
				<li v-for="had in you">
					<img v-lazy.container="had.img" />
					<div>{{had.honep}}</div>
				</li>
			</ul>
		</div>
		
		<div class="sortname">
			<ul>
				<li></li>
				<li><a name="xiaomi">众筹好物</a></li>
				<li></li>
			</ul>
		</div>
		<div class="this">
			<ul>
				<li v-for="told in just">
					<img v-lazy.container="told.img" />
					<div>{{told.honep}}</div>
				</li>
			</ul>
		</div>
		
		<div class="sortname">
			<ul>
				<li></li>
				<li><a name="xiaomi">家庭装</a></li>
				<li></li>
			</ul>
		</div>
		<div class="the">
			<ul>
				<li v-for="world in whene">
					<img v-lazy.container="world.img" />
					<div>{{world.honep}}</div>
				</li>
			</ul>
		</div>
		
		<div class="sortname">
			<ul>
				<li></li>
				<li><a name="xiaomi">小米手机</a></li>
				<li></li>
			</ul>
		</div>
		<div class="ever">
			<ul>
				<li v-for="ber in anyone">
					<img v-lazy.container="ber.img" />
					<div>{{ber.honep}}</div>
				</li>
			</ul>
		</div>
		
		<div class="sortname">
			<ul>
				<li></li>
				<li><a name="xiaomi">红米Redmi</a></li>
				<li></li>
			</ul>
		</div>
		<div class="sorthonep">
		   <ul>
		   	  <li v-for="(like,index) in obje">
		   	  	<img v-lazy.container="like.img" />
		   	  	<div>{{like.honep}}</div>
		   	  </li>
		   </ul>
		</div>
		<div class="sortname">
			<ul>
				<li></li>
				<li><a name="xiaomi">移动4G+专区</a></li>
				<li></li>
			</ul>
		</div>
		<div class="critic">
		   <ul>
		   	  <li v-for="(anytwo,index) in zing">
		   	  	<img v-lazy.container="anytwo.img" />
		   	  	<div>{{anytwo.honep}}</div>
		   	  </li>
		   </ul>
		</div>
		
		<div class="have">
			进入手机频道>
		</div>
		<div class="sortname">
			<ul>
				<li></li>
				<li><a name="xiaomi">手机配件</a></li>
				<li></li>
			</ul>
		</div>
		<div class="wang">
		   <ul>
		   	  <li v-for="(remem,index) in people">
		   	  	<img v-lazy.container="remem.img" />
		   	  	<div>{{remem.honep}}</div>
		   	  </li>
		   </ul>
		</div>
		</div>
		
	</div>	
	<Tabbar></Tabbar>
	</div>
</template>
<script>
	import miHeader from "../../components/miHeader"
	import Tabbar from '../../components/tabbar'
	export default{		
		components:{
			miHeader,
			Tabbar
		},
		data:function(){
			return{
			  arr:[
			  {honep:"新品",know:"#two"},
			  {honep:"众筹",know:"#one"},
			  {honep:"智能",know:"#was"},
			  {honep:"家用电器"},
			  {honep:"厨房电器"},
			  {honep:"穿戴酷玩"},
			  {honep:"家居家装"},
			  {honep:"电源插座"},
			  {honep:"出行车载"},
			  {honep:"耳机音箱"},
			  {honep:"路由器"},
			  {honep:"个护健康"},
			  {honep:"日用百货"},
			  {honep:"床品家居"},
			  {honep:"配件线材"},
			  {honep:"办公用品"},
			  {honep:"鞋服箱包"},
			  {honep:"家装"},
			  {honep:"儿童用品"},
			  {honep:"礼品"},
			  {honep:"服务"},
			  {honep:"会员卡"},
			  {honep:"米粉卡"},
			  {honep:"零售店"}
			  ],
			  obje:[
			  {img:require("../../assets/images/SOrt/c7616c2ddc8ca4546caf1f48bc31b24c.png"),honep:"Redmi K20 Pro"},
			  {img:require("../../assets/images/SOrt/728ffa7ec37de1e6a4badac29fdf3a0f.png"),honep:"Redmi K20 "},
			  {img:require("../../assets/images/SOrt/20838b39f8bc6bab9eabb519d50cf2dd.png"),honep:"Redmi 7A"},
			  {img:require("../../assets/images/SOrt/80db44cd6d4334a845b1e2e8335f060b.png"),honep:"小米9"},
			  {img:require("../../assets/images/SOrt/a1948c1bea112bee09a4a9b2f6bfcbad.png"),honep:"小米9 SE"},
			  {img:require("../../assets/images/SOrt/4ce436f7215e54bff6d8e34b02c6b124.png"),honep:"Redmi Note 7..."},
			  {img:require("../../assets/images/SOrt/19a0a988c92e861d10c84b4fda78264f.png"),honep:"Redmi 7"},
			  {img:require("../../assets/images/SOrt/96b660666abfc5b37cdea075e63e3ce6.jpg"),honep:"黑鲨游戏手机2"},
			  {img:require("../../assets/images/SOrt/23a250dfaba87009c28a627d3a292c76.png"),honep:"Redmi Note 7"},
			  ],
			  haven:[
			  {img:require("../../assets/images/SOrt/8918bab2e5fbdb1ebe79595ce6716a63.jpg"),honep:"全面屏电视E55A"},
			  {img:require("../../assets/images/SOrt/43fa2a34581695ada4775976e8c2ca81.jpg"),honep:"壁画电视65英寸"},
			  {img:require("../../assets/images/SOrt/549e083e296bde93f6c15d00f9be8968.jpg"),honep:"电视4X65英寸"},
			  {img:require("../../assets/images/SOrt/7bdf9ac76bed032d94a638e88aa8aa0d.png"),honep:"立式空调"},
			  {img:require("../../assets/images/SOrt/8ce424d6fe93dfb74733b5838140b7ee.jpg"),honep:"空调C1(一级..."},
			  {img:require("../../assets/images/SOrt/3cf4b7d54b43848dcb5e6aa5590e91ac.jpg"),honep:"洗烘一体机1A"},
			  ],
			  you:[
			  {img:require("../../assets/images/SOrt/bb90e130ecf2248e6dcbd239b72696e9.jpg"),honep:"游戏本512GB"},
			  {img:require("../../assets/images/SOrt/b7de0f5e0d32638ff7524660de209e5b.jpg"),honep:"Air 12.5 2019..."},
			  {img:require("../../assets/images/SOrt/bb90e130ecf2248e6dcbd239b72696e9.jpg"),honep:"笔记本15.6..."},
			  ],
			  just:[
			  {img:require("../../assets/images/SOrt/e32735617c9c42ee03508cb34ae0c29e.png"),honep:"电磁炉"},
			  {img:require("../../assets/images/SOrt/fc80ccc38236f720c9da82ba1cfc4f0c.jpg"),honep:"智能积木越野车"},
			  {img:require("../../assets/images/SOrt/0053d931c2ba976914de50204f1e03d7.jpg"),honep:"洁面机"},
			  {img:require("../../assets/images/SOrt/c8c18a482ec486d22395b9cf8959651d.jpg"),honep:"驱蚊器"},
			  {img:require("../../assets/images/SOrt/c3bc45fe22a56065496f8d460b51fdfc.jpg"),honep:"净水器600G"},
			  {img:require("../../assets/images/SOrt/6c11fd92e902f3d7ae6f4d25e577c52b.png"),honep:"无线吸尘器"},
			  {img:require("../../assets/images/SOrt/855ca43ed3400bdbaeb0b08e246d1ff7.jpg"),honep:"投影仪 青春版"},
			  {img:require("../../assets/images/SOrt/4ed25433bf165ba1bc009c2f37f8a010.jpg"),honep:"电暖器"},
			  {img:require("../../assets/images/SOrt/906df61431e627a11c1e784256863cab.jpg"),honep:"照片打印机"},
			  {img:require("../../assets/images/SOrt/70e40f532eb8f91396579bbf2b818afe.jpg"),honep:"智能门锁"},
			  {img:require("../../assets/images/SOrt/e539bf483c8d2315597d57a2826f1dfb.jpg"),honep:"米家吹风机"},
			  {img:require("../../assets/images/SOrt/a394a907ab7ddd6d83e1105a47902f09.jpg"),honep:"洗手机套装"},
			  {img:require("../../assets/images/SOrt/9cd9a10a8e380ed57fe05c0e8ac63c44.jpg"),honep:"米家新风机"},
			  ],
			  whene:[
			  {img:require("../../assets/images/SOrt/a7847bdcad1425c2e4ac17fbb8738b33.png"),honep:"温湿电子表三..."},
			  {img:require("../../assets/images/SOrt/7434fb8cfce1067ade463665aa87e932.jpg"),honep:"最生活10条装"},
			  {img:require("../../assets/images/SOrt/7434fb8cfce1067ade463665aa87e932.jpg"),honep:"最生活100条装"},
			  ],
			  anyone:[
			  {img:require("../../assets/images/SOrt/80db44cd6d4334a845b1e2e8335f060b.png"),honep:"小米9"},
			  {img:require("../../assets/images/SOrt/80db44cd6d4334a845b1e2e8335f060b.png"),honep:"小米9 SE"},
			  {img:require("../../assets/images/SOrt/fc87983a3897b365d0aee5daf5b83d8e.png"),honep:"小米8 屏幕指纹"},
			  {img:require("../../assets/images/SOrt/c4ba8a40cc9090c76101128344d2de6a.png"),honep:"小米8 青春版"},
			  {img:require("../../assets/images/SOrt/4ce436f7215e54bff6d8e34b02c6b124.png"),honep:"小米MIX 2S"},
			  {img:require("../../assets/images/SOrt/e7e916e86e24b76f1235565042f79a1f.png"),honep:"小米MIX 3"},
			  {img:require("../../assets/images/SOrt/23a250dfaba87009c28a627d3a292c76.png"),honep:"小米6X"},
			  {img:require("../../assets/images/SOrt/67c734cb6ec137fceb8aadff1858f316.png"),honep:"小米Play"},
			  {img:require("../../assets/images/SOrt/728ffa7ec37de1e6a4badac29fdf3a0f.png"),honep:"小米Max 3"},
			  ],
			  zing:[
			  {img:require("../../assets/images/SOrt/4ce436f7215e54bff6d8e34b02c6b124.png"),honep:"小米MIX 2S"},
			  {img:require("../../assets/images/SOrt/23a250dfaba87009c28a627d3a292c76.png"),honep:"红米6"},
			  {img:require("../../assets/images/SOrt/80db44cd6d4334a845b1e2e8335f060b.png"),honep:"Redmi Note 7"},
			  {img:require("../../assets/images/SOrt/c7616c2ddc8ca4546caf1f48bc31b24c.png"),honep:"红米6A"},
			  {img:require("../../assets/images/SOrt/728ffa7ec37de1e6a4badac29fdf3a0f.png"),honep:"Redmi 7A 移..."},
			  ],
			  people:[
			  {img:require("../../assets/images/SOrt/80db44cd6d4334a845b1e2e8335f060b.png"),honep:"以旧换新"},
			  {img:require("../../assets/images/SOrt/f56e7030f11712746a6ba8f3002e6064.png"),honep:"定位电话"},
			  {img:require("../../assets/images/SOrt/77ecb9dc8f01728fca6450f9331b3357.jpg"),honep:"充电器"},
			  {img:require("../../assets/images/mine/768.jpg"),honep:"数据线"},
			  {img:require("../../assets/images/mine/888.jpg"),honep:"贴膜"},
			  {img:require("../../assets/images/SOrt/8fb7f3be403cfcbe98576bee28c7cc25.jpg"),honep:"保护壳"},
			  ],
			  gameName:"新品"
			}
		},
		methods:{
			logan:function(item,index){
				this.gameName=item
				console.log(index);
			}
		}
	}
</script>

<style lang='less' scoped="scoped">
	.box{font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular, Hiragino Sans GB, Microsoft Yahei, sans-serif;}
    .bbb{width:100%;height:58.59/64rem;position: fixed;top:0/64rem;left:0/64rem;}
	 li{line-height:45/64rem;font-size:13/64rem;text-align: center;color: rgb(60,60,60);}
	.sortleft{width:79.16/64rem;height:637/64rem;position: fixed;left:0/64rem;top:54/64rem;
      flex-wrap:nowrap;
      justify-content:space-between;
      overflow:auto;
      border:1/64rem solid rgb(239,239,239);
      z-index:999;
    }
	.sortleft a{color: black;}
	.sortrigth{width:294.52/64rem;margin: 60/64rem 0 60/64rem 80/64rem}
	.actives a{color: rgb(251,125,52);font-size:18/64rem;}
	.sortimg{display: flex;justify-content: center;}
	.sortimg img{width:277.77/64rem;height:111.11/64rem;}
	.sortname{display: flex;justify-content: center;width:280/64rem;height:71/64rem;margin:10/64rem auto;}
	.sortname a{color: black;}
	.sortname li{float: left;line-height:71/64rem;}
	.sortname li:nth-last-child(3){width:20/64rem;height:0.1/64rem;border:1/64rem solid rgb(239,239,239);margin-top:34/64rem;margin-right:10/64rem;}
	.sortname li:nth-last-child(2){font-size:17/64rem;}
	.sortname li:nth-last-child(1){width:20/64rem;height:0.1/64rem;border:1/64rem solid rgb(239,239,239);margin-top:34/64rem;margin-left:10/64rem;}
    .sorthonep{width:280.02/64rem;height:338.58/64rem;margin:auto;margin-top:-10/64rem;}
    .sorthonep img{width:55.55/64rem;height:55.55/64rem;}
    .sorthonep li div{color: rgb(119,119,119);margin-top:-25/64rem;font-size:11/64rem;}
    .sorthonep li{float: left;width:93.33/64rem;height:94/64rem;margin-top:15/64rem;}
    .feel{width:280.02/64rem;height:225.72/64rem;margin: auto;margin-top:-10/64rem;}
    .feel img{width:55.55/64rem;height:55.55/64rem;}
    .feel li div{color: rgb(119,119,119);margin-top:-25/64rem;font-size:11/64rem;}
    .feel li{float: left;width:93.33/64rem;height:94/64rem;margin-top:15/64rem;}
    .that{width:280.02/64rem;height:112.86/64rem;margin: auto;margin-top:-10/64rem;}
    .that img{width:55.55/64rem;height:55.55/64rem;}
    .that li div{color: rgb(119,119,119);margin-top:-25/64rem;font-size:11/64rem;}
    .that li{float: left;width:93.33/64rem;height:94/64rem;margin-top:15/64rem;}
    .this{width:280.02/64rem;height:564.3/64rem;margin: auto;margin-top:-10/64rem;}
    .this img{width:55.55/64rem;height:55.55/64rem;}
    .this li div{color: rgb(119,119,119);margin-top:-25/64rem;font-size:11/64rem;}
    .this li{float: left;width:93.33/64rem;height:94/64rem;margin-top:15/64rem;}
    .the{width:280.02/64rem;height:112.86/64rem;margin: auto;margin-top:-10/64rem;}
    .the img{width:55.55/64rem;height:55.55/64rem;}
    .the li div{color: rgb(119,119,119);margin-top:-25/64rem;font-size:11/64rem;}
    .the li{float: left;width:93.33/64rem;height:94/64rem;margin-top:15/64rem;}
    .ever{width:280.02/64rem;height:338.58/64rem;margin: auto;margin-top:-10/64rem;}
    .ever img{width:55.55/64rem;height:55.55/64rem;}
    .ever li div{color: rgb(119,119,119);margin-top:-25/64rem;font-size:11/64rem;}
    .ever li{float: left;width:93.33/64rem;height:94/64rem;margin-top:15/64rem;}
    .critic{width:280.02/64rem;height:225.72/64rem;margin: auto;margin-top:-10/64rem;}
    .critic img{width:55.55/64rem;height:55.55/64rem;}
    .critic li div{color: rgb(119,119,119);margin-top:-25/64rem;font-size:11/64rem;}
    .critic li{float: left;width:93.33/64rem;height:94/64rem;margin-top:15/64rem;}
    .have {width:277.77/64rem;height:44.44/64rem;margin:10/64rem auto;background-color: rgb(248,244,229);
    line-height:44.44/64rem;text-align: center;color: rgb(174,166,132);font-size:16/64rem;}
    .wang{width:280.02/64rem;height:225.58/64rem;margin: auto;margin-top:-10/64rem;}
    .wang img{width:55.55/64rem;height:55.55/64rem;}
    .wang li div{color: rgb(119,119,119);margin-top:-25/64rem;font-size:11/64rem;}
    .wang li{float: left;width:93.33/64rem;height:94/64rem;margin-top:15/64rem;}
</style>