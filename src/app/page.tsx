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
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h2 className="text-3xl font-bold text-white">Xala Technologies AS</h2>
                    <span className="text-xs font-mono text-emerald-500 border border-emerald-500/30 px-2 py-1 rounded">Apr 2025 – Present</span>
                  </div>
                  <p className="text-neutral-400 leading-relaxed">
                    Architecting robust web applications using <strong className="text-white">Python & React</strong>. 
                    I am currently leading an AI initiative to preprocess large datasets for future predictive analytics and establishing platform stability.
                  </p>
                  <ul className="text-sm text-neutral-500 space-y-1 list-disc pl-4">
                    <li>Resolving complex production bugs to boost uptime.</li>
                    <li>Streamlining Agile processes & breaking down technical requirements.</li>
                  </ul>
                </div>
                
                {/* CTA Buttons */}
                <div className="mt-8 flex gap-3">
                  <a href="/cv.pdf" className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-bold hover:bg-emerald-400 transition-colors">
                    Download CV <ArrowUpRight size={16} />
                  </a>
                  <a href="mailto:wahidullah_rahmani@hotmail.com" className="inline-flex items-center gap-2 bg-neutral-800 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-neutral-700 transition-colors border border-neutral-700">
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

          {/* BLOCK 3: Key Achievements (REPLACING Commit Activity) */}
          <BentoCard title="Performance Metrics" className="flex items-center justify-center p-0">
             <div className="grid grid-cols-3 w-full h-full divide-x divide-white/10">
                
                {/* Metric 1: Education Depth */}
                <div className="flex flex-col justify-center items-center text-center p-4 hover:bg-white/5 transition-colors group/metric">
                   <div className="text-2xl md:text-3xl font-bold text-white tabular-nums group-hover/metric:scale-110 transition-transform duration-300">M.Sc.</div>
                   <div className="text-[10px] uppercase tracking-wider text-emerald-500 font-bold mt-1">Informatics: ML</div>
                   <div className="text-[10px] text-neutral-500 mt-1 hidden xl:block">University of Oslo</div>
                </div>

                {/* Metric 2: Current Impact */}
                <div className="flex flex-col justify-center items-center text-center p-4 hover:bg-white/5 transition-colors group/metric">
                   <div className="text-2xl md:text-3xl font-bold text-white tabular-nums group-hover/metric:scale-110 transition-transform duration-300">Data</div>
                   <div className="text-[10px] uppercase tracking-wider text-emerald-500 font-bold mt-1">Pipeline Arch</div>
                   <div className="text-[10px] text-neutral-500 mt-1 hidden xl:block">Predictive Analytics</div>
                </div>

                {/* Metric 3: Reliability */}
                <div className="flex flex-col justify-center items-center text-center p-4 hover:bg-white/5 transition-colors group/metric">
                   <div className="text-2xl md:text-3xl font-bold text-white tabular-nums group-hover/metric:scale-110 transition-transform duration-300">99.9%</div>
                   <div className="text-[10px] uppercase tracking-wider text-emerald-500 font-bold mt-1">Sys Uptime</div>
                   <div className="text-[10px] text-neutral-500 mt-1 hidden xl:block">High Availability</div>
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

          {/* BLOCK 5: Previous Experience (Beining & Bogen + KS Privatist) */}
          <BentoCard colSpan="col-span-2" title="Previous Experience">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                
                {/* Job 2: Beining & Bogen */}
                <div className="space-y-2">
                   <div className="flex justify-between items-baseline">
                      <h3 className="text-white font-bold">App Developer</h3>
                      <span className="text-[10px] text-emerald-500 font-mono">2022-2025</span>
                   </div>
                   <p className="text-xs text-neutral-500 mb-2">Beining & Bogen AS</p>
                   <p className="text-sm text-neutral-400 leading-relaxed">
                      Led full-lifecycle Android dev with <span className="text-emerald-400">Kotlin & Jetpack Compose</span>.
                      Implemented context-aware algorithms utilizing device sensors for personalized UX.
                   </p>
                </div>

                 {/* Job 3: KS Privatist */}
                <div className="space-y-2">
                   <div className="flex justify-between items-baseline">
                      <h3 className="text-white font-bold">Web Ops Specialist</h3>
                      <span className="text-[10px] text-emerald-500 font-mono">2020-2021</span>
                   </div>
                   <p className="text-xs text-neutral-500 mb-2">KS Privatist AS</p>
                   <p className="text-sm text-neutral-400 leading-relaxed">
                      Technical bridge between stakeholders and devs. 
                      Maintained 99.9% uptime and executed data-driven SEO strategies.
                   </p>
                </div>
             </div>
          </BentoCard>

           {/* BLOCK 6: Socials - Enhanced "Connect Dock" */}
           <BentoCard colSpan="col-span-2" className="relative overflow-hidden bg-gradient-to-r from-emerald-900/20 to-black border-emerald-500/20 p-0">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full p-6 md:px-10 gap-4">
                 
                 <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                       <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                       </span>
                       <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Open to Work</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Let's build the future.</h3>
                 </div>

                 <div className="flex gap-4">
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
                          className="group flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 hover:scale-105 transition-all duration-300"
                          aria-label={social.label}
                       >
                          <social.icon className="w-6 h-6 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                       </a>
                    ))}
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
