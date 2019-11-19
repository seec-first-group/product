// pages/hemo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	state:false,//添加名片
	arrData:[],
	obj:{},
	show:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	
  },
  onShow:function(){
	var value = wx.getStorageSync('obj')
	if(value){

		let arr = this.data.arrData
		arr.push(value)
		this.setData({
			arrData:arr,
			show:true
		})

	}
	
	
  },
  goTo(){
    console.log(1)
    wx.navigateTo({
      url: '/pages/creade/index'
    })
  },
  goTab(){
    wx.switchTab({
      url:"/pages/card/index"
    })
  }
})