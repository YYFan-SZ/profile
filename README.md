# ZhengYifan 个人网站与 3D 房间

这是 `zhengyifan.homes` 的唯一正式项目。

- `/`：带 3D 钢琴键导航的个人作品集。
- `/room`：进入奶油紫 3D 房间。
- `/room-engine/index.html`：3D 房间的静态运行入口，由 `/room` 自动跳转。

## 目录说明

```text
app/                 Next.js 页面与路由
components/          首页交互组件和 3D 钢琴键
lib/                 首页数据与多语言配置
public/              首页公开图片、视频和模型
room-source/         3D 房间的 Vite 源码与资源
public/room-engine/  构建时自动生成，不提交到 Git
```

## 本地运行

首次运行：

```powershell
npm.cmd install
npm.cmd run dev -- -p 3001
```

浏览器打开：

```text
http://127.0.0.1:3001
```

`npm run dev` 会先构建 3D 房间，再启动 Next.js 主网站。

## 生产构建

```powershell
npm.cmd run build
```

构建成功标志：终端同时出现 Vite 的 `built` 和 Next.js 的
`Compiled successfully`，并列出 `/` 与 `/room` 两个路由。

## 发布

正式代码推送至 `YYFan-SZ/profile`。Vercel 使用仓库根目录构建，域名为：

```text
https://zhengyifan.homes
```

3D 房间主模型已经使用 Meshopt 压缩；`room-source/src/main.js` 中必须保留
`MeshoptDecoder`，否则房间模型无法加载。
