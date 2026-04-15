import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart2, DollarSign, Search, FileText, HardHat, Percent, Building2, Layers, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Watershed Development Group offers full-lifecycle real estate development consulting services in Austin, TX and DFW — from feasibility and capital markets to entitlements, project management, and government incentives.",
};

const services = [
  {
    icon: BarChart2,
    title: "Development Advisory & Feasibility",
    tagline: "From concept to capital stack",
    desc: "We guide clients through every phase of the development process — starting with rigorous feasibility analysis and project assessment, through design programming, pre-construction planning, and delivery. Our advisors establish the financial framework, underwrite projected returns, and create a clear roadmap from vision to vertical construction.",
    bullets: [
      "Feasibility studies and market analysis",
      "Financial modeling and return scenario planning",
      "Project assessment and strategic planning",
      "Pre-construction strategy and contractor selection",
      "Design and programming coordination",
      "Budget and schedule development",
    ],
  },
  {
    icon: DollarSign,
    title: "Capital Markets & Finance Advisory",
    tagline: "Structured financing for complex deals",
    desc: "Watershed has deep relationships in Texas's institutional capital markets. We advise on the full capital stack — senior debt, mezzanine, preferred equity, JV equity, and co-GP structures — and help clients access capital sources ranging from regional banks and life companies to institutional private equity and family offices.",
    bullets: [
      "Equity and debt capital formation",
      "Joint venture structuring and GP/LP agreements",
      "Institutional investor relations and outreach",
      "Mezzanine and preferred equity placement",
      "Capital stack optimization",
      "Investor reporting and asset management support",
    ],
  },
  {
    icon: Search,
    title: "Site Selection & Acquisitions",
    tagline: "Data-driven site identification",
    desc: "Selecting the right site is the single most critical decision in any development project. We apply quantitative market analysis, demographic research, and on-the-ground Texas market expertise to identify opportunities with the strongest risk-adjusted fundamentals in Austin and the DFW metroplex.",
    bullets: [
      "Market and submarket analysis",
      "Site identification and scoring",
      "Acquisition underwriting and due diligence",
      "Highest and best use analysis",
      "Competitive supply analysis",
      "Off-market deal sourcing",
    ],
  },
  {
    icon: Percent,
    title: "Government Incentives & Financing",
    tagline: "Maximize your capital stack with public programs",
    desc: "Texas offers a rich landscape of public finance tools that can meaningfully improve project economics. Watershed has direct experience structuring projects using TIF, NMTC, LIHTC, Historic Tax Credits, and Opportunity Zone designations — reducing equity requirements and improving investor returns.",
    bullets: [
      "Tax Increment Financing (TIF) advisory",
      "New Markets Tax Credits (NMTC)",
      "Low-Income Housing Tax Credits (LIHTC)",
      "Historic Tax Credits (HTC)",
      "Opportunity Zone program structuring",
      "State and local incentive identification",
    ],
  },
  {
    icon: FileText,
    title: "Entitlements & Permitting Strategy",
    tagline: "Navigate regulatory complexity with confidence",
    desc: "Austin and DFW's regulatory environments require sophisticated navigation. We coordinate zoning analysis, test-fit design, variance applications, and multi-jurisdictional permitting strategies — working with city staff, planning commissions, and elected officials to advance projects on your timeline.",
    bullets: [
      "Zoning analysis and variance strategy",
      "Test-fit and concept design coordination",
      "City entitlement process management",
      "Permitting strategy and schedule planning",
      "Neighborhood and stakeholder engagement",
      "Multi-jurisdictional regulatory navigation",
    ],
  },
  {
    icon: HardHat,
    title: "Project Management",
    tagline: "Disciplined execution from groundbreaking to delivery",
    desc: "Development success is measured at the finish line. Our project management services maintain budget and schedule accountability through construction — with boots-on-the-ground oversight, proactive issue resolution, and clear reporting to ownership, lenders, and investors throughout the build cycle.",
    bullets: [
      "Third-party contractor and vendor oversight",
      "Budget and schedule monitoring",
      "Construction draw management",
      "Cost plan and change order review",
      "Lender and investor reporting",
      "Certificate of occupancy coordination",
    ],
  },
  {
    icon: Building2,
    title: "Asset Management & Repositioning",
    tagline: "Protect and grow the value of existing assets",
    desc: "For stabilized or underperforming assets, Watershed provides asset management advisory and repositioning strategy — evaluating capital improvement priorities, lease-up plans, and disposition timing to maximize returns for investors and ownership.",
    bullets: [
      "Asset management strategy and reporting",
      "Value-add and repositioning planning",
      "Lease-up strategy and oversight",
      "Recapitalization analysis",
      "Disposition strategy and marketing coordination",
      "Portfolio performance monitoring",
    ],
  },
  {
    icon: Cpu,
    title: "AI Workflow Consulting",
    tagline: "Cutting-edge efficiency on every engagement",
    desc: "Watershed's entire development process runs on an AI-powered workflow — accelerating feasibility analysis, market research, financial modeling, document review, and pitch deck creation. For clients looking to build the same edge into their own operations, we offer AI workflow consulting as a standalone service, helping real estate firms integrate modern AI tools into their day-to-day processes.",
    bullets: [
      "AI-accelerated document review and data extraction",
      "Pitch deck and investor memo production",
      "Feasibility and market research acceleration",
      "Financial modeling workflow optimization",
      "Email and calendar automation setup",
      "Custom AI tool implementation",
    ],
  },
  {
    icon: Layers,
    title: "Creative Covered Land Strategy",
    tagline: "Unlock hidden development optionality",
    desc: "Creative covered land is our proprietary investment strategy — acquiring income-producing assets with embedded future development potential. This approach generates current cash flow while preserving optionality as surrounding markets mature. Watershed advises clients on identifying, underwriting, and executing covered land plays in Austin and DFW.",
    bullets: [
      "Covered land acquisition identification",
      "In-place income underwriting",
      "Future development optionality valuation",
      "Conversion and repositioning timing strategy",
      "Tenant management and lease structuring",
      "Exit strategy and disposition planning",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1220] pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#0076B6] text-xs font-semibold tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white uppercase leading-tight max-w-3xl mb-6">
            Development Consulting Services
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            From the first site visit to the final disposition, Watershed provides the expertise to navigate every stage of the real estate development lifecycle in Texas.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-0 divide-y divide-gray-100">
          {services.map((svc, i) => (
            <div key={svc.title} className={`py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0076B6] flex items-center justify-center shrink-0">
                    <svc.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[#0076B6] text-xs font-semibold uppercase tracking-widest">{svc.tagline}</p>
                  </div>
                </div>
                <h2 className="text-3xl font-black text-[#0b1220] uppercase leading-tight mb-5">{svc.title}</h2>
                <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
              </div>
              <div className="bg-[#EDF2F7] p-8">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0b1220] mb-5">Services Include</p>
                <ul className="space-y-3">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0076B6] mt-2 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0b1220]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#0076B6] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Get Started</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight mb-6">
            Let&rsquo;s Talk About Your Project
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Whether you&rsquo;re in Austin, the DFW metroplex, or anywhere in Texas — Watershed is ready to put its expertise to work for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#0076B6] hover:bg-[#005F94] text-white font-semibold uppercase tracking-wide transition-colors"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
