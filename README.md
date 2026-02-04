# Entrust

A website styled after machinelearning.apple.com with MDX blog posts and LaTeX support.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Adding Blog Posts

Create MDX files in `src/content/posts/` with the following frontmatter format:

```mdx
---
title: "Your Post Title"
excerpt: "A brief description of the post."
date: "January 1, 2025"
authors: ["Author One", "Author Two"]
tags:
  - type: "methods"
    label: "Methods and Algorithms"
  - type: "nlp"
    label: "Natural Language Processing"
featured: true
---

Your content here with **markdown** support.

## LaTeX Support

Inline math: $E = mc^2$

Display math:
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

### Available Tag Types

- `methods` - Purple (Methods and Algorithms)
- `vision` - Sky blue (Computer Vision)
- `nlp` - Dark blue (Natural Language Processing)
- `ml` - Green (Machine Learning)
- `systems` - Orange (ML Systems)

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Post title |
| `excerpt` | string | Yes | Brief description for cards |
| `date` | string | Yes | Publication date |
| `authors` | string[] | No | List of author names |
| `tags` | object[] | No | Category tags with type and label |
| `featured` | boolean | No | Show as featured post |

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── research/          # Research highlights page
│   ├── publications/      # Publications page
│   ├── events/            # Events page
│   ├── careers/           # Careers page
│   └── posts/[slug]/      # Individual post pages
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── PostCard.tsx       # Blog post card
│   ├── EventCard.tsx      # Event card
│   ├── Tag.tsx            # Category tag
│   └── HeroBanner.tsx     # Hero section
├── content/
│   └── posts/             # MDX blog posts
└── lib/
    └── posts.ts           # Post utilities
```

## Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **MDX** - Markdown with JSX components
- **KaTeX** - LaTeX math rendering
- **next-mdx-remote** - MDX processing

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme. The default uses Apple-inspired grays and tag colors.

### Typography

The site uses system fonts that match Apple's design:
- SF Pro Display for headings
- SF Pro Text for body copy

### Components

MDX components are defined in `src/app/posts/[slug]/page.tsx`. Customize styles for headings, paragraphs, code blocks, etc.
