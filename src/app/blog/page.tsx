import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, stories, and insights from deep inside the handstand world.",
};

// Placeholder posts — replace with real CMS/MDX content
const posts = [
  {
    slug: "why-beginners-progress-faster",
    date: "March 2026",
    category: "Mindset",
    title: "Why Beginners Progress Faster Than They Think",
    excerpt: "The fear of being a beginner is often bigger than the challenge itself. Here's what actually happens in your first month of handstand training.",
    readTime: "4 min read",
  },
  {
    slug: "wrist-prep-before-every-session",
    date: "February 2026",
    category: "Technique",
    title: "The 10-Minute Wrist Prep Routine I Do Before Every Session",
    excerpt: "Happy wrists are non-negotiable. This is the exact warm-up sequence I do before every session — and it takes less time than brewing coffee.",
    readTime: "6 min read",
  },
  {
    slug: "finding-your-balance-point",
    date: "January 2026",
    category: "Technique",
    title: "Finding Your Balance Point (And Why It's Not Where You Think)",
    excerpt: "Most people look for balance in the wrong place. The secret is in your fingertips, not your wrists — and understanding this changes everything.",
    readTime: "5 min read",
  },
  {
    slug: "community-is-the-secret-ingredient",
    date: "December 2025",
    category: "Community",
    title: "Community Is the Secret Ingredient Nobody Talks About",
    excerpt: "Solo practice has its place. But the fastest progress I've ever seen happens in rooms full of people cheering each other on.",
    readTime: "3 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-[family-name:var(--font-caveat)] text-primary-light text-xl mb-4">
            Tips, stories, insights
          </p>
          <h1
            className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none"
            style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
          >
            The{" "}
            <span className="text-outline-electric">blog</span>
          </h1>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          {/* Featured post */}
          <div className="rounded-3xl bg-charcoal p-8 lg:p-12 mb-8 relative overflow-hidden group">
            <div className="absolute top-6 right-6 font-[family-name:var(--font-bebas)] text-[8rem] leading-none text-white/[0.03] select-none">
              01
            </div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-electric font-medium uppercase tracking-wide">
                  {posts[0].category}
                </span>
                <span className="text-sand/30 text-xs">{posts[0].date}</span>
              </div>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-off-white leading-snug mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                {posts[0].title}
              </h2>
              <p className="text-sand/50 leading-relaxed text-sm mb-6 max-w-xl">
                {posts[0].excerpt}
              </p>
              <Link
                href={`/blog/${posts[0].slug}`}
                className="inline-flex items-center gap-2 text-electric text-sm font-medium hover:gap-3 transition-all"
              >
                Read article →
              </Link>
            </div>
          </div>

          {/* Rest of posts */}
          <div className="grid gap-4 lg:grid-cols-3">
            {posts.slice(1).map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="rounded-2xl border border-warm-gray/10 p-6 h-full hover:border-primary/30 transition-colors hover:bg-sand/20 card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-primary font-medium uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-warm-gray/50 text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-dm-serif)] text-charcoal leading-snug mb-3 text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-warm-gray text-xs leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-xs text-warm-gray/50">{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 rounded-3xl bg-sand p-8 text-center">
            <p className="font-[family-name:var(--font-caveat)] text-warm-gray text-lg mb-2">
              never miss a post
            </p>
            <h3 className="font-[family-name:var(--font-dm-serif)] text-xl text-charcoal mb-4">
              Get new articles in your inbox
            </h3>
            <Link
              href="/#newsletter"
              className="inline-flex items-center justify-center rounded-full bg-electric text-charcoal font-bold text-sm px-8 py-3.5 tracking-wide uppercase hover:bg-electric-dark transition-colors"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
