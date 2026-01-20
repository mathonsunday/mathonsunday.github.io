# Design System Tokens

Reference for colors, spacing, typography, and timing used across the blog.

## Color Palette

### Backgrounds

**Deep Sea Foundations:**
- `--abyss-black`: `#0d0d12` - Darkest background layer
- `--deep-midnight`: `#0f0f12` - Medium dark background
- `--surface-dark`: `#020810` - Top surface layer
- `--glass-bg`: `rgba(13, 13, 18, 0.7)` - Glassmorphism background

### Bioluminescent Accents

**Cyan-Blue Glows (Primary Accent):**
- `--bio-cyan-core`: `#4dd0e1` - Main accent color
- `--bio-cyan-glow`: `rgba(77, 208, 225, 0.5)` - Glowing variant
- `--bio-cyan-dim`: `rgba(77, 208, 225, 0.3)` - Dimmed variant
- `--glass-border`: `rgba(77, 208, 225, 0.2)` - Border color

### Strategic Accents

**Secondary Colors (Use Sparingly):**
- `--accent-pink`: `#ff6b9d` - Pink/magenta accent
- `--accent-gold`: `#c4a77d` - Gold/tan accent
- `--accent-indigo`: `#6366f1` - Indigo accent

### Text Colors

**Typography:**
- `--text-soft-white`: `#e8e6e3` - Primary text (headings, strong content)
- `--text-muted`: `#e4e4e7` - Secondary text (nav, labels)
- `--text-dim`: `rgba(232, 230, 227, 0.6)` - De-emphasized text (metadata, subtitles)

### Using Colors

**Tailwind CSS inline:**
```tsx
// Primary text
<p className="text-[#e8e6e3]">...</p>

// Cyan accent
<a className="text-[#4dd0e1] hover:text-[#e8e6e3]">Link</a>

// Glassmorphism
<div className="bg-[rgba(13,13,18,0.7)] border border-[rgba(77,208,225,0.2)]">
```

**CSS variables:**
```css
color: var(--text-soft-white);
border-color: var(--glass-border);
box-shadow: 0 0 20px var(--bio-cyan-glow);
```

## Typography

### Font Family

**Primary:** JetBrains Mono (monospace)
- Imported from Google Fonts
- Used across entire site
- Weights available: 200, 300, 400, 500, 600

```css
--font-mono: 'JetBrains Mono', 'Courier New', monospace;
```

### Letter Spacing

**Standard spacing values:**
- `--letter-spacing-wide`: `0.1em` - Normal, readable spacing
- `--letter-spacing-wider`: `0.15em` - Wider, airier feel

Use wider spacing for headings and navigation.

### Font Weights

**Recommended hierarchy:**
- Headings: 600 (semi-bold)
- Navigation: 500-600
- Body text: 300-400 (lighter weights)
- Metadata: 300

### Size Scale

No fixed size scale—use based on visual hierarchy:
- Hero headings: `text-5xl` (3rem)
- Page headings: `text-4xl` (2.25rem)
- Section headings: `text-2xl` (1.5rem)
- Subsection headings: `text-xl` (1.25rem)
- Body text: `text-base` (1rem)
- Small text: `text-sm` (0.875rem)

## Spacing & Layout

### Padding & Margins

**Card-based spacing:**
- Card padding: `p-6` (1.5rem)
- Section margin: `mb-12` (3rem)
- Item gap: `gap-6` (1.5rem)
- List item gap: `gap-3` (0.75rem)

### Border Radius

**Consistent rounding:**
- Cards, panels: `rounded-lg` (0.5rem)
- Small elements: `rounded` (0.25rem)
- Buttons: `rounded` (0.25rem)

### Max Width

- Content max-width: `max-w-4xl` (56rem) - Used for main content area
- Used in root layout for centered content

## Animation & Timing

### Timing Values

**Glacial Philosophy** - Slow, organic timing creates premium feel:
- `--glacial-fast`: `0.8s` - Quick transitions, UI feedback
- `--glacial-medium`: `1.6s` - Standard smooth transitions
- `--glacial-slow`: `3.2s` - Very slow, barely perceptible drifts

All use `ease-out` or cubic-bezier for smooth feel.

### Easing Functions

**Primary:**
- `ease-out` - Most common, smooth deceleration
- `ease-in-out` - For smooth start and stop
- `cubic-bezier(0.4, 0, 0.2, 1)` - Material Design standard

