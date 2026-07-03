# ZhengYifan 立体作品展

## 直接打开

双击根目录的 `index.html`，或双击 `start-site.cmd`。

## 页面结构

- 原始浅色简历与内容顺序保存在 `legacy.html`。
- 当前增强效果位于 `src/light-main.js` 和 `src/light-styles.css`。
- `index.html` 是可直接打开的静态成品。

## 修改后重新打包

```powershell
npm.cmd run build:static
```

## 开发预览

```powershell
npm.cmd run dev
```
