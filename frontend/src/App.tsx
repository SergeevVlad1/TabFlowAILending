import React, { useState, useEffect } from "react";
import logo from "./assets/TabFlowAI.png";
import smallLogo from "./assets/TabFlowWhite2.png";
import PrivacyPolicy from "./PrivacyPolicy";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ListTodo,
  Timer,
  Activity,
  ShieldCheck,
  ChevronRight,
  Play,
} from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (currentHash === "#privacy") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId === "hero") setActiveSection(0);
            if (sectionId === "features") setActiveSection(1);
            if (sectionId === "faq") setActiveSection(2);
            if (sectionId === "cta") setActiveSection(3);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [currentHash]);

  if (currentHash === "#privacy") {
    return <PrivacyPolicy />;
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-background dot-pattern text-white font-sans overflow-x-hidden selection:bg-white/20">
      {/* Fixed Pagination */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6 items-center">
        {[
          { id: "hero", label: "Intro" },
          { id: "features", label: "Features" },
          { id: "faq", label: "FAQ" },
          { id: "cta", label: "Install" }
        ].map((item, i) => (
          <div
            key={i}
            onClick={() => scrollTo(item.id)}
            className="group flex flex-col items-center gap-4 cursor-pointer relative"
          >
            <span className={`absolute right-6 top-1/2 -translate-y-1/2 text-xs font-medium uppercase tracking-widest transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 whitespace-nowrap ${activeSection === i ? 'text-white' : 'text-gray-500'}`}>
              {item.label}
            </span>
            <div className={`rounded-full transition-all duration-700 ease-[0.16,1,0.3,1] ${activeSection === i ? 'w-1.5 h-10 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'w-1.5 h-1.5 bg-white/20 group-hover:bg-white/50'}`} />
          </div>
        ))}
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/50 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            onClick={() => { window.location.hash = ""; window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-1.5 group-hover:scale-105 transition-transform">
              <img
                src={logo}
                alt="TabFlowAI Logo"
                className="w-full h-full object-contain filter grayscale brightness-200"
              />
            </div>
            <span className="text-xl font-medium tracking-tight group-hover:text-gray-300 transition-colors">TabFlowAI</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-400">
            <button onClick={() => scrollTo("features")} className="hover:text-white transition-colors">
              Features
            </button>
            <button onClick={() => scrollTo("how-it-works")} className="hover:text-white transition-colors">
              How it works
            </button>
            <button onClick={() => { window.location.hash = "#privacy"; window.scrollTo(0, 0); }} className="hover:text-white transition-colors">
              Privacy
            </button>
          </div>
          <a href="https://chromewebstore.google.com/detail/tabflowai-smart-tab-task/pekehccllcdlndjdhilngkindkbmmobb" target="_blank" rel="noreferrer" className="bg-white text-black hover:bg-gray-200 px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] inline-flex items-center justify-center">
            Get Started
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center items-center text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-gray-300 text-sm font-medium mb-12 shadow-2xl relative z-10"
          >
            <span className="flex h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
            Version 1.1 is here: Smart Subgroups & Dashboard
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-[1.1] max-w-4xl relative z-10"
          >
            Streamline your workflow with <br className="hidden md:block"/> <span className="gradient-text">AI-powered</span> organization
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light relative z-10"
          >
            Meet your intelligent workspace assistant that automatically declutters your browser, organizes your tabs conceptually, and visualizes your productivity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 mb-24 relative z-10"
          >
            <a href="https://chromewebstore.google.com/detail/tabflowai-smart-tab-task/pekehccllcdlndjdhilngkindkbmmobb" target="_blank" rel="noreferrer" className="bg-white text-black hover:bg-neutral-200 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] transition-all transform hover:scale-[1.02]">
              Add to Chrome — It's Free
              <ChevronRight className="w-5 h-5" />
            </a>
            <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: "smooth" })} className="glass hover:bg-white/5 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-3 transition-all">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              Watch Demo
            </button>
          </motion.div>

          {/* Video Section */}
          <div id="how-it-works" className="w-full flex flex-col items-center mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-center relative z-10"
            >
              See how it <span className="text-gray-400">works</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="w-full max-w-5xl aspect-[16/9] rounded-[2rem] glass p-2 glow relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] pointer-events-none opacity-50" />
            <div className="w-full h-full bg-[#0a0a0a] rounded-[1.5rem] border border-white/5 overflow-hidden relative shadow-2xl">
              <iframe
                className="w-full h-full relative z-10"
                src="https://www.youtube.com/embed/LierOzMC2n4?autoplay=0&controls=1&rel=0"
                title="TabFlowAI Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Features Section */}
        <section id="features" className="py-32 px-6 relative flex flex-col justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-32">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                className="text-4xl md:text-6xl font-bold mb-8 tracking-tight"
              >
                Everything you need to <span className="text-gray-400">stay focused</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-gray-400 text-xl max-w-2xl mx-auto font-light leading-relaxed"
              >
                Is your browser constantly cluttered? Lost in the chaos of researching and planning? Meet TabFlowAI - your intelligent workspace assistant.
              </motion.p>
            </div>

            <div className="flex flex-col gap-32">
              {[
                {
                  title: "AI-Powered Tab Grouping",
                  subtitle: "Make your workspace look less like a warzone",
                  description: "Powered by advanced Google Gemini AI, TabFlowAI doesn’t just place your tabs into boring, generic folders. It understands the actual context of your open websites and creates smart, conceptual subgroups (e.g., 'Code Repositories', 'API Docs') tailored directly to your workflow. Find anything instantly.",
                  image: "/feature-tabs.png",
                  icon: LayoutDashboard
                },
                {
                  title: "Focus Engine",
                  subtitle: "Transform distraction into focused work cycles",
                  description: "Eliminate time-wasting habits and build clear progress paths. Create structured, timed tasks, prioritize your day for impact, and stay productive with built-in Pomodoro timers that work seamlessly in the background.",
                  image: "/feature-focus.png",
                  icon: Timer
                },
                {
                  title: "Frictionless Task Capture",
                  subtitle: "Plan and structure your day automatically",
                  description: "Your intelligent AI assistant auto-captures your tasks. Create to-do lists and track your progress right alongside your open tabs. Let the AI optimize your flow and suggest when to take a break or tackle the next priority.",
                  image: "/feature-tasks.png",
                  icon: ListTodo
                },
                {
                  title: "Visual Analytics",
                  subtitle: "Build self-awareness around your task flow",
                  description: "Clearly see when you stayed focused, and when not, with visual statistics. Track your focus sessions, daily task time, and completion rates with a sleek, interactive area chart in a premium dark-themed interface.",
                  image: "/feature-stats.png",
                  icon: Activity
                }
              ].map((feature, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 w-full relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative glass p-2 rounded-[2rem] glow overflow-hidden">
                       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
                       <div className="w-full aspect-[4/3] bg-[#0a0a0a] rounded-[1.5rem] border border-white/5 relative overflow-hidden flex flex-col items-center justify-center">
                         <img 
                           src={feature.image} 
                           alt={feature.title} 
                           loading="lazy"
                           decoding="async"
                           className="absolute inset-0 w-full h-full object-cover z-10"
                           onError={(e) => {
                             (e.target as HTMLImageElement).style.display = 'none';
                             (e.target as HTMLImageElement).parentElement!.classList.add('bg-gradient-to-br', 'from-white/5', 'to-white/0');
                           }}
                         />
                         <span className="text-gray-500 font-medium tracking-widest uppercase text-xs z-0 text-center px-4">
                           Put {feature.image} in public/ folder
                         </span>
                       </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="flex-1 flex flex-col justify-center"
                  >
                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-8 shadow-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-gray-400 mb-3 tracking-tight">
                      {feature.subtitle}
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white leading-tight">
                      {feature.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="px-6 relative flex flex-col justify-center">
          <div className="max-w-3xl mx-auto w-full">
            <div className="text-center mb-24">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                className="text-4xl md:text-6xl font-bold mb-8 tracking-tight"
              >
                Frequently Asked <span className="text-gray-400">Questions</span>
              </motion.h2>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  q: "How does the AI tab grouping work?",
                  a: "Our Google Gemini AI analyzes the titles and URLs of your open tabs in real-time to understand their context, automatically categorizing them into smart, workflow-specific subgroups without saving your browsing history."
                },
                {
                  q: "Is my browsing data safe and private?",
                  a: "Absolutely. We process your tab data momentarily strictly for categorization. Your browsing history is NEVER stored, and your data is completely private. We use secure Google OAuth for authentication."
                },
                {
                  q: "Does TabFlowAI slow down my browser?",
                  a: "Not at all. TabFlowAI is deeply optimized to run efficiently in the background and within the Chrome side panel, ensuring zero impact on your browser's performance."
                },
                {
                  q: "Can I sync my tasks across devices?",
                  a: "Yes! By signing in securely with your Google account, all your tasks, timers, and subgroups are seamlessly synced to the cloud, making them available across all your desktop devices."
                },
                {
                  q: "Is TabFlowAI free to use?",
                  a: "TabFlowAI is free to install and use. We offer core productivity features to all users to help transform distraction into focused work cycles."
                }
              ].map((faq, idx) => (
                <details key={idx} className="group glass rounded-[1.5rem] overflow-hidden transition-all duration-300">
                  <summary className="w-full text-left px-8 py-6 flex items-center justify-between cursor-pointer focus:outline-none list-none marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="text-xl font-medium text-white pr-4">{faq.q}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 transition-transform duration-300 group-open:rotate-90 flex-shrink-0" />
                  </summary>
                  <div className="px-8 pb-6 text-gray-400 font-light leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="cta" className="min-h-screen py-32 px-6 flex flex-col justify-center items-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl mx-auto glass rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight max-w-2xl">
                Ready to transform your browser?
              </h2>
              <p className="text-xl text-gray-400 mb-12 font-light max-w-xl">
                Join thousands of productive professionals. Install TabFlowAI
                for free today and experience the future of browsing.
              </p>
              <a href="https://chromewebstore.google.com/detail/tabflowai-smart-tab-task/pekehccllcdlndjdhilngkindkbmmobb" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-white text-black hover:bg-gray-200 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
                Install TabFlowAI Now
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0a0a0a] pt-20 pb-10 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-1.5">
                  <img
                    src={logo}
                    alt="TabFlowAI Logo"
                    className="w-full h-full object-contain filter grayscale brightness-200"
                  />
                </div>
                <span className="text-2xl font-bold tracking-tight">TabFlowAI</span>
              </div>
              <p className="text-gray-400 font-light max-w-sm leading-relaxed mb-8">
                Your intelligent workspace assistant. Streamline your workflow, organize tabs conceptually, and visualize your productivity in one seamless Chrome extension.
              </p>
              <div className="flex gap-4">
                <a href="https://www.youtube.com/watch?v=LierOzMC2n4" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-white text-gray-400 transition-all group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                </a>
                <a href="https://github.com/SergeevVlad1" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-white text-gray-400 transition-all group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6 tracking-tight">Product</h4>
              <ul className="flex flex-col gap-4 text-gray-400 font-light text-sm">
                <li><button onClick={() => scrollTo("features")} className="hover:text-white transition-colors">Features</button></li>
                <li><button onClick={() => scrollTo("hero")} className="hover:text-white transition-colors">How it works</button></li>
                <li><button onClick={() => scrollTo("faq")} className="hover:text-white transition-colors">FAQ</button></li>
                <li><a href="https://chromewebstore.google.com/detail/tabflowai-smart-tab-task/pekehccllcdlndjdhilngkindkbmmobb" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Install Extension</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 tracking-tight">Legal</h4>
              <ul className="flex flex-col gap-4 text-gray-400 font-light text-sm">
                <li><a href="#privacy" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="mailto:svv.kaz@gmail.com" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm font-light">
              © {new Date().getFullYear()} TabFlowAI. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-light">
              Made with <span className="text-red-500/80">❤️</span> for productivity
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
