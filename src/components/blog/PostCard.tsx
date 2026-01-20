import Link from "next/link";
import { Card } from "@/components/design-system/Card";

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
}

export function PostCard({
  title,
  excerpt,
  date,
  tags,
  slug,
}: PostCardProps) {
  return (
    <Link href={`/posts/${slug}/`} className="group">
      <Card glow className="h-full">
        <div className="flex items-start justify-between mb-3">
          <time className="text-sm text-[#4dd0e1] font-semibold tracking-[0.15em]">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>

          <div className="flex gap-2 flex-wrap justify-end">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-[rgba(77,208,225,0.1)] border border-[rgba(77,208,225,0.3)] rounded text-[#4dd0e1]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-3 text-[#e8e6e3] group-hover:text-[#4dd0e1] transition-colors duration-500">
          {title}
        </h2>

        <p className="text-[rgba(232,230,227,0.6)] leading-relaxed">
          {excerpt}
        </p>
      </Card>
    </Link>
  );
}
