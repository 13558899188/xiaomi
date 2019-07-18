<template>
	<div class="zhinengbox">
		<miBanner swiperId="homeSwiper">
			<div slot="bannerImg" class="swiper-slide">
				<router-link to="/shoppublic"><img src="https://i8.mifile.cn/v1/a1/fe08cdfd-5a9c-0c44-ac75-924ea7494207!720x360.webp" /></router-link>
			</div>
			<div slot="bannerImg" class="swiper-slide">
				<router-link to="/shoppublic"><img src="https://i8.mifile.cn/v1/a1/d1c7c3c9-e51d-cfbf-0e60-90fdec0f409b!720x360.webp" /></router-link>
			</div>
			<div slot="bannerImg" class="swiper-slide">
				<router-link to="/shoppublic"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7eb74054c0795475bd57bdf317f035f.jpg?thumb=1&w=720&h=360" /></router-link>
			</div>
		</miBanner>
		<ul class="navbar">
		  <li class="item" v-for="item in navList">
		  	<router-link to="/shoppublic" class="aimg">
		  	   <img v-lazy.container="item" alt="" />
		  	</router-link>
		  </li>
		</ul>
		<div class="shopitem" v-for="item in shop">
			<img v-lazy.container="item.secImg" alt="" class="shopimg"/>
			<ul class="itembox">
				<li class="item" v-for="item1 in item.homeItemList">
				 <router-link to="/shoppublic">
				 	<img v-lazy.container="item1.productImg" alt="" />
				 	<p class="title">{{item1.productName}}</p>
				 	<p class="pub">{{item1.productdet}}</p>
				 	<p class="jiage"><span class="icon">￥</span>{{item1.productPrice}}</p>
				 </router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import miBanner from './miBanner'
	export default {
		name: 'homezhineng',
		data(){
			return{
				navList:[
				'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e47dad0c224065a73a4c722eeaf1b8e1.jpg?thumb=1&w=144&h=152',
				'https://i8.mifile.cn/v1/a1/eddc5967-7f37-bf45-72d9-de0db438658b!144x152.webp',
				'https://i8.mifile.cn/v1/a1/8d73dc73-3a27-1587-6c43-47998c859a48!144x152.webp',
				'https://i8.mifile.cn/v1/a1/afe66888-30af-d023-ebbe-6ed7e4607167!144x152.webp',
				'https://i8.mifile.cn/v1/a1/3ad80cd6-0188-1c0a-95d3-aeaa58ede247!144x152.webp',
				'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b9b8b8e686044afb2585e78a03ee96b6.png?thumb=1&w=144&h=152',
				'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3304e52970aa972c4f4ccd6eb424ad7.png?thumb=1&w=144&h=152',
				'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fed94691e4b361f237d411c3f687c2d4.png?thumb=1&w=144&h=152',
				'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2bc35b6be2ab377bfc7e8fddeaa54c5.png?thumb=1&w=144&h=152',
				'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d41a54c825db28e47888db6bd61349de.png?thumb=1&w=144&h=152'
				],
				shop:[{
						"secImg":"http://i8.mifile.cn/v1/a1/dc3b1271-0d28-7143-bb18-0e97e551d073!720x80.webp",
						"homeItemList":[
							{
								"productImg":"http://i8.mifile.cn/v1/a1/44c4e69b-8b41-84b9-b158-9fc2c0e06987!221x221.webp",
								"productName":"米家智能门锁",
								"productdet":"一体化活体指纹识别",
								"productPrice":"1299",
							},
							{
								"productImg":"http://i8.mifile.cn/v1/a1/577afa47-f79d-93c7-1185-f5c48f1b4ea2!221x221.webp",
								"productName":"净水器600G",
								"productdet":"600加仑通量，流速更快",
								"productPrice":"2499",
							},
							{
								"productImg":"http://i8.mifile.cn/v1/a1/81bf6395-c0af-7fd7-6caa-7dd301a02105!221x221.webp",
								"productName":"扫地机器人1S",
								"productdet":"看得明白扫得彻底",
								"productPrice":"1999",
							},
							{
								"productImg":"http://i8.mifile.cn/v1/a1/b30a7db9-300b-92a6-4b49-cd07aa34c4a4!221x221.webp",
								"productName":"小爱触屏音箱",
								"productdet":"好听，更好看",
								"productPrice":"249",
							},
							{
								"productImg":"http://i8.mifile.cn/v1/a1/e9a718b0-e088-5638-4850-a2cf16acfd60!221x221.webp",
								"productName":"小米无线车充",
								"productdet":"电动变形，自动锁紧充电",
								"productPrice":"169",
							},
							{
								"productImg":"http://i8.mifile.cn/v1/a1/619d87cb-cec3-9d93-1d5a-16d410d42b27!221x221.webp",
								"productName":"手持无线吸尘器",
								"productdet":"除尘除螨黑科技",
								"productPrice":"1299",
							},
							{
								"productImg":"http://i8.mifile.cn/v1/a1/c637bd2a-1bbb-ce7b-0465-a6a89cd868d7!221x221.webp",
								"productName":"真无线蓝牙耳机",
								"productdet":"自动秒连，拿起就能用",
								"productPrice":"99.9",
							},
							{
								"productImg":"http://i8.mifile.cn/v1/a1/8ef1164d-e1c5-ed1e-f827-b9a201520586!221x221.webp",
								"productName":"空气净化器",
								"productdet":"大空间，快循环",
								"productPrice":"1499",
							},
							{
								"productImg":"http://i8.mifile.cn/v1/a1/64a21059-fc97-407e-2c40-dced8ff52eb3!221x221.webp",
								"productName":"米家新风机",
								"productdet":"全效解决全屋空气问题",
								"productPrice":"2699",
							},
							{
								"productImg":"http://i8.mifile.cn/v1/a1/1acc3dad-3512-6691-a49e-cc3aa2471f5e!221x221.webp",
								"productName":"路由器Mesh",
								"productdet":"稳定覆盖 无处不在",
								"productPrice":"999",
							},
							{
								"productImg":"http://i8.mifile.cn/v1/a1/c9c2cd57-0baa-edd3-a7fd-db53fb892a03!221x221.webp",
								"productName":"摄像机云台版",
								"productdet":"高清画质，守护家的每一面",
								"productPrice":"199",
							},
							{
								"productImg":"http://i8.mifile.cn/v1/a1/92a0708f-dbae-0b7e-117e-63fe11dda7e9!221x221.webp",
								"productName":"变频落地扇",
								"productdet":"模拟自然风算法",
								"productPrice":"299",
							},
							{
								"productImg":"http://i8.mifile.cn/v1/a1/51da3fb0-fbeb-fc42-8e18-f4d728fa534c!221x221.webp",
								"productName":"米家投影仪",
								"productdet":"三秒自动对焦，好用又好看",
								"productPrice":"3399",
							},
							{
								"productImg":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c3c9ded884a74eeb82386c04e1c870cb.jpg?thumb=1&w=221&h=221",
								"productName":"米家电动剃须刀",
								"productdet":"剃得干净，剃得快",
								"productPrice":"199",
							},
							{
								"productImg":"http://i8.mifile.cn/v1/a1/6f2954f1-9b60-6d87-ffc1-ca203190fdb7!221x221.webp",
								"productName":"小米AI音箱",
								"productdet":"听音乐、语音遥控家电",
								"productPrice":"299",
							},
					]},
					{
							"secImg":"http://i8.mifile.cn/v1/a1/4d6f9630-8a49-6608-61d5-74ee731058e0!720x80.webp",
							"homeItemList":[
								{
									"productImg":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ba2e3cf34aa9dfd78e51fd72cb26e81f.png?thumb=1&w=221&h=221",
									"productName":"小米手环4",
									"productdet":"大屏彩显，20天超长续航",
									"productPrice":"169",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/9ad54f5d-4585-e986-213b-74bbbce16f73!221x221.webp",
									"productName":"小米「小爱老师」",
									"productdet":"口袋里的英语外教",
									"productPrice":"499",
								},{
									"productImg":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/02642411cee83d90c46c9503c3003a3e.jpg?thumb=1&w=221&h=221",
									"productName":"智能门锁 推拉式",
									"productdet":"一步推拉，高端智能门锁",
									"productPrice":"1699",
								},{
									"productImg":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/75cfba1ec641388eabc3ae5464ff1d27.jpg?thumb=1&w=221&h=221",
									"productName":"小爱音箱 Play",
									"productdet":"听音乐、语音遥控家电",
									"productPrice":"129",
								},{
									"productImg":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b6257b3748e2c9e364366b13072f012c.jpg?thumb=1&w=221&h=221",
									"productName":"米家九号平衡轮",
									"productdet":"能花式酷玩的“风火轮”",
									"productPrice":"999",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/c64e6d88-4f44-4cbb-76da-99994007d1c0!221x221.webp",
									"productName":"无线手持擦地机",
									"productdet":"全家人都喜欢的擦地机",
									"productPrice":"499",
								},{
									"productImg":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a47fd2f59062c7ca936991e57be51eb7.jpg?thumb=1&w=221&h=221",
									"productName":"沙漠赛车积木",
									"productdet":"炫酷的贴身玩伴",
									"productPrice":"129",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/2c6b1817-6103-df80-8930-3d97cb1f041b!221x221.webp",
									"productName":"米家电烤箱",
									"productdet":"全能烘焙体验",
									"productPrice":"299",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/1c77d332-410e-db03-733f-843baaca6206!221x221.webp",
									"productName":"智能按摩椅",
									"productdet":"按摩，一句话的事",
									"productPrice":"4499",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/2bb52104-3e6c-192c-422f-86f5a08249c8!221x221.webp",
									"productName":"平衡车燃动版",
									"productdet":"燃动升级，随走随停",
									"productPrice":"2299",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/c637bd2a-1bbb-ce7b-0465-a6a89cd868d7!221x221.webp",
									"productName":"真无线蓝牙耳机",
									"productdet":"自动秒连，拿起就能用",
									"productPrice":"99.9",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/44c4e69b-8b41-84b9-b158-9fc2c0e06987!221x221.webp",
									"productName":"米家智能门锁",
									"productdet":"一体化活体指纹识别",
									"productPrice":"1299",
								},{
									"productImg":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/98eecc4961d48dd1db8d6563784fc719.jpg?thumb=1&w=221&h=221",
									"productName":"米家电饭煲4L",
									"productdet":"890W 立体加热 ",
									"productPrice":"299",
								},{
									"productImg":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d43aaba5bd43b272beb7ce560b257deb.jpg?thumb=1&w=221&h=221",
									"productName":"Type-C耳机",
									"productdet":"声色不凡，聆听至美",
									"productPrice":"49",
								},{
									"productImg":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2d1d1956d9edfe72148094163681e185.jpg?thumb=1&w=221&h=221",
									"productName":"烟灶套装 天然气",
									"productdet":"点火排烟，风随火动",
									"productPrice":"1999",
								},
								
								]},
					{
							"secImg":"http://i8.mifile.cn/v1/a1/9a88bb58-8598-5b40-73cb-e18d47d7d073!720x80.webp",
							"homeItemList":[
								{
									"productImg":"http://i8.mifile.cn/v1/a1/a3b0fd45-5ab5-bc2d-9a54-4bb4c5e148b4!221x221.webp",
									"productName":"空气净化器 2S",
									"productdet":"好空气看得见",
									"productPrice":"899",
								},
								{
									"productImg":"http://i8.mifile.cn/v1/a1/fafecf43-0429-eb6d-f986-b28d688d97de!221x221.webp",
									"productName":"小米净水器1A",
									"productdet":"小身材节省空间，大流量直出纯净水",
									"productPrice":"1499",
								},
								{
									"productImg":"http://i8.mifile.cn/v1/a1/6eb94f89-ff5e-5ff3-aba6-351ac8ea22dc!221x221.webp",
									"productName":"扫地机器人",
									"productdet":"智商高，扫得干净扫得快",
									"productPrice":"1699",
								},
								{
									"productImg":"http://i8.mifile.cn/v1/a1/070d67c4-aced-2088-8b64-de02220effbb!221x221.webp",
									"productName":"米家IH电饭煲",
									"productdet":"多才多艺的智能电饭煲",
									"productPrice":"399",
								},
								{
									"productImg":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/78056750ab6096d842dc736cbb15e09f.jpg?thumb=1&w=221&h=221",
									"productName":"IH 电饭煲",
									"productdet":"多才多艺的智能电饭煲",
									"productPrice":"599",
								},
								{
									"productImg":"http://i8.mifile.cn/v1/a1/7f627650-cfee-cbff-1d24-c1f27e8fdb4c!221x221.webp",
									"productName":"米家电水壶 ",
									"productdet":"一杯水，是一家人的安心",
									"productPrice":"99",
								},
								{
									"productImg":"http://i8.mifile.cn/v1/a1/06142d12-1dc5-7d5f-b44b-29c756d862f8!221x221.webp",
									"productName":"米家电磁炉",
									"productdet":"双频火力，精准控温",
									"productPrice":"299",
								},
								{
									"productImg":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/98eecc4961d48dd1db8d6563784fc719.jpg?thumb=1&w=221&h=221",
									"productName":"米家电饭煲4L",
									"productdet":"890W 立体加热 ",
									"productPrice":"299",
								},
								{
									"productImg":"http://i8.mifile.cn/v1/a1/716127f5-194e-6014-4d8b-0c2056ec5786!221x221.webp",
									"productName":"米家小饭煲",
									"productdet":"小容量不浪费",
									"productPrice":"199",
								},
								
								]},
					{
							"secImg":"http://i8.mifile.cn/v1/a1/d0853ab7-58ab-197b-5322-da15baf3b4c0!720x80.webp",
							"homeItemList":[
								{
									"productImg":"http://i8.mifile.cn/v1/a1/caf92aac-d168-4b47-009d-c4b39f7f659d!221x221.webp",
									"productName":"小米手环3 NFC版",
									"productdet":"能刷公交卡的手环",
									"productPrice":"199",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/88524058-e81b-3b36-58e1-93875bf4adf6!221x221.webp",
									"productName":"小米手环3",
									"productdet":"全新OLED可触摸大屏",
									"productPrice":"139",
								},{
									"productImg":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ba2e3cf34aa9dfd78e51fd72cb26e81f.png?thumb=1&w=221&h=221",
									"productName":"小米手环4",
									"productdet":"大屏彩显，20天超长续航",
									"productPrice":"169",
								},{
									"productImg":"http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7c90206cd0e0a2605d38e94a9cf82fcd.jpg?thumb=1&w=221&h=221",
									"productName":"米家石英表",
									"productdet":"腕上的科技与美学",
									"productPrice":"299",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/7a20086a-90ef-31d2-79c3-d2223bafe6c0!221x221.webp",
									"productName":"运动手表",
									"productdet":"扔掉手机去跑步",
									"productPrice":"799",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/68f16d47-e9ce-008d-8fb8-9c122ca544a0!221x221.webp",
									"productName":"智能运动手表2",
									"productdet":"陶瓷表圈，50米防水",
									"productPrice":"99",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/456d033c-4116-0e2a-7d7d-dbf111b6132b!221x221.webp",
									"productName":"智能手表",
									"productdet":"NFC百城交通卡",
									"productPrice":"799",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/0d82a29f-ce80-9d0a-64bf-9395fd8b2a27!221x221.webp",
									"productName":"对讲机1S",
									"productdet":"再次出发，陪你轻聊一路",
									"productPrice":"249",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/eb9aa3e2-1c08-fe9d-b6df-5c288ddd3e1c!221x221.webp",
									"productName":"小米VR一体机",
									"productdet":"超乎寻常的虚拟体验",
									"productPrice":"1499",
								},
								
								]},
					{
							"secImg":"http://i8.mifile.cn/v1/a1/5f9c55a5-c60f-69c2-04ca-049aad5e26ba!720x80.webp",
							"homeItemList":[
								{
									"productImg":"http://i8.mifile.cn/v1/a1/6f2954f1-9b60-6d87-ffc1-ca203190fdb7!221x221.webp",
									"productName":"小米AI音箱",
									"productdet":"听音乐、语音遥控家电",
									"productPrice":"299",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/b67f638e-ae86-f8da-79b6-c1d32d562cb4!221x221.webp",
									"productName":"小爱万能遥控版",
									"productdet":"传统家电秒变智能",
									"productPrice":"199",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/6b0e3756-f419-1877-9d0f-5ea9ceca718e!221x221.webp",
									"productName":"随身蓝牙音箱",
									"productdet":"全金属外壳，内置麦克风",
									"productPrice":"58",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/29abb2d6-dfa5-939a-a481-6270f2d58651!221x221.webp",
									"productName":"运动蓝牙耳机",
									"productdet":"音随你动",
									"productPrice":"99",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/54aa49b2-38ec-8239-a04e-511f9513d949!221x221.webp",
									"productName":"分体蓝牙耳机",
									"productdet":"打破“线”制，为自由发声",
									"productPrice":"199",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/951c2887-535c-7348-b313-9ee8bb58ba96!221x221.webp",
									"productName":"项圈蓝牙耳机",
									"productdet":"轻盈随心，乐享不停",
									"productPrice":"169",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/4cbb9642-22f2-8678-810e-f6bfdcc1330a!221x221.webp",
									"productName":"小米小爱智能闹钟",
									"productdet":"能听会说的人工智能闹钟",
									"productPrice":"138",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/0435ff65-2836-ba76-374e-38ae5a55d93f!221x221.webp",
									"productName":"蓝牙耳机Air",
									"productdet":"真无线 乐享无限自由",
									"productPrice":"399",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/497e767f-ee21-4fc5-e55d-3525cc5f6987!221x221.webp",
									"productName":"圈铁耳机Pro",
									"productdet":"好故事，让好声音述说",
									"productPrice":"149",
								},
								
								]},
					{
							"secImg":"http://i8.mifile.cn/v1/a1/5b89b77e-cdd5-bc72-c38b-cda838ee82fa!720x80.webp",
							"homeItemList":[
								{
									"productImg":"http://i8.mifile.cn/v1/a1/28087e94-a2bf-9d6a-fb59-6abb87382cbf!221x221.webp",
									"productName":"LED 智能灯",
									"productdet":"照明之上，光的艺术品",
									"productPrice":"169",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/1c1bbd6c-784f-3ee5-6d50-cc220e06e9e1!221x221.webp",
									"productName":"智睿台灯二代",
									"productdet":"智能护眼，手机智能控制",
									"productPrice":"199",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/90da24e3-b342-ae5a-c6a4-b34a8dd8c2d3!221x221.webp",
									"productName":"米家台灯Pro",
									"productdet":"全桌面立体光照",
									"productPrice":"349",
								},{
									"productImg":"http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef62eeb7a0709f80170973680994267.png?thumb=1&w=221&h=221",
									"productName":"米家LED吸顶灯",
									"productdet":"用光线，还原理想生活",
									"productPrice":"399",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/6bd70a31-d3a3-24f6-e235-4785c75b0372!221x221.webp",
									"productName":"米家床头灯2",
									"productdet":"满满的一罐子柔光",
									"productPrice":"169",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/9bbc3917-1601-dbed-3193-0bbf589e2ede!221x221.webp",
									"productName":"米家感应夜灯",
									"productdet":"举步之间，光明立现",
									"productPrice":"49",
								},{
									"productImg":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/022f219d77818c12e98d15660614d670.jpg?thumb=1&w=221&h=221",
									"productName":"飞利浦吸顶灯",
									"productdet":"让好光充满每个角落",
									"productPrice":"299",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/9c239f32-dce0-e15b-349b-2f9693f538f0!221x221.webp",
									"productName":"三室一厅吸顶灯",
									"productdet":"让好光充满每个角落",
									"productPrice":"2099",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/d4e741eb-c0d0-1d59-dbf3-e593de086f4f!221x221.webp",
									"productName":"米家充电台灯",
									"productdet":"三挡可调，40h长续航",
									"productPrice":"99",
								},
								
								]},
					{
							"secImg":"http://i8.mifile.cn/v1/a1/1cda8576-d3a1-2f11-8359-3c2b14bf0d2d!720x80.webp",
							"homeItemList":[
								{
									"productImg":"http://i8.mifile.cn/v1/a1/4d2f583e-e546-289f-3983-fdae7ef36e15!221x221.webp",
									"productName":"平衡车",
									"productdet":"年轻人的酷玩具",
									"productPrice":"1999",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/1fd7f261-1d68-784e-a1f7-17384d00dc1d!221x221.webp",
									"productName":"电动滑板车",
									"productdet":"便携折叠，自由穿行",
									"productPrice":"1999",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/2b741ce0-8a00-ad2e-ca1b-0831841b4c23!221x221.webp",
									"productName":"电动滑板车Pro",
									"productdet":"性能提升，动力更强劲",
									"productPrice":"2799",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/90003447-2eaf-f268-1ed6-4903be237854!221x221.webp",
									"productName":"平衡车 Plus",
									"productdet":"一个形影不离的新伙伴",
									"productPrice":"3499",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/2bb52104-3e6c-192c-422f-86f5a08249c8!221x221.webp",
									"productName":"平衡车燃动版",
									"productdet":"燃动升级，随走随停",
									"productPrice":"2999",
								},{
									"productImg":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b6257b3748e2c9e364366b13072f012c.jpg?thumb=1&w=221&h=221",
									"productName":"米家九号平衡轮",
									"productdet":"能花式酷玩的“风火轮”",
									"productPrice":"999",
								},
								
								]},
					{
							"secImg":"http://i8.mifile.cn/v1/a1/a3e7d93c-1027-78ef-2d5f-f1de56da269e!720x80.webp",
							"homeItemList":[
								{
									"productImg":"http://i8.mifile.cn/v1/a1/c9c2cd57-0baa-edd3-a7fd-db53fb892a03!221x221.webp",
									"productName":"摄像机云台版",
									"productdet":"高清画质，守护家的每一面",
									"productPrice":"199",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/a676eb25-389c-5e80-f65a-abd37ed6b611!221x221.webp",
									"productName":"小米米家智能摄像机",
									"productdet":"智能侦测 安全守护",
									"productPrice":"129",
								},{
									"productImg":"http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/657331f5a96a32fead61ed9564e549a2.jpg?thumb=1&w=221&h=221",
									"productName":"投影仪青春版",
									"productdet":"伴你左右的轻巧高清影院",
									"productPrice":"2399",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/5fcf0769-1485-a856-3ec6-1945c5150968!221x221.webp",
									"productName":"小米路由器 HD",
									"productdet":"智能家庭中心 内置1TB硬盘",
									"productPrice":"1299",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/f5ef12fe-802a-6e7a-802d-9f954b64695b!221x221.webp",
									"productName":"电力猫套装",
									"productdet":"有插座的地方，就有WiFi",
									"productPrice":"249",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/5fd3e110-544b-5fd7-167f-15bc1db59127!221x221.webp",
									"productName":"路由4A千兆",
									"productdet":"双核全千兆AC1200路由器",
									"productPrice":"169",
								},
								
								]},
					{
							"secImg":"http://i8.mifile.cn/v1/a1/c1dce5fa-8aa7-30cd-affa-c1df88f6e2b2!720x80.webp",
							"homeItemList":[
								{
									"productImg":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1bb4feeecfad379e51ebe1652aad4b36.jpg?thumb=1&w=221&h=221",
									"productName":"米家电动牙刷",
									"productdet":"高效动力，刷的干净",
									"productPrice":"199",
								},{
									"productImg":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c3c9ded884a74eeb82386c04e1c870cb.jpg?thumb=1&w=221&h=221",
									"productName":"米家电动剃须刀",
									"productdet":"剃得干净，剃得快",
									"productPrice":"199",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/d8da0f05-7faa-23f0-a2d9-ce33251fefcf!221x221.webp",
									"productName":"水离子吹风机",
									"productdet":"快速吹干，深度补水",
									"productPrice":"199",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/3f0c9aaf-b2b4-e43e-ca44-3d0ba2941d75!221x221.webp",
									"productName":"贝医生声波电动牙刷",
									"productdet":"声波净齿，软毛护龈",
									"productPrice":"99",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/44f2d298-35cc-dac9-fda6-e680c20aeda4!221x221.webp",
									"productName":"便携电动剃须刀",
									"productdet":"男人必备的第二把剃须刀",
									"productPrice":"179",
								},{
									"productImg":"http://i8.mifile.cn/v1/a1/9280219a-9675-b5e5-97f0-79271f874b4b!221x221.webp",
									"productName":"米家自动洗手机套装",
									"productdet":"伸手出泡，抑菌有效",
									"productPrice":"79",
								},
								
								]}

					]
		}
		},
		components: {
			miBanner,
		},
		methods: {
            
		},
		mounted() {
			
		}
	}
