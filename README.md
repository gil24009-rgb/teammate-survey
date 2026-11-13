# Teammate Survey

[Open survey](https://gil24009-rgb.github.io/teammate-survey/)

The survey frontend is hosted by GitHub Pages. Every push to `main` runs the build and deploy workflow in GitHub Actions.

Respondents can add an image and a short text response for each person. All questions are optional.

Responses, images, organizer authentication, and server secrets are stored outside this public repository. They are never included in the Pages build or Git history. The public page sends submissions to the existing private data service. Organizer access opens a separate authenticated page.

## Local development

Use Node 22 or newer. Run `npm ci`, then `npm run dev`. For local API testing, the data service must explicitly allow the local origin. Build with `npm run build`.
