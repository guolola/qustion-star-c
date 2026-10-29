**English** | [简体中文](./readme-zh-cn.md)

<p align="center">
  <img src="./docs/brand/logo.png" width="120" height="120" alt="Questionnaire Star · Respondent logo" />
</p>

<div align="center">

# Questionnaire Star · Respondent

<p>
  <strong>A lightweight questionnaire respondent prototype</strong><br />
  Explore questionnaire pages with dynamic routes and typed React components.<br />
  <sub>Open a questionnaire · Fill answers · Connect submission</sub>
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

> Give each questionnaire a focused answering page. Start with typed components and clear layouts, then connect the data and submission workflow.

</div>

## Overview

A small Next.js App Router project for the respondent side of a questionnaire application. The dynamic `/question/[id]` route renders a sample questionnaire with a text input and radio choices.

This is an **early prototype**. Question data is hardcoded, the form has no answer-persistence endpoint, and the input component does not yet provide a submission field name. It does not currently load published questionnaires from the [editor project](https://github.com/guolola/questionnaire-star---react).

[Answering workflow](#answering-workflow) · [Core capabilities](#core-capabilities) · [Run locally](#quick-start) · [Next steps](#next-steps)

## Core Capabilities

| Area | Current implementation |
| --- | --- |
| Routing | Dynamic questionnaire identifier at `/question/[id]` |
| Questions | Reusable text-input and radio-choice components with TypeScript props |
| Layout | CSS Modules for question and submit-button styling |
| Framework | Next.js 15, React 19 and App Router |

## Answering Workflow

| Stage | Current behavior | Next integration |
| --- | --- | --- |
| Open a questionnaire | The route reads an identifier from `/question/[id]` | Resolve that identifier through a questionnaire API |
| Render the questions | The page renders a hardcoded input and radio group | Map published definitions to typed question components |
| Fill answers | Browser form controls accept input and radio selection | Add stable field names and validation |
| Submit | A button exists, with no persistence handler | Send answers to a backend and show success or failure |

The sample is useful for studying a small App Router page and component boundaries. Connect and verify the data contract before using it as a survey collection service.

## Integration with the Editor

The [visual editor](https://github.com/guolola/questionnaire-star---react) contains a larger component library and API adapters. Connecting it requires a shared questionnaire schema, published-question lookup and answer-submission endpoint. Those services are not supplied by this repository.

## Quick Start

Use Node.js 22.12+ and npm:

```bash
git clone https://github.com/guolola/qustion-star-c.git
cd qustion-star-c
npm install
npm run dev
```

Open **http://localhost:3000/question/demo**. The questionnaire route is the demo entry; no home page is included. Development may need network access to download the Geist fonts configured in `src/app/layout.tsx`.

## Architecture

| Path | Responsibility |
| --- | --- |
| `src/app/question/[id]/page.tsx` | Sample questionnaire and dynamic ID |
| `src/components/QuestionInput` | Text-input view |
| `src/components/QuestionRadio` | Radio choices and layout |
| `src/app/layout.tsx` | Application shell and fonts |

## Common Commands

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

## Source and Migration

Imported from [Gitee](https://gitee.com/guolola/qustion-star-c), retaining its original Git history. The repository name preserves the original spelling.

## Documentation

- [Dynamic questionnaire page](./src/app/question/%5Bid%5D/page.tsx)
- [Input component](./src/components/QuestionInput/index.tsx)
- [Radio component](./src/components/QuestionRadio/index.tsx)
- [Application layout](./src/app/layout.tsx)
- [Companion editor](https://github.com/guolola/questionnaire-star---react)

## License

[MIT](./LICENSE) · Copyright © 2026 guolola.
