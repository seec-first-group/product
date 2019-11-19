// pages/common/car/car.js
Page({
	data: {
		carts: [{
				id: 1,
				title: '一对一套餐',
				image: 'https://raw.githubusercontent.com/userLittleBoy/img/master/img/1_15.png',
				num: 4,
				price: 6666,
				selected: false
			},
			{
				id: 2,
				title: '一对二套餐',
				image: 'https://raw.githubusercontent.com/userLittleBoy/img/master/img/2_06.png',
				num: 1,
				price: 9599,
				selected: false
			}
		],
		totalPrice: 0

	},
	onLoad: function(options) {

	},
	all() {
		
		var carts = this.data.carts;
		var num = 0;
		for (let i = 0; i < carts.length; i++) {
			if(carts[i].selected){
				num+=carts[i].price*carts[i].num
			}
		}
		this.setData({
			num
		})
	}
})
