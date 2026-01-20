import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/blog/PostCard";

export default function Home() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <div className="space-y-8">
      <header className="mb-12">
        <h1 className="text-5xl font-semibold mb-4 tracking-[0.15em] glow-text">
          Nerdonica
        </h1>
        <p className="text-xl text-[rgba(232,230,227,0.6)]">
          Exploring the deep sea of software engineering and creative coding
        </p>
      </header>

      {posts.length > 0 ? (
        <>
          <div className="grid gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>

          <div className="text-center pt-8">
            <a
              href="/posts"
              className="inline-block px-6 py-3 bg-[rgba(13,13,18,0.7)] border border-[rgba(77,208,225,0.3)] rounded hover:border-[#4dd0e1] transition-all duration-500 text-[#4dd0e1] font-semibold"
            >
              View All Posts →
            </a>
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-[rgba(232,230,227,0.6)]">
            No posts yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
