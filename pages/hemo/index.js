// pages/hemo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	state:false,//添加名片
	arrData:[],
	obj:{},
  show:true,
  items:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var timeStr = '-';
    var curDate = new Date();
    var curYear = curDate.getFullYear();  //获取完整的年份(4位,1970-????)
    var curMonth = curDate.getMonth() + 1;  //获取当前月份(0-11,0代表1月)
    var curDay = curDate.getDate();       //获取当前日(1-31)
    var curWeekDay = curDate.getDay();    //获取当前星期X(0-6,0代表星期天)
    var curHour = curDate.getHours();      //获取当前小时数(0-23)
    var curMinute = curDate.getMinutes();   // 获取当前分钟数(0-59)
    var curSec = curDate.getSeconds();      //获取当前秒数(0-59)
    var Current = curYear + timeStr + curMonth + timeStr + curDay + ' ' + curHour + ':' + curMinute + ':' + curSec;
    console.log(Current);
    // this.datetime=Current;
    this.setData({
      items: Current
    })
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