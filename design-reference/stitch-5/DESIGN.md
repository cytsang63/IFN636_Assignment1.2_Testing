# Design System Strategy: The Curated Monolith

## 1. Overview & Creative North Star
**Creative North Star: The Curated Monolith**
This design system is built to transform a standard portfolio platform into a high-end digital gallery. Moving away from the "template" aesthetic, this system embraces **The Curated Monolith**—an editorial-inspired philosophy where content is treated as art. We achieve this through aggressive whitespace, intentional asymmetry, and a high-contrast monochromatic palette. By utilizing bold typography scales and layered tonal depth, we create an experience that feels authoritative yet breathable.

The system rejects the "boxed-in" nature of the web. Elements should feel as though they are resting on premium paper or floating behind frosted glass, using scale and density to guide the user’s eye rather than restrictive lines.

---

## 2. Colors & Tonal Architecture
The palette is a sophisticated exercise in grayscale, utilizing the contrast between absolute black and shifting off-whites to create a rhythmic flow.

*   **Primary (#000000):** Reserved for high-impact elements, primary actions, and "The Monolith"—our boldest display headings.
*   **Surface Hierarchy & Nesting:** We define space through "Tonal Stacking" rather than borders. 
    *   The base layer is **surface (#f9f9f9)**.
    *   Internal content zones use **surface-container-low (#f3f3f3)**.
    *   Interactive cards or focal points use **surface-container-lowest (#ffffff)** to create a "lift" effect.
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. To separate content, use background color shifts (e.g., a **surface-container-high** sidebar against a **surface** main body) or increased vertical whitespace from the Spacing Scale.
*   **The "Glass & Gradient" Rule:** To add "soul" to the monochromatic scheme, use Glassmorphism for floating navigation bars: `background: rgba(249, 249, 249, 0.8)` with a `backdrop-filter: blur(12px)`. For primary CTAs, use a subtle linear gradient from **primary (#000000)** to **primary_container (#3b3b3b)** at a 135-degree angle.

---

## 3. Typography
Our typography pairing is designed to mimic a high-fashion editorial layout.

*   **Display & Headlines (Manrope):** This is our "voice." Headers like "Your project" or "Login" must use the **display-lg** or **headline-lg** tokens. The geometry of Manrope provides a modern, architectural feel. 
*   **Title & Body (Inter):** For project descriptions and labels, Inter provides a neutral, highly readable counterpoint. 
*   **Hierarchy as Identity:** Use a dramatic jump between headline sizes and body text. A large **display-md** header paired with a small, tracked-out **label-md** creates a professional, intentional contrast that signifies high-end curation.

---

## 4. Elevation & Depth
We convey hierarchy through physics and light, not lines.

*   **The Layering Principle:** Depth is achieved by stacking surface tokens. An input field should be a "cutout" into the surface, using **surface-container-highest (#e2e2e2)** to indicate an interactive well.
*   **Ambient Shadows:** For floating elements (like a "Sign Up" modal), use an ultra-diffused shadow. 
    *   *Spec:* `0px 20px 40px rgba(26, 28, 28, 0.06)`. The shadow must be low-opacity and tinted by the **on-surface** color to look natural.
*   **The "Ghost Border" Fallback:** If a boundary is required for accessibility, use a **Ghost Border**: the **outline-variant (#c6c6c6)** token at 15% opacity. Never use a 100% opaque border.
*   **Glassmorphism:** Use semi-transparent layers for the bottom navigation bar and search overlays to allow project imagery to bleed through subtly, maintaining a sense of place.

---

## 5. Components

### Buttons
*   **Primary:** High-contrast. **primary (#000000)** background with **on_primary (#e2e2e2)** text. Radius: **md (0.75rem)**.
*   **Secondary:** **surface-container-highest (#e2e2e2)** background. This feels like an "embossed" part of the page.
*   **Tertiary:** No background. Bold **title-sm** text with an arrow icon.

### Input Fields
*   **Styling:** Use **surface-container-low (#f3f3f3)** backgrounds. 
*   **State:** On focus, transition the background to **surface-container-lowest (#ffffff)** and add a **Ghost Border** of 2px.
*   **Corners:** **md (0.75rem)** for a modern, approachable feel.

### Project Cards & Portfolio Lists
*   **Strict Rule:** No dividers. Use **20 (5rem)** spacing between project items.
*   **Visuals:** Portfolio images should use the **lg (1rem)** corner radius.
*   **Layout:** Overlap typography onto the image containers by -24px (using the spacing scale) to break the "grid" and create a bespoke, custom-coded appearance.

### Chips (Tags)
*   **Style:** Use **surface-container-high (#e8e8e8)** with **on_surface_variant (#474747)** text. 
*   **Shape:** **full (9999px)** capsules. These should feel like smooth pebbles resting on the layout.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins. If the left margin is **16 (4rem)**, try a right margin of **24 (6rem)** for editorial flair.
*   **Do** use "Optical Centering." On the login screen, move the "Login" header slightly higher than the geometric center to create a more balanced visual weight.
*   **Do** leverage the **surface-container-lowest** white for elements you want the user to click first.

### Don't:
*   **Don't** use 1px black borders. It cheapens the "Monolith" aesthetic.
*   **Don't** crowd the headers. Bold typography needs "Oxygen" (spacing). Give a **display-lg** header at least **12 (3rem)** of padding-bottom.
*   **Don't** use pure gray shadows. Always ensure shadows have a hint of the background tone to remain sophisticated and "ambient."
*   **Don't** use standard dividers in lists. If separation is needed, use a subtle shift from **surface** to **surface-container-low**.