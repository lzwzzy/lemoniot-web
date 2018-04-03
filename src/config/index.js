export default {
  api: function () {
    return this.mock.status ? '//127.0.0.1/mock' : (process.env.NODE_ENV === 'development' ? '//127.0.0.1:8010' : '//api.neho.top')
  },
  wx: {
    appid: 'wx863a2fdffc5b7050',
    redirect_uri: 'http://lemoniot.viphk.ngrok.org/#/home',
    scope: 'snsapi_userinfo'
  },
  mock: {
    api:'//127.0.0.1/mock',
    status:false
  }
}
