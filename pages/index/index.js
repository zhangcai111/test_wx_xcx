//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    imageBannerArr:[
      {index: 0, src: '../resources/wx_banner1.png', show:true},
      {index: 1, src: '../resources/wx_banner2.png', show:false},
      {index: 2, src: '../resources/wx_banner3.png', show:false}
    ],
    intervalTime:2500,
    cooperationArr:[
      {
        index: 0,
        title: '赎楼贷', 
        src: '../resources/pro-img1.png', 
        description: '资金雄厚、T+1放款、收费低、通过率高', 
        products: '交易类赎楼 · 非交易类赎楼',
        coopButton:true
      },
      {
        index: 1,
        title: '抵押贷', 
        src: '../resources/pro-img2.png', 
        description: '近期开放，敬请期待！', 
        products: '',
        coopButton: true
      }
    ]
  },
  onLoad:function(){
    setInterval(this.handleIntervalBannerImg, this.data.intervalTime);
  },
  handleIntervalBannerImg(){
    let _imageBannerArr = this.data.imageBannerArr;
    const length = _imageBannerArr.length;
    for(let i=0;i<length;i++){
      if(_imageBannerArr[i].show == true){
        if (i == length - 1){
          _imageBannerArr[i].show = false;
          _imageBannerArr[0].show = true;
          break;
        }else{
          _imageBannerArr[i].show = false;
          _imageBannerArr[i+1].show = true;
          break;
        }
        
      }
     
    }
    this.setData({
      imageBannerArr: _imageBannerArr
    });
  },
  handleChangeBanner(event){
    let index = event.currentTarget.dataset.arrIndex;
    this.handleCheckdeBanner(index);

  },
  handleCheckdeBanner(index){
    let _imageBannerArr = this.data.imageBannerArr;
    const length = _imageBannerArr.length;
    for (let i = 0; i < length; i++) {
      _imageBannerArr[i].show = false;
    }
    _imageBannerArr[index].show = true;
    this.setData({
      imageBannerArr: _imageBannerArr
    });
  },
  handleCooperation(event){
    let title = event.currentTarget.dataset.coopTitle;
    wx.navigateTo({
      url: '/pages/cooperation/cooperation?title='+title,
    })
  },
  onShareAppMessage() {
    return {
      title: "汇联客户营销",
      path: "pages/index/index"
    }
  },
})
