//包含n个接口请求函数的模块,返回值promise对象

import ajax from "./ajax"

//根据经纬度获取位置详情]
export const reqAddress=geohash=>{
    ajax(`/position/${geohash}`)
}
// 获取食品分类列表
export const reqFoods=()=>{
    ajax("/index_category")
}
// 根据经纬度获取商铺列表
export const reqShopList=(longitude,latitude)=>{
    ajax('/shops',{longitude,latitude})
}
// 根据经纬度和关键字搜索商铺列表
export const reqShops=(geohash,keyword)=>{
    ajax('/search_shops',{geohash,keyword})
}
// 获取一次性验证码
export const reqCaptcha=()=>{
    ajax("/captcha")
}
// 用户名密码登陆
export const reqLogin=(name,pwd,caprcha)=>{
    ajax('/login_pwd',{name,pwd,caprcha},type="POST")
}
// 发送短信验证码
export const reqPhone=(phone)=>{
    ajax('/sendcode',{phone})
}
// 手机号验证码登陆
export const reqLoginSms=(phone,code)=>{
    ajax('/login_sms',{phone,code},"POST")
}
// 根据会话获取用户信息
export const reqUserInfo=()=>{
    ajax('/usrinfo')
}
// 用户登出
export const reqlogout=()=>{
    ajax('/logout')
}



