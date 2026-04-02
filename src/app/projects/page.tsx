import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Watershed Development Group's track record across multifamily, hospitality, single-family subdivision, and creative covered land projects in Texas and beyond.",
};

const projects = [
  {
    name: "6th & Chicon",
    headline: "Cutting-Edge Hospitality",
    type: "Hospitality — New Construction",
    location: "East 6th Street Transit Oriented District, Austin, TX",
    status: "Completion Spring 2025",
    tag: "60-Key Hotel",
    desc: "A 60-key, cutting-edge hospitality project located in Austin's vibrant East 6th Street Transit Oriented District. Designed in an urban luxury format with Class A touches and exceptional convenience, the project is constructed using cold-form metal framing technology — reducing construction waste and environmental impact while accelerating delivery timelines.",
    highlights: [
      "60 hotel keys — urban luxury format",
      "East 6th Street Transit Oriented District",
      "Cold-form metal framing construction technology",
      "Reduced environmental impact vs. conventional construction",
      "Spring 2025 completion",
    ],
    color: "bg-[#162035]",
    images: [
      "/Images/6th and Chicon/Studio_Haus_Amenities_Exterior-1_wr7rhi.jpg",
      "/Images/6th and Chicon/Studio_Haus_Amenities_Exterior-14_yjp1ac.jpg",
      "/Images/6th and Chicon/Studio_Haus_Amenities_Exterior-16_vtg8k5.jpg",
    ],
  },
  {
    name: "Kramer",
    headline: "Creative Covered Land",
    type: "Office-to-Education Conversion / Covered Land",
    location: "North Austin, TX (adjacent to The Domain)",
    status: "Sold 2023",
    tag: "7x+ Equity Multiple",
    desc: "A value-add office building in North Austin, adjacent to the Domain — Austin's emerging second downtown. Watershed converted and tenanted the property as a K–3rd grade primary education facility, creating stable cash flow while the surrounding submarket matured. The deal was sold in 2023, generating a 7x+ deal-level equity multiple and a 3.5x equity multiple to investors.",
    highlights: [
      "Office-to-education adaptive reuse",
      "Tenanted as K–3rd grade primary school",
      "Over 2 acres in the path of growth",
      "7x+ deal-level equity multiple",
      "3.5x equity multiple to investors",
      "Sold 2023",
    ],
    color: "bg-[#1a2540]",
    images: [
      "/Images/Kramer/DJI_0339.jpg",
      "/Images/Kramer/Drone Image_showing Domain and Soccer Staduim.jpg",
      "/Images/Kramer/Drone Image_showing Downtown Austin.jpg",
    ],
  },
  {
    name: "Sylvan",
    headline: "Luxury Single-Family Houses",
    type: "Luxury Residential Subdivision",
    location: "East Travis Heights, East Riverside Submarket, Austin, TX",
    status: "Realized",
    tag: "10x+ Equity Growth",
    desc: "A luxury single-family residential subdivision in Austin's sought-after East Travis Heights neighborhood within the East Riverside submarket. The project involved subdivision creation and the development of high-end homes in one of Austin's most dynamic urban infill locations, achieving more than 10x equity growth for investors.",
    highlights: [
      "Luxury single-family residential subdivision",
      "East Travis Heights — premium Austin infill location",
      "East Riverside submarket",
      "Equity growth of more than 10x",
      "Subdivision creation business plan",
    ],
    color: "bg-[#0f1d35]",
    images: [
      "/Images/Sylvan/60f3dfc58364efe47601560dc9a5c19e.jpg",
    ],
  },
  {
    name: "North Texas Subdivisions",
    headline: "Single-Family Lot Development",
    type: "Ground-Up Residential Lot Infrastructure",
    location: "Grayson County & Collin County, North Texas",
    status: "Active",
    tag: "Vertically Integrated",
    desc: "A multi-site residential lot development program spanning Grayson and Collin Counties in North Texas — one of the fastest-growing submarkets in the country. Watershed, in partnership with Mitchell Development, acquires land and self-performs all infrastructure work including dirt work, utilities, and roadway construction through a vertically integrated platform. Finished lots are sold to major national homebuilders.",
    highlights: [
      "Grayson County and Collin County, North Texas",
      "Ground-up infrastructure: dirt work, utilities, roadway",
      "Vertically integrated platform — self-perform capability",
      "Partnership with Mitchell Development",
      "Finished lot sales to national homebuilders",
      "One of the fastest-growing US submarkets",
    ],
    color: "bg-[#162035]",
    images: [] as string[],
  },
  {
    name: "Detroit Restoration",
    headline: "Early 1900s Apartment Restoration",
    type: "Multifamily Historic Renovation",
    location: "Midtown, Detroit, MI (near Wayne State University)",
    status: "Stabilized — Cash Flowing",
    tag: "2.5x Rent Growth",
    desc: "A moderate value-add renovation of a 1920s brick apartment complex in Detroit's Midtown neighborhood, near Wayne State University. In partnership with Moontower Capital, Watershed executed a renovation strategy that mixed the building's original historic charm with curated modern upgrades. The results were remarkable — rents on renovated units increased by 2.5x — and the asset has been re-tenanted and stabilized as a long-term hold.",
    highlights: [
      "1920s brick apartment complex — historic renovation",
      "Midtown Detroit — adjacent to Wayne State University",
      "Partnership with Moontower Capital",
      "2.5x rent increase on renovated units",
      "Fully stabilized and cash-flowing",
      "Moderate value-add business plan",
    ],
    color: "bg-[#1a2540]",
    images: [
      "/Images/Detroit/Front Preferred.png",
      "/Images/Detroit/Front Steps.jpg",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1220] pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#0076B6] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Track Record</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white uppercase leading-tight max-w-3xl mb-6">
            Projects
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            Across multifamily, hospitality, residential subdivision, and creative covered land — a portfolio built on discipline, creativity, and execution.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#0076B6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: "$500M+", l: "Assets Developed" },
            { v: "5", l: "Featured Projects" },
            { v: "3", l: "States" },
            { v: "7x+", l: "Best Equity Multiple" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-white text-2xl font-black">{s.v}</p>
              <p className="text-white/70 text-xs uppercase tracking-widest mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-4 bg-[#0b1220]">
        {projects.map((project, i) => (
          <div key={project.name} className={`${project.color} border-b border-white/5`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#0076B6] text-white text-xs font-bold uppercase tracking-widest">{project.tag}</span>
                  <span className="text-white/40 text-xs uppercase tracking-wider">{project.status}</span>
                </div>
                <h2 className="text-4xl font-black text-white uppercase leading-tight mb-2">{project.name}</h2>
                <p className="text-[#0076B6] text-sm font-semibold uppercase tracking-widest mb-4">{project.headline}</p>
                <div className="flex items-center gap-2 text-white/40 text-xs mb-6">
                  <MapPin size={12} /> {project.location}
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{project.type}</p>

                {/* Photo grid */}
                {project.images.length > 0 && (
                  <div className="mt-8 grid grid-cols-2 gap-2">
                    {project.images.slice(0, 4).map((src, idx) => (
                      <div
                        key={src}
                        className={`relative overflow-hidden ${idx === 0 && project.images.length >= 3 ? "col-span-2" : ""}`}
                        style={{ aspectRatio: idx === 0 && project.images.length >= 3 ? "16/7" : "4/3" }}
                      >
                        <Image
                          src={src}
                          alt={`${project.name} — photo ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-white/70 leading-relaxed mb-8">{project.desc}</p>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Project Highlights</p>
                  <ul className="space-y-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-white/60 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0076B6] mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0076B6]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white uppercase mb-4">Have a Property to Discuss?</h2>
          <p className="text-white/80 text-lg mb-8">
            Watershed is actively acquiring new projects across Austin and the DFW metroplex. Use subject line &ldquo;NEW PROJECT&rdquo; when reaching out.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0b1220] hover:bg-[#162035] text-white font-semibold uppercase tracking-wide transition-colors">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
