Page({
  data: {
    name: "aaa",
    array: ['美国', '中国', '巴西', '日本'],
    index: 0,
    dateTime: "",
    region: ['广东省', '广州市', '海珠区'],
  },

  // 滑块
  sliderChange(e) {
    console.log(e.detail.value);
  },

  // 开关
  switchChange(e) {
    console.log(e.detail.value);
  },

  // 下拉选项
  bindPickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    });
  },

  // 日期选择
  bindDateChange(e) {
    console.log(e);
    this.setData({dateTime: e.detail.value});
  },

  // 省市区
  bindRegionChange(e) {
    this.setData({
      region: e.detail.value
    });
  },

  // 提交
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  }
});