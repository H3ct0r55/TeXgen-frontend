# TeXgen Frontend [![Status](https://img.shields.io/badge/status-in--development-red)]()

A React-based web interface for [TeXgen](https://github.com/H3ct0r55/TeXgen), a LaTeX table generator that transforms CSV/Excel data into clean LaTeX tabular environments via a JSON config.

---

## 🌐 Features

- Upload CSV or Excel files
- Input JSON configuration interactively
- Preview or download LaTeX table output
- Connects to the TeXgen API on `localhost:8000`

---

## 📦 Setup

```bash
git clone https://github.com/H3ct0r55/TeXgen-frontend.git
cd TeXgen-frontend
npm install
npm run dev
```

Make sure the [TeXgen backend](https://github.com/H3ct0r55/TeXgen) is running at `localhost:8000`.

---

## 📁 Project Structure

- `src/components/`: Upload interface, JSON config form, preview pane
- `src/api/`: API handler for sending files and config to backend

---

## 🛣 Roadmap

- [ ] Live LaTeX preview
- [ ] Dark mode
- [ ] Input validation and presets
- [ ] Deployment options (GH Pages, Docker)

---