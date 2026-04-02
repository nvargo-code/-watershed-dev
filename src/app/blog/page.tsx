import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getAllPosts } from "@/src/lib/blog";

export const metadata: Metadata = {
  title: "Development Insights",
  description:
    "Market intelligence, development strategy, and real estate analysis from Watershed Development Group — focused on Austin, TX and the Dallas-Fort Worth metroplex.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1220] pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#e87722] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Market Intelligence</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white uppercase leading-tight max-w-3xl mb-6">
            Development Insights
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">
            Analysis, strategy, and market intelligence from Watershed&rsquo;s principals — covering Austin, Dallas-Fort Worth, and the Texas development landscape.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Featured post */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="group block mb-16">
              <div className="bg-[#0b1220] p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#e87722] text-white text-xs font-bold uppercase tracking-widest">
                      Featured
                    </span>
                    <span className="text-white/40 text-xs uppercase tracking-wider">{featured.category}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black text-white uppercase leading-tight mb-4 group-hover:text-[#e87722] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-white/30 text-xs">
                    <span>{new Date(featured.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {featured.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <div className="flex items-center gap-3 text-[#e87722] font-semibold uppercase tracking-wide text-sm">
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-[#f5f5f5] p-8 h-full flex flex-col group-hover:bg-[#0b1220] transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#e87722] text-xs font-semibold uppercase tracking-widest">{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#0b1220] group-hover:text-white uppercase leading-tight mb-3 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 group-hover:text-white/50 text-sm leading-relaxed flex-1 line-clamp-4 transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-200 group-hover:border-white/10 flex items-center justify-between transition-colors duration-300">
                    <div className="text-gray-400 group-hover:text-white/30 text-xs transition-colors">
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      <span className="mx-2">·</span>
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1 text-[#e87722] text-xs font-semibold uppercase">
                      Read <ArrowRight size={10} />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
