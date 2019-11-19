// pages/common/details/details.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		showModal: false,
		numm: "1"
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		var id = JSON.parse(options.id);
		var that = this;
		that.setData({
			title: id.title,
			img: id.image,
			num: id.num,
			price: id.price,
			selected: id.selected
		})

	},
	buy(e) {

		this.setData({
			showModal: true
		})

	},
	qued(e) {
		// this.setData({
		// 	showModal: false
		// })
		var id = e.currentTarget.dataset.id;
		wx.navigateTo({
			url: "/pages/common/buy/buy?id=" + JSON.stringify(id)
		})
	},
	// 禁止屏幕滚动
	preventTouchMove: function() {},

	// 弹出层里面的弹窗
	ok: function() {
		this.setData({
			showModal: false
		})
	},
	asd() {
		this.numm++;
	}

})
