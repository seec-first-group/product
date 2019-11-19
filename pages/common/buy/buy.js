// pages/common/buy/buy.js
Page({
	data: {

	},
	onLoad: function(options) {
		var hn = wx.getStorageSync("key");
		console.log(hn);
		this.setData({
			title: hn.title,
			img: hn.img,
			numm: hn.numm,
			price: hn.price,
			selected: hn.selected,
			allP: hn.allP
		})
	}

})
