# Writing Blog Posts

This guide explains how to create and format blog posts for the Entrust ML blog.

## Getting Started

1. Create a new `.mdx` file in `src/content/posts/`
2. Add the required frontmatter (see below)
3. Write your content using Markdown and the custom features described here
4. Run `npm run dev` to preview your post at `http://localhost:3000/posts/[your-filename]`

## Frontmatter

Every post must start with YAML frontmatter:

```yaml
---
title: "Your Post Title"
excerpt: "A brief description of the post for previews and SEO."
date: "Month DD, YYYY"
authors: ["Author Name"]
tags:
  - type: "vision"
    label: "Computer Vision"
  - type: "methods"
    label: "Methods and Algorithms"
featured: true
---
```

### Available Tag Types

| Type | Label Examples |
|------|----------------|
| `vision` | Computer Vision |
| `nlp` | Natural Language Processing |
| `methods` | Methods and Algorithms |
| `ml` | Machine Learning |
| `systems` | Systems |

## Images

### Adding Images

**Local images:** Place images in the `public/images/` folder and reference them with an absolute path:

```markdown
![My diagram](/images/my-post/diagram.png)
```

Recommended folder structure:
```
public/
  images/
    my-post-slug/
      diagram.png
      architecture.jpg
```

**External images:** Use the full URL:

```markdown
![External image](https://example.com/image.jpg)
```

### Image Sizing

Control image size by adding a size modifier to the alt text:

```markdown
![Alt text |sm](https://example.com/image.jpg)
```

Available sizes:

| Modifier | Max Height |
|----------|------------|
| `xs` | 128px |
| `sm` | 192px |
| `md` | 288px |
| `lg` | 384px |
| `full` | Full width |

Images without a modifier display at natural size. All images are automatically centered.

### Image Captions

Add a caption below an image using italics on its own line:

```markdown
![My diagram |md](https://example.com/diagram.jpg)

_This is the caption for the image above._
```

Captions are automatically centered and styled in a smaller, lighter font.

### Footnotes

Add footnotes using the `[^n]` syntax:

```markdown
Some text with a footnote reference[^1].

More content here.

[^1]: This is the footnote content. It will appear at the bottom of the post.
```

Footnotes automatically include a back-link arrow to return to the reference point.

### Math Equations

Use LaTeX syntax for math:

**Inline math:**
```markdown
The equation $E = mc^2$ is famous.
```

**Display math:**
```markdown
$$
h = (W + AB)x
$$
```

### Code Blocks

Use fenced code blocks with language identifiers for syntax highlighting:

````markdown
```python
import torch

model = torch.nn.Linear(10, 5)
```
````

Supported languages include: `python`, `javascript`, `typescript`, `bash`, `json`, and many more.
