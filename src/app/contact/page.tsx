import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { siteData } from "@/lib/siteData";
import { Mail, MapPin, ArrowRight, MessageSquare, Phone, Globe } from "lucide-react";
import { HeroTextAnimation } from "@/components/hero/HeroTextAnimation";
import { ParticleBackground } from "@/components/hero/ParticleBackground";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* ── UPGRADED PREMIUM HERO SECTION ───────────────── */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
        {/* Premium Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-slate-900" />
        
        {/* Glowing orbs */}
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />
        
        {/* Dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />

        {/* Particles */}
        <ParticleBackground color="rgba(255, 255, 255, 0.4)" count={100} opacity={0.5} />

        {/* Noise Texture Overlay */}
        <div 
          className="absolute inset-0 z-[2] opacity-[0.02] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url('/noise.png')" }}
        />

        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center">
            <HeroTextAnimation
              headline="Let's build the future of"
              accentWord="Finance"
              subheadline={`Ready to transform your financial infrastructure? Our team at ${siteData.name} is here to help you build the future.`}
              className="mb-8"
            />
            
            <div className="flex items-center gap-3 text-neutral-400 font-black uppercase tracking-widest text-[10px] bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
              We respond within 24 hours
            </div>
          </div>
        </Container>
      </section>

      {/* ── MAIN CONTENT SECTION ────────────────────────────────── */}
      <section className="relative mt-20 pb-32 z-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Form Card */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-neutral-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 h-32 w-32 bg-sky-50 rounded-bl-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
                  
                  <div className="relative mb-12">
                    <h2 className="text-3xl font-black text-neutral-900 tracking-tight mb-4">Send us a message</h2>
                    <p className="text-neutral-500 font-medium">Have a specific project in mind? Let's discuss how we can help.</p>
                  </div>

                  <form className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-black text-neutral-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="Jane Doe"
                          className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:border-sky-500 outline-none transition-all font-medium text-neutral-900" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black text-neutral-400 uppercase tracking-widest ml-1">Work Email</label>
                        <input 
                          type="email" 
                          placeholder="jane@company.com"
                          className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:border-sky-500 outline-none transition-all font-medium text-neutral-900" 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-black text-neutral-400 uppercase tracking-widest ml-1">Company</label>
                        <input 
                          type="text" 
                          placeholder="Your Company"
                          className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:border-sky-500 outline-none transition-all font-medium text-neutral-900" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black text-neutral-400 uppercase tracking-widest ml-1">Subject</label>
                        <select className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:border-sky-500 outline-none transition-all font-medium text-neutral-900 appearance-none">
                          <option>Platform Inquiry</option>
                          <option>Custom Solution</option>
                          <option>Partnership</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-black text-neutral-400 uppercase tracking-widest ml-1">Message</label>
                      <textarea 
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:border-sky-500 outline-none transition-all font-medium text-neutral-900 resize-none" 
                      />
                    </div>

                    <button className="group relative flex h-16 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-neutral-900 px-10 text-lg font-black text-white transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-neutral-200 mt-4">
                      <span className="relative z-10">Send Message</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Contact */}
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.04)] border border-neutral-100 group">
                  <h3 className="text-xl font-black text-neutral-900 mb-8 tracking-tight">Direct Connection</h3>
                  
                  <div className="space-y-6">
                    <a href={`mailto:${siteData.contact.email}`} className="flex items-center gap-6 group/item">
                      <div className="h-14 w-14 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 transition-all group-hover/item:scale-110 group-hover/item:bg-sky-500 group-hover/item:text-white shadow-sm">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest leading-none mb-2">Email</p>
                        <p className="font-bold text-neutral-900 text-lg">{siteData.contact.email}</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-6 group/item">
                      <div className="h-14 w-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 transition-all group-hover/item:scale-110 group-hover/item:bg-indigo-500 group-hover/item:text-white shadow-sm">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest leading-none mb-2">Location</p>
                        <p className="font-bold text-neutral-900 leading-tight">Hyderabad, Telangana<br/><span className="text-neutral-500 text-sm font-medium">Banjara Hills Office HQ</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Support Card */}
              <FadeIn delay={0.4}>
                <div className="bg-neutral-900 rounded-[40px] p-8 md:p-10 shadow-2xl shadow-neutral-200 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 h-32 w-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
                  
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
                    <Globe className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-black text-white mb-4 tracking-tight">Need Support?</h3>
                  <p className="text-neutral-400 text-sm font-medium leading-relaxed mb-8">
                    Existing customer? Our portal is open 24/7 for technical assistance and documentation.
                  </p>
                  
                  <Link 
                    href="#" 
                    className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px] bg-white/10 border border-white/10 px-6 py-3 rounded-full hover:bg-white hover:text-neutral-950 transition-all"
                  >
                    Open Portal <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </FadeIn>
            </div>

          </div>
        </Container>
      </section>

      {/* ── BOTTON INFO ────────────────────────────────────────────── */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {[
              { label: "Phone", val: "+91 40-23385581", icon: Phone },
              { label: "Twitter", val: "@JocataTech", icon: MessageSquare },
              { label: "LinkedIn", val: "Jocata Financial Advisory", icon: Globe },
            ].map((item) => (
              <div key={item.label} className="flex flex-col md:flex-row items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-sky-500 transition-colors">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="font-bold text-neutral-900">{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}
