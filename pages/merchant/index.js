//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		list: [{
				id: 0,
				title: '一对一套餐',
				image: 'https://raw.githubusercontent.com/userLittleBoy/img/master/img/1_15.png',
				num: 4,
				price: 6666.00,
				selected: false,
				type: 0
			}, {
				id: 1,
				title: '一对二套餐',
				image: 'https://raw.githubusercontent.com/userLittleBoy/img/master/img/2_08.png',
				num: 4,
				price: 6888.00,
				selected: false,
				type: 1
			},
			{
				id: 2,
				title: '一对二套餐',
				image: 'https://raw.githubusercontent.com/userLittleBoy/img/master/img/2_03.png',
				num: 4,
				price: 7853.00,
				selected: false,
				type: 2
			},
			{
				id: 3,
				title: '一对二套餐',
				image: 'https://raw.githubusercontent.com/userLittleBoy/img/master/img/3_05.png',
				num: 4,
				price: 2563.00,
				selected: false,
				type: 2
			},
			{
				id: 4,
				title: '一对二套餐',
				image: 'https://raw.githubusercontent.com/userLittleBoy/img/master/img/7_05.png',
				num: 4,
				price: 6855.00,
				selected: false,
				type: 2
			},
			{
				id: 5,
				title: '一对二套餐',
				image: 'https://raw.githubusercontent.com/userLittleBoy/img/master/img/7_05.png',
				num: 4,
				price: 6855.00,
				selected: false,
				type: 0
			}
		],
		currentIndex: 0,
		msn: []
	},
	onLoad: function() {

	},
	details(e) {
		var id = this.data.list[e.currentTarget.dataset.id]
		wx.navigateTo({
			url: "/pages/common/details/details?id=" + JSON.stringify(id)
		})
	},
	meda() {
		wx.navigateTo({
			url: "/pages/common/meda/meda"
		})
	},
	onmouTap(e) {
		this.setData({
			currentIndex: e.currentTarget.dataset.index
		})

	}
})
