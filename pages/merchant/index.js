//index.js
//获取应用实例
const app = getApp()
import temp from '../common/icon/icon'
Page({
	data: {
		list: [{
			id: 0,
			title: '一对一套餐',
			image: 'http://m.qpic.cn/psb?/V11CTl4R3lqst3/rOu7oCbJD*P5z2IpFyHSKZ296aNEILk7HqjI6udfsvs!/b/dMMAAAAAAAAA&bo=PgEmAQAAAAADFyo!&rf=viewer_4',
			num: 4,
			price: 6666.00,
			selected: false,
			type: 1
		}, {
			id: 1,
			title: '一对二套餐',
			image: 'http://m.qpic.cn/psb?/V11CTl4R3lqst3/zQyO8bMQPjv2nW*TcSRjqL9DKRacIGzAGyjbG9WN4zw!/b/dLgAAAAAAAAA&bo=PgEmAQAAAAADJxo!&rf=viewer_4',
			num: 4,
			price: 6888.00,
			selected: false,
			type: 1
		},
		{
			id: 2,
			title: '一对二套餐',
			image: 'http://m.qpic.cn/psb?/V11CTl4R3lqst3/zQyO8bMQPjv2nW*TcSRjqL9DKRacIGzAGyjbG9WN4zw!/b/dLgAAAAAAAAA&bo=PgEmAQAAAAADJxo!&rf=viewer_4',
			num: 4,
			price: 7853.00,
			selected: false,
			type: 1
		},
		{
			id: 3,
			title: '一对二套餐',
			image: 'http://m.qpic.cn/psb?/V11CTl4R3lqst3/dVcRcCSQy.bfggQmJzCOI5rSW.6qv9SXjRfatpHc1Ck!/b/dFMBAAAAAAAA&bo=PgEmAQAAAAADFyo!&rf=viewer_4',
			num: 4,
			price: 2563.00,
			selected: false,
			type: 2
		},
		{
			id: 4,
			title: '一对二套餐',
			image: 'http://m.qpic.cn/psb?/V11CTl4R3lqst3/lRfMrpQHx1UMVC2sis2xOZGbQpriuCiD1tuMbaF6n2g!/b/dEEBAAAAAAAA&bo=PgEmAQAAAAADFyo!&rf=viewer_4',
			num: 4,
			price: 6855.00,
			selected: false,
			type: 2
		},
		{
			id: 5,
			title: '一对二套餐',
			image: 'http://m.qpic.cn/psb?/V11CTl4R3lqst3/veXdfyHgZKCMmeizyPAR1IpaEEJ3C1Q*mPY9r3T.rgY!/b/dDQBAAAAAAAA&bo=PgEmAQAAAAADFyo!&rf=viewer_4',
			num: 4,
			price: 6855.00,
			selected: false,
			type: 2
		}
		],
		currentIndex: 0,
		msn: [],
		arr: []
	},
	onLoad: function () {
		this.setData({
			arr: this.data.list
		})
	},
	details(e) {
		// console.log(e.currentTarget.dataset.id)
		var id = this.data.arr[e.currentTarget.dataset.id];
		// console.log(id)
		wx.navigateTo({
			url: "/pages/common/details/details?id=" + encodeURIComponent(JSON.stringify(id))
		})
	},
	meda() {
		wx.navigateTo({
			url: "/pages/common/meda/meda"
		})
	},
	onmouTap(e) {
		// console.log(e.currentTarget.dataset.index)
		if (e.currentTarget.dataset.index == 0) {
			this.setData({
				arr: this.data.list
			})
		} else {
			let newArr = [];
			this.data.list.filter((item) => {
				if (item.type == e.currentTarget.dataset.index) {
					newArr.push(item)
					this.setData({
						arr: newArr
					})
				}
			})
		}

	},
	show(ev){
		temp.onclick(ev)
		
	}
})
