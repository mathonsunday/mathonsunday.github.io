# Blog Post Authoring Guide for LLMs

This guide explains how to create and publish blog posts on Veronica's blog using the LLM interface.

## Quick Start: Creating a Post

1. **Copy the template**: Read `content/posts/_templates/post.md`
2. **Create new file**: Save as `content/posts/YYYY-MM-DD-your-post-slug.md`
3. **Fill in frontmatter**: Update title, date, excerpt, tags
4. **Write content**: Use Markdown formatting
5. **Commit and push**: GitHub Actions auto-deploys
6. **Done!** Site updates in 2-3 minutes

## Naming Convention

File names must follow this format:

```
YYYY-MM-DD-slug.md
```

**Examples:**
- `2024-01-19-canvas-animations.md`
- `2024-02-15-typescript-tips.md`
- `2024-03-01-deep-sea-aesthetic-design.md`

**Rules:**
- Date format: `YYYY-MM-DD` (ISO 8601)
- Slug: lowercase, hyphens instead of spaces, no special characters
- File extension: `.md` or `.mdx`
- Place in: `content/posts/` directory

## Frontmatter Structure

Every post starts with YAML frontmatter. Here's the required structure:

```yaml
---
title: "Your Post Title Here"
date: "2024-01-19"
excerpt: "Brief 1-2 sentence summary (max 160 chars for SEO preview)"
tags: ["tag1", "tag2", "tag3"]
author: "Veronica Ray"
featured: false
---
```

### Field Descriptions

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | String | Yes | Post headline. Keep clear and descriptive. |
| `date` | String | Yes | Format: `"YYYY-MM-DD"`. Post publish date. |
| `excerpt` | String | Yes | 1-2 sentences. Used in post listings and SEO. Keep under 160 chars. |
| `tags` | Array | Yes | 2-5 tags for categorization. Use recommended tags (see list below). |
| `author` | String | Yes | Usually "Veronica Ray" |
| `featured` | Boolean | No | Set to `true` to pin on homepage (default: `false`) |
| `interactive` | Boolean | No | Set to `true` only for `.mdx` files with React components (default: `false`) |

### Recommended Tags

**Technical Categories:**
- `typescript` - TypeScript development
- `react` - React framework
- `nextjs` - Next.js framework
- `canvas` - HTML Canvas API
- `animation` - Animation techniques
- `performance` - Performance optimization

**Process & Workflow:**
- `developer-experience` - DX improvements
- `tools` - Development tools
- `workflow` - Development workflow
- `testing` - Testing strategies

**Creative & Design:**
- `creative-coding` - Generative art and creative code
- `visual-effects` - Visual effects and animations
- `design` - Design systems and UI
- `deep-sea` - Deep-sea theme and aesthetic

**Concepts & Theory:**
- `architecture` - Software architecture
- `api-design` - API design patterns
- `state-management` - State management
- `accessibility` - Web accessibility

Mix tags from different categories. Example: `["react", "creative-coding", "canvas"]`

## Content Guidelines

### Markdown Formatting

Standard Markdown is fully supported:

```markdown
# H1 (becomes h1 - don't use, title is h1)
## H2 (main sections)
### H3 (subsections)

**bold text**
*italic text*
~~strikethrough~~

- Bullet list
  - Nested item
  - Another item

1. Numbered list
2. Second item

> Blockquote looks great
> for highlighting important ideas

[Link text](https://example.com)

![Alt text](/assets/images/my-image.png)
```

### Code Blocks

Use triple backticks with language identifier:

````markdown
```typescript
// TypeScript code gets syntax highlighting
interface Post {
  title: string;
  date: string;
}

const post: Post = {
  title: "Example",
  date: "2024-01-19",
};
```
````

**Supported languages:**
- `typescript` / `ts`
- `javascript` / `js`
- `react` / `jsx`
- `html`
- `css`
- `bash` / `shell`
- `python`
- `java`
- `cpp`
- `go`
- And many more...

### Images

Images should be placed in `/public/assets/images/` and referenced as:

```markdown
![Descriptive alt text](/assets/images/my-image.png)
```

### General Tips

1. **Start with an introduction** - Hook the reader in the first paragraph
2. **Use clear headings** - Help readers scan and understand structure
3. **Break up text** - Use short paragraphs, bullet points, code examples
4. **Show examples** - Code snippets make concepts concrete
5. **Conclude with takeaways** - Summarize key points at the end
6. **Link to relevant posts** - Use `[text](/posts/another-slug)` for internal links

## Interactive Posts (MDX)

For posts with embedded React components, use `.mdx` extension and set `interactive: true`.

**Example frontmatter:**
```yaml
---
title: "Building Bioluminescent Particle Systems"
date: "2024-02-03"
excerpt: "Creating animated Canvas scenes with React"
tags: ["canvas", "creative-coding", "react"]
interactive: true
---
```

**Import and use components:**

```mdx
import { BiolumParticles } from '@/components/canvas/BiolumParticles'

## Interactive Demo

Here's a live bioluminescent particle system:

<BiolumParticles preset="gentle-drift" />

More content below the component...
```

## Publishing Workflow

### Step 1: Create Your Post File

Create a new file in `content/posts/`:

```bash
content/posts/2024-01-19-my-post-title.md
```

### Step 2: Add to Git

```bash
git add content/posts/2024-01-19-my-post-title.md
```

### Step 3: Commit

```bash
git commit -m "Add post: My Post Title"
```

Use clear commit messages. Recommended format:
```
Add post: [Post Title]
```

### Step 4: Push

```bash
git push origin master
```

### Step 5: Watch It Deploy

After pushing:
1. GitHub Actions workflow starts automatically
2. Builds the Next.js site
3. Deploys to GitHub Pages
4. Available at https://veronicaray.com in ~2-3 minutes

Check the [Actions tab](https://github.com/mathonsunday/mathonsunday.github.io/actions) to monitor the build.

## Troubleshooting

### Post doesn't appear after push

**Checklist:**
1. File is in `content/posts/` directory
2. Filename follows `YYYY-MM-DD-slug.md` format
3. Frontmatter is valid YAML (check quotes, colons, indentation)
4. GitHub Actions build succeeded (check Actions tab)
5. Date is not in the future

**Solution:**
- Re-read this guide and check the template
- Verify Git push succeeded: `git log` should show your commit
- Check GitHub Actions logs for error messages

### Build fails

The build log will show the error. Common issues:

1. **YAML parsing error in frontmatter** - Check colon spacing, quotes
2. **Required field missing** - Make sure `title`, `date`, `excerpt`, `tags` are present
3. **Invalid date format** - Use `"YYYY-MM-DD"` exactly

### Post formatting looks wrong

- Double-check Markdown syntax
- Code blocks need triple backticks ``` and language identifier
- Links should use `[text](url)` format

## Template Quick Copy

**Minimal post template:**

```markdown
---
title: "Your Title"
date: "YYYY-MM-DD"
excerpt: "Brief summary"
tags: ["tag1", "tag2"]
author: "Veronica Ray"
featured: false
---

## Introduction

Intro paragraph.

## Main Content

Your content here.

## Conclusion

Summary of key points.
```

## File Locations Reference

- **Templates:** `content/posts/_templates/`
- **Published posts:** `content/posts/`
- **Images:** `public/assets/images/`
- **Components:** `src/components/`
- **Styles:** `src/styles/`

## Design Reference

For color and styling reference, see `.llm/DESIGN_TOKENS.md`

## Questions?

If you encounter issues not covered here:
1. Check the template file: `content/posts/_templates/post.md`
2. Review this guide again for similar scenarios
3. Look at existing posts in `content/posts/` for examples

Happy writing!
