import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		shopSelect:false  ,//控制产品详情中选择商品及购买服务
		shopAdr:[
			{name:'唐总',diqu:'广东',adr:'深南大道TCL大厦B座601室'}
		],
		shopAdrShow:false,  //控制产品详情页中地址
		ZengPinShow:false,
		fuwuPubList:[
			{txt:'小米自营',qita:''},{txt:'小米发货',qita:'由小米发货'},{txt:'7天无理由退货',qita:''},{txt:'运费说明',qita:'由小米发货的商品，单笔满150元免运费;由第三方商家发货的商品，免运费;特殊商品需要单独收取运费，具体以实际结算金额为准；优惠券等不能抵扣运费金额;'}
		],
		fuwuPublicShow:false,//控制服务产品
		gounum:0,  //勾选商品的数量
	}
})

export default store