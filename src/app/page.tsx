import { BentoCard } from "@/components/BentoCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Github, Linkedin, Mail, ArrowUpRight, Code2, Database, Terminal, Cpu, Trophy, Rocket, TrendingUp } from "lucide-react";
import { NeuralNetwork3D } from "@/components/NeuralNetwork3D";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 font-sans selection:bg-primary/20 relative overflow-hidden transition-colors duration-300">
      {/* 3D Background Layer */}
      <NeuralNetwork3D className="absolute top-0 left-0 w-full h-[60vh] z-0 opacity-20 pointer-events-none" />
      
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header: Personal Info & Summary */}
        <header className="py-12 md:py-24">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-foreground mb-6">
            Wahid Rahmani<span className="text-primary">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl leading-relaxed">
            Software Engineer & <span className="text-primary">AI/ML Specialist</span>. 
            Bridging the gap between complex AI algorithms and user-friendly applications in fast-paced Agile environments.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-text-secondary font-mono">
             <span>📍 Bærum, Norway</span>
             <span>•</span>
             <span>Fluent in Norwegian, English, Hindi, Persian, Pashto</span>
          </div>
        </header>

        {/* The Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* BLOCK 1: Current Focus (Xala Technologies) */}
          <BentoCard colSpan="col-span-2" className="md:row-span-2 bg-gradient-to-b from-card to-card/50" title="Current Focus">
             <div className="flex flex-col justify-between h-full">
                <div className="space-y-5">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold text-card-foreground">Xala Technologies AS</h2>
                        <span className="text-text-secondary text-sm font-medium mt-1">Software Developer</span>
                    </div>
                    <span className="text-xs font-mono text-primary border border-primary/30 px-2 py-1 rounded">Apr 2025 – Present</span>
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Architecting scalable web solutions with a focus on data-intensive applications. 
                    Leveraging <strong className="text-foreground">React, TypeScript, and Python</strong> to build stable, high-performance systems.
                  </p>
                  
                  <ul className="text-sm text-text-secondary space-y-3">
                    <li className="flex gap-3 items-start">
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                        <span className="leading-relaxed">Engineered responsive UIs using <strong className="text-foreground">React & TypeScript</strong>, reducing render times and improving type safety.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                        <span className="leading-relaxed">Optimized <strong className="text-foreground">SQL</strong> database schemas and <strong className="text-foreground">Python</strong> pipelines for large-scale AI data preprocessing.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                        <span className="leading-relaxed">Refined <strong className="text-foreground">JavaScript</strong> workflows and resolved complex production bottlenecks to ensure 99.9% platform stability.</span>
                    </li>
                  </ul>
                </div>
                
                {/* CTA Buttons */}
                <div className="mt-8 flex gap-3">
                  <a href="/cv.pdf" className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-lg font-bold hover:bg-primary hover:text-white transition-colors text-sm">
                    Download CV <ArrowUpRight size={16} />
                  </a>
                  <a href="mailto:wahidullah_rahmani@hotmail.com" className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-2.5 rounded-lg font-bold hover:bg-secondary/80 transition-colors border border-border text-sm">
                    Get in Touch
                  </a>
                </div>
             </div>
          </BentoCard>

          {/* BLOCK 2: Tech Stack (Skills from Resume) */}
          <BentoCard className="md:row-span-2" title="Tech Stack">
            <div className="space-y-6">
              <div>
                <div className="text-sm text-primary mb-2 font-mono flex items-center gap-2"><Terminal size={14}/> Languages</div>
                <div className="flex flex-wrap gap-2">
                  {["Kotlin", "Python", "TypeScript", "SQL", "JS (ES6+)"].map(t => (
                     <span key={t} className="px-2 py-1 bg-secondary rounded text-xs text-text-secondary border border-border">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm text-primary mb-2 font-mono flex items-center gap-2"><Cpu size={14}/> AI & ML</div>
                 <div className="flex flex-wrap gap-2">
                  {["Scikit-learn", "Pandas", "NumPy", "Predictive Modeling"].map(t => (
                     <span key={t} className="px-2 py-1 bg-secondary rounded text-xs text-text-secondary border border-border">{t}</span>
                  ))}
                </div>
              </div>
               <div>
                <div className="text-sm text-primary mb-2 font-mono flex items-center gap-2"><Database size={14}/> Frameworks & Ops</div>
                 <div className="flex flex-wrap gap-2">
                  {["React.js", "Jetpack Compose", "Docker", "Jenkins", "Git"].map(t => (
                     <span key={t} className="px-2 py-1 bg-secondary rounded text-xs text-text-secondary border border-border">{t}</span>
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
                   <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover/item:bg-primary/20 transition-colors mt-0.5">
                      <Trophy size={16} />
                   </div>
                   <div>
                      <h4 className="text-card-foreground text-sm font-bold">M.Sc. Specialized in ML</h4>
                      <p className="text-xs text-text-secondary mt-1">University of Oslo</p>
                   </div>
                </div>

                {/* Achievement 2 */}
                <div className="flex items-start gap-3 group/item">
                   <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 group-hover/item:bg-blue-500/20 transition-colors mt-0.5">
                      <Rocket size={16} />
                   </div>
                   <div>
                      <h4 className="text-card-foreground text-sm font-bold">Leading AI Initiatives</h4>
                      <p className="text-xs text-text-secondary mt-1">Xala Technologies</p>
                   </div>
                </div>

                {/* Achievement 3 */}
                <div className="flex items-start gap-3 group/item">
                   <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500 group-hover/item:bg-purple-500/20 transition-colors mt-0.5">
                      <TrendingUp size={16} />
                   </div>
                   <div>
                      <h4 className="text-card-foreground text-sm font-bold">99.9% Uptime Record</h4>
                      <p className="text-xs text-text-secondary mt-1">Critical Web Ops</p>
                   </div>
                </div>

             </div>
          </BentoCard>

          {/* BLOCK 4: Education (UiO & USN) */}
          <BentoCard title="Education" className="flex flex-col justify-center">
             <div className="space-y-6">
                <div>
                   <div className="text-card-foreground font-bold leading-tight">M.Sc. Informatics: ML</div>
                   <div className="text-xs text-text-secondary">University of Oslo • 2021-2024</div>
                   <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                     Thesis: Evaluating Likert Scales using Machine Learning (Sentiment Analysis).
                   </p>
                </div>
                 <div>
                   <div className="text-card-foreground font-bold leading-tight">B.Sc. IT & Info Systems</div>
                   <div className="text-xs text-text-secondary">Univ. of South-Eastern Norway • 2018-2021</div>
                    <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                     Thesis: Travel Method Detection App using real-time sensor data.
                   </p>
                </div>
             </div>
          </BentoCard>

          {/* BLOCK 5: Previous Experience (Full Width) */}
          <BentoCard colSpan="col-span-1" className="md:col-span-4" title="Previous Experience">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                
                 {/* Job 2: Beining & Bogen */}
                <div className="relative p-4 rounded-lg bg-card border border-border hover:border-primary/20 transition-colors group/job">
                   <div className="flex justify-between items-start mb-3">
                      <div>
                          <h3 className="text-card-foreground font-bold text-lg group-hover/job:text-primary transition-colors">App Developer</h3>
                          <div className="text-xs text-text-secondary font-mono mt-1">Beining & Bogen AS</div>
                      </div>
                      <span className="text-[10px] text-primary font-mono bg-primary/10 px-2 py-1 rounded">2022-2025</span>
                   </div>
                   <p className="text-sm text-text-secondary leading-relaxed">
                      Worked as an Android Developer building native apps with <strong className="text-foreground">Kotlin & Jetpack Compose</strong>. 
                      I utilized the extensive Jetpack library ecosystem to create modern, responsive user interfaces and implemented sensor-based features for better UX.
                   </p>
                </div>

                 {/* Job 3: KS Privatist */}
                <div className="relative p-4 rounded-lg bg-card border border-border hover:border-primary/20 transition-colors group/job">
                   <div className="flex justify-between items-start mb-3">
                      <div>
                          <h3 className="text-card-foreground font-bold text-lg group-hover/job:text-primary transition-colors">Website Manager & QA Lead</h3>
                          <div className="text-xs text-text-secondary font-mono mt-1">KS Privatist AS</div>
                      </div>
                      <span className="text-[10px] text-primary font-mono bg-primary/10 px-2 py-1 rounded">2020-2021</span>
                   </div>
                   <p className="text-sm text-text-secondary leading-relaxed">
                      Managed the company website and admin content. I worked directly with the engineering team to identify and report bugs, serving as the bridge between stakeholders and developers to ensure the platform ran smoothly.
                   </p>
                </div>
             </div>
          </BentoCard>

          {/* BLOCK 5.5: Projects Showcase */}
          <div className="col-span-1 md:col-span-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-6">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Project 1 */}
                  <ProjectCard 
                      title="AI Sentiment Analysis" 
                      description="A machine learning pipeline that analyzes customer feedback sentiment with 94% accuracy using BERT transformers."
                      tags={["Python", "PyTorch", "FastAPI", "React"]}
                      links={{ github: "https://github.com/wahidullahr", demo: "#" }}
                      images={[
                          "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
                          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                      ]}
                  />
                  
                  {/* Project 2 */}
                  <ProjectCard 
                      title="Real-time Travel Tracker" 
                      description="Android application utilizing GPS and accelerometer data to automatically detect and log travel methods."
                      tags={["Kotlin", "Android SDK", "Google Maps API", "Firebase"]}
                      links={{ github: "https://github.com/wahidullahr" }}
                      images={[
                          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
                          "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800"
                      ]}
                  />

                   {/* Project 3 */}
                   <ProjectCard 
                      title="Portfolio v4" 
                      description="A high-performance personal portfolio built with Next.js 14, featuring 3D visualizations and a custom bento grid layout."
                      tags={["Next.js", "TypeScript", "Tailwind", "Three.js"]}
                      links={{ github: "https://github.com/wahidullahr/portfolio" }}
                      images={[
                          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
                          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
                      ]}
                  />
              </div>
          </div>

           {/* BLOCK 6: Contact & Socials (Full Width) */}
           <BentoCard colSpan="col-span-1" className="md:col-span-4 relative overflow-hidden bg-card border-border p-0">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
              
              <div className="relative z-10 grid md:grid-cols-2 h-full">
                 
                 {/* Left: Call to Action */}
                 <div className="p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-primary/10 to-card">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                           <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                           </span>
                           <span className="text-xs font-mono text-primary uppercase tracking-wider">Open to Work</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-card-foreground tracking-tight mb-4">Let's build the future.</h3>
                        <p className="text-text-secondary leading-relaxed max-w-sm">
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
                              className="group flex items-center justify-center w-12 h-12 rounded-lg bg-background border border-border hover:bg-border hover:border-primary/50 hover:scale-105 transition-all duration-300"
                              aria-label={social.label}
                           >
                              <social.icon className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" />
                           </a>
                        ))}
                    </div>
                 </div>

                 {/* Right: Contact Form (Functional Mailto) */}
                 <div className="p-8 md:p-12 bg-card border-t md:border-t-0 md:border-l border-border">
                    <form 
                        action="mailto:wahidullah_rahmani@hotmail.com" 
                        method="post" 
                        encType="text/plain"
                        className="space-y-4"
                    >
                        <div>
                            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-input border border-input rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-input border border-input rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Message</label>
                            <textarea id="message" name="message" rows={3} className="w-full bg-input border border-input rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Hello! I'd like to discuss..." required></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group">
                            Send Message
                            <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </form>
                 </div>

              </div>
           </BentoCard>

        </div>
        
        {/* Footer */}
        <footer className="pt-20 pb-10 text-center text-text-secondary text-sm">
           <p>© 2025 Wahid Rahmani. Built with Next.js 14, Tailwind & Three.js.</p>
        </footer>

      </div>
    </div>
  );
}
