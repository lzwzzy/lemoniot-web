import conf from './config'

/*
* 转跳微信授权页面
* */

export function wxLogin(visit) {
  window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + conf.wx.appid + "&redirect_uri=" + encodeURIComponent(conf.wx.redirect_uri) + "&response_type=code&scope=" + conf.wx.scope + "&state=" + visit + "#wechat_redirect"
}
