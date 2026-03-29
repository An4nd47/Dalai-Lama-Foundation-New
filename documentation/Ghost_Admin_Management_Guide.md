# 📘 Dalai Lama Foundation Website Management Guide

Welcome to the Ghost Admin management guide! This website was built with a **100% dynamic, strict no-hardcoding architecture**. This means that **every piece of text, image, and button** on your website is controlled right here from the Ghost Admin Dashboard—no coding knowledge required!

This guide will walk you through exactly how to manipulate the content of the layout using specific "Pages", "Tags", and "Posts".

---

## 🏗️ 1. Global Site Settings
A few elements are controlled straight from the main settings gear.

1. Go to **Settings (Gear Icon) &rarr; Site Design &rarr; Brand**
2. **Site Title:** Changes the fallback logos and text.
3. **Site Description:** Used as a fallback description text.
4. **Site Logo:** Upload a *WebP* logo image to replace the main top-left header logo.
5. **Cover Image:** The primary image that appears behind the very top Hero section of the homepage! Use a high-quality *WebP* image for performance.

---

## ⚡ 2. Customizing the Hero Block (Top of Homepage)
To set the main headline and buttons sitting over the cover image, follow these two steps:

### A. The Headline & Text
1. Go to **Pages** and click **New Page**.
2. **Title:** Type your main big headline (e.g., *"Empowering Tribal Communities..."*).
3. **Excerpt:** Type the smaller description text that sits below the title.
4. ⚙️ Click the **Settings panel (top right)** and change the **Page URL** to exactly: `home-hero`
5. **Publish** the page.

### B. The Two Action Buttons
1. Go to **Settings &rarr; Navigation**.
2. Scroll down to the **Secondary Navigation** section.
3. The first item you add (e.g. `Partner With Us` : `/partner-cta/`) will become the primary Gold button.
4. The second item you add (e.g. `Explore` : `/our-work/`) will become the secondary outlined button.
5. **Save** changes.

---

## 📑 3. Managing "Highlight" Stories & Posts
When you write a normal Post (e.g., a news update or an event summary), it automatically shows up in the **"Highlights"** section of the homepage! 

**To rename the "Highlights" section title:**
1. Create a **New Page** with the title you want (e.g., "Latest News").
2. Set the Page URL to exactly: `section-highlights`
3. **Publish**.

*(Note: To ensure a post looks good on the homepage, make sure you give it a **Feature Image** via the post settings!)*

---

## 🎯 4. Managing Programs & Initiatives
The middle scrollable grid specifically features your dedicated Programs.

**To register a post as a "Program":**
1. When writing a Post that is about a specific program, open the post settings menu.
2. In the **Tags** field, type exactly `#program` to create an *Internal Tag* and add it to the post.
3. The post will immediately jump to the Programs carousel on the homepage!

**To rename the "Programs & Initiatives" section title:**
1. Create a **New Page** with the title you want.
2. Set the Page URL to exactly: `section-programs`
3. **Publish**.

---

## 🔍 5. Managing Focus Areas
The "Our Focus Areas" cards are automatically generated from your public Ghost Tags.

1. Go to **Tags** and create a new public Tag (e.g., "Education", "Nutrition").
2. Give the Tag a **Description** and upload a **Tag Image**.
3. It will automatically generate a beautiful card on the homepage! *(Up to 3 cards).*

**To rename the "Our Focus Areas" section title:**
1. Create a **New Page** with the title you want.
2. Set the Page URL to exactly: `section-focus-areas`
3. **Publish**.

---

## 📊 6. Managing Impact Statistics
The grid of statistics (e.g., "5000+ Lives Impacted") requires specific posts to be created.

1. Create a **New Post** (Wait, not a page, a *post*!).
2. **Title:** Make this the Number (e.g., `5000+` or `80%`).
3. **Excerpt:** Make this the Label (e.g., `Lives Impacted`).
4. **Tags:** Open Settings and tag this post *exactly* with the internal tag `#site-stat`.
5. **Publish**. It will instantly show up as a stat block!

---

## 🤝 7. Managing Partner Logos
The partner logo grid at the bottom is managed using a specific label.

1. Go to **Tags** in the Admin panel.
2. Create a new tag and name it whatever you want, but the **Slug/URL** must be exactly: `partner-logo`
3. Add a **Tag Image** (make sure it's a cropped WebP logo image!).
4. Save the tag. The image will now appear in the partner logo grid!

---

## 📞 8. Managing the Footer
The bottom Footer section has three core customizable columns.

### A. Contact Us Column
1. Create a **New Page**.
2. **Title:** Type your column header (e.g., "Get In Touch").
3. **Content Editor:** Type your Address, Email, and Phone Number lines here.
4. Set the Page URL to exactly: `footer-contact-info`
5. **Publish**.

### B. Newsletter Column
1. Create a **New Page**.
2. **Title:** Type your header (e.g., "Stay Updated").
3. **Content Editor:** Type the description (e.g., "Join our newsletter for the latest...").
4. **Excerpt:** Type the text you want *inside* the Subscribe Button! (e.g., "Subscribe Now").
5. Set the Page URL to exactly: `footer-newsletter-info`
6. **Publish**.

### C. Partner specific block (Above the Footer)
Below the Highlights section, there is a giant hero block asking visitors to Partner with you.
1. Create a **New Page**.
2. **Title**: The title of this box (e.g. "Partner With Us").
3. **Content Excerpt**: The description text of the box.
4. **Custom Excerpt**: *(Used for Button Text!)* Type "Become a Partner".
5. Set the Page URL to exactly: `partner-cta`
6. **Publish**.

---

## ✅ Summary Cheat Sheet of Slugs & Tags

Print this list out! If you ever want to change a structural part of the website, you must name your Pages or internal Tags exactly like this:

| Website Section | Ghost Feature to Create | Specific URL (Slug) / Tag Name |
| :--- | :--- | :--- |
| **Top Hero Headline** | Ghost Page | `home-hero` (Slug) |
| **Top Hero Buttons** | Secondary Navigation | *(Managed in Settings)* |
| **"Our Focus Areas" Title** | Ghost Page | `section-focus-areas` (Slug) |
| **"Programs" Title** | Ghost Page | `section-programs` (Slug) |
| **"Highlights" Title** | Ghost Page | `section-highlights` (Slug) |
| **Contact Us Data** | Ghost Page | `footer-contact-info` (Slug) |
| **Newsletter Text** | Ghost Page | `footer-newsletter-info` (Slug) |
| **Big Partner Action Box** | Ghost Page | `partner-cta` (Slug) |
| **Generating a Stat Block** | Ghost Post | `#site-stat` *(Add as Internal Tag)* |
| **Generating a Program** | Ghost Post | `#program` *(Add as Internal Tag)* |
| **Generating a Partner Logo**| Ghost Tag | `partner-logo` (Slug) |

> [!WARNING]
> **Image Optimization Policy**
> The system requires that images act performantly. When uploading any Cover Image, Logo, Feature Image, or Tag Image in the Ghost Admin Panel, **you must ensure the image is in `.webp` format!** Standard JPEGs or PNGs are not optimized. You can use free online converters to convert your images to WebP before uploading.
