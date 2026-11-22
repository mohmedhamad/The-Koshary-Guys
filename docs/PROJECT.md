# The Koshary Guys: Project Summary

## 1. The idea

My brother studies for a master's degree in Austria. At the university's International Day, each group cooked a traditional dish from its country. He and his Egyptian friend made **koshary**, and everyone loved it.

The business idea: **sell home-cooked Egyptian food, with koshary as the hero**, to people who can order it, pick it up (or get it delivered) and enjoy it at home.

- **Name (working):** The Koshary Guys
- **Location:** Wels, Austria
- **Hero product:** Koshary (vegan by nature)
- **Side items:** Rice pudding (roz bel laban) as dessert, more traditional Egyptian dishes later
- **Prices:** Koshary €5, rice pudding €2
- **Tone:** Friendly, community-driven, not a "professional corporate" brand
- **First audience:** The students who tried it at International Day, then friends and friends of friends, then the Arab community, then Europeans curious about new food

## 2. Honest analysis

### Strengths
- Koshary is distinctive and almost nobody in the area sells it.
- There is real emotional demand from the Egyptian and Arab community (homesickness).
- Curious locals and students love trying new food.
- Cheap ingredients, and it is naturally vegan, which helps in Europe.
- The name is easy to say, remember and spell.
- A community story ("two friends, one pot, International Day") is a strong, authentic hook.

### Risks and weak points
- **International Day proves little.** The food was free and people try anything at a free event. Test with paid orders before investing.
- **Koshary is labour-intensive.** It has about six separate components (rice, lentils, pasta, chickpeas, tomato sauce, crispy onions, plus the vinegar-garlic sauce). Prep time will be the main cost. Cook components in big batches and time the prep per portion in the first test.
- **Prices need a check.** €5 and €2 are set, but confirm they cover ingredients, packaging, delivery and your time. Compare with local takeaway bowls in Wels.
- **Legal requirements in Austria.** Selling food usually needs a registered business (Gewerbe), food hygiene rules (HACCP), allergen information and possibly more. A student residence permit may also limit work or self-employment. Check this first. This is general information, not legal advice. Confirm with the Wirtschaftskammer (WKO), the local authority, or the university's international office.
- **Website legal text.** A business website in Austria usually needs an Impressum and a privacy notice. The site has a draft section with placeholders. Fill it in and confirm it with the WKO.
- **Delivery and logistics.** A small team needs a simple, limited routine.

### Recommended approach
1. Test with **20 to 30 paid pre-orders** among friends and classmates. Measure how many reorder (for example, success = at least half of the first 20 buyers reorder).
2. Keep the menu tiny: **koshary + rice pudding**.
3. Take orders in batches (for example one or two fixed days per week) with **pickup or local delivery**.
4. Sort out the legal side before regular selling.
5. Grow through events, student groups and community pop-ups once it works.
6. Collect feedback and photos for the website and social media.

## 3. Website

A simple one-page website, built as a single HTML file (`koshary-guys.html`). Previous live page: https://claude.ai/artifact/5FJPePrkzMp3DfDTRznY4j (shows the older version until republished).

### Design direction
- **Style:** Chunky cartoon vector style (thick dark outlines, rounded shapes, glossy gradients). The characters are an original design.
- **Hero:** Two animated cartoon chefs dressed like young pharaohs. One holds a bowl of koshary, the other tosses crispy onions from a pan into it. They blink and float.
- **Walking girl:** A third character dressed in pharaoh style (striped headcloth with cobra, broad collar, white dress with a gold belt). She walks across the checkered floor at the bottom of the page in the side-on "walk like an Egyptian" pose with bent arms and a sliding head, then pauses before the next pass. She stands still in the middle when reduced-motion is on.
- **Theme:** Light and bright only (no dark mode). Warm cream background with a faint pyramid pattern, red and cream striped awning, bunting and a checkered floor.
- **Decorations:** Egyptian symbols (cats, ankh, Eye of Horus, pyramid, scarab) next to Austrian ones (alps, edelweiss, red-white-red flag, gold disc). They are faded on phones so they do not hide text.
- **Type:** A rounded system font stack. Fredoka is no longer loaded from Google, to avoid sending visitors' data to Google servers (GDPR).
- **Colours:** Cream `#FFFAE3`, tomato red `#E5533C`, sunny yellow `#FFD34D`, dark brown `#3B1F1A`, green `#7BC96F`.
- **Sound:** One funky maqsum music loop (off by default) and soft wooden-tap and bell button sounds (on by default), both toggleable.
- **Accessibility:** Reduced-motion respected, visible focus outlines, 44px toggle buttons, keyboard-focusable send button.

### Page structure
1. Awning, bunting and title
2. Animated chefs with koshary
3. One-line description
4. **Order now** button
5. **Build your order**
   - Koshary (€5) counter
   - Rice pudding (€2) counter
   - Spice level: Mild or Spicy (with a short explanation)
   - Pickup or Delivery (delivery shows an address field)
   - Name field
   - Receipt-style summary: one line per item with its price, spice and pickup/delivery, and a large highlighted total
   - **Send order on WhatsApp** (enabled once there is an item, a name, and an address for delivery)
6. Notes on prices, pickup confirmation and allergens
7. Short story line
8. Imprint and privacy (expandable, draft with placeholders)
9. Footer
10. Language switch (EN/DE, follows the browser language by default) and sound toggles

### How ordering works
The customer builds the order, then taps the button. WhatsApp opens with a message already written, in the language chosen on the site:

```
Hi Koshary Guys! I’m Ahmed and I’d like to order:
- 2 × Koshary (€10)
- 1 × Rice pudding (€2)
Spice: Spicy
Pickup in Wels
Total: €12
```

You then reply with the pickup time and place.

## 4. Things to fill in

| Item | Status |
|---|---|
| WhatsApp number | Set (+43 660 4877087). Change `PHONE` in the script if needed. |
| Prices | Koshary €5, rice pudding €2. Change in `PRICE` in the script and the two `data-p` labels. |
| Pickup place / order days | Not on the site yet. Currently confirmed on WhatsApp. |
| Imprint and privacy | Name (The Koshary Guys) and email (support@kosharyguys.com) set. Street address and Gewerbe details are still `[placeholders]`: use your real address. Confirm with the WKO. |
| Allergen text | Draft (gluten, milk). Check against your exact recipes. |
| Share preview image | Not set. Add an `og:image` after publishing on a real domain. |
| Real photos | None yet. |
| Social media handle | Not set. |
| Legal registration | To be checked and completed. |

## 5. Possible next steps

- Publish the final site on a real domain and add a share preview image.
- Add order days and a pickup place once decided.
- Add photos of real food and a few customer quotes from International Day.
- Add Arabic if wanted.
- Create matching Instagram and TikTok accounts using the chef characters.
- Design a simple logo, sticker and packaging with the same characters.
- Plan a first pop-up at a university or community event.

## 6. Version history of the design

1. First version: pixel-art style with a bouncing bowl, ingredients raining and a full order form.
2. Simplified: one pixel chef holding koshary, a short menu, one button.
3. Restyled into the cartoon vector look.
4. Wels, Egyptian background symbols, and an order builder before WhatsApp.
5. Two pharaoh chefs, Austrian decorations, name field, sounds and music.
6. Current: walking pharaoh girl on the floor strip, light and bright only, prices, EN/DE switch, delivery address, allergens, imprint and privacy draft, no Google Fonts, mobile and accessibility fixes.
