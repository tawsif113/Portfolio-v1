# Professional Portfolio — Kazi Md. Tawsif Rahman

Static professional portfolio focused on backend software engineering.

## Current emphasis

The portfolio is structured around engineering evidence rather than a generic project gallery. The flagship case study is [Spring Boot Rescue Lab](https://github.com/tawsif113/spring-boot-rescue-lab), which documents six production-style backend failures and their remediations:

- N+1 SQL/query amplification
- duplicate orders caused by retries
- inventory overselling under concurrency
- broken object-level authorization
- lost integration events across PostgreSQL and RabbitMQ
- Redis hot-key cache stampedes and transaction-safe cache invalidation

Each incident links to its root-cause analysis, design trade-offs, implementation, regression tests, and reproducible evidence.

## Professional résumé and experience

The hero, contact section, and footer link to the current two-page [Java backend résumé](assets/Tawsif_Rahman_Java_Backend_Resume.pdf), updated October 7, 2026. The PDF is served directly with the site; no external file-sharing service is required.

The professional experience section matches the approved résumé wording for CRM, ticketing, and the loan proposal command service. Enterprise IAM Lab is included alongside the existing independent systems work. Rescue Lab metrics are explicitly identified as controlled lab results.

To update the résumé, replace `assets/Tawsif_Rahman_Java_Backend_Resume.pdf` and review the three download links and professional experience copy together.

## Design

The visual system uses a restrained professional palette:

- navy for high-signal case-study sections
- white/slate surfaces for resume content
- blue as the only primary accent
- Inter + JetBrains Mono typography

The site is responsive, accessible, and intentionally framework-free.

## Stack

- Semantic HTML
- Modern CSS
- No JavaScript dependency
- No framework or build step

## Run locally

Open `index.html` directly in a browser, or serve the directory with any static file server.

