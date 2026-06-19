import { getAllBlogPosts } from "@/lib/blog";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Dorji Tshering",
  description:
    "Thoughts, tutorials, and insights about web development, programming, and technology.",
  openGraph: {
    title: "Blog | Dorji Tshering",
    description:
      "Thoughts, tutorials, and insights about web development, programming, and technology.",
    type: "website",
  },
};

const BlogPage = () => {
  const posts = getAllBlogPosts();

  return (
    <>
      <div className="mb-8">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Thoughts and insights about web development, programming, and
            technology.
          </p>
          {posts.length > 0 && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span>{posts.length}</span>
              </div>
              <span className="text-muted-foreground/40">•</span>
              <span>{posts.length === 1 ? "article" : "articles"}</span>
            </div>
          )}
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <div className="space-y-4 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">
              No posts yet
            </h2>
            <p>Check back soon for new content!</p>
          </div>
        </div>
      ) : (
        <div className="space-y-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                      {post.title}
                    </h2>
                    <div className="text-sm flex items-center gap-2 text-muted-foreground">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString()}
                      </time>
                      <span className="text-muted-foreground/40">•</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground line-clamp-2">
                  {post.description}
                </p>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default BlogPage;
