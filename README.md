# 一个code test 项目
一个笔试的demo

## 本地使用环境
  win + wsl2(ubuntu)
  node v20.11.1
  npm v10.2.4
  nginx version: nginx/1.18.0 (Ubuntu)
  blocklet v1.16.33
## 项目运行命令
  npm i && npm run dev

  注意： 由于wsl本地的网页环境问题，没有测试使用默认输出的网页能否打开，如不能打开效果网页， 需要在使用localhost：.env配置中的BLOCKLET_PORT 端口 中打开网页 或者配置nginx反向代理

## 环境配置
  DATABASE_URL="file:./dev.db"

  BLOCKLET_PORT=8092
