// app.js
const config = require('./config.js')
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.setStorageSync('config', config)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          // 把获取到的code通过一个request的请求发给java服务器
         wx.request({
              url: config.local + '/mini/get/test',
              data: {
                code: res.code
              },
              method: 'GET',
              dataType: 'json',
              success: function (res) {
                // 请求成功的处理
                const data = res.data
                if (data.code === '00000') {
                  console.log('request Java res : ', data.data);
                } else {
                  console.log('error : ', data.msg);
                }
                
              }
          })
        }
      },
      fail: function () {
        console.log("request failed ：", res.data);  
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
