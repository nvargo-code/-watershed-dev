import Link from "next/link";

const services = [
  "Development Advisory",
  "Capital Markets",
  "Site Selection",
  "Entitlements & Permitting",
  "Project Management",
  "Government Incentives",
  "Asset Management",
  "Creative Covered Land",
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] text-white">
      {/* Acquisition banner */}
      <div className="bg-[#0076B6] px-6 py-4">
        <p className="max-w-7xl mx-auto text-center text-sm font-semibold tracking-wide">
          Watershed Development Group is currently acquiring new projects.{" "}
          <Link href="/contact?subject=NEW PROJECT" className="underline hover:no-underline font-bold">
            Contact us with subject &ldquo;NEW PROJECT&rdquo;
          </Link>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <div>
            <p className="font-bold text-xl tracking-wide uppercase">Watershed</p>
            <p className="text-[#0076B6] text-xs tracking-[0.2em] uppercase font-medium">Development Group</p>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            A coalition of professionals dedicated to making a meaningful difference for our communities and our investors.
          </p>
          <p className="text-white/40 text-xs uppercase tracking-widest">Austin, TX &bull; Dallas–Fort Worth, TX</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0076B6] mb-5">Services</h4>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s}>
                <Link href="/services" className="text-white/60 hover:text-white text-sm transition-colors duration-150">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links + Newsletter */}
        <div className="space-y-8">
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0076B6] mb-5">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Insights", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0076B6] mb-3">Market Insights</h4>
            <p className="text-white/50 text-xs mb-3">Get Austin & DFW development updates delivered to your inbox.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-white/10 border border-white/20 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#0076B6]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#0076B6] hover:bg-[#005F94] text-white text-sm font-semibold uppercase tracking-wide transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-white/30 text-xs">
          <p>&copy; {new Date().getFullYear()} Watershed Development Group. All rights reserved.</p>
          <p>Austin, TX &bull; Dallas–Fort Worth, TX</p>
        </div>
      </div>
    </footer>
  );
}
