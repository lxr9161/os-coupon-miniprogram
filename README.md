# 优惠券小程序

## 1.介绍
一个优惠券领取、分享小程序。优惠券类型包括饿了么外卖红包、美团外卖红包、滴滴打车红包等。还有抽奖、提现功能。

## 2.相关配置
配置在根目录下的config.js 文件里
- `apiHost` 接口请求地址，注意这个地址必须是https的，并且需要配置在微信小程序后台
- `imgHost` 图片域名，目前图片是上传到七牛空间，需将域名配置到指定上传的bucket
- `templates` 消息模版
  - `收益到帐通知` 对应类目 报价/比价
	- `优惠券待领取通知` 对应类目 信息查询
	> 所以建议小程序在设置的类目的时候要选择报价/比价和信息查询，否则可能找不到对应模板。如果没有找到对应模板，也可以替换成其他模版(后端需配置修改)
- `uploadQiniuHost` 七牛空间上传域名，根据空间所在区域不通选择对应的上传域名，具体查看[七牛文档](https://developer.qiniu.com/kodo/1312/upload)


## 3.关联项目
- [小程序](https://github.com/lxr9161/os-coupon-miniprogram)
- [管理后台](https://github.com/lxr9161/os-coupon-admin)

-----
开源版可能存在一些问题，欢迎吐槽。也欢迎大家做提出一些建议或意见。

技术交流可以扫码添加我个人的微信，也可以扫码进微信群
- 我个人的微信
<div>
  <img src="https://user-images.githubusercontent.com/13703050/155838535-741b3ac8-1e6e-48d2-936c-036eec90bb3b.JPG" width="250"/>
  <img src="https://user-images.githubusercontent.com/13703050/155838542-d63fefb9-7f1a-4e46-a47c-745cbff62c36.JPG" width="250"/>
</div>

- 微信群
<div>
   <img src="https://user-images.githubusercontent.com/13703050/159154826-834f55e3-c886-4b37-812f-5ae0ce249f57.JPG" width="250"/>
</div>
