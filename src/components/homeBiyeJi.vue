<template>
	<div class="tuijainBox">
		<miBanner swiperId="homeSwiper">
			<div slot="bannerImg" class="swiper-slide">
				<router-link to="/shoppublic"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9849e262719b97785da8e4b63993e370.jpg?thumb=1&w=720&h=360"/></router-link>
			</div>
			<div slot="bannerImg" class="swiper-slide">
				<router-link to="/shoppublic"><img src="//i8.mifile.cn/v1/a1/79414895-980e-1c75-5a1d-2bcaf788a1cd!720x360.webp"/></router-link>
			</div>
			<div slot="bannerImg" class="swiper-slide">
				<router-link to="/shoppublic"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68bbb95bf59e234d1a645703789ae6da.jpg?thumb=1&w=720&h=360"/></router-link>
			</div>	
		</miBanner>
		
		<ul class="homeFenlei">
			<li v-for="(item,index) in fenleiArr" :key="index">
				<router-link to="/Search"><img v-lazy.container="item" alt="" /></router-link >
			</li>			
		</ul>
		<homeItem :reception="homeArr">		</homeItem>	
						
		<homeBottomItem :homeBottomObj="homeBottomArr"> </homeBottomItem>
		
		<miBackTop backTopObj="navContent"></miBackTop>
	
	</div>
</template>

<script>
	import miBanner from './miBanner'
	import homeItem from './homeItem'
	import miBackTop from './miBackTop'
	import homeBottomItem from './homeBottomItem'
	export default {
			components:{
			miBanner,
			homeItem,
			homeBottomItem,
			miBackTop
		},
		data(){
			return {
				homeArr:[],
				fenleiArr:[
					"http://i8.mifile.cn/v1/a1/290976f3-acac-8a62-7e5c-a19985a6414b!144x152.webp",
					"http://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e!144x152.webp",
					"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/52cdc0f1983c0d53c3cdb80ed7167621.gif",
					"http://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee!144x152.webp",
					"http://i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80!144x152.webp",
					"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152",
					"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152",
					"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152",
					"http://i8.mifile.cn/v1/a1/65fd2670-a567-dac3-59d1-6d96398cb733!144x152.webp",
					"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152"
				],
				homeBottomArr:{
					"bottomImg":[
						"http://i8.mifile.cn/v1/a1/46c44f3e-479d-a999-dd2d-98fb39b51e17!358x480.webp",
						"http://i8.mifile.cn/v1/a1/b79cb907-3ae4-2a35-6756-b243b386a95a!358x480.webp",
						"http://i8.mifile.cn/v1/a1/1a8f5c31-f50c-5be0-3df0-f2c5c839e345!358x480.webp",
						"http://i8.mifile.cn/v1/a1/8cfcd654-4af5-9ae6-c6cc-1ba9d28be8e8!358x480.webp",
						"http://i8.mifile.cn/v1/a1/52866372-7fe5-76c2-29a0-9ae32d07b8ff!358x480.webp",
						"http://i8.mifile.cn/v1/a1/ad91499a-59ab-adc3-8fd5-98aefc1c43b4!358x480.webp"
					],
					"yiqiBuy":"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/21cc5002d90972dad5f9b77b4d1c6801.jpg?thumb=1&w=720&h=280",
					"aboutMi":"了解小米"
				}
			}
		},
		
		mounted(){
			this.getData();
		},
		methods:{
			getData(){
				this.$axios.get("../../static/data/homeItemData.json")
				.then(
					res=>{
					this.homeArr = res.data.homeItemArr;
				}).catch(err=>{
					console.log("err",err);
				})
			},
			navShow(){		
				this.isShow = !this.isShow			
			},
			headerNav(index){
				this.currIndex=index;
			}
			
		}
	}
</script>

<style lang='less'>
.tuijainBox{
	/*margin-bottom: 60/64rem;*/
	/*overflow: auto;*/
} 
	.homeFenlei{
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		li{
			width:80/64rem ;
			img{
				width:80/64rem;
			}
		}
	}
</style>