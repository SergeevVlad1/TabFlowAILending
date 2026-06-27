
import logo from './assets/TabFlowAI.png';
import smallLogo from './assets/TabFlowWhite2.png';

import { motion } from 'framer-motion';
import { LayoutDashboard, ListTodo, Timer, Activity, ShieldCheck, ChevronRight, Play } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-blue-500/30">
      
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[150px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 border-b border-white/5 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
              <img src={logo} alt="TabFlowAI Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight">TabFlowAI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
          </div>
          <button className="bg-white/10 hover:bg-white/15 border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all backdrop-blur-md">
            Add to Chrome
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            Version 1.1 is here: Smart Subgroups & Dashboard
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight max-w-4xl"
          >
            Streamline your workflow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">AI-powered</span> tab grouping
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
          >
            Meet your intelligent workspace assistant that automatically declutters your browser, organizes your tabs conceptually, and visualizes your productivity.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] transition-all transform hover:scale-105">
              Add to Chrome — It's Free
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all">
              <Play className="w-4 h-4 fill-current" />
              Watch Demo
            </button>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-5xl aspect-video rounded-2xl glass p-2 glow relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl pointer-events-none" />
            <div className="w-full h-full bg-[#121212] rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300 z-10">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <p className="mt-4 text-gray-400 font-medium z-10 group-hover:text-white transition-colors">Click to play video</p>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Everything you need to stay focused</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                TabFlowAI isn't just a tab manager. It's a complete productivity suite living right inside your browser's side panel.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: LayoutDashboard, title: "Smart Tab Subgroups", desc: "AI invents custom, workflow-specific groups like 'Code Repositories' or 'API Docs' instead of generic categories." },
                { icon: Activity, title: "Beautiful Analytics", desc: "Track your focus sessions, daily task time, and completion rates with sleek, interactive area charts." },
                { icon: ListTodo, title: "Integrated Tasks", desc: "Create to-do lists and track your progress right alongside your open tabs." },
                { icon: Timer, title: "Pomodoro Timer", desc: "Stay productive with built-in timers that work seamlessly in the background." },
                { icon: ShieldCheck, title: "Privacy First", desc: "Your data is processed in real-time and is NEVER stored or shared. Secure Google SSO included." },
                { icon: LayoutDashboard, title: "Sleek UI", desc: "Access everything in a non-intrusive, premium dark-themed side panel." },
              ].map((feature, idx) => (
                <div key={idx} className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors border border-white/5 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your browser?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Join thousands of productive professionals. Install TabFlowAI for free today.
              </p>
              <button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-white/10">
                Install TabFlowAI
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/40 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={smallLogo} alt="TabFlowAI Logo" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-lg font-bold">TabFlowAI</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 TabFlowAI. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
