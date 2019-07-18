<template>
	<ul class="Lazyload">
    	<li v-for="item in list">
      		<img v-lazy.container="item">
    	</li>
    	<li><div class="chakan">查看全部参数</div></li>
    	<li>
    		<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fc88fd153c1da1138fd621e00137d3e2.png?w=1080&h=427"/>
    	</li>
  	</ul>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					"//i8.mifile.cn/v1/a1/9c3e29dc-151f-75cb-b0a5-c423a5d13926.webp?w=1080&h=849&bg=C5DFEA",
					"//i8.mifile.cn/v1/a1/f442b971-379f-5030-68aa-3b0accb8c2b9.webp?w=1080&h=829&bg=6F61AE",
					"//i8.mifile.cn/v1/a1/63b700b6-643e-ec18-fdf3-da66b4b4173f.webp?w=1080&h=750&bg=F5F2F9",
					"//i8.mifile.cn/v1/a1/e9dbf276-193e-11c4-99a6-3097fde82350.webp?w=1080&h=942&bg=313B8F",
					"//i8.mifile.cn/v1/a1/1249d3ee-2990-a2b4-28d9-f719c2417b1f.webp?w=1080&h=1080&bg=3442A3",
					"//i8.mifile.cn/v1/a1/97c79915-64b2-808c-53b4-4345652a179f.webp?w=1080&h=727&bg=F97D80",
					"//i8.mifile.cn/v1/a1/cd0fbe1e-a1b3-a87a-f4a6-6fb08ec54931.webp?w=1080&h=1079&bg=E97774",
					"//i8.mifile.cn/v1/a1/337b4457-6ac5-07be-347f-de4a12fbdc52.webp?w=1080&h=800&bg=11457F",
					"//i8.mifile.cn/v1/a1/28f7b8d7-9308-8f59-89f4-864efa23f43d.webp?w=1080&h=800&bg=2A1A63",
					"//i8.mifile.cn/v1/a1/d8c1e7af-b680-36aa-6628-0833345415b9.webp?w=1080&h=776&bg=156CA1",
					"//i8.mifile.cn/v1/a1/4fde2b16-b157-8462-52a2-739a41fe99dc.webp?w=1080&h=1215&bg=857F8C",
					"//i8.mifile.cn/v1/a1/12592771-3b49-6681-c671-ee8647b52b11.webp?w=1080&h=1080&bg=24304C",
					"//i8.mifile.cn/v1/a1/c5e859c6-fe0e-a04f-a844-75aefcffc106.webp?w=1080&h=1057&bg=FDECED",
					"//i8.mifile.cn/v1/a1/98f9eb56-7f9d-3ef3-f22f-66f66fe64237.webp?w=1080&h=871&bg=445CA0",
					"//i8.mifile.cn/v1/a1/e053dc94-8bcf-1786-bf10-acc2e28f8308.webp?w=1080&h=880&bg=4577C7",
					"//i8.mifile.cn/v1/a1/2bb23b3b-2c18-b463-1828-7b568668b714.webp?w=1080&h=1180&bg=261748",
					"//i8.mifile.cn/v1/a1/0159262c-bc70-15e6-98f4-b2aa4db17e36.webp?w=1080&h=1010&bg=6E6471",
					"//i8.mifile.cn/v1/a1/38b14251-3957-89cb-198f-a85f449bbb7e.webp?w=1080&h=1523&bg=CCCAE1",
					"//i8.mifile.cn/v1/a1/66443dd5-1c51-efc6-d534-083f7676f757.webp?w=1079&h=922&bg=F5F5F5"
				]
			}
		}
	}
</script>

<style lang="less">
	.Lazyload{
		width: 100%;
		img{
			display: block;
			width: 100%;
		}
		.chakan{
			padding-left: .55rem;
			color: #4e72a5;
		}
	}
	
</style>