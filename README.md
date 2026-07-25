
# 👋 Thanatchanan Portfolio

🌐 **Live Portfolio:**  
### 👉 https://natchanan001.github.io

A responsive React + Vite portfolio starter designed for deployment as a GitHub user site.

## Run locally

```bash
npm install
npm run dev
```

## Edit your information

Most text, links, project placeholders, and skills are stored in:

```text
src/data/portfolio.js
```

## Deploy as USERNAME.github.io

1. Create a public repository named exactly `YOUR_USERNAME.github.io`.
2. Upload or push this project to the `main` branch.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions** as the source.
5. Push a change or manually run the workflow under the Actions tab.

Because this is a GitHub user site, `vite.config.js` uses `base: '/'`.
