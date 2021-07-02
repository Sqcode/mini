let extConfig = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
console.log('getExtConfigSync', extConfig);

var test_host = "http://localhost:10086"
var config = {
    test_host,
    local: test_host
}
module.exports=config