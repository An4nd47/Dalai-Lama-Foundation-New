# Ghost Admin Panel Setup Guide: Dalai Lama Foundation Theme

Welcome to the comprehensive guide for managing the content of your Premium Dalai Lama Foundation website. The entire website is designed so that you can edit **100% of the content** directly through the Ghost Admin interface, while maintaining the stunning frontend styling.

## 🔑 Core Concepts

To make this work seamlessly, the theme utilizes Ghost's built-in features:
- **Pages:** Used to control exact sections (like Headings or Hero sections). We target these via their **URL/Slug**.
- **Posts with Internal Tags:** Used to manage repeatable items like Service cards, Stats, Logos, and Programs. An **Internal Tag** is simply a tag created in Ghost that starts with a hash, e.g., `#site-stat`. These are hidden from the public tagging structure but are powerful for organizing backend content.

Below is the definitive map of what to create in your Ghost Admin to populate the premium UI components.

---

> [!TIP]
> Make sure **"Custom Excerpts"** are enabled in your Ghost settings to fully utilize these mappings.

## 1. Global Components

### Site Navigation
- Created automatically through **Settings > Design > Navigation**. Add links to your pages (e.g., About, Impacts, Our Work, Partnerships, Team).

### Footer
- **Footer Social Links:** Create a Page with slug `footer-social-links`. Put your HTML/links inside the *Content* block.
- **Footer Contact Info:** Create a Page with slug `footer-contact-info`. *Title* = "Contact Us", *Content* = Contact details and text.
- **Footer Newsletter Info:** Create a Page with slug `footer-newsletter-info`. *Title* = "Newsletter", *Content* = Description text, *Custom Excerpt* = Subscribe Button text.

---

## 2. Home Page (`index.hbs`)

### Home Hero
- **Mechanism:** Page with slug `home-hero`
- **Fields:**
  - *Title:* Main Hero Headline (e.g., "Compassion in Action")
  - *Custom Excerpt:* Hero Description/Subtitle. (Fallback is Site Description).
  - *Feature Image:* The portrait image.

### Site Statistics Banner
- **Mechanism:** Posts mapped via internal tag `#site-stat`
- **Fields for each Post:**
  - *Internal Tag:* `#site-stat`
  - *Title:* The raw number (e.g., `5000+`)
  - *Excerpt:* The label (e.g., `Lives Impacted`)

### Focus Areas Section
- **Heading:** Page with slug `section-focus-areas`
- **Cards:** This section dynamically pulls your first 3 **Public Tags** (Ghost Tags). Ensure your top 3 tags have a *Feature Image*, *Name*, and *Description* set in your Ghost Tags panel.

### Programs Slider
- **Heading:** Page with slug `section-programs`
- **Cards:** Posts mapped via internal tag `#program`
  - *Fields:* *Title*, *Excerpt*, *Feature Image*. Ensure you attach one *Primary Tag* (Public) for the badge text!

### Stories & Highlights Split
- **Highlights Heading:** Page with slug `section-highlights`
- **Posts Carousel:** Automatically pulls your standard **Blog Posts** (Public) that do *not* contain the internal configuration tags.
- **Partner CTA Card:** Page with slug `partner-cta`
  - *Title*, *Excerpt*, *Custom Excerpt* (Button text), *Feature Image* (Background).

### Infinite Partner Logos
- **Mechanism:** Posts mapped via internal tag `#partner-logo`
- **Fields:** Add a *Feature Image* (The logo). *Title* is used for alt text.

---

## 3. About Page (`custom-about.hbs`)

- **Page Itself:** Set title, excerpt, and feature image (background).
- **Founder Profile:** Page with slug `founder-profile`
  - *Title:* Founder Name / Label
  - *Feature Image:* Portrait of the Founder
  - *Custom Excerpt:* Special spiritual blockquote
  - *Content:* Full biography
- **Mission & Vision Grid:** Posts mapped to internal tag `#mission-vision`
  - *Title*, *Excerpt*, *Custom Excerpt* (HTML string for an SVG icon).

---

## 4. Impacts Page (`custom-impacts.hbs`)

- **Page Itself:** Set title, excerpt, and feature image.
- **Impact Stats:** Posts mapped to internal tag `#impact-stat`
  - *Title* (Number) & *Excerpt* (Label).
- **Beneficiaries Main Highlight:** Page with slug `impacts-beneficiaries-main`
  - *Feature Image* (Large photo), *Title* (Highlight Title), *Excerpt* (Short caption), *Custom Excerpt* (List Heading text).
- **Beneficiaries List:** Posts mapped to internal tag `#beneficiary`
  - *Title* (Bold metric), *Excerpt* (Trailing span text).

---

## 5. Our Work Page (`custom-our-work.hbs`)

- **Page Itself:** Set title and excerpt.
- **Alternating Focus Arrays:** Posts mapped to internal tag `#focus-area`
  - *Title*, *Excerpt*, *Feature Image* (Left/Right image), *Content* (For stats logic or internal text).
- **Approach Cards Heading:** Page with slug `our-work-approach-heading`
- **Approach Cards:** Posts mapped to internal tag `#approach-card`
  - *Title*, *Excerpt*, *Custom Excerpt* (HTML SVG Icon string).

---

## 6. Partnerships Page (`custom-partnerships.hbs`)

- **Page Itself:** Main title, background hero image.
- **Iconic Values Grid:** Posts mapped to internal tag `#partnership-value`
  - *Title*, *Excerpt*, *Custom Excerpt* (HTML Icon).
- **Collaboration Info:** Page with slug `partnership-collab-info`
  - *Title* and *Excerpt* text blocks.
- **Collaboration Block List:** Posts mapped to internal tag `#collab-type`
  - *Title* and *Excerpt*.
- **Bottom CTA:** Page with slug `partnership-cta`
  - *Title*, *Excerpt*, *Custom Excerpt* (The Mailto: link or Web link).

---

## 7. Reports Page (`custom-reports.hbs`)

> [!IMPORTANT]
> The PDF links for these reports are controlled via the **Canonical URL** field found under the Ghost Editor Settings -> Meta Data menu for each post.

- **Current Year Heading & Text:** Page with slug `reports-current-info`
  - *Title* (e.g. "2023-24"), *Content* block (Highlights string).
- **Current Reports Lists:** Posts mapped to internal tag `#report-current`
  - *Title*, *Excerpt*, *Custom Excerpt* (Status badge), and *Canonical URL* (Link to PDF).
- **Archive Heading & Text:** Page with slug `reports-archive-info`
- **Archive Reports Lists:** Posts mapped to internal tag `#report-archive`
  - Standard fields mapped exactly like `#report-current`.

---

## 8. Team Page (`custom-team.hbs`)

- **Page Itself:** Set title and excerpt.
- **Leadership Spotlight:** Page with slug `leadership-spotlight`
  - *Title* (Name), *Excerpt* (Short bio line), *Content* (Extended bio), *Feature Image*, *Custom Excerpt* (Badge label: e.g. "Leadership").
- **Structure Grid Heading:** Page with slug `team-structure-heading`
- **Structure Cards:** Posts mapped to internal tag `#team-structure`
  - *Title* (Role/Title), *Excerpt*, *Custom Excerpt* (SVG Icon).

---

## 9. Donate Page (`custom-donate.hbs`)

- **Page Itself:**
  - *Title*, *Excerpt*, *Feature Image* (Hero Background).
  - *Content:* **CRITICAL:** Paste the DanaMojo iframe/widget script directly inside the Ghost page editor content for your Donate page! The theme will grab this and place it into the dynamic glass box container securely.
- **Foundation Message:** Page with slug `donate-message`
  - *Title*, *Content*, *Custom Excerpt* (Top Label string).
- **Impact Items:** Posts mapped to internal tag `#donate-impact`
  - *Title*, *Excerpt*, *Custom Excerpt* (Icon SVG HTML).
- **Trust Badge Text:** Page with slug `donate-trust-badge`
  - *Title* dictates the text inside the shiny trust badge below the impacts.
- **Secure Information (Bottom block):** Posts mapped to internal tag `#donate-secure-info`
  - *Title*, *Excerpt*, *Custom Excerpt* (Emoji or Icon).

---

### Pro-Tip Summary Checklist
1. **Enable Custom Excerpts:** Make sure this is checked in your Ghost backend settings.
2. **Lists, Grid Data, Cards = Ghost Posts + Internal Tags:** For multiple items (lists, arrays, grids), create a **Post** and assign the specific `#hash-tag` (e.g. `#program`). It doesn't matter what date you publish it or if the post has nothing but a Title and an Excerpt—it will seamlessly map into the premium view structure.
3. **Headings, Massive Hero Blocks, Unique Sections = Ghost Pages + Slugs:** For single, fixed items (headings, single CTA boxes, huge hero sections), map those by creating a **Page** and rigidly modifying the **Post URL / Custom Slug** field to match exactly the required string (e.g., `partner-cta`).
