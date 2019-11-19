//index.js
//获取应用实例
const app = getApp()
import url from "../../config/url.js"
Page({
  data: {
    
  },
  goDetail(e){
    //   console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
        url: '/pages/detail/detail?con='+JSON.stringify(this.data.list[e.currentTarget.dataset.id])
    })
  },
  onLoad(){
      wx.request({
          url: url.list,
          data: {},
          method: 'GET',
          success: (res)=>{
              this.setData({
                  list:res.data.msg
              })
          }
      })
    wx.setNavigationBarTitle({
        title: '动态'
    })
  }
})
