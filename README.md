**English** | [简体中文](./readme-zh-cn.md)

<p align="center">
  <img src="./docs/brand/icon.svg" width="120" height="120" alt="Questionnaire Star · Respondent logo" />
</p>

<div align="center">

# Questionnaire Star · Respondent

<p>
  <strong>A lightweight questionnaire respondent prototype</strong><br />
  Explore dynamic routes, typed question components and form layouts.
</p>

<p>
  <a href="#quick-start"><img src="https://img.shields.io/badge/Quick%20Start-Read%20Guide-2563eb?style=for-the-badge" alt="Quick Start" /></a>
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

## Overview

A small Next.js App Router project for the respondent side of a questionnaire application. The dynamic `/question/[id]` route renders a sample questionnaire with a text input and radio choices.

This is an **early prototype**. Question data is hardcoded, the form has no answer-persistence endpoint, and the input component does not yet provide a submission field name. It does not currently load published questionnaires from the [editor project](https://github.com/guolola/questionnaire-star---react).

## Included

| Area | Current implementation |
| --- | --- |
| Routing | Dynamic questionnaire identifier at `/question/[id]` |
| Questions | Reusable text-input and radio-choice components with TypeScript props |
| Layout | CSS Modules for question and submit-button styling |
| Framework | Next.js 15, React 19 and App Router |

## Quick Start

Use Node.js 22.12+ and npm:

```bash
git clone https://github.com/guolola/qustion-star-c.git
cd qustion-star-c
npm install
npm run dev
```

Open **http://localhost:3000/question/demo**. The questionnaire route is the demo entry; no home page is included. Development may need network access to download the Geist fonts configured in `src/app/layout.tsx`.

## Project Structure

| Path | Responsibility |
| --- | --- |
| `src/app/question/[id]/page.tsx` | Sample questionnaire and dynamic ID |
| `src/components/QuestionInput` | Text-input view |
| `src/components/QuestionRadio` | Radio choices and layout |
| `src/app/layout.tsx` | Application shell and fonts |

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build with Next.js |
| `npm start` | Serve a completed production build |
| `npm run lint` | Run the configured lint command |

Build and integration behavior should be checked before deployment.

## Next Steps

- Load questionnaire definitions by ID from a backend.
- Connect all required question types to a shared schema.
- Add submission field names, validation and answer storage.
- Handle missing, unpublished and expired questionnaires.
- Verify rendering and submission against the editor's published data.

## Source and License

Imported from [Gitee](https://gitee.com/guolola/qustion-star-c), retaining its original Git history. The repository name preserves the original spelling.

[MIT](./LICENSE) · Copyright © 2026 guolola.
