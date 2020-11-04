Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    pageHeight: 450,
    pageText: "",
    tabPageIndex: 0,
    navBarList: [
      {id: "n1",name: "AA", active: true},
      {id: "n2",name: "BB", active: false},
      {id: "n3",name: "CC", active: false},
      {id: "n4",name: "DD", active: false}
    ],
    addmissage: '选的位置',
    // markers	 Array	标记点
    stitle:'故宫',
    latitude: "",
    longitude: "",
    scale: 14,
    markers: [],
    //controls控件 是左下角圆圈小图标,用户无论放大多少,点这里可以立刻回到当前定位(控件（更新一下,即将废弃，建议使用 cover-view 代替）)
    controls: [{
      id: 1,
      iconPath: '../../images/img/controls.png',
      position: {
        left: 15,
        top: 260 - 50,
        width: 40,
        height: 40
      },
      clickable: true
    }],
    distanceArr: []
  },
  // 切换tab叶
  changeNavs(e) {
    var that = this;
    var item = e.currentTarget.dataset.been;
    this.data.navBarList.forEach((v, i) => {
      if (v.id == item.id) {
        v.active = true;
        that.setData({
          tabPageIndex: i,
          pageText: v.name + '页面'
        });
      } else {
        v.active = false;
      }
    });
    this.setData({
      navBarList: this.data.navBarList
    });
  },

  onLoad() {
    var that = this;
    this.setData({
      nbTitle: '新标题',
      nbLoading: true,
      nbFrontColor: '#ffffff',
      nbBackgroundColor: '#000000',
      pageText: this.data.navBarList[0].name + '页面'
    });
    var h = wx.getSystemInfoSync().windowHeight;
    this.setData({
      pageHeight: h
    });
    setTimeout(function () {
      that.setData({nbLoading: false});
    }, 2500);

    // 初始化地图点位
    //获取当前的地理位置、速度
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        //赋值经纬度
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
 
        })
      }
    });
  },
  // 打开地图
  openMap(e) {
    wx.openLocation({
      // 12747559,3553582
      latitude: 23.535820,
      longitude: 109.475590,
      scale: 18,
      name: '武汉纬创软件',
      address: '湖北省武汉市洪山区花城大道'
    })
  },
  //controls控件的点击事件
  bindcontroltap(e) {
    var that = this;
    if (e.controlId == 1) {
      that.setData({
        latitude: this.data.latitude,
        longitude: this.data.longitude,
        scale: 14,
      })
    }
  },
  //导航
  onGuideTap: function (event) {
    var lat = Number(event.currentTarget.dataset.latitude);
    var lon = Number(event.currentTarget.dataset.longitude);
    var bankName = event.currentTarget.dataset.bankname;
    console.log(lat);
    console.log(lon);
    wx.openLocation({
      type: 'gcj02',
      latitude: lat,
      longitude: lon,
      name: bankName,
      scale: 28
    })
  },

});