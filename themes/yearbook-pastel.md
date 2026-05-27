---
name: Yearbook Pastel
description: A soft, nostalgic theme for college testimonials — pastel paper, serif body type, dorm-room warmth.
mode: light
---

# Yearbook Pastel

A theme for testimonials and remembrances written by college friends. The visual language borrows from late-90s yearbooks, sun-faded polaroids, and pastel notebook paper: a warm cream background, a deep burgundy ink for body type, and small accents in dusty rose and sage. Body copy is set in a serif so testimonial quotes feel handwritten and personal rather than corporate.

## Palette

| Role       | Value     | Notes                                          |
| ---------- | --------- | ---------------------------------------------- |
| bg         | `#f5ecd9` | warm cream paper                               |
| text       | `#3b2a2a` | deep burgundy-brown ink for body & headings    |
| accent     | `#d49aa3` | dusty rose — eyebrow tags, page numbers, marks |
| muted      | `#8a7a6d` | soft taupe for attribution / dividers          |
| sage       | `#a8b89a` | secondary pastel accent (years, dates, tags)   |
| sky        | `#bcd0d8` | tertiary pastel accent (decorative)            |
| paperLine  | `#e3d6bd` | hairline divider on the cream                  |

## Typography

- Display font: `'Playfair Display', 'Georgia', 'Times New Roman', serif` — weight 700–900 for headlines.
- Body font: `'Lora', 'Georgia', 'Times New Roman', serif` — weight 400–500. Serif body is non-negotiable; it carries the personal-letter feel.
- Mono / handwritten accent (optional, for signatures): `'Caveat', 'Bradley Hand', cursive`.
- Type-scale overrides (relative to `slide-authoring` defaults):
  - Hero title: 168 px, italic display, tight tracking (`-0.02em`)
  - Section heading: 96 px
  - Page heading: 64 px
  - Pull-quote body: 44 px, line-height 1.55
  - Body text: 36 px, line-height 1.65
  - Caption / attribution: 26 px, tracking `0.08em`, uppercase optional

## Layout

- Content padding: 140 px from canvas edges (1920 × 1080).
- Alignment: left-aligned. Pull-quotes may sit centered with hanging quotation marks.
- Pages feel like spreads in a memory book: large generous margins, one idea per page, never crowded.
- Optional decorative rule: a 2 px hairline in `paperLine` at the top or bottom of content blocks.

## Fixed components

Paste these verbatim into a slide that uses this theme.

### Title

```tsx
const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
      fontSize: 168,
      fontWeight: 800,
      fontStyle: 'italic',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      margin: 0,
      color: '#3b2a2a',
    }}
  >
    {children}
  </h1>
);
```

### Footer

Pull the page number from `useSlidePageNumber()` — never hardcode `pageNum` / `total`.

```tsx
import { useSlidePageNumber } from '@open-slide/core';

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: 140,
        right: 140,
        bottom: 64,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: "'Lora', Georgia, serif",
        fontSize: 24,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#8a7a6d',
      }}
    >
      <span>Yearbook · Class Notes</span>
      <span style={{ color: '#d49aa3' }}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};
```

### Eyebrow / accents

```tsx
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontFamily: "'Lora', Georgia, serif",
      fontSize: 26,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: '#d49aa3',
    }}
  >
    {children}
  </div>
);
```

### Attribution (for quotes)

```tsx
const Attribution = ({ name, year }: { name: string; year: string }) => (
  <div
    style={{
      fontFamily: "'Lora', Georgia, serif",
      fontSize: 28,
      color: '#8a7a6d',
      marginTop: 40,
      letterSpacing: '0.04em',
    }}
  >
    — <span style={{ color: '#3b2a2a' }}>{name}</span>
    <span style={{ color: '#a8b89a', marginLeft: 16 }}>'{year}</span>
  </div>
);
```

## Motion

- Philosophy: **subtle**. The theme should feel like a page being turned, not a slideshow. A quiet fade-up on enter; nothing more.
- Reusable keyframes:

```css
@keyframes pageTurn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

Apply with a 280 ms ease-out on each page's root.

## Aesthetic

A college yearbook left on a shelf for fifteen years. Cream paper that has softened toward butter, ink that has gone from black to a warm burgundy, pastel margin doodles in dusty rose and sage. The serif body carries the voice of a handwritten letter; the italic display heads feel like dedication-page calligraphy. Generous white-space, one memory per page, nothing slick. **Avoid:** gradients, neon, drop-shadows, rounded buttons, sans-serif body, dark mode, emoji, decorative icons that look like Material Design. **Embrace:** hairline rules, generous margins, italics, em-dashes, the occasional handwritten signature.

## Example usage

```tsx
const Cover: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: '#f5ecd9',
      color: '#3b2a2a',
      padding: 140,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Eyebrow>Class of 2018 · Spring</Eyebrow>
    <Title>Notes from<br/>the dorm hall</Title>
    <p
      style={{
        fontFamily: "'Lora', Georgia, serif",
        fontSize: 36,
        lineHeight: 1.65,
        color: '#8a7a6d',
        maxWidth: 1100,
        marginTop: 40,
      }}
    >
      A small book of things our friends remembered, and a few they wish they hadn't.
    </p>
    <Footer />
  </div>
);
```