</script>

<style lang='less' scoped="scoped">
	.zhinengbox{
		width: 100%;
		height: 100%;
		background: #eee;
		.homeSwiper {
			border-bottom: 1px solid #ccc;
			img {
				display: block;
			}
		}
		.navbar{
			display: flex;
			flex-wrap: wrap;
			box-sizing: border-box;
			margin-top: 6/64rem;
			.item{
				width: 20%;
				height: 88/64rem;
				flex:1;
				.aimg{
					display: block;
					img{
						width: 82/64rem;
						height: 88/64rem;
					}
				}
			}
		}
		.shopitem{
			background: #f1f1f1;
			margin-top: 6/64rem;
			.shopimg{
				width: 100%;
				height: 46/64rem;
				display: block;
			}
			.itembox{
				display: flex;
				flex-wrap: wrap;
				margin-left: 7/64rem;
				box-sizing: border-box;
				.item{
					width: 127/64rem;
					height: 214/64rem;
					border-radius: 4/64rem;
					margin-right: 6/64rem;
					a{
						display: block;
						color: #3e3e3e;
						background: #fff;
						text-align: center;
						border-radius: 0 0 4/64rem 4/64rem;
						padding-bottom: 8/64rem;
						img{
							width: 127/64rem;
							height: 127/64rem;
							display: block;
							margin-bottom: 8/64rem;
							border-radius: 4/64rem 4/64rem 0 0;
						}
						p{
							padding: 0 6/64rem;
							line-height: 24/64rem;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							font-size: 13/64rem;
						}
						.title{
							font-weight: bold;
							font-size: 15/64rem;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
						.jiage{
							font-size: 17/64rem;
							font-weight: bold;
							color: red;
							.icon{
								font-size: 14/64rem;
								vertical-align: 1/64rem;
							}
						}
					}
				}
			}
		}
	}
</style>