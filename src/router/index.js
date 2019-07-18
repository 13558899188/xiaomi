import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home'
import Sort from '@/pages/Sort/sort'
import Car from '@/pages/Car/car'
import Mine from '@/pages/Mine/mine'


import homeBiyeJi from '@/components/homeBiyeJi'
import homeCompute from '@/components/homeCompute'
import homeJiadian from '@/components/homeJiadian'
import homePhone from '@/components/homePhone'
import homeShenghuo from '@/components/homeShenghuo'
import homeTuijian from '@/components/homeTuijian'
import homeTV from '@/components/homeTV'
import homeZhineng from '@/components/homeZhineng'
import Search from '@/components/Search'
import homeSearch from '@/pages/homeSearch/homeSearch'

import HSPublic from '@/pages/HSPublic/HSPublic'
import carlike from '@/components/carlike'
import shopCar from '@/pages/shopCar/shopCar'
import order from '@/pages/order/order'
import waitpay from '@/pages/waitpay/waitpay'
import orderpublic from '@/pages/orderpublic/orderpublic'
import ordersucc from '@/pages/ordersucc/ordersucc'


import Login from '@/pages/Login/login'
import Commodity from '@/pages/Commodity/commodity'
import Applyafter from '@/pages/Applyafter/applyafter'
import Member from '@/pages/Member/member'
import Couponlist from '@/pages/Couponlist/Couponlist'
import Serve from '@/pages/Serve/serve'
import Fma from '@/pages/Fma/fma'
import Zhuche from '@/pages/Zhuche/zhuche'
import login from '@/pages/Login/login'

import searchLazyload from '@/components/searchLazyload'
import shoppublic from '@/pages/public/public'
import applyafter from '@/pages/Applyafter/applyafter'

import Mhome from '@/pages/Mine/Mhome'
import set from '@/pages/Mine/set'
import addres from '@/pages/public/addres'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Home
    },
    {path:'/Home',name:'Home',component:Home,children:[
    		{path:'homeBiyeJi',name:'homeBiyeJi',component:homeBiyeJi},
    		{path:'homeCompute',name:'homeCompute',component:homeCompute},
    		{path:'homeJiadian',name:'homeJiadian',component:homeJiadian},
    		{path:'homePhone',name:'homePhone',component:homePhone},
    		{path:'homeShenghuo',name:'homeShenghuo',component:homeShenghuo},
    		{path:'homeTuijian',name:'homeTuijian',component:homeTuijian},
    		{path:'homeTV',name:'homeTV',component:homeTV},
    		{path:'homeZhineng',name:'homeZhineng',component:homeZhineng},
    		{path:'Search',name:'Search',component:Search}
    ]},
    {path:'/searchLazyload',name:'searchLazyload',component:searchLazyload},
    {path:'/Sort',name:'Sort',component:Sort },
    {path:'/Car',name:'Car',component:Car },
    {path:'/Mine',name:'Mine',component:Mine },
	{path:'/HSPublic',name:'HSPublic',component:HSPublic },
    {path:'/Login',name:'Login',component:Login },
    {path:'/Commodity',name:'Commodity',component:Commodity },
    {path:'/Applyafter',name:'Applyafter',component:Applyafter},
    {path:'/Member',name:'Member',component:Member},
    {path:'/Couponlist',name:'Couponlist',component:Couponlist},
    {path:'/Serve',name:'Serve',component:Serve},
    {path:'/Fma',name:'Fma',component:Fma},
    {path:'/Zhuche',name:'Zhuche',component:Zhuche},
    {path:'/shoppublic',name:'shoppublic',component:shoppublic},
		{path:'/login',name:'login',component:login},
		{path:'/applyafter',name:'applyafter',component:applyafter},
		{path:'/Mhome',name:'Mhome',component:Mhome},
		{path:'/set',name:'set',component:set},
		{path:'/homeSearch',name:'homeSearch',component:homeSearch},
		{path:'/addres',name:'addres',component:addres},
		{path:'/order',name:'order',component:order},
		{path:'/orderpublic',name:'orderpublic',component:orderpublic},
		{path:'/ordersucc',name:'ordersucc',component:ordersucc},
		{path:'/waitpay',name:'waitpay',component:waitpay},
		{path:'/shopCar',name:'shopCar',component:shopCar}
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    }
    return {x: 0, y: 0}
}
})
