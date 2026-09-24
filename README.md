# Professional Portfolio — Kazi Md. Tawsif Rahman

Static professional portfolio focused on backend software engineering.

## Current emphasis

The portfolio is structured around engineering evidence rather than a generic project gallery. The flagship case study is [Spring Boot Rescue Lab](https://github.com/tawsif113/spring-boot-rescue-lab), which documents five production-style backend failures and their remediations:

- N+1 SQL/query amplification
- duplicate orders caused by retries
- inventory overselling under concurrency
- broken object-level authorization
- lost integration events across PostgreSQL and RabbitMQ

Each incident links to its root-cause analysis, design trade-offs, implementation, regression tests, and reproducible evidence.

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
