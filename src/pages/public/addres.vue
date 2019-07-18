<template>
	<div class="addresBox">
		<div class="header" @click.prevent="back">
			选择收货地址
			<span class="left"></span>
		</div>
		<div class="selAdr">
			<div class="seLeft">
				深圳
				<span class="down"></span>
			</div>
			<div class="seRight">
				<span class="fangda"></span>
				<input type="text" placeholder="请输入您的收货地址">
			</div>
		</div>
		<div class="shoudong">手动选择地址</div>
	</div>
</template>

<script>
	export default{
		name:"addres",
		methods:{
			back(){
				this.$router.push('/shoppublic');
			}
		}
	}
	
</script>

<style lang="less" scoped="scoped">
	.addresBox{
		color: #666;
		font-size: 16/64rem;
		text-align: center;
		background: #f2f2f2;
		height: 100%;
		width: 100%;
		.header{
			line-height: 50/64rem;
			height: 50/64rem;
			position: relative;
			background: #f2f2f2;
			.left{
				display: inline-block;
				height: 28/64rem;
				width: 28/64rem;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				left: 16/64rem;
				background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABfUlEQVR4AWL4//8/oH1zzA4gCMJgbNv239i2beP+R8gXczpmV79XB9ja3UEDDJCAIAQhCEF/TBAgCEEIUkSKFrEoahD0VFCdOLtmWxQh6E5Okzh7xCyC7n85T+lyL0jREJDT434NMr6cAde7mLHmXDDkfptX1AfkjPk+B9lyRn0fFO01Z8r9SVrRGJAzLaL9CrJ/q4XvlnPBX5IT4/qyqqgJyFkWcX5v8/aXsyKSXKc7FLUBORuGHAeC7K18y5DjQ5CiOiBnU6T6zSjav9WWSPebcrV3qz2R4Tcnba85hyLTb9Le/nL2RY7fqsbLcnJdl30MOSeiwG9dzD4hX1DitnCoSBDlhpwy15VVRY9YDvxWhd/xYAjiF2ORLnYviG3+45dTDopcNbisftvvRrrjlQmzNAeCSLmStP9OSZR9KBx+6cK95LH0TPMC7S80UNGCRxMnbcA0kg8iiFEEhlkYh2Kg7vd/STvPj2Qy1NvKUO+PgCAEIQhBCEIQghAE53kdVfEUUHFYAAAAAElFTkSuQmCC) no-repeat center center;
				background-size: 28/64rem 28/64rem;
			}
		}
		.selAdr{
			display: flex;
			align-items: center;
			height: 46/64rem;
			line-height: 46/64rem;
			background: #fff;
			.seLeft{
				display: inline-block;
				width: 103/64rem;
				height: 46/64rem;
	            text-align: center;
				position: relative;
				font-size: 12/64rem;
				border-right: 1px solid #ddd;
				.down{
					position: absolute;
					top: 36%;
					transform: rotate(45deg);
					right: 20%;
					display: inline-block;
					height: 8/64rem;
					width: 8/64rem;
					border-right: 1px solid #777;
					border-bottom: 1px solid #777;
				}
			}
			.seRight{
				display: flex;
				align-items: center;
				.fangda{
					display: inline-block;
					height: 24/64rem;
					width: 24/64rem;
					background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEx0lEQVQYGe3Bf0yUdRwH8I9GpBtZVpul0y1/ZD8sKzdXbupMh3Pq0jWtzbVs9YfL8scfLq02h1m52R3c832+z/d5HrjjAOH4KQhy4MQD4eS4gXiCePLjBIwU8VeCOAPy3dZf/mEpz56zW93rRRQVFRUVFfU/dGFM+UTHlOrXzq/yf9HwefeS0plpk4/F0b+je5x/UZXIPZV+URmRwMEhQfs940K+ry6hYTY9Wu0Tyze6yxVYwSGgQoUKFSpUCMiwwH6zPLVqZVcsPRrlSwvqVVghwMGhQYMOHTp0aNDAIcBhhQ53UcWLFH4127QrElQwqEi7keUu21W/vnl5+/y2dwKraj8p3pdZ7bzDIYNDQmqweQWFU/cTpU4GAQUMro6SbR2z6D4aFuRb0m4yqFCgDXq3U7hciynOSYQOBertgr2np9I/ODHPlSlDg4AN3m8oPKq+t0GHguSexg/ogepjPbvZkIACbci3lsx3Yr06rECGvSO4gB6SbxMb5pBhDwZeInN1vWJvY5DB+5uX0ShUfmeDAhtKCkOxZCZPogUCMo5vpFEJxRSkcKiQ0BBP5gnMSu+RIaGokEatc2ZqSEBCqasnhszi32SFgBYKLiQDqnfI0CAGz79B5uibkOOVIZCXTob0TrK3qeA4tpfM0TmPQYO427CBDHLrDAoO+H+LITM0r+VQkRy88DwZFFiXBAWOS73PkRl8WzgU5JVVjyeDQi+LPhmOW63zyAxH9yvgKE31jCGDKqZltTPYh+rXkBmKXAIyKpLIsJpn8hskpMDzJZmhKFuAoXIfGeaPO+i1IQXHtpIZPHsVyCgXZJhnUm6TBPtI3UdkBv9mDo5DOVUxZFDpjAO/yHDcCcSTGVreZxDI8F58kgxqelMe5LD3h+aQGbrnsBENYrDjbTKobnMSFLh8A7Fkhpa4Ao8MgcpdZEjTuAI3h4DnRzJLYEMiODKPX3qKDAjOF30a+N3gYjJLz+SMs0lQUL2ZDDiYqkDCQffFcWSeih8sYEht/HUqjVJgjehTIOH0CjJT99QDbRJsKCxtG0+j0PWqvUOGFYdzyGxnlyVf5ZCQ9xM9tJPP5jbaIMEZ7J5B5jv6FR/iUPsP778eRw+hc4ajhEGBs+NkPIXDmTFuRyI4FBSW9EyhB2h9N+O0AgEFR5MoXK49XilzMDBktBZ+Fnia/oZ/ev6elKscAioUOEPtCyl8POucfRwSZOTVunZWxg9MoHtcnuxek5mQE7JBhoAODQIStBttCyh8OubmHEke4LBAhXM4uykt35mWb8212bPSi7M6nX9wWCGQfL2M9U73JjBw2KBfbl1M4VPxmG9tdl76gA0WWCBBhQYNKiRY8TMYMnuzXdVL6S/H90hQwGHvObeEwiv4Vpn1UG1ea9ZV510dOhxIG8npOnykNKF5Lt2jZjeDCgXJl4PLKdx6xja+4Hm94D3Hh471rhXFi+qm0X3UfMsgwKDeOreUIoP3awYFEsTNs8soMnh3MnAw6FdallNkOLGLQUBBcl/LSooMtTtkqODQBlpWU2TwbZGhgEG5fWY1RQbfVhkcDKK/eTVFhtrtMjg49Butiygy+LfKEOAodlKkCHyq94vhUx9T5GiYXjn73FiKioqKior6z/oTCs8KMOW0P6QAAAAASUVORK5CYII=) no-repeat center center;
					background-size: 24/64rem 24/64rem;
					margin:0 6/64rem;
 				}
				input{
				   width: 176/64rem;
				   height: 37/64rem;
				   outline: none;
				   border: none;
				}
			}
		}
		.shoudong{
			margin-top: 16/64rem;
			background: #fff;
			height: 58/64rem;
			line-height: 58/64rem;
			font-size: 14/64rem;
			color: #3c3c3c;
	    }
	}
	
</style>