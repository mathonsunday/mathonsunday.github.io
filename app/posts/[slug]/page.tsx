import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/design-system/Card";

export const dynamicParams = false;

export function generateStaticParams() {
  try {
    const posts = getAllPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Nerdonica`,
    description: post.excerpt,
  };
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const readingTime = calculateReadingTime(post.content);

  return (
    <article className="space-y-8">
      {/* Post Header */}
      <div className="space-y-4 mb-12">
        <div className="flex items-center gap-3">
          <time className="text-sm text-[#4dd0e1] font-semibold tracking-[0.15em]">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="text-[rgba(232,230,227,0.5)]">•</span>
          <span className="text-sm text-[rgba(232,230,227,0.6)]">
            {readingTime} min read
          </span>
        </div>

        <h1 className="text-5xl font-semibold tracking-[0.15em] text-[#e8e6e3]">
          {post.title}
        </h1>

        {post.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap pt-4">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="text-sm px-3 py-1 bg-[rgba(77,208,225,0.1)] border border-[rgba(77,208,225,0.3)] rounded text-[#4dd0e1] hover:border-[#4dd0e1] transition-colors duration-300"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Post Content */}
      <Card className="prose prose-invert max-w-none">
        <div
          className="text-[#e8e6e3] leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Card>

      {/* Navigation */}
      <div className="pt-8 border-t border-[rgba(77,208,225,0.2)] space-y-6">
        <div>
          <p className="text-sm text-[rgba(232,230,227,0.5)] mb-4">By {post.author}</p>
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 text-[#4dd0e1] hover:text-[#e8e6e3] transition-colors duration-300"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </article>
  );
}
