export default {
  baseUrl: function () {
    return process.env.NODE_ENV === 'development' ? '//127.0.0.1:8081' : '//api.neho.top'
  },
  wx: {
    appid: 'wx863a2fdffc5b7050',
    redirect_uri: 'http://lemoniot.viphk.ngrok.org/oauth',
    scope: 'snsapi_userinfo'
  }
}
