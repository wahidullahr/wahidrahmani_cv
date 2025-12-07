import { BentoCard } from "@/components/BentoCard";
import { NeuralNetwork3D } from "@/components/NeuralNetwork3D";
import { Github, Linkedin, Mail, ArrowUpRight, Code2, Database, Terminal, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 p-4 md:p-8 font-sans selection:bg-emerald-500/30 relative overflow-hidden">
      {/* 3D Background Layer */}
      <NeuralNetwork3D className="absolute top-0 left-0 w-full h-[60vh] z-0 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header: Clean & Brutalist */}
        <header className="py-12 md:py-24">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6">
            Wahid Rahmani<span className="text-emerald-500">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl leading-relaxed">
            Software Engineer specializing in <span className="text-emerald-400">High-Performance Systems</span> and <span className="text-emerald-400">Machine Learning</span>.
            Bridging the gap between complex algorithms and pixel-perfect UIs.
          </p>
        </header>

        {/* The Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* BLOCK 1: Current Status (Large) */}
          <BentoCard colSpan="col-span-2" className="md:row-span-2 bg-gradient-to-b from-neutral-900 to-neutral-900/50" title="Current Focus">
             <div className="flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white">Software Engineer @ Xala Technologies</h2>
                  <p className="text-neutral-400 leading-relaxed">
                    Architecting robust web applications using <strong className="text-white">Python & React</strong>. 
                    I focus on preprocessing large datasets for predictive analytics and ensuring system stability under high load.
                  </p>
                </div>
                
                {/* Micro-interaction Buttons */}
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

          {/* BLOCK 2: Stack (Vertical) */}
          <BentoCard className="md:row-span-2" title="Tech Stack">
            <div className="space-y-6">
              <div>
                <div className="text-sm text-emerald-500 mb-2 font-mono">Core</div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "TypeScript", "Kotlin", "Java"].map(t => (
                     <span key={t} className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300 border border-neutral-700">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm text-emerald-500 mb-2 font-mono">Frontend</div>
                 <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Tailwind", "Framer Motion"].map(t => (
                     <span key={t} className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300 border border-neutral-700">{t}</span>
                  ))}
                </div>
              </div>
               <div>
                <div className="text-sm text-emerald-500 mb-2 font-mono">Infrastructure</div>
                 <div className="flex flex-wrap gap-2">
                  {["AWS", "Docker", "PostgreSQL", "Redis"].map(t => (
                     <span key={t} className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300 border border-neutral-700">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>

          {/* BLOCK 3: Github Stats / Activity */}
          <BentoCard title="Commit Activity" className="flex items-center justify-center">
             <div className="text-center">
                <div className="text-4xl font-bold text-white">1,200+</div>
                <div className="text-xs text-neutral-500 mt-1">Contributions this year</div>
                <div className="mt-4 flex gap-1 justify-center opacity-50">
                   {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-8 bg-emerald-500 rounded-sm"></div>)}
                </div>
             </div>
          </BentoCard>

          {/* BLOCK 4: Education */}
          <BentoCard title="Education" className="flex flex-col justify-center">
             <div className="space-y-4">
                <div>
                   <div className="text-white font-bold">M.Sc. Informatics: ML</div>
                   <div className="text-xs text-neutral-500">University of Oslo</div>
                </div>
                 <div>
                   <div className="text-white font-bold">B.Sc. IT Systems</div>
                   <div className="text-xs text-neutral-500">Univ. of South-Eastern Norway</div>
                </div>
             </div>
          </BentoCard>

          {/* BLOCK 5: Previous Experience (Wide) */}
          <BentoCard colSpan="col-span-2" title="Previous Experience">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                <div>
                   <h3 className="text-white font-bold">App Developer</h3>
                   <p className="text-xs text-emerald-500 mb-2">Beining & Bogen AS • 2022-2025</p>
                   <p className="text-sm text-neutral-400">
                      Led full-lifecycle Android development using Kotlin & Jetpack Compose.
                      Built context-aware algorithms for personalized user experiences.
                   </p>
                </div>
                 <div>
                   <h3 className="text-white font-bold">Web Ops Specialist</h3>
                   <p className="text-xs text-emerald-500 mb-2">KS Privatist AS • 2020-2021</p>
                   <p className="text-sm text-neutral-400">
                      Technical bridge between business and dev. Optimized SEO and maintained 99.9% uptime.
                   </p>
                </div>
             </div>
          </BentoCard>

           {/* BLOCK 6: Socials */}
           <BentoCard colSpan="col-span-2" className="flex items-center justify-between px-10 bg-emerald-900/10 border-emerald-500/20">
              <span className="text-lg font-bold text-emerald-400">Let's build something extraordinary.</span>
              <div className="flex gap-6">
                <a href="https://github.com/wahidullahr" target="_blank" rel="noreferrer" className="hover:text-white text-neutral-400 transition-colors"><Github /></a>
                <a href="https://www.linkedin.com/in/wahid-rahmani" target="_blank" rel="noreferrer" className="hover:text-white text-neutral-400 transition-colors"><Linkedin /></a>
                <a href="mailto:wahidullah_rahmani@hotmail.com" className="hover:text-white text-neutral-400 transition-colors"><Mail /></a>
              </div>
          </BentoCard>

        </div>
        
        {/* Footer */}
        <footer className="pt-20 pb-10 text-center text-neutral-600 text-sm">
           <p>© 2025 Wahid Rahmani. Built with Next.js 16 & Tailwind.</p>
        </footer>

      </div>
    </div>
  );
}
