# 项目结构
```javascript
├── build          ----------------------网页配置
│   ├── favicon.ico  
│   └── manifest.json 
├── config            ------------------webpack配置
│   ├── env.js       
│   ├── paths.js
│   ├── webpack.config.dev.js
│   ├── webpack.config.prod.js
│   └── webpackDevServer.config.js
├── package-lock.json
├── package.json    --------------------项目package.json
├── public          --------------------出口
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── scripts        ---------------------运行的脚本
│   ├── build.js
│   ├── start.js
├── src           ----------------------源码目录
│   ├── api       ----------------------API目录
│   │   ├── api.js
│   │   └── server.js
│   ├── assets   -----------------------资源目录
│   │   └── iconfont -------------------iconfont目录
│   ├── components   -------------------公共组件
│   │   ├── xxxxx  -----------------待添加

│   ├── config    ----------------------项目一些配置
│   │   ├── envconfig.js  --------------配置信息
│   ├── index.js    --------------------入口
│   ├── pages       --------------------页面目录
│   │   ├── about    -------------------关于我们页面
│   │   ├── daily   --------------------日常页面
│   │   ├── home  ----------------------主页页面
│   │   ├── share  ---------------------分享页面
│   │   ├── stage ----------------------我的主场页面
│   ├── router   -----------------------路由
│   │   └── index.js
│   ├── serviceWorker.js  --------------热加载
│   ├── store   ------------------------react-redux状态管理目录
│   │   ├── store.js
│   │   └── user
│   ├── style   ------------------------通用样式目录
│   │   ├── base.scss
│   │   ├── mixin.scss
│   │   └── swiper.min.css
│   └── utils  ------------------------公用方法
│       ├── asyncComponent.jsx  -------异步加载组件
│       └── commons.js  ---------------公用方法
├── README.md      ----------------------README
└── tree.md  --------------------------项目结构

```
