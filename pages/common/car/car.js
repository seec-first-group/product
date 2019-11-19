// pages/common/car/car.js
Page({
	data: {
		carts: [{
				id: 1,
				title: '一对一套餐',
				image: 'http://m.qpic.cn/psb?/V11CTl4R3lqst3/8gYSHlG.xQShxwXKpwg.qlzFVwOeK5T2O7RedUxF31c!/b/dL4AAAAAAAAA&bo=3wHgAQAAAAADJz0!&rf=viewer_4',
				num: 4,
				price: 6666,
				selected: false
			},
			{
				id: 2,
				title: '一对二套餐',
				image: 'http://m.qpic.cn/psb?/V11CTl4R3lqst3/yYGHABHDuKRk17RSiokPio4Df0j5eBx8.vcjWvjT*lk!/b/dEwBAAAAAAAA&bo=mAK4AQAAAAADNzE!&rf=viewer_4',
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
