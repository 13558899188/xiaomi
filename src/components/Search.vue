<template>
	<div id="searchWrap">
		<mibanner swiperId="serchSwiper" id="searchLunbo">
			<div slot="bannerImg" class="swiper-slide">
				<a href="#"><img src="//i8.mifile.cn/v1/a1/02ae8e94-0832-03a8-b476-dceead2355c0.webp"/></a>
			</div>
			<div slot="bannerImg" class="swiper-slide">
				<a href="#"><img src="//i8.mifile.cn/v1/a1/f9cea6ca-2711-a7da-dd94-4468f0d591ec.webp"/></a>
			</div>
			<div slot="bannerImg" class="swiper-slide">
				<a href="#"><img src="//i8.mifile.cn/v1/a1/1536b35d-2a41-9343-8a53-b8f5a679eede.webp"/></a>
			</div>
			<div slot="bannerImg" class="swiper-slide">
				<a href="#"><img src="//i8.mifile.cn/v1/a1/5d30814e-27d0-6bd5-8515-f05afefffae8.webp"/></a>
			</div>
			<span slot="lunbleft" class="lunbodw" @click="backindex()"><i class="Lunboleft"></i></span>
			<span slot="lunbright" class="lunbodwright"><i class="Lunboright" @click="rightf"></i></span>
		</mibanner>
		<div class="daojishi">
			<p class="daojishi-org">
				<span class="miaoshajia">秒杀价￥1099</span>
				<span class="jujieshu">距结束{{d}}:{{h}}:{{m}}:{{s}}</span>
			</p>
		</div>
		<!--<searchcuxiao></searchcuxiao>-->
		<searchmitxt></searchmitxt>
		<searchrongliang></searchrongliang>
		<searchxinxi></searchxinxi>
		<searchpinglun></searchpinglun>
		<searchlazyload></searchlazyload>
		<searchtuijian></searchtuijian>
		<searchDwbutton></searchDwbutton>
		<backTop></backTop>
		<div class="fenxiang" v-show="fxshow">
			<div class="fxbox">
				<p class="title">分享</p>
				<div class="icon">
				</div>
				<p class="close" @click="qclear">取消</p>
			</div>
		</div>
		<div class="shopxq" v-show="this.$store.state.shopSelect">
			<div class="shopxqb">
				<div class="guanbi"><span @click="shopClose"></span></div>
				<div  v-for="(item,index) in this.shopObj">
				<div class="shop" v-for="(item2,index2) in item.shopItem" v-show="item2.sShow">
				  <div class="shopL">
				  	<img :src="item2.urlimg"/>
				  </div>
				  <div class="shopR">
					  	<div class="shoptitle"><span class="fuhao">￥</span>{{item2.pri}}<del class="cx">￥{{item2.cxpri}}</del></div>
					  	<p>{{item2.htitle}}{{ shopC}}</p>
				  </div>
				</div>
				</div>
				<div class="content">
					<div class="shoptitle2">
						<p>版本</p>
						<div class="shopitem" v-for="(item,index) in this.shopObj">
							<span v-for="(item2,index2) in item.shopItem" :class="{btn:true,selActive:item2.sShow,}" @click="selShop(index,index2)">{{item2.title}}</span>
						</div>
					</div>
					<div class="shopcolor">
					   <p>颜色</p>
					   <div class="shopitem">
							<span v-for="(item,index) in shopColorL" :class="{btn:true,selActive:item.scShow,}" @click="selectC(index)">{{item.scolor}}</span>
						</div>
					</div>
				    <div class="shopnum">
				       <span class="title">购买数量</span>
				       <div class="right">
				           <span class="jian" @click="jian"></span>
				           <input type="text" v-model="num"/>
				           <span class="jia" @click="jia"></span>
				       </div>
				    </div>
				    <div class="fuwu">
				    	<p>意外保险<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjhFNUZBNEJBNjg2MTFFN0JGODNEMTFGMzE1NTJDREYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjhFNUZBNENBNjg2MTFFN0JGODNEMTFGMzE1NTJDREYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNEE0ODY5NEE2NzUxMUU3QkY4M0QxMUYzMTU1MkNERiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOEU1RkE0QUE2ODYxMUU3QkY4M0QxMUYzMTU1MkNERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqoKySAAAALWSURBVHjatJfPS1RRFMef9002Q9BiRlPIzE2TusgWQZQFFS364aJwUZBEYW3atAv6S1y0K3chSEUbqQaSQoqKirJGwppxMaZvIaSTaPo98L1xebxf900d+KDMu/d+7zn33PPOa3KSmQuKYA/YBQogy2d1sAgqoAy+gvW4BZtinufAEXAIzINpMAsWwIoxpgV0gW7QBl6ASWOMlfB+MEAPnoGfCaMjmzjBCD0C7xLOcxQ4D24xrGlN5t7mWirOYxkwBJrBPfDbacy2gcvgFxgFf8KEz4F2cCckQeQ8DzLJJMHyoAo8JtZUSGIOM0fGzR+19YHDFA3ytAPcBL0UzfH37UyoXibYZ7BmzNsAH8EZel4zhWWRq+AuM9Zv4tkNjpNMnQAl8IZCeW6gwCiWffPXed0ugFeyMS18nLt5GXJWQ/RKbAS8Z3g9eiAh7qF4F6/Smm+NJa6xA3xT9Fru6ZMQ0TzP1KFANWTclO9YguwptVzF+zbP6uNELOqFJI82z7fZIFukVjFD4emYBccSXJ2dxv9zEeNEa6/ihO8N3tcO5onDxKpGjP0hmuJxq0U5DLJ9YJAZX2WhiDIJdUuGb5l6StFBFhTt6WjUi4Emz7OZBjw9Zog+5r1ObIreZi1Fc8aZ2orK3LpipWpNkUy6ZJYs54rWgmJC7E4Z7nKKOaI15zLcB8Bri8mSIDOs00uWwqekxit2GG0s8DbCcfc1yAqs1V9cvraaWeQ/WZyx3qxnITzASM3olmSSjVrSVuc0uE5sWqFuav3thSR0D8Altiv/2raCi+ChLjBmB1Jjh9gP3vIIwmwL29wy/8b15FfYCJSSNHvSjaz+r2bP9Q0ULz+ATvZIlRTXxTzTa3zz3TdFg4S1uLwzl9kjtfMYli0a+rPgpFFON9J8whxlu1JjwZhlJ2F+whTYa/Xwmknv9jztJ0zQR1uRIcwbtXqFd7nCYpToo21TgAEAWy6shL93DD4AAAAASUVORK5CYII=" alt="" /></p>
				    	<div class="shopitem">
							<span :class="{btn:true,selActive:scShow1,}" @click="fuwu1">延长保修服务        29元</span>
						</div>
				    </div>
				    <div class="fuwu">
			    	<p>延长保修<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjhFNUZBNEJBNjg2MTFFN0JGODNEMTFGMzE1NTJDREYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjhFNUZBNENBNjg2MTFFN0JGODNEMTFGMzE1NTJDREYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNEE0ODY5NEE2NzUxMUU3QkY4M0QxMUYzMTU1MkNERiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOEU1RkE0QUE2ODYxMUU3QkY4M0QxMUYzMTU1MkNERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqoKySAAAALWSURBVHjatJfPS1RRFMef9002Q9BiRlPIzE2TusgWQZQFFS364aJwUZBEYW3atAv6S1y0K3chSEUbqQaSQoqKirJGwppxMaZvIaSTaPo98L1xebxf900d+KDMu/d+7zn33PPOa3KSmQuKYA/YBQogy2d1sAgqoAy+gvW4BZtinufAEXAIzINpMAsWwIoxpgV0gW7QBl6ASWOMlfB+MEAPnoGfCaMjmzjBCD0C7xLOcxQ4D24xrGlN5t7mWirOYxkwBJrBPfDbacy2gcvgFxgFf8KEz4F2cCckQeQ8DzLJJMHyoAo8JtZUSGIOM0fGzR+19YHDFA3ytAPcBL0UzfH37UyoXibYZ7BmzNsAH8EZel4zhWWRq+AuM9Zv4tkNjpNMnQAl8IZCeW6gwCiWffPXed0ugFeyMS18nLt5GXJWQ/RKbAS8Z3g9eiAh7qF4F6/Smm+NJa6xA3xT9Fru6ZMQ0TzP1KFANWTclO9YguwptVzF+zbP6uNELOqFJI82z7fZIFukVjFD4emYBccSXJ2dxv9zEeNEa6/ihO8N3tcO5onDxKpGjP0hmuJxq0U5DLJ9YJAZX2WhiDIJdUuGb5l6StFBFhTt6WjUi4Emz7OZBjw9Zog+5r1ObIreZi1Fc8aZ2orK3LpipWpNkUy6ZJYs54rWgmJC7E4Z7nKKOaI15zLcB8Bri8mSIDOs00uWwqekxit2GG0s8DbCcfc1yAqs1V9cvraaWeQ/WZyx3qxnITzASM3olmSSjVrSVuc0uE5sWqFuav3thSR0D8Altiv/2raCi+ChLjBmB1Jjh9gP3vIIwmwL29wy/8b15FfYCJSSNHvSjaz+r2bP9Q0ULz+ATvZIlRTXxTzTa3zz3TdFg4S1uLwzl9kjtfMYli0a+rPgpFFON9J8whxlu1JjwZhlJ2F+whTYa/Xwmknv9jztJ0zQR1uRIcwbtXqFd7nCYpToo21TgAEAWy6shL93DD4AAAAASUVORK5CYII=" alt="" /></p>
			    	<div class="shopitem">
						<span :class="{btn:true,selActive:scShow2}"  @click="fuwu2">全年意外保障服务        99元</span>
						<span :class="{btn:true,selActive:scShow3}" @click="fuwu3">全年碎屏保障服务        59元</span>
					</div>
			    </div>
                    <span class="goshop" @click="goToCar">加入购物车</span>
				</div>			    
			</div>
		</div>
		<div class="shopxq" v-show="this.$store.state.shopAdrShow">
			<div class="shopxqb">
				<div class="guanbi adr"><span @click="AdrClose"></span>收货地址</div>
				<div class="addres" v-for="item in this.$store.state.shopAdr">
					<div class="adrLeft"></div>
					<div class="adrRight">
						<p class="first">{{item.name}} {{item.diqu}}</p>
						<p class="pubAdr">{{item.adr}}</p>
					</div>
				</div>
				<span class="goshop1" @click="addAdr">选择新地址</span>
			</div>
		</div>
		<div class="shopxq" v-show="this.$store.state.ZengPinShow">
			<div class="shopxqb">
				<div class="guanbi adr"><span @click="ZengClose"></span>促销</div>
				<div class="cuXiaoItem">
					<span class="zengsong">赠品</span>
					<p class="zengsongTxt">赠米粉卡，最高含100元话费</p>
				</div>
			</div>
		</div>
		<div class="shopxq" v-show="this.$store.state.fuwuPublicShow">
			<div class="shopxqb">
				<div class="guanbi adr"><span @click="fuwuPublic"></span>服务说明</div>
				<div class="fuwuPublicItem" v-for="item in this.$store.state.fuwuPubList">
					<div class="fwpiLeft">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg==" alt="">
					</div>
					<div class="fwpiRight">
						<p class="title">{{item.txt}}</p>
						<p class="fwtxt">{{item.qita}}</p>
					</div>
				</div>
			</div>
		</div>		
	</div>
</template>
<script>
//	import searchcuxiao from './searchcuxiao'
	import searchDwbutton from './searchDwbutton'
	import mibanner from './miBanner'
	import searchmitxt from './searchMitxt'
	import searchrongliang from './searchrongliang'
	import searchxinxi from './searchXinxi'
	import searchpinglun from './searchPinglun'
	import searchlazyload from './searchLazyload'
	import searchtuijian from './searchtuijian'
	import backTop from './backTop'
	export default{
		data(){
			return{
				d:"",
				h:'',
				m:'',
				s:'',
				fxshow:false,
				shopC:'深太空灰',
				shopObj:[
				{shopItem:[
					{title:'4GB+64GB 全网通',sShow:true,urlimg:'https://i8.mifile.cn/a1/pms_1537323963.1278763.jpg',pri:'1299',cxpri:'1399',htitle:'小米8 青春版 4GB+64GB'},
					{title:'6GB+64GB 全网通',sShow:false,urlimg:'https://i8.mifile.cn/a1/pms_1537323994.03296551.jpg',pri:'1099',cxpri:'1699',htitle:'小米8 青春版 6GB+64GB'}
				]},
			    {shopItem:[
					{title:'4GB+128GB 移动4G+',sShow:false,urlimg:'https://i8.mifile.cn/a1/pms_1545793530.19138929.jpg',pri:'1049',cxpri:'1799',htitle:'小米8 青春版 移动4G+版 4GB+128GB'},
					{title:'4GB+128GB 全网通',sShow:false,urlimg:'https://i8.mifile.cn/v1/a1/3648d428-4cde-c32b-3dfd-acf39f8d0cf7.webp',pri:'1799',cxpri:'',htitle:'小米8 青春版 4GB+128GB'}
				]}],
				shopColorL:[
				   {scolor:"深太空灰",scShow:true},
				   {scolor:"全息幻影蓝",scShow:false}
				],
				scShow1:false,
				scShow2:false,
				scShow3:false,
				num:1
			}
		},
		components:{
			mibanner,
//			searchcuxiao,
			searchDwbutton,
			searchmitxt,
			searchrongliang,
			searchxinxi,
			searchpinglun,
			searchlazyload,
			searchtuijian,
			backTop
		},
		mounted(){
			this.countTime();
		},
		methods:{
			countTime: function () {
                //获取当前时间
                var date = new Date();
                var now = date.getTime();
                //设置截止时间
                var endDate = new Date("2019-7-19 23:23:23");
                var end = endDate.getTime();
                //时间差
                var leftTime = end - now;
                //定义变量 d,h,m,s保存倒计时的时间
                if (leftTime >= 0) {
                    this.d = this.getzero(Math.floor(leftTime / 1000 / 60 / 60 / 24));
                    this.h = this.getzero(Math.floor(leftTime / 1000 / 60 / 60 % 24));
                    this.m = this.getzero(Math.floor(leftTime / 1000 / 60 % 60));
                    this.s = this.getzero(Math.floor(leftTime / 1000 % 60));
                }
//              console.log(this.s);
                //递归每秒调用countTime方法，显示动态时间效果
                setTimeout(this.countTime, 1000);
          },
          getzero(num){
          	return num=num<10?'0'+num:num;
          },
          backindex(){
          	this.$router.push('/Home');
          },
          qclear(){
          	this.fxshow=!this.fxshow
          },
          rightf(){
          	this.fxshow=!this.fxshow
          },
          shopClose(){
          	this.$store.state.shopSelect=!this.$store.state.shopSelect;
          },
		  AdrClose(){
			this.$store.state.shopAdrShow=!this.$store.state.shopAdrShow
			},
		  addAdr(){
			  this.$router.push('/addres');
			  this.$store.state.shopAdrShow=!this.$store.state.shopAdrShow
		  },
		  ZengClose(){
			  this.$store.state.ZengPinShow=!this.$store.state.ZengPinShow
			},
		  fuwuPublic(){
			  this.$store.state.fuwuPublicShow=!this.$store.state.fuwuPublicShow
		  },
		  selShop(index,index2){
		  	 for(var i=0;i<this.shopObj.length;i++){
		  	 	 this.shopObj[i].shopItem[0].sShow=false;
		  	 	 this.shopObj[i].shopItem[1].sShow=false;
		  	 }
		  	 	this.shopObj[index].shopItem[index2].sShow=true;
		  },
		  selectC(index){
		  	for(var i=0;i<this.shopColorL.length;i++){
		  		this.shopColorL[i].scShow=false;
		  	}
		  	   this.shopColorL[index].scShow=true;
		  	   this.shopC=this.shopColorL[index].scolor;
		  },
		  jian(){
		  	this.num-=1;
		  	if(this.num<=1){
		  		this.num=1;
		  	}
		  },
		  jia(){
		  	this.num+=1
		  },
		  goToCar(){
		  	var shopList ={};
		  	var temp =null;
		  	for(var i=0;i<this.shopObj.length;i++){
		  		 if(this.shopObj[i].shopItem[0].sShow){
		  		 	temp = this.shopObj[i].shopItem[0]
		  		 }else if(this.shopObj[i].shopItem[1].sShow){
		  		 	temp = this.shopObj[i].shopItem[1]
		  		 }
		  	 }
		  	Object.assign(shopList,temp);
		  	this.$store.state.gounum+=this.num;
		  	shopList.shopNum = this.$store.state.gounum;
		  	var shopPbu = JSON.stringify(shopList);
		  	window.sessionStorage.setItem("shop",shopPbu);
		  	this.$store.state.shopSelect=!this.$store.state.shopSelect;
		  },
		  fuwu1(){
		  	this.scShow1=!this.scShow1
		  },
		  fuwu2(){
		  	this.scShow2=!this.scShow2
		  },
		  fuwu3(){
		  	this.scShow3=!this.scShow3
		  }
		}
	}
</script>
<style lang='less' scoped>
	#searchWrap{
		margin-bottom: 1.2rem;
		position: relative;
	}
	.swiper-pagination-bullet {
		width: 10/64rem;
		height:10/64rem;
		border-radius: 50%;
		background: #E5E5E5;
	}
	.swiper-pagination-bullet-active {
		background: #fff;
	}
	.bannerSwiper .swiper-slide img{
		display: block;
	}
	/*轮播图的定位样式*/
	#searchLunbo{
		position: relative;
		.lunbodw{
			position: absolute;
			display: block;
			border-radius: 50%;
			background: #484848;
			width: 35/64rem;
			height: 35/64rem;
			top:15/64rem;
			left: 15/64rem;
			z-index: 22;
			.Lunboleft{
				display: block;
				position: absolute;
				width: 25/64rem;
				height: 25/64rem;
				top:5/64rem;
				left: 5/64rem;
				background: url(../assets/images/icon/mileft.png) no-repeat;
				background-size: 25/64rem 25/64rem;
				
			}
		}
		.lunbodwright{
			position: absolute;
			display: block;
			border-radius: 50%;
			background: #484848;
			width: 35/64rem;
			height: 35/64rem;
			top:15/64rem;
			right: 15/64rem;
			z-index: 22;
			.Lunboright{
				display: block;
				position: absolute;
				width: 25/64rem;
				height: 25/64rem;
				top:5/64rem;
				right: 5/64rem;
				background: url(../assets/images/icon/fenxiang.png) no-repeat;
				background-size: 25/64rem 25/64rem;
			}
		}
	}
	/*倒计时的样式*/
	.daojishi{
		width: 100%;
		height: 54/64rem;
		line-height: 54/64rem;
		background: #F56600;
		color: #fff;
		font-size: 18/64rem;
		font-family: "微软雅黑";
		.daojishi-org{
			display: flex;
			margin: 0 20/64rem;
			justify-content: space-between;
		}
	}
	.fenxiang{
		position: fixed;
		bottom: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: rgba(0,0,0,.8);
		z-index: 100000;
		.fxbox{
			height: 200/64rem;
			background: #fff;
			position: absolute;
			bottom: 0;
			left: 0;
			width:100%;
			text-align:center;
			font-size:17/64rem;
			.title{
				line-height: 49/64rem;
			}
			.icon{
				line-height: 104/64rem;
				height: 104/64rem;
				background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABLCAMAAAAlIHt3AAAAolBMVEUAAADzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDzMwDChndyAAAANXRSTlMABO/7XPi8C8ePfk0aFQ/i0ntiOR/rsnApJd6FaVbNt6mhiVEI5tlHEsF2PTUv862ZlJ6kQjqxwdgAAASTSURBVFjDrZlnY6JAEIapKiVIEwtYwGDvyfz/v3Z3BNadXRY5w/MpkfXNMB0i/YowuS/dEQCo+eKRTKQukW8qIGbxtDt1A3iiU0fifR3qWIWdqIdQz8XvQv1TBwGrfsd+xyw+usiZv0IbY76ej40BTh+3A3np47QjMbZWKm19X+oY29Ap37d3geO0OzjtPeU1qQWBucwBQInWrfQ9oq68dP35PgLCstUNWMT7RvPB7QAQy7pDE8sfJ+uJTD5YQ4neZHwwAJY5H5Fr5YeUNJgDlHhC7d0NeAbcsTl19avKzn2V9ELv5VCHwweRYmOXmQMlk/oOcod6juzJE67QT6lgCT/4tc1vgTWbclhz3atxjxQoiLG/bnXhHIGIRNjrvSIRL87Pb6ooTtJcByGWJMSnb65MtyF3agwN2OSYc/RNIztYhbHPTElRb9aFSYBBtsjbjERGTcMqAkVcsYmMeMYK8vl+uuG4KEcqDxUcVixuQiOKtTUX/Kc/1suU3rq8gsQTeIurVFA4qvJSwQjlLrSHD/aOstbjM3Krvqu+LpolFfcVFKRUK1XaCImLzP5nXPSjVcbdfA7gGbyNVnXe/Fz8dCw/35JG3YP3+S77U9DHqUcWhhjeR2e3i7TcOkhE4Rdcn7ooqFnl9FxYQIuV4SW+7yfj+LEcQh0B16uw26/1hR9bNttpg0PE9tAeP316xdflcs7xymqk7US7r3VFlTHjZ7+8zrKkXx7nbnh4aF517OxCey/FlmAOrLYvv95Pb/hWvyaiqaXg/PKQtpDjEOsb/RamD6b8Cbne/D0gNlOJR0Y2GEjJmRu94QVA2aQ+79o+U9+jM7rMJ8wY3TtKPvVmc/Iuls9tiS+sJz7exRmUNbev6y9SX6ZiatKLx6XNPhO/WEmC+g1aE3VDjMMYv5dEg/pCeS0QzKkRu6d+cUMQca3zy6dwlGTsHtnsmg2pIqfNzqR8Mo8egBnjyyR4X5Tpo6YJjdgBxsSX67bnNWDScEJu8c40TMB4AvWpMFQzufIVnxV284ZPnEC1gDKm6jLOlipARP/BGZvQmBO+PKjykSqwMv2L7Ar3oIRUagwbu7fCNLw7sp16qorKD/pDUJ9RZm3fNw9wja+DM34Q9xpaSfiiE3yQVMPqD0HBZE0vgIbcJOhxqTbBZeGJO03INIwD/0zIVeEHshF3hQ1jGSLvi2fTGGXk0Ckvp+JSHQNmLngWxHGMi7KxCy9h81KJ4hv5RfQ6qXoUiohrlKKtLe+3ATN76KgFClPSTq36RGdb0BxqiWi/HhlxZSp8TmZdr+m8tmqi76iMePD6vWUmV/W6YsX3Z3riPdihhcUxN+JZm/jLyKkF7XpE77Rm0LgpCYe7kjwjdxqnPdcdRLHloDhF3ItfR2pmrhA7tMZF8sT57JJILwmf2Tf0QtHrsmTBZ1IotcGnGu3ADGS2qIPDHjhcS2qJY9LjWl88TG0bnM/n01bz0gFKUuJF6T/ojzfQnt5W+l+OD0Ug1s0/aORvw4Vm3Pj0q/f2VtzLa4XVxX1uSx2wO2rmY+nmPy0zd3t/w3yWpfb8AaKuco+H/7EBAAAAAElFTkSuQmCC) no-repeat center center;
			    background-size:50/64rem 40/64rem ;
			}
			.close{
				line-height: 48/64rem;
				border-top:1px solid #eee;
			}
		}
	}
	.shopxq{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0,0,0,.8);
		z-index: 100000;
		.shopxqb{
			height: 570/64rem;
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
			background: #fff;
			border-radius: 8/64rem 8/64rem 0 0;
			box-sizing: border-box;
			padding: 16/64rem;
			.guanbi{
				position: relative;
				line-height: 18/64rem;
				height: 18/64rem;
				font-size: 16/64rem;
				text-align: center;
				span{
					display: inline-block;
					position: absolute;
					right: 0;
					top: 0;
					background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAC80lEQVR4Ae3btZYUQRTGcdwi3F1D3P1FyIjQmDfANcQtwyXC3d3dnVlStPmCWpf5j1T1rXM6+Hbcfqe0b2+zJEmyKBlCBsEhMoh169aNUg4rr9zluFh/oL57W2WD8kS5osxFEHriIOWXktTJ7AgR2ik3laRO5hCITUrSSGZFhNBeudPI7/hAIE4rScwYriXcauI3/CEQ85UkSgzXEppCcDlKB8v9AGNmLGNCnXxX+iAI96YHAcY0QwhtlBsAYSiYNeLEcAjXikJwIR9y2DIGRKhQhvEFVWQYDuF6nu+VU4bjlSX40EMcIwhCa4DwXRlS9r0GHzPMjAmD6XsW8yUOAIypKSN8UwZ5332CdcY/ZbIHhFbK1Tyf/ZUjlAgBMf5yDIxwGSAMDns8wnUTgDGpDAgtlUugOwxJ7cAMxJhcIsJljhAegk+trmV4agk5ZaiZQ3VuauUYHAEtm81AwG7yh2BgBDcwGoLgs4nDmNDE61s4BLROMAsBMX4r4xtBuMDXCeEhvGPoenOA8FkZEF1dA2IMcs89DxAGxlfg4QPoO+Vsnud8qQSLE4JPrXzZHDMEXHTxKTJmCNhN+OwQM4TD2AYQnitt7FfD/beKt8qI+CB48cXVHXCmxw/BEUwcEA6B0JYjpNcyLCA8tFBrTRvhh9LNPf9Imhg+EW4ChOoKFMeYYR+Cl+ZdLZKXF323jLQQhvJaa5iWEXqKzCnD+N4kXMswgGCjZYSaHSqU4UW+/5EQ64xQU2Tx+4ZAs0npAyOfIktFP+pzzPB5Ch9HgPG56CoW4Q5AAAOjHYxCv0QH5TY/XcdPfEytBbUECwi+VqBFjQn+EcKvMzCCh6q0KQx+ljtcMRrGmAUgQEsAu8iYMejAyHeR9jFmAwh8UCXndWD0X14cSyCWAARQhjONcYNAHG/qTBXTCLyQ9JdALCMIkWM8IBCdlNd1XvgJjAlWMfaS2aOxF3dVVrhReKXSE3yoZYzFbn+yW5mW/Uu0SwaRQWQQOP8BKPAB6NT57AgAAAAASUVORK5CYII=) no-repeat center center;
					background-size: 18/64rem 18/64rem;
					width: 18/64rem;
					height: 18/64rem;
				}
			}
			.adr{
				border-bottom: 1px solid #ccc;
				height: 30/64rem;
				line-height: 30/64rem;
				padding-bottom: 10/64rem;
			}
			.cuXiaoItem{
				margin-top:8/64rem;
				.zengsong{
					    color: #f56600;
						border-radius: 1px;
						padding: 2/64rem 4/64rem;
						margin: 0 0 .01rem;
						font-size: 12/64rem;
						border:1px solid #f56600;
				}
				.zengsongTxt{
					margin-top: 6/64rem;
				}
			}
			.fuwuPublicItem{
				display: flex;
				margin: 16/64rem 0 20/64rem;
				font-size: 16/64rem;
				color: #000;
				.fwpiLeft{
					margin-right: 20/64rem;
					img{
						display: block;
						width: 18/64rem;
						height: 18/64rem;
						vertical-align: 2/64rem;
					}
				}
				.fwpiRight{
					.fwtxt{
						color: #999;
						font-size: 14/64rem;
					}
				}
				
			}
			.addres{
				margin-top: 6/64rem;
				display: flex;
				.adrLeft{
					width: 20/64rem; 
					background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAlCAYAAABReInxAAABgElEQVR4Ab3WA49dQQBH8Znatm0bYRk2fHHtxnhho9rG2vbu/wvuWXtmLk/yi3M5MgFZHMcDfEI9eofV4xMe4BgsYjcbN1EOBSrHzTg33oofUEw/sAVBnUU7lFA7TsPZefRAKenGWddnbIdS1j7d552Fn1BGvmEWRrsBZew6BrOBQ78Tj7EX8zAfe/EQnZBHGSzMMcijEjswUztRA3kcgXkQ8GZb4WsHuiCHezCfIIdHCO0J5PAepgFy2IvQ9kMOtTDdkMM8hDY34Pfkf8P6vD/pJ8jhMUJ7GjJo7qc0LXYG/J67MEdSmPi7Aif+IRiLMsijG4+xB/OxAHvxGN2QRwksBrsOZewqRpuFb1BGvsBiQpvRBqWsAeswbScyOGIcgrMClJIb8GbxGkqoiOBWoh6KqQyLEKmT6Iv533YjVnehiG4hdnPwBQr0EhaJWocWyKMKS5FKlyGHHhxCqr2AZlBA6s3DbwgA8BoWmbQVHRCEOqxApl2H0IcTyKUi7iBy/alAlLPFAtbIAAAAAElFTkSuQmCC) no-repeat center 3/64rem;
					background-size: 16/64rem 20/64rem;	
				}
				.adrRight{
					margin-left: 6/64rem;
					.first{
						font-size: 15/64rem;
						color: rgba(0,0,0,.87);
						line-height: 20/64rem;
					}
					.pubAdr{
						font-size: 13/64rem
						line-height20/64rem;
						color: #999;
					}
				}
			}
			.goshop1{
				width: 360/64rem;
				height: 36/64rem;
				line-height: 36/64rem;
				display: block;
				margin: 14/64rem auto;
				background: #F56600;
				border-radius: 18/64rem;
				text-align: center;
				color: #fff;
				font-size: 16/64rem;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				bottom: 10/64rem;
			}
			.shop{
				display: flex;
				align-items: center;
				.shopL{
					width: 115/64rem;
					border: 1px solid #eee;
					height: 115/64rem;
					img{
						width: 115/64rem;
						height: 115/64rem;
					}
				}
				.shopR{
					margin-left: 4/64rem;
					.shoptitle{
						font-weight: 400;
						font-size: 28/64rem;
						color: #ff6700;
						line-height: 34/64rem;
						.fuhao{
							font-size: 20/64rem;
							vertical-align: 2/64rem;
						}
						.cx{
							font-size: 14/64rem;
						    color: rgba(0,0,0,.54);
						    text-decoration: line-through;
						    transform: scale(0.5);
						    margin-left: 4/64rem;
						}
					}
					p{
						font-size: 15/64rem;
					}
				}
			}
		.content{
			position: fixed;
			margin-left: 18/64rem;
			height: 410/64rem;
			box-sizing: border-box;
			width: 92%; 
			bottom:0;
			left: 0;
			overflow: auto;
			.shoptitle2,.shopcolor,.fuwu{
				margin-top: 18/64rem;
				border-bottom: 1px solid #eee;
				padding-bottom: 18/64rem;
				box-sizing: border-box;
				p{
					display: flex;
					align-items: center;
					img{
						width: 17/64rem;
						height: 17/64rem;
						display: block;
						margin-left: 4/64rem;
					}
				}
				.shopitem{
					margin-left: 12/64rem;
					.btn{
						display: inline-block;
						padding: 0 6/64rem;
						height: 36/64rem;
						line-height: 36/64rem;
						text-align: center;
						border: 1px solid #eee;
						font-size: 12/64rem;
						border-radius: 4/64rem;
						margin-top: 8/64rem;
						&:nth-of-type(2){
							margin-left: 8/64rem;
						}
					}
				}
			}
			.shopnum{
				display: flex;
				height: 76/64rem;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1px solid #eee;
				.title{
					
				}
				.right{
					display: flex;
					border: 1px solid #ccc;
					background: #eee;
					span{
					    display: inline-block;
					    height: 34/64rem;
					    width: 34/64rem;
					}
					input{
						width: 34/64rem;
						height: 34/64rem;
						text-align: center;
						font-size: 16/64rem;
						border: none;
						outline: none;
					}
					.jia{
						background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAc0lEQVR4AWJIS0ujBBsD8W0oNga0YwcYAMMwGIV3ve3kW88x3R3GZAlDYJTgLx4eBfVBkFT+qkKaZ1+7EvIkyK2EWA4IECA/AQECZPW6Z6J6GBYlImNmgVwB2eIhRJxhYGqAABkMCBAgLOEtQY46ZIJDzQtkpFzgLwrvWQAAAABJRU5ErkJggg==) no-repeat center center;
						background-size: 14/64rem 14/64rem;
					}
					.jian{
						background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAT0lEQVR4Ae3TgQXAAAxE0azXDpLJKx3jmoOO0IR+fA7w4ELSioAAAQIECBAgn0My8+iq01BlQwwjXswWyG3I6TGIuGz47WuAAAECBAgQIA8XIA86877kLgAAAABJRU5ErkJggg==) no-repeat center center;
						background-size: 14/64rem 14/64rem;
					}
				}
			}
			.goshop{
				width: 360/64rem;
				height: 36/64rem;
				line-height: 36/64rem;
				display: block;
				margin: 14/64rem auto;
				background: #F56600;
				border-radius: 18/64rem;
				text-align: center;
				color: #fff;
				font-size: 16/64rem;
			}
		}	
		}
		.selActive{
			color: #f56600;
			border: 1px solid #f56600 !important;
		}
	}
</style>