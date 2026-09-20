---
layout: default
title: Publishing guide / 发布指南
permalink: /publishing/
---
<div class="page-heading">
  <p class="kicker">BLOG / GUIDE</p>
  <h1>发布 Markdown 文章</h1>
  <p class="lead">文章、图片和模板都在 cozz-blog 仓库中管理。登录与提交权限由 GitHub 负责。</p>
</div>
<div class="prose" markdown="1">

## 1. 准备文件

从仓库 `templates/post.md` 复制文章模板。文件使用 UTF-8 编码，命名为 `YYYY-MM-DD-english-slug.md`。用实际发布日期替换日期；未来日期的文章默认不会显示，且到期时需要重新触发构建。

```yaml
---
layout: post
title: "我的文章标题"
date: 2026-09-19
lang: zh-CN
description: "简短说明文章讨论的内容。"
---
```

正文写在第二条 `---` 后面。标题已经由页面模板显示，正文从 `##` 二级标题开始即可。代码用三个反引号包裹，后面可标注 `python`、`bash` 等语言。界面中英文切换不会自动翻译文章正文。

## 2. 上传文章

[打开 GitHub 的 _posts 上传页](https://github.com/CozzDehua/cozz-blog/upload/main/_posts)。登录有仓库写权限的账号，将文件上传到根目录 `_posts/`，点击 **Commit changes** 提交到 `main`。这个按钮只是普通链接，并不授予访客写权限。

更新文章时上传同名文件，或用 GitHub 的编辑按钮修改；删除文章用 GitHub 的 **Delete file** 并提交。尽量不要修改已发布文章的日期或文件名，否则文章地址会变化。

## 3. 添加图片

将图片上传到 `assets/images/`，在 Markdown 中使用完整的站内路径，例如：

```markdown
![架构示意图](/cozz-blog/assets/images/architecture.png)
```

不要使用本地 `C:\...` 或 `D:\...` 路径。现有 Docker 文章的 Base64 图片已保留；新文章推荐单独上传图片，避免 Markdown 文件过大。

## 4. 等待构建

在仓库 **Actions** 中检查 `pages build and deployment` 是否成功，然后访问 [博客首页]({{ '/' | relative_url }})。列表按日期从新到旧显示。

如果没有显示文章，检查文件名日期、开头两条 `---`、YAML 引号，以及是否误加 `published: false`。若整个站点 404，检查 **Settings → Pages → Deploy from a branch → main → / (root)**。

根目录不能放 `.nojekyll`。博客首页是 `/cozz-blog/`，不是旧主页的 `/blog.html`。

## 安全与隐私

仅上传准备公开的内容。不要提交密码、Token、私密数据或聊天记录。Markdown 可以包含 HTML，因此不要未经检查直接发布他人提供的文件。删除文件不等于清除 Git 历史中的内容；凭据泄露后应立即撤销。

</div>
