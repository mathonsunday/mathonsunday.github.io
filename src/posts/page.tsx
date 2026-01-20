import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/blog/PostCard";

export const metadata = {
  title: "Posts | Nerdonica",
  description: "All blog posts",
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-semibold mb-4 tracking-[0.15em] glow-text">
          All Posts
        </h1>
        <p className="text-lg text-[rgba(232,230,227,0.6)]">
          {posts.length} post{posts.length !== 1 ? "s" : ""} total
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="grid gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
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
