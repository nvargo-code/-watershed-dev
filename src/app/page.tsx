import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, MapPin, Award, Users } from "lucide-react";
import { getAllPosts } from "@/src/lib/blog";

export const metadata: Metadata = {
  title: "Real Estate Development Consulting — Austin & Dallas-Fort Worth",
  description:
    "Watershed Development Group delivers full-lifecycle real estate development consulting services across Austin, TX and the DFW metroplex. From feasibility to completion.",
};

const services = [
  {
    title: "Development Advisory",
    desc: "Full-lifecycle development guidance from concept through completion — feasibility analysis, project structuring, and strategic planning.",
  },
  {
    title: "Capital Markets",
    desc: "Equity and debt capital formation, JV structuring, institutional investor relations, and complex financing solutions.",
  },
  {
    title: "Site Selection",
    desc: "Data-driven acquisition analysis, market feasibility, underwriting, and strategic site identification in Texas's fastest-growing corridors.",
  },
  {
    title: "Government Incentives",
    desc: "TIF, NMTC, LIHTC, Historic Tax Credits, Opportunity Zone structuring, and HUD financing programs to optimize your capital stack.",
  },
  {
    title: "Entitlements & Permitting",
    desc: "Zoning analysis, test-fit design coordination, permitting strategy, and regulatory navigation across Austin and DFW municipalities.",
  },
  {
    title: "Project Management",
    desc: "Construction oversight, budget and schedule compliance, vendor management, and cost control from groundbreaking to certificate of occupancy.",
  },
];

