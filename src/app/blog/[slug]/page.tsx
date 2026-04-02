import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/src/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const idx = allPosts.findIndex((p) => p.slug === slug);
  const prev = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
  const next = idx > 0 ? allPosts[idx - 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1220] pt-40 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs uppercase tracking-widest mb-8 transition-colors">
            <ArrowLeft size={12} /> All Insights
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#0076B6] text-white text-xs font-bold uppercase tracking-widest">{post.category}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight mb-6">{post.title}</h1>
          <div className="flex items-center gap-4 text-white/40 text-sm">
            <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
            <span>&bull;</span>
            <span>{post.author}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="prose">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#EDF2F7]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="bg-[#0b1220] p-10 text-center">
            <p className="text-[#0076B6] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Watershed Development Group</p>
            <h2 className="text-3xl font-black text-white uppercase mb-4">Ready to Discuss Your Project?</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Our team provides full-lifecycle development consulting services across Austin and the DFW metroplex. Let&rsquo;s talk about what&rsquo;s possible.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0076B6] hover:bg-[#005F94] text-white font-semibold uppercase tracking-wide transition-colors">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      {(prev || next) && (
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row justify-between gap-6">
            {prev ? (
              <Link href={`/blog/${prev.slug}`} className="group flex items-start gap-3 max-w-xs">
                <ArrowLeft size={16} className="text-[#0076B6] mt-1 shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Previous</p>
                  <p className="text-[#0b1220] font-bold text-sm group-hover:text-[#0076B6] transition-colors leading-snug">{prev.title}</p>
                </div>
              </Link>
            ) : <div />}
            {next && (
              <Link href={`/blog/${next.slug}`} className="group flex items-start gap-3 max-w-xs text-right sm:text-right ml-auto">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Next</p>
                  <p className="text-[#0b1220] font-bold text-sm group-hover:text-[#0076B6] transition-colors leading-snug">{next.title}</p>
                </div>
                <ArrowRight size={16} className="text-[#0076B6] mt-1 shrink-0" />
              </Link>
            )}
          </div>
        </section>
      )}
    </>
  );
}
