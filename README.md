# Map of Consciousness — Hawkins Calibration Database

A searchable reference tool for David R. Hawkins' consciousness calibration system, built from *Truth vs. Falsehood*, *Power vs. Force*, *The Eye of the I*, *I: Reality and Subjectivity*, and the Vivesur calibration list.

**3,900+ entries** across categories including world religions, spiritual teachers, historical figures, countries, films, war calibrations, scriptures, and more.

## Features
- Full-text search across names, descriptions, and categories
- Advanced filters: LOC range sliders, source filter, truth/false filter, category multi-select with group presets
- Light / dark mode (WCAG AA compliant)
- Star/bookmark entries
- Live stats bar (avg LOC, highest, lowest for current filter set)
- Compact view toggle

## Live site
👉 **[View on GitHub Pages](https://tytown.github.io/hawkins-map)**

## Deploy your own

```bash
git clone https://github.com/tytown/hawkins-map
cd hawkins-map
npm install
npm run dev        # local dev
npm run deploy     # push to GitHub Pages
```

### Self-host with Docker

```bash
docker compose -f docker/compose.yaml up -d
```

The site is served at http://localhost:8080. Set `PORT` to use a different host port, e.g. `PORT=3000 docker compose -f docker/compose.yaml up -d`.

## Sources
- *Truth vs. Falsehood* — David R. Hawkins (pages 396–678, all calibration tables)
- *Power vs. Force* — David R. Hawkins
- *The Eye of the I* — David R. Hawkins
- *I: Reality and Subjectivity* — David R. Hawkins
- Vivesur full calibration list (aguanosos.blogspot.com)
