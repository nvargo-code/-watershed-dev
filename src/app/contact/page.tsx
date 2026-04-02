"use client";

import { useState } from "react";
import { Send, MapPin, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Form submission placeholder — wire to Formspree or similar
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1220] pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#e87722] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Get in Touch</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white uppercase leading-tight max-w-3xl">
            Let&rsquo;s Build Something Together
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <div className="mb-10">
              <p className="text-[#e87722] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Watershed Development Group</p>
              <h2 className="text-3xl font-black text-[#0b1220] uppercase leading-tight mb-5">
                Actively Acquiring New Projects
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Watershed Development Group is currently acquiring new projects across the Austin and Dallas-Fort Worth markets. If you have a property you&rsquo;d like to discuss, please reach out using the subject line &ldquo;NEW PROJECT.&rdquo;
              </p>
              <p className="text-gray-600 leading-relaxed">
                For development consulting inquiries, investment partnerships, or general questions — we look forward to hearing from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#e87722] flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#0b1220] text-sm uppercase tracking-wide">Primary Markets</p>
                  <p className="text-gray-500 text-sm mt-1">Austin, Texas</p>
                  <p className="text-gray-500 text-sm">Dallas–Fort Worth Metroplex, Texas</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-[#f5f5f5] border-l-4 border-[#e87722]">
              <p className="text-sm font-semibold text-[#0b1220] uppercase tracking-wide mb-2">Acquisition Inquiries</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Please use subject line <strong>&ldquo;NEW PROJECT&rdquo;</strong> for any property or development opportunity you&rsquo;d like us to evaluate.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <CheckCircle size={56} className="text-[#e87722] mb-6" />
                <h3 className="text-2xl font-black text-[#0b1220] uppercase mb-3">Message Received</h3>
                <p className="text-gray-600 max-w-sm leading-relaxed">
                  Thank you for reaching out. A member of the Watershed team will be in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#0b1220] mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#e87722] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#0b1220] mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#e87722] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#0b1220] mb-2">Subject *</label>
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#e87722] transition-colors bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="NEW PROJECT">NEW PROJECT — Property/Acquisition Inquiry</option>
                    <option value="Development Consulting">Development Consulting Services</option>
                    <option value="Capital Markets">Capital Markets / Investment Partnership</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#0b1220] mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#e87722] transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#e87722] hover:bg-[#d0681a] text-white font-semibold uppercase tracking-wide transition-colors text-sm"
                >
                  Send Message <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
