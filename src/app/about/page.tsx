import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Watershed Development Group — a coalition of real estate professionals delivering development consulting services in Austin and Dallas-Fort Worth, Texas.",
};

const values = [
  "Well-located, purpose-driven real estate",
  "Meticulous attention to design and detail",
  "Disciplined capital stewardship",
  "Community-first development philosophy",
  "Transparent partnership with investors",
  "Vertically integrated execution capability",
];

const focusAreas = [
  {
    title: "Multifamily",
    desc: "Watershed pursues multifamily development in urban and suburban Texas markets where demographics, employment growth, and housing supply constraints create durable demand fundamentals.",
  },
  {
    title: "Single-Family Subdivisions",
    desc: "We identify and develop residential subdivision opportunities in the path of growth, partnering with regional and national homebuilders to deliver finished lots in high-demand submarkets.",
  },
  {
    title: "Creative Covered Land",
    desc: "Our proprietary strategy acquires income-producing assets with embedded optionality — properties that generate current cash flow while preserving future development upside as markets evolve.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-[#0b1220] pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#0076B6] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Who We Are</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white uppercase leading-tight max-w-3xl">
            Built on Purpose.<br />Driven by Results.
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#0076B6] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Mission</p>
            <h2 className="text-4xl font-black text-[#0b1220] uppercase leading-tight mb-6">Our Philosophy</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              We believe that community is about people. We believe in real estate that is well located, carefully designed, and that delivers both a lifestyle and a purpose.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              We make it our mission to sculpt a profound environment by focusing on the details that make a place special — from the positioning of a building on its site, to the mix of uses that animate a neighborhood, to the long-term stewardship of assets in service of the communities they anchor.
            </p>
            <p className="text-gray-600 leading-relaxed">
              That same discipline applies to every consulting engagement we take on. When we work on behalf of a client, we bring the same rigor, creativity, and accountability we apply to our own balance sheet.
            </p>
          </div>

          <div className="bg-[#EDF2F7] p-10">
            <p className="text-[#0076B6] text-xs font-semibold tracking-[0.3em] uppercase mb-6">Our Principles</p>
            <ul className="space-y-4">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#0076B6] mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About Watershed */}
      <section className="py-20 bg-[#0b1220]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <p className="text-[#0076B6] text-xs font-semibold tracking-[0.3em] uppercase mb-4">About Watershed</p>
            <h2 className="text-4xl font-black text-white uppercase leading-tight mb-6">
              A Coalition of Professionals
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Watershed Development Group is a coalition of professionals dedicated to making a meaningful difference for our communities and our investors. We strategically focus on acquiring and developing projects in prime locations across three property categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {focusAreas.map((area) => (
              <div key={area.title} className="bg-[#162035] p-8">
                <div className="w-8 h-0.5 bg-[#0076B6] mb-6" />
                <h3 className="text-white text-xl font-bold uppercase mb-4">{area.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#0076B6] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Leadership</p>
          <h2 className="text-4xl font-black text-[#0b1220] uppercase leading-tight mb-14">The Founder</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Headshot */}
            <div className="relative aspect-[3/4] overflow-hidden bg-[#0b1220]">
              <Image
                src="/Images/Vargo Headshot/NVargo HeadShot.jpg"
                alt="Nathan Vargo — Founder, Watershed Development Group"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0b1220] to-transparent">
                <p className="text-white font-black text-xl uppercase">Nathan &ldquo;Nate&rdquo; Vargo</p>
                <p className="text-[#0076B6] text-xs tracking-widest uppercase mt-1">Founder &amp; Developer</p>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-black text-[#0b1220] uppercase">Nathan &ldquo;Nate&rdquo; Vargo</h3>
                  <p className="text-[#0076B6] text-sm font-semibold uppercase tracking-widest">Founder &amp; Developer</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Nathan Vargo is an experienced commercial property developer with an intimate understanding of capital markets. His career in real estate spans from 2008, during which he has held key principal and development executive positions across a broad range of asset classes and transaction structures.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over his career, Mr. Vargo has transacted, developed, and planned more than $500 million in real estate assets — including multifamily, mixed-use projects, commercial office, warehouse and distribution facilities, and residential housing across Texas and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed">
                He brings extensive hands-on industry knowledge and has been meaningfully involved in several transcendent projects in the greater Texas market, with deep expertise in the Austin and Dallas-Fort Worth metroplex. His experience spans ground-up construction, adaptive reuse, value-add repositioning, and large-scale residential subdivision development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mr. Vargo founded Watershed Development Group to bring institutional-quality development expertise to projects of all sizes — and to create a consulting platform that gives developers, investors, and landowners access to the same rigor applied to Watershed&rsquo;s own portfolio.
              </p>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { value: "$500M+", label: "Assets Developed" },
                  { value: "2008", label: "Career Began" },
                  { value: "Texas", label: "Primary Market" },
                  { value: "All Asset Classes", label: "Experience" },
                ].map((stat) => (
                  <div key={stat.label} className="border-t-2 border-[#0076B6] pt-3">
                    <p className="font-black text-[#0b1220] text-lg">{stat.value}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0076B6]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white uppercase mb-4">Ready to Work Together?</h2>
          <p className="text-white/80 mb-8 text-lg">Whether you&rsquo;re a developer, investor, or landowner — Watershed brings the expertise to move your project forward.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0b1220] text-white font-semibold uppercase tracking-wide hover:bg-[#162035] transition-colors">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