### Animation Keyframes

**Pre-defined animations:**

```css
/* Gentle drift */
@keyframes drift {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, -5px);
  }
}
/* Use: animate-drift */

/* Slow pulse */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
}
/* Use: animate-pulse-slow */

/* Glow effect */
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(77, 208, 225, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(77, 208, 225, 0.6);
  }
}
/* Use: animate-glow */
```

### Hover Transitions

**Standard interactive transition:**
```css
transition: all var(--glacial-fast) ease-out;
/* or specific properties */
transition: color duration-500 ease-out;
```

**Scaling on hover:**
```css
transform: translateY(-2px);
/* Subtle lift, not too much */
```

## Component Patterns

### Glassmorphic Cards

**Structure:**
```tsx
<div className="
  bg-[rgba(13,13,18,0.7)]
  backdrop-blur-md
  border border-[rgba(77,208,225,0.2)]
  rounded-lg
  p-6
  hover:border-[rgba(77,208,225,0.5)]
  transition-all duration-800
">
```

**With glow:**
```tsx
<div className="
  ... (above)
  card-glow
">
```

### Glow Text Effect

```tsx
<span className="glow-text">
  Glowing text
</span>

/* CSS: */
.glow-text {
  color: var(--bio-cyan-core);
  text-shadow: 0 0 20px rgba(77, 208, 225, 0.5);
}
```

### Hover Underline

**Navigation link pattern:**
```tsx
<a className="group relative">
  Link text
  <span className="
    absolute bottom-0 left-0 right-0 h-[2px]
    bg-[#4dd0e1]
    scale-x-0 group-hover:scale-x-100
    transition-transform duration-500
    origin-left
  " />
</a>
```

### Button Style

**Primary button:**
```tsx
<button className="
  px-6 py-3
  bg-[rgba(13,13,18,0.7)]
  border border-[rgba(77,208,225,0.3)]
  rounded
  text-[#4dd0e1]
  hover:border-[#4dd0e1]
  transition-all duration-500
  font-semibold
">
  Button Text
</button>
```

## Dark Mode & Contrast

**No light mode** - Site is dark-only for deep-sea immersion.

**WCAG Compliance:**
- Text contrast ratios are designed for readability
- Cyan on dark backgrounds: strong contrast (~7:1)
- Use `--text-soft-white` for primary text
- Use `--text-dim` only for tertiary information

## Responsive Breakpoints

**Tailwind defaults (unchanged):**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Key breakpoint for blog:**
- Keep content centered with `max-w-4xl`
- Padding increases on mobile: `px-8` (desktop), `px-4` (mobile)
- Use Tailwind's responsive prefixes: `sm:`, `md:`, `lg:`

## Blend Modes & Effects

### Backdrop Blur

```css
backdrop-filter: blur(10px) /* Standard */
backdrop-filter: blur(20px) /* Stronger blur */
backdrop-blur-md /* Tailwind: 12px blur */
backdrop-blur-lg /* Tailwind: 16px blur */
```

### Box Shadow (Glow)

**Multi-layer glows:**
```css
box-shadow:
  0 0 20px rgba(77, 208, 225, 0.1),
  0 0 40px rgba(77, 208, 225, 0.05),
  inset 0 0 20px rgba(77, 208, 225, 0.03);
```

**Canvas glow (shadow blur):**
```javascript
ctx.shadowBlur = 15;
ctx.shadowColor = "#4dd0e1";
```

## Usage Examples

### Creating a New Component

**Step 1: Import colors**
```tsx
// Use CSS variables or Tailwind classes
<div className="text-[var(--text-soft-white)]">
```

**Step 2: Apply glassmorphism**
```tsx
<div className="
  bg-[rgba(13,13,18,0.7)]
  backdrop-blur-md
  border border-[var(--glass-border)]
  rounded-lg
  p-6
">
```

**Step 3: Add animation**
```tsx
<div className="
  transition-all
  duration-800
  hover:scale-105
  hover:shadow-[0_0_30px_rgba(77,208,225,0.2)]
">
```

## Resources

- **Tailwind Config:** `tailwind.config.ts` - Animation keyframes defined here
- **Global Styles:** `src/styles/globals.css` - CSS variables and base styles
- **Components:** `src/components/design-system/` - Reusable UI components

All tokens are tied to the "deep-sea aesthetic" of Veronica's visual-toolkit and creative-playground projects.
