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

## 实机视频

官网 `#trailer` 使用原生 HTML video 直接播放 `assets/video/rescue-gameplay-1080p.mp4`，H.264/AAC、1080p/30fps、约 1 分 53 秒。视频与网页由同一 GitHub Pages 站点提供，不依赖 B 站站外播放器。使用 controls、playsinline、preload="metadata"，不自动播放。封面为同目录的 `rescue-gameplay-poster.jpg`。保留 B 站视频 `BV1knsK6JEHi` 的观看与评论链接。

## 流量统计（Clarity 已配置）

官网 head 已加入用户提供的 Clarity 官方异步安装代码，项目 ID 为 `zf1aqouksw`。仅该代码加载 SDK；`analytics.js` 负责渠道标签和交互事件，不会重复注入追踪脚本。统计从部署后访客加载页面起开始，历史访问无法补录。

事件：`watch_trailer_click`、`gameplay_video_play`（每次页面加载仅一次）、`gameplay_video_complete`（每次页面加载仅一次）、`bilibili_watch_click`、`steam_plan_click`、`business_contact_click`。`steam_plan_click` 仅代表查看发行计划，不代表 Steam 愿望单转化。

推广渠道使用 Clarity 自定义标签 `promotion_source`，仅接受 `xiaohongshu` / `bilibili`。未带渠道标记的流量仍可由 Clarity 自身的来源报告查看，但并非所有 App 都会保留来源信息。

- 小红书：https://rinne-aomi.github.io/homepage/?utm_source=xiaohongshu&utm_medium=social
- B 站：https://rinne-aomi.github.io/homepage/?utm_source=bilibili&utm_medium=social

启用后，在 Clarity 项目面板查看访问、设备、来源和自定义事件。正式上线采集前，按项目设置及访客地区要求核对站点隐私说明与同意设置。
