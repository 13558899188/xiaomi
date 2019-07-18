<template>
	<div class="homeCon">

		<homeHeader></homeHeader>
		 <Tabbar></Tabbar>
	</div>
</template>
<script>
	import homeHeader from '../../components/homeHeader'
	import Tabbar from '../../components/tabbar'
	export default {
			components: {
				homeHeader,
                Tabbar
			},
			beforeCreate: function() {
				this.$router.push('/home/homeTuijian')
			},
			mounted() {
				this.getData();
			},
			methods: {

				getData() {
					this.$axios.get("../../../static/data/homeItemData.json")
						.then(
							res => {
								this.homeArr = res.data.homeItemArr;
							}).catch(err => {
							console.log("err", err);
						})
				},
				navShow() {
					this.isShow = !this.isShow
				},
				headerNav(index) {
					this.currIndex = index;
				}				
			}

	}
</script>

<style lang='less'>
	
	.homeCon{
		overflow-y: auto;
	}
</style>