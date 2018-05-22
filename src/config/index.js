export default {
  baseUrl: function () {
    return process.env.NODE_ENV === 'development' ? '//lemond.free.ngrok.cc' : '//api.neho.top'
  },
  wx: {
    appid: 'wx863a2fdffc5b7050',
    redirect_uri: 'http://lemoniot.cn/oauth',
    scope: 'snsapi_userinfo'
  }
}