const stats = [
  { value: "$500M+", label: "Assets Transacted & Developed" },
  { value: "3", label: "Property Categories" },
  { value: "2", label: "Major Texas Markets" },
  { value: "15+", label: "Years of Experience" },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero — video background */}
      <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden bg-[#0b1220]">

        {/* YouTube background video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/O9F4rXp1Ogc?autoplay=1&mute=1&loop=1&playlist=O9F4rXp1Ogc&controls=0&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&playsinline=1"
            allow="autoplay; encrypted-media"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
            style={{
              width: "100vw",
              height: "56.25vw",   /* maintain 16:9 — grows wider than viewport */
              minHeight: "100vh",
              minWidth: "177.78vh", /* maintain 16:9 — grows taller than viewport */
            }}
          />
        </div>

        {/* Diagonal dark overlay — heavy top-left, fades bottom-right (Turner pattern) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(165deg, rgba(7,14,26,0.82) 0%, rgba(11,18,32,0.65) 45%, rgba(11,18,32,0.30) 100%)",
          }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b1220] to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-14 pt-36 pb-24 w-full">
          <div className="max-w-3xl hero-content">
            <p className="text-[#0076B6] text-xs font-semibold tracking-[0.4em] uppercase mb-7 hero-fade-up" style={{ animationDelay: "0.1s" }}>
              Austin &bull; Dallas–Fort Worth
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-[5.5vw] xl:text-[5rem] font-black text-white leading-[0.92] mb-8 uppercase tracking-tight hero-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              We Live for<br />
              <span className="text-[#0076B6]">Groundbreaking</span><br />
              Moments
            </h1>
            <p
              className="text-white/65 text-lg sm:text-xl max-w-xl leading-relaxed mb-10 hero-fade-up"
              style={{ animationDelay: "0.45s" }}
            >
              A coalition of real estate professionals delivering full-lifecycle development consulting across Texas&rsquo;s most dynamic markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 hero-fade-up" style={{ animationDelay: "0.6s" }}>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0076B6] hover:bg-[#005F94] text-white font-semibold uppercase tracking-wide text-sm transition-colors duration-200"
              >
                Our Services <ArrowRight size={16} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 hover:border-white text-white font-semibold uppercase tracking-wide text-sm transition-colors duration-200"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-14 hidden lg:flex flex-col items-center gap-3 text-white/30">
          <p className="text-[10px] tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>Scroll</p>
          <div className="w-px h-16 bg-white/20 scroll-line" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#0076B6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-white text-3xl font-black">{s.value}</p>
              <p className="text-white/80 text-xs tracking-widest uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[#0076B6] text-xs font-semibold tracking-[0.3em] uppercase mb-3">What We Do</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0b1220] uppercase leading-tight">
                Full-Lifecycle<br />Development Consulting
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-[#0076B6] font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all">
              All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white p-8 group hover:bg-[#0b1220] transition-colors duration-300">
                <div className="w-8 h-0.5 bg-[#0076B6] mb-6" />
                <h3 className="text-lg font-bold text-[#0b1220] group-hover:text-white uppercase tracking-wide mb-3 transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Mission */}
      <section className="py-24 bg-[#EDF2F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0076B6] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Our Mission</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0b1220] uppercase leading-tight mb-6">
              Flowing to a Community Near You
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We believe that community is about people. We believe in real estate that is well located, carefully designed, and that delivers both a lifestyle and a purpose. We make it our mission to sculpt a profound environment by focusing on the details that make a place special.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Watershed Development Group is a coalition of professionals dedicated to making a meaningful difference for our communities and our investors. We strategically focus on acquiring and developing projects in prime locations across multifamily, single-family subdivisions, and creative covered land.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[#0076B6] font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all">
              About Watershed <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, title: "Multifamily", desc: "Urban and suburban multifamily development across Texas's fastest-growing corridors." },
              { icon: MapPin, title: "Single Family", desc: "Luxury residential subdivisions and lot development in prime Texas locations." },
              { icon: Award, title: "Creative Covered Land", desc: "Innovative value-add strategies that unlock hidden potential in overlooked assets." },
              { icon: Users, title: "Consulting", desc: "Expert development advisory for third-party clients navigating complex Texas projects." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 border-t-2 border-[#0076B6]">
                <item.icon size={24} className="text-[#0076B6] mb-3" />
                <h3 className="font-bold text-[#0b1220] text-sm uppercase tracking-wide mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-24 bg-[#0b1220]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[#0076B6] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Track Record</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white uppercase leading-tight">
                Featured Projects
              </h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-[#0076B6] font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all">
              All Projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              { name: "Studio Haus", type: "Hospitality / New Construction", loc: "East Austin, TX", tag: "60-Key Hotel", img: "/Images/6th and Chicon/Studio_Haus_Amenities_Exterior-21_ib5xrr.jpg" },
              { name: "Kramer", type: "Creative Covered Land", loc: "North Austin, TX", tag: "7x+ Equity Multiple", img: "/Images/Kramer/DJI_0339.jpg" },
              { name: "North Texas Subdivisions", type: "Single-Family Lot Development", loc: "Grayson & Collin County, TX", tag: "Vertically Integrated", img: "/Images/North Texas/subdivisions_files/unsplash-image-zBHU08hdzhY.jpg" },
            ].map((p) => (
              <div key={p.name} className="bg-[#162035] group hover:bg-[#0076B6] transition-colors duration-300 cursor-pointer overflow-hidden">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#0b1220]/40 group-hover:bg-[#0076B6]/30 transition-colors duration-300" />
                </div>
                <div className="p-8">
                  <p className="text-[#0076B6] group-hover:text-white/80 text-xs uppercase tracking-widest mb-4 transition-colors">{p.tag}</p>
                  <h3 className="text-white text-2xl font-black uppercase mb-2">{p.name}</h3>
                  <p className="text-white/50 group-hover:text-white/80 text-sm mb-1 transition-colors">{p.type}</p>
                  <div className="flex items-center gap-1 text-white/40 group-hover:text-white/70 text-xs transition-colors">
                    <MapPin size={12} />{p.loc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/projects" className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-[#0076B6] text-white hover:text-[#0076B6] font-semibold uppercase tracking-wide text-sm transition-colors duration-200">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog preview */}
      {posts.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-[#0076B6] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Market Intelligence</p>
                <h2 className="text-4xl lg:text-5xl font-black text-[#0b1220] uppercase leading-tight">
                  Development Insights
                </h2>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-2 text-[#0076B6] font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all">
                All Insights <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <div className="bg-[#EDF2F7] h-full flex flex-col group-hover:bg-[#0b1220] transition-colors duration-300 overflow-hidden">
                    {post.image && (
                      <div className="relative w-full shrink-0 overflow-hidden" style={{ aspectRatio: "16/9" }}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="p-8 flex flex-col flex-1">
                      <p className="text-[#0076B6] text-xs font-semibold uppercase tracking-widest mb-3">{post.category}</p>
                      <h3 className="text-[#0b1220] group-hover:text-white font-bold text-lg leading-snug mb-3 transition-colors duration-300">{post.title}</h3>
                      <p className="text-gray-500 group-hover:text-white/50 text-sm leading-relaxed line-clamp-3 transition-colors duration-300">{post.excerpt}</p>
                      <div className="mt-6 flex items-center gap-2 text-[#0076B6] text-xs font-semibold uppercase tracking-wide">
                        Read More <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-[#0076B6]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight mb-6">
            Have a Project to Discuss?
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            We are actively acquiring new projects across Austin and the DFW metroplex. If you have a property or development opportunity, we want to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#0b1220] hover:bg-[#162035] text-white font-semibold uppercase tracking-wide transition-colors duration-200"
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
