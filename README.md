# It Rains Cats n Dogs · 雨中的救援伙伴

面向 Steam 发行筹备的中文宣传页，Windows PC 方向。纯静态 HTML / CSS / JavaScript，无构建依赖。

## 内容依据

游戏源：`Rinne-Aomi/It-Rains-Cats-n-Dogs`，分支 `feat/rescue-visual-v1`，提交 `318d2734c26a4b69ecca49668953ad59281e9762`，版本 `0.3.1-test`。

该分支根目录是最新 Windows 救援篇；`prototypes/` 为早期归档。玩法按最新 README 和 `scripts/rescue/` 实现编写：三路移动、A/D 移动、J 接猫、L 弹狗、连携回复与护盾、三关伙伴救援、每日天气、键盘和手柄操作。

角色资产由当前游戏透明图集提取，首屏明确标注角色原画组合。实机图来自同提交成功构建 `43858651031` 的 `Rescue-V1-movement-validation`，为开发版本画面。未分发私有仓库代码或 Windows 安装包。

## Steam 入口

尚无已确认的 Steam App ID / 商店地址，页面显示“Steam 商店页面筹备中”。不提供虚构愿望单链接、发售日、售价或配置要求。商店公开后，把发行区状态替换为真实商店链接，并更新标题及描述。

## 维护与发布

- `index.html`：文案、页面结构及 SEO。
- `style.css`：响应式布局、配色与样式。
- `site.js`：实机图切换、可关闭的大图弹窗、伙伴形态切换。
- `assets/`：当前 Windows 救援篇素材和开发截图。

GitHub Pages 使用 `main` 分支根目录发布，无需构建。更新文件并推送后会自动部署。

本地预览可运行 `python3 -m http.server 8000`，访问 http://localhost:8000。
