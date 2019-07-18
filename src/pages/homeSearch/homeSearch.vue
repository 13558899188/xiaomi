<template>
	<div class="focusSear">
		<div class="header">
			<i class="left" @click="back"></i>
			<input type="text" placeholder="搜索商品名称" @focus="huoqu" @blur="shiqu" @keydown.enter="search">
			<i class="right" @click="sear"></i>
		</div>
		<div class="hotSea">
			<p>热门搜索</p>
			<a href=""><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7d383617d38a14a0c5b67210b350ac94.jpg?w=1080&h=300&bg=C8E6E7" alt=""></a>
		</div>
		<div class="tags">
			<router-link  :to="item.ahref" :class="item.cla" v-for="(item,index) in shopList" :key="index">{{item.title}}</router-link>
		</div>
		<div class="common">
			<p>常用分类</p>
			<router-link  :to="item.ahref" class="combg" v-for="(item,index) in commonList" :key="index">{{item.title}}</router-link>
		</div>
	</div>
</template>
<script>
	
	export default{
		name:'homeSearch',
		data(){
			return{
				shopList:[
					{title:'小米MIX 3',ahref:'',cla:'tags1'},
					{title:'Redmi K20',ahref:'',cla:'tags2'},
					{title:'小米手环4',ahref:'',cla:'tags3'},
					{title:'小米巨能写中性笔',ahref:'',cla:'tags4'},
					{title:'Redmi K20 Pro ',ahref:'',cla:'tags5'},
					{title:'LUCKYME星座S925银镶珍珠吊坠',ahref:'',cla:'tags6'},
					{title:'米家走步机',ahref:'',cla:'tags7'},
					{title:'手机数据线  ',ahref:'',cla:'tags8'}
				],
				commonList:[
					{title:'手机',ahref:''},{title:'电视',ahref:''},
					{title:'笔记本',ahref:''},{title:'盒子',ahref:''},
					{title:'路由器',ahref:''},{title:'平板',ahref:''},
					{title:'投影',ahref:''},{title:'手表',ahref:''},
					{title:'VR',ahref:''},{title:'穿戴',ahref:''},
					{title:'影音',ahref:''},{title:'空气净化器',ahref:''},
					{title:'空调',ahref:''}
				]
			}
		},
		methods:{
			huoqu(){
				
			},
			shiqu(){
				
			},
			search(){
				this.$router.push('/HSPublic')
			},
			back(){
				this.$router.push('/home')
			},
			sear(){
				this.$router.push('/homeSearch')
			}
		}
		
	}
	
</script>

<style scoped="scoped" lang="less">
	
	.focusSear{
		color: #3c3c3c;
		.header{
			height: 50/64rem;
			width: 100%;
			background: #F2F2F2;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			padding: 0 15/64rem;
			.left{
				display: inline-block;
				width: 27px;
				height: 27px;
				background: url("../../assets/images/icon/xiangleft.png") no-repeat center center;
				background-size:27px 27px; 
			}
			.right{
				display: inline-block;
				width: 32px;
				height: 32px;
				background: url("../../assets/images/icon/search.png") no-repeat center center;
				background-size:32px 32px; 
			}
			input{
				width: 276/64rem;
				height: 28/64rem;
				outline: none;
				border: none;
				border-radius: 3/64rem;
				text-indent: 1em;
				font-size: 16px;
			}
		}
		.hotSea{
			height: 150/64rem;
			padding-top: 10/64rem;
			width: 100%;
			p{
				line-height: 30/64rem;
				padding: 0 15/64rem 10/64rem;
				font-size: 12px;
			}
			a{
				display: block;
				height: 105/64rem;
				width: 100%;
				img{
					height: 105/64rem;
					width: 100%;
				}
			}
		}
		.tags{
			padding: 10/64rem 15/64rem;
			display: flex;
			flex-wrap: wrap;
            a{
				color: rgb(72, 72, 72);
				display: inline-block;
				padding: 8/64rem 12/64rem;
				margin: 6/64rem;
				border: 1px solid #e4e4e4;
				border-color: rgb(151, 194, 138);
				background: rgb(228, 245, 226);
				font-size: 13/64rem;
				color: #484848;
			}
			.tags2{
				border-color: rgb(252, 160, 167);
				background: rgb(249, 234, 234);
			}
			.tags3{
				border-color: rgb(140, 218, 222);
				background: rgb(232, 246, 246);
			}
			.tags4{
				border-color: rgb(250, 194, 136);
				background: rgb(252, 229, 205);
			}
			.tags5{
				border-color: rgb(227, 175, 150);
				background: rgb(250, 232, 232);
			}
			.tags6{
				border-color: rgb(187, 208, 144);
				background: rgb(242, 246, 233);
			}
			.tags7{
				border-color: rgb(250, 194, 136);
				background: rgb(248, 242, 236);
			}
			.tags8{
				border-color: rgb(252, 160, 167);
				background: rgb(249, 234, 234);
			}
		}
		.common{
			padding: 0 15/64rem;
			p{
				line-height: 30/64rem;
				padding-bottom:10/64rem;
				font-size: 12px;
			}
			.combg{
				display: inline-block;
				background: #f5f5f5;
				height: 30/64rem;
				line-height: 30/64rem;
				padding: 0 10/64rem;
				margin-right: 10/64rem;
				margin-bottom: 7/64rem;
				color: rgba(0,0,0,.54);
			}
		}
	}
</style>