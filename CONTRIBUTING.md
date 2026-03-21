# Contributing to Shahnawaz's Portfolio

First off — thank you for stopping by! 🙏  
This portfolio is open source and contributions are welcome, whether it's a bug fix, a new feature idea, or a design improvement.

---

## Getting Started

### Prerequisites
- A browser (yes, literally just that for most changes)
- Node.js 18+ (optional, for the dev server)
- Git

### Local Setup

```bash
# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# 2. (Optional) Install dev dependencies
npm install

# 3. Start local dev server
npm run dev
# Opens at http://localhost:3000

# 4. Make your changes in index.html / style / JS
```

---

## What Can You Contribute?

### Bug Fixes
- Broken links
- Animation glitches on specific browsers
- Responsive layout issues on mobile
- Typos or content errors

### Improvements
- Accessibility enhancements (ARIA labels, keyboard nav, focus states)
- Performance optimizations (lazy loading, reduced repaints)
- New project card entries (open an issue first)
- Additional language support

### Design
- This portfolio uses the **Neo-Brutalist** aesthetic intentionally.  
  If you want to suggest a design change, please open an issue with a screenshot or Figma mockup first.

---

## Contribution Workflow

1. **Fork** the repository
2. **Create a branch** with a descriptive name:
   ```bash
   git checkout -b fix/broken-nav-link
   git checkout -b feat/dark-mode-toggle
   ```
3. **Make your changes** — keep commits small and focused
4. **Test** your changes in at least Chrome and Firefox
5. **Push** your branch:
   ```bash
   git push origin your-branch-name
   ```
6. **Open a Pull Request** — fill out the PR template

---

## PR Guidelines

- One feature or fix per PR
- Describe *what* changed and *why*
- Include a screenshot if it's a visual change
- Don't change the overall design language without discussion

---

## Code Style

- **HTML**: Semantic elements, proper indentation (2 spaces)
- **CSS**: CSS custom properties for colors, grouped by section with clear comments
- **JS**: Vanilla JS preferred, no jQuery, keep GSAP usage clean
- No minification in PRs — the minified version is handled at build time

---

## Opening Issues

Found a bug? Have a suggestion? [Open an issue](https://github.com/shaikhshahnawaz13/portfolio/issues/new) with:
- **Bug**: Steps to reproduce, browser + OS, screenshot if visual
- **Feature**: What problem it solves, rough idea of implementation

---

## Code of Conduct

Be respectful. This is a personal portfolio project and a learning space.  
No spam, no harassment, no low-effort PRs.

---

## License

By contributing, you agree your contributions will be licensed under the [MIT License](LICENSE).

---

Made with ♥ by [Shaikh Shahnawaz Ahmed](https://shaikhshahnawaz13.github.io/portfolio)
