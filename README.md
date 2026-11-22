# The Koshary Guys

One-page website for a small home-cooked Egyptian food business in Wels, Austria. Customers build an order (koshary €5, rice pudding €2), and the site opens WhatsApp with the order text already written.

Plain HTML, CSS and JavaScript. No build step, no dependencies, no cookies, no external requests.

## Run it

Open `index.html` in a browser. Or serve the folder:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Structure

```
index.html        page markup (chefs, decorations, order form)
css/styles.css    all styling and animations
js/config.js      WhatsApp number and prices  <- edit these first
js/i18n.js        English and German text, WhatsApp message templates
js/order.js       language switch, order builder, receipt, WhatsApp link
js/effects.js     eye blinking, scroll reveal
js/audio.js       synthesized sounds and music loop
js/main.js        start-up
docs/PROJECT.md   idea, analysis, to-do list, design history
```

Scripts are loaded in order with plain `<script>` tags and share globals, so the site also works when opened straight from disk.

## Common changes

| What | Where |
|---|---|
| WhatsApp number | `PHONE` in `js/config.js` |
| Prices | `PRICE` in `js/config.js`, plus the two `data-p` labels in `index.html` |
| Any text or translation | `js/i18n.js` |
| Imprint and privacy (address, Gewerbe) | `impT` and `privT` in `js/i18n.js` |
| Colours | CSS variables at the top of `css/styles.css` |
| Add a menu item | add a `.dish` block in `index.html`, then an entry in `PRICE`, `q` and `IK`, and its text in `i18n.js` |

## Before going live

- Replace the `[placeholders]` in the imprint (street address, trade registration). Confirm the legal text with the Wirtschaftskammer (WKO).
- Check the allergen text against your exact recipes.
- Add an `og:image` once the site has a real domain.

## Deploy on GitHub Pages

1. Push this folder to a GitHub repository.
2. Repository Settings, Pages, Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. The site appears at `https://<username>.github.io/<repo>/`.

## License

MIT, see `LICENSE`.
