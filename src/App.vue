<template>
  <div id="app">    
    <router-view/>
  </div>
</template>

<script>
import {obj} from '../static/js/util.js'
import Tabbar from './components/tabbar'

export default {
  name: 'App',
  components:{
  	Tabbar
  },
//beforeCreate:function(){
//	this.$router.push('/home')
//},
  mounted(){
  	obj.setRem()
  }
}
</script>

<style lang='less'>
*{
	margin: 0;
	padding: 0;
}
li{
	list-style: none;
}
a{
	text-decoration: none;
}
body{
	font-size: 14px;
}
#app {
  font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
