[English](./README.md) | **简体中文**

<p align="center">
  <img src="./docs/brand/icon.svg" width="120" height="120" alt="Questionnaire Star · 答题端 logo" />
</p>

<div align="center">

# Questionnaire Star · 答题端

<p>
  <strong>轻量问卷填写端原型</strong><br />
  探索动态路由、类型化题型组件与表单布局。
</p>

<p>
  <a href="#快速开始"><img src="https://img.shields.io/badge/快速开始-Read%20Guide-2563eb?style=for-the-badge" alt="快速开始" /></a>
  <a href="https://github.com/guolola/qustion-star-c/issues"><img src="https://img.shields.io/badge/Feedback-Open%20Issue-0f766e?style=for-the-badge" alt="Report an issue" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-7c3aed?style=for-the-badge" alt="MIT License" /></a>
</p>

<p>
  <img src="https://img.shields.io/badge/Framework-Next.js%2015-111827?style=flat-square" alt="Framework: Next.js 15" />
  <img src="https://img.shields.io/badge/React-19-61dafb?style=flat-square" alt="React: 19" />
  <img src="https://img.shields.io/badge/Language-TypeScript-3178c6?style=flat-square" alt="Language: TypeScript" />
  <img src="https://img.shields.io/badge/Status-Prototype-f59e0b?style=flat-square" alt="Status: Prototype" />
</p>

</div>

## 项目介绍

基于 Next.js App Router 的问卷填写端小型项目。动态路由 `/question/[id]` 展示包含输入框和单选题的示例问卷。

当前为**早期原型**：题目数据写在页面中，表单未接入答卷保存接口，输入框组件也尚未提供提交字段名。目前不会从[编辑器项目](https://github.com/guolola/questionnaire-star---react)加载已发布问卷。

## 已有内容

| 模块 | 当前实现 |
| --- | --- |
| 页面路由 | 通过 `/question/[id]` 接收问卷标识 |
| 题型组件 | 带 TypeScript 属性定义的输入框和单选题 |
| 页面样式 | 基于 CSS Modules 的题型和提交按钮布局 |
| 技术框架 | Next.js 15、React 19 与 App Router |

## 快速开始

准备 Node.js 22.12+ 和 npm：

```bash
git clone https://github.com/guolola/qustion-star-c.git
cd qustion-star-c
npm install
npm run dev
```

打开 **http://localhost:3000/question/demo**。示例入口是问卷路由，仓库未包含首页。`src/app/layout.tsx` 配置的 Geist 字体可能需要联网下载。

## 目录结构

| 路径 | 职责 |
| --- | --- |
| `src/app/question/[id]/page.tsx` | 示例问卷与动态 ID |
| `src/components/QuestionInput` | 输入框视图 |
| `src/components/QuestionRadio` | 单选选项及布局 |
| `src/app/layout.tsx` | 应用布局和字体 |

## 常用命令

| 命令 | 用途 |
| --- | --- |
| `npm run dev` | 启动开发服务 |
| `npm run build` | Next.js 构建 |
| `npm start` | 启动已构建的生产服务 |
| `npm run lint` | 执行已配置的代码检查 |

部署前需要实际验证构建和接口联调。

## 后续方向

- 根据 ID 从后端读取问卷定义。
- 使用统一数据结构接入所需题型。
- 补充提交字段名、校验与答卷保存。
- 处理问卷不存在、未发布及已过期等情况。
- 根据编辑器发布的数据验证渲染与提交。

## 来源与协议

迁移自 [Gitee](https://gitee.com/guolola/qustion-star-c)，保留原 Git 历史。仓库名称沿用原始拼写。

[MIT](./LICENSE) · Copyright © 2026 guolola。
