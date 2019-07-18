<template>
  <div class="tabberaWrap">  		
  	<tabItem txt="首页" mark="home" :selected="selected" @change="getVal">
  		<img slot="normalImg" src="../assets/images/tabbar/home.png" alt="" />
  		<img slot="activeImg" src="../assets/images/tabbar/home2.png" alt="" />
  	</tabItem>
 	<tabItem txt="分类" mark="sort" :selected="selected" @change="getVal">
  		<img slot="normalImg" src="../assets/images/tabbar/book.png" alt="" />
  		<img slot="activeImg" src="../assets/images/tabbar/book2.png" alt="" />
  	</tabItem>
  	<tabItem txt="购物车" mark="car" :selected="selected" @change="getVal">
  		<img slot="normalImg" src="../assets/images/tabbar/car.png" alt="" />
  		<img slot="activeImg" src="../assets/images/tabbar/car2.png" alt="" />
  	</tabItem>
  	<tabItem txt="我的" mark="mine" :selected="selected" @change="getVal">
  		<img slot="normalImg" src="../assets/images/tabbar/tabbar4.png" alt="" />
  		<img slot="activeImg" src="../assets/images/tabbar/tabbar2.png" alt="" />
  	</tabItem>   		
  </div>
</template>

<script>
import tabItem from "./tabItem.vue"
export default {
	data(){
		return{
			selected:"home"
		}
	},
  components:{
  	tabItem
  },
  methods:{
  	getVal(val){
  		this.selected = val;
  	}
  }
 }
</script>

<style lang='less'>
	.tabberaWrap{
		max-width: 640px;
		width: 100%;
		height: 50/64rem;
		background: #efefef;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 0;	
		z-index: 66;
	}
	
</style>
