[English](./README.md) | **简体中文**

<p align="center">
  <img src="./docs/brand/logo.png" width="120" height="120" alt="Questionnaire Star · 答题端 logo" />
</p>

<div align="center">

# Questionnaire Star · 答题端

<p>
  <strong>轻量问卷填写端原型</strong><br />
  使用动态路由与类型化 React 组件探索问卷填写页面。<br />
  <sub>打开问卷 · 填写答案 · 接入提交</sub>
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

> 让每份问卷拥有专注的填写页面。从类型化组件和清晰布局出发，逐步接入问卷数据与答卷提交。

</div>

## 项目介绍

基于 Next.js App Router 的问卷填写端小型项目。动态路由 `/question/[id]` 展示包含输入框和单选题的示例问卷。

当前为**早期原型**：题目数据写在页面中，表单未接入答卷保存接口，输入框组件也尚未提供提交字段名。目前不会从[编辑器项目](https://github.com/guolola/questionnaire-star---react)加载已发布问卷。

[填写流程](#填写流程) · [核心能力](#核心能力) · [本地运行](#快速开始) · [后续方向](#后续方向)

## 核心能力

| 模块 | 当前实现 |
| --- | --- |
| 页面路由 | 通过 `/question/[id]` 接收问卷标识 |
| 题型组件 | 带 TypeScript 属性定义的输入框和单选题 |
| 页面样式 | 基于 CSS Modules 的题型和提交按钮布局 |
| 技术框架 | Next.js 15、React 19 与 App Router |

## 填写流程

| 阶段 | 当前行为 | 后续接入 |
| --- | --- | --- |
| 打开问卷 | 从 `/question/[id]` 读取标识 | 通过问卷 API 查询该标识 |
| 渲染题目 | 展示写在页面中的输入框和单选题 | 将已发布定义映射为类型化题型组件 |
| 填写答案 | 浏览器控件可输入文本和选择选项 | 补充稳定的字段名与校验 |
| 提交 | 已有按钮，未实现答卷保存处理 | 发送到后端并展示成功或失败状态 |

该示例适合学习小型 App Router 页面与组件拆分。作为问卷收集服务使用前，需要先接入并验证数据契约。

## 与编辑器协作

[可视化编辑器](https://github.com/guolola/questionnaire-star---react) 包含更多题型组件与 API 适配层。联通两个项目需要统一问卷结构、已发布问卷查询和答卷提交接口，这些服务未包含在本仓库中。

## 快速开始

准备 Node.js 22.12+ 和 npm：

```bash
git clone https://github.com/guolola/qustion-star-c.git
cd qustion-star-c
npm install
npm run dev
```

打开 **http://localhost:3000/question/demo**。示例入口是问卷路由，仓库未包含首页。`src/app/layout.tsx` 配置的 Geist 字体可能需要联网下载。

## 架构与目录

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

## 来源与迁移

迁移自 [Gitee](https://gitee.com/guolola/qustion-star-c)，保留原 Git 历史。仓库名称沿用原始拼写。

## 文档入口

- [动态问卷页面](./src/app/question/%5Bid%5D/page.tsx)
- [输入框组件](./src/components/QuestionInput/index.tsx)
- [单选组件](./src/components/QuestionRadio/index.tsx)
- [应用布局](./src/app/layout.tsx)
- [配套编辑器](https://github.com/guolola/questionnaire-star---react)

## 开源协议

[MIT](./LICENSE) · Copyright © 2026 guolola。
