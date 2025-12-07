import { BentoCard } from "@/components/BentoCard";
import { Github, Linkedin, Mail, ArrowUpRight, Code2, Database, Terminal, Cpu, Trophy, Rocket, TrendingUp } from "lucide-react";
import { NeuralNetwork3D } from "@/components/NeuralNetwork3D";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 p-4 md:p-8 font-sans selection:bg-emerald-500/30 relative overflow-hidden">
      {/* 3D Background Layer */}
      <NeuralNetwork3D className="absolute top-0 left-0 w-full h-[60vh] z-0 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header: Personal Info & Summary */}
        <header className="py-12 md:py-24">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6">
            Wahid Rahmani<span className="text-emerald-500">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl leading-relaxed">
            Software Engineer & <span className="text-emerald-400">AI/ML Specialist</span>. 
            Bridging the gap between complex AI algorithms and user-friendly applications in fast-paced Agile environments.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-500 font-mono">
             <span>📍 Bærum, Norway</span>
             <span>•</span>
             <span>Fluent in Norwegian, English, Hindi, Persian, Pashto</span>
          </div>
        </header>

        {/* The Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* BLOCK 1: Current Focus (Xala Technologies) */}
          <BentoCard colSpan="col-span-2" className="md:row-span-2 bg-gradient-to-b from-neutral-900 to-neutral-900/50" title="Current Focus">
             <div className="flex flex-col justify-between h-full">
                <div className="space-y-5">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold text-white">Xala Technologies AS</h2>
                        <span className="text-neutral-400 text-sm font-medium mt-1">Software Developer</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-500 border border-emerald-500/30 px-2 py-1 rounded">Apr 2025 – Present</span>
                  </div>
                  
                  <p className="text-neutral-400 leading-relaxed text-sm">
                    Architecting scalable web solutions with a focus on data-intensive applications. 
                    Leveraging <strong className="text-white">React, TypeScript, and Python</strong> to build stable, high-performance systems.
                  </p>
                  
                  <ul className="text-sm text-neutral-400 space-y-3">
                    <li className="flex gap-3 items-start">
                        <span className="text-emerald-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                        <span className="leading-relaxed">Engineered responsive UIs using <strong className="text-neutral-300">React & TypeScript</strong>, reducing render times and improving type safety.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="text-emerald-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                        <span className="leading-relaxed">Optimized <strong className="text-neutral-300">SQL</strong> database schemas and <strong className="text-neutral-300">Python</strong> pipelines for large-scale AI data preprocessing.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="text-emerald-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                        <span className="leading-relaxed">Refined <strong className="text-neutral-300">JavaScript</strong> workflows and resolved complex production bottlenecks to ensure 99.9% platform stability.</span>
                    </li>
                  </ul>
                </div>
                
                {/* CTA Buttons */}
                <div className="mt-8 flex gap-3">
                  <a href="/cv.pdf" className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-bold hover:bg-emerald-400 transition-colors text-sm">
                    Download CV <ArrowUpRight size={16} />
                  </a>
                  <a href="mailto:wahidullah_rahmani@hotmail.com" className="inline-flex items-center gap-2 bg-neutral-800 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-neutral-700 transition-colors border border-neutral-700 text-sm">
                    Get in Touch
                  </a>
                </div>
             </div>
          </BentoCard>

          {/* BLOCK 2: Tech Stack (Skills from Resume) */}
          <BentoCard className="md:row-span-2" title="Tech Stack">
            <div className="space-y-6">
              <div>
                <div className="text-sm text-emerald-500 mb-2 font-mono flex items-center gap-2"><Terminal size={14}/> Languages</div>
                <div className="flex flex-wrap gap-2">
                  {["Kotlin", "Python", "TypeScript", "SQL", "JS (ES6+)"].map(t => (
                     <span key={t} className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300 border border-neutral-700">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm text-emerald-500 mb-2 font-mono flex items-center gap-2"><Cpu size={14}/> AI & ML</div>
                 <div className="flex flex-wrap gap-2">
                  {["Scikit-learn", "Pandas", "NumPy", "Predictive Modeling"].map(t => (
                     <span key={t} className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300 border border-neutral-700">{t}</span>
                  ))}
                </div>
              </div>
               <div>
                <div className="text-sm text-emerald-500 mb-2 font-mono flex items-center gap-2"><Database size={14}/> Frameworks & Ops</div>
                 <div className="flex flex-wrap gap-2">
                  {["React.js", "Jetpack Compose", "Docker", "Jenkins", "Git"].map(t => (
                     <span key={t} className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300 border border-neutral-700">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>

          {/* BLOCK 3: Achievements */}
          <BentoCard title="Key Achievements" className="min-h-[240px] flex flex-col justify-center">
             <div className="space-y-4">
                
                {/* Achievement 1 */}
                <div className="flex items-start gap-3 group/item">
                   <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover/item:bg-emerald-500/20 transition-colors mt-0.5">
                      <Trophy size={16} />
                   </div>
                   <div>
                      <h4 className="text-white text-sm font-bold">M.Sc. Specialized in ML</h4>
                      <p className="text-xs text-neutral-500 mt-1">University of Oslo</p>
                   </div>
                </div>

                {/* Achievement 2 */}
                <div className="flex items-start gap-3 group/item">
                   <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover/item:bg-blue-500/20 transition-colors mt-0.5">
                      <Rocket size={16} />
                   </div>
                   <div>
                      <h4 className="text-white text-sm font-bold">Leading AI Initiatives</h4>
                      <p className="text-xs text-neutral-500 mt-1">Xala Technologies</p>
                   </div>
                </div>

                {/* Achievement 3 */}
                <div className="flex items-start gap-3 group/item">
                   <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 group-hover/item:bg-purple-500/20 transition-colors mt-0.5">
                      <TrendingUp size={16} />
                   </div>
                   <div>
                      <h4 className="text-white text-sm font-bold">99.9% Uptime Record</h4>
                      <p className="text-xs text-neutral-500 mt-1">Critical Web Ops</p>
                   </div>
                </div>

             </div>
          </BentoCard>

          {/* BLOCK 4: Education (UiO & USN) */}
          <BentoCard title="Education" className="flex flex-col justify-center">
             <div className="space-y-6">
                <div>
                   <div className="text-white font-bold leading-tight">M.Sc. Informatics: ML</div>
                   <div className="text-xs text-neutral-500">University of Oslo • 2021-2024</div>
                   <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                     Thesis: Evaluating Likert Scales using Machine Learning (Sentiment Analysis).
                   </p>
                </div>
                 <div>
                   <div className="text-white font-bold leading-tight">B.Sc. IT & Info Systems</div>
                   <div className="text-xs text-neutral-500">Univ. of South-Eastern Norway • 2018-2021</div>
                    <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                     Thesis: Travel Method Detection App using real-time sensor data.
                   </p>
                </div>
             </div>
          </BentoCard>

          {/* BLOCK 5: Previous Experience (Full Width for Better Flow) */}
          <BentoCard colSpan="col-span-1" className="md:col-span-4" title="Previous Experience">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                
                 {/* Job 2: Beining & Bogen */}
                <div className="relative p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors group/job">
                   <div className="flex justify-between items-start mb-3">
                      <div>
                          <h3 className="text-white font-bold text-lg group-hover/job:text-emerald-400 transition-colors">App Developer</h3>
                          <div className="text-xs text-neutral-500 font-mono mt-1">Beining & Bogen AS</div>
                      </div>
                      <span className="text-[10px] text-emerald-500 font-mono bg-emerald-500/10 px-2 py-1 rounded">2022-2025</span>
                   </div>
                   <p className="text-sm text-neutral-400 leading-relaxed">
                      Worked as an Android Developer building native apps with <strong className="text-white">Kotlin & Jetpack Compose</strong>. 
                      I utilized the extensive Jetpack library ecosystem to create modern, responsive user interfaces and implemented sensor-based features for better UX.
                   </p>
                </div>

                 {/* Job 3: KS Privatist */}
                <div className="relative p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors group/job">
                   <div className="flex justify-between items-start mb-3">
                      <div>
                          <h3 className="text-white font-bold text-lg group-hover/job:text-emerald-400 transition-colors">Website Manager & QA Lead</h3>
                          <div className="text-xs text-neutral-500 font-mono mt-1">KS Privatist AS</div>
                      </div>
                      <span className="text-[10px] text-emerald-500 font-mono bg-emerald-500/10 px-2 py-1 rounded">2020-2021</span>
                   </div>
                   <p className="text-sm text-neutral-400 leading-relaxed">
                      Managed the company website and admin content. I worked directly with the engineering team to identify and report bugs, serving as the bridge between stakeholders and developers to ensure the platform ran smoothly.
                   </p>
                </div>
             </div>
          </BentoCard>

           {/* BLOCK 6: Contact & Socials (Full Width) */}
           <BentoCard colSpan="col-span-1" className="md:col-span-4 relative overflow-hidden bg-neutral-900 border-white/10 p-0">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
              
              <div className="relative z-10 grid md:grid-cols-2 h-full">
                 
                 {/* Left: Call to Action */}
                 <div className="p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-emerald-950/30 to-black/50">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                           <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                           </span>
                           <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Open to Work</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Let's build the future.</h3>
                        <p className="text-neutral-400 leading-relaxed max-w-sm">
                           I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>

                    <div className="flex gap-4 mt-8">
                        {[
                           { icon: Linkedin, href: "https://www.linkedin.com/in/wahid-rahmani", label: "LinkedIn" },
                           { icon: Github, href: "https://github.com/wahidullahr", label: "GitHub" },
                           { icon: Mail, href: "mailto:wahidullah_rahmani@hotmail.com", label: "Email" }
                        ].map((social, i) => (
                           <a 
                              key={i}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 hover:scale-105 transition-all duration-300"
                              aria-label={social.label}
                           >
                              <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                           </a>
                        ))}
                    </div>
                 </div>

                 {/* Right: Contact Form (Functional Mailto) */}
                 <div className="p-8 md:p-12 bg-neutral-900/50 border-t md:border-t-0 md:border-l border-white/5">
                    <form 
                        action="mailto:wahidullah_rahmani@hotmail.com" 
                        method="post" 
                        enctype="text/plain"
                        className="space-y-4"
                    >
                        <div>
                            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors" placeholder="your@email.com" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Message</label>
                            <textarea id="message" name="message" rows={3} className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none" placeholder="Hello! I'd like to discuss..." required></textarea>
                        </div>
                        <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 group">
                            Send Message
                            <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </form>
                 </div>

              </div>
           </BentoCard>

        </div>
        
        {/* Footer */}
        <footer className="pt-20 pb-10 text-center text-neutral-600 text-sm">
           <p>© 2025 Wahid Rahmani. Built with Next.js 14, Tailwind & Three.js.</p>
        </footer>

      </div>
    </div>
  );
}
