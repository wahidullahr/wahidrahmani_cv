"use client";

import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { BentoCard } from "@/components/BentoCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Github, Linkedin, Mail, Database, Terminal, Cpu, Trophy, Rocket, TrendingUp, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";

// Lazy load 3D components to reduce initial bundle size
const NeuralNetwork3D = dynamic(
  () => import("@/components/NeuralNetwork3D").then((mod) => ({ default: mod.NeuralNetwork3D })),
  { 
    ssr: false,
    loading: () => <div className="absolute top-0 left-0 w-full h-[60vh] z-0" />
  }
);

const NeuralNetwork3DDark = dynamic(
  () => import("@/components/NeuralNetwork3D.dark").then((mod) => ({ default: mod.NeuralNetwork3DDark })),
  { 
    ssr: false,
    loading: () => <div className="absolute top-0 left-0 w-full h-[60vh] z-0" />
  }
);

export default function Home() {
  const t = useTranslations();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 font-sans selection:bg-primary/20 relative overflow-hidden transition-colors duration-300">
      {/* 3D Background Layer with Fade - Separate components for light/dark */}
      {isDark ? (
        <NeuralNetwork3DDark className="absolute top-0 left-0 w-full h-[60vh] z-0 opacity-25 pointer-events-none mix-blend-screen" />
      ) : (
        <NeuralNetwork3D className="absolute top-0 left-0 w-full h-[60vh] z-0 opacity-20 pointer-events-none mix-blend-multiply" />
      )}
      
      {/* Theme Toggle & Language Switcher - Fixed position */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header: Personal Info & Summary */}
        <header className="py-12 md:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6">
            {t('header.title')}<span className="text-primary">.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-3xl leading-relaxed mb-6">
            {t('header.subtitle')}. {t('header.description')}
          </p>
          
          {/* Key Skills Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "TypeScript", "Python", "Kotlin", "Next.js"].map((skill, index) => {
               // Professional Teal-based Palette for Light Mode
               const lightGradients = [
                "bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100 hover:border-teal-300",
                "bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100 hover:border-cyan-300",
                "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300",
                "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100 hover:border-indigo-300",
                "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300",
              ];
              
              return (
                <span 
                  key={skill}
                  className={`
                    px-3 py-1.5 text-xs font-semibold rounded-full border transition-all shadow-sm hover:shadow-md
                    ${lightGradients[index % lightGradients.length]}
                    dark:bg-primary/10 dark:text-primary dark:border-primary/20 dark:hover:bg-primary/20
                  `}
                >
                  {skill}
                </span>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-text-secondary font-mono">
             <span>{t('header.location')}</span>
             <span className="hidden md:inline">•</span>
             <span className="w-full md:w-auto">{t('header.languages')}</span>
          </div>
        </header>

        {/* The Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* BLOCK 1: Current Focus (Xala Technologies) */}
          <BentoCard colSpan="col-span-2" className="md:row-span-2 bg-gradient-to-b from-card to-card/50" title={t('currentFocus.title')}>
             <div className="flex flex-col justify-between h-full">
                <div className="space-y-5">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold text-card-foreground">{t('currentFocus.company')}</h2>
                        <span className="text-text-secondary text-sm font-medium mt-1">{t('currentFocus.role')}</span>
                    </div>
                    <span className="text-xs font-mono text-primary border border-primary/30 px-2 py-1 rounded">{t('currentFocus.date')}</span>
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {t('currentFocus.description')}
                  </p>
                  
                  <ul className="text-sm text-text-secondary space-y-3">
                    <li className="flex gap-3 items-start">
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                        <span className="leading-relaxed">{t('currentFocus.achievement1')}</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                        <span className="leading-relaxed">{t('currentFocus.achievement2')}</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                        <span className="leading-relaxed">{t('currentFocus.achievement3')}</span>
                    </li>
                  </ul>
                </div>
                
                {/* CTA Buttons */}
                <div className="mt-8 flex gap-3">
                  <a href="/cv.pdf" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-white px-5 py-2.5 rounded-lg font-bold hover:from-pink-600 hover:via-violet-600 hover:to-blue-600 hover:shadow-lg transition-all text-sm shadow-md dark:bg-primary dark:bg-none dark:hover:bg-primary/90">
                    {t('currentFocus.downloadCV')} <ArrowUpRight size={16} />
                  </a>
                  <a href="mailto:wahidullah_rahmani@hotmail.com" className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-2.5 rounded-lg font-bold hover:bg-secondary/80 transition-colors border border-border text-sm">
                    {t('currentFocus.getInTouch')}
                  </a>
                </div>
             </div>
          </BentoCard>

          {/* BLOCK 2: Tech Stack (Skills from Resume) */}
          <BentoCard className="md:row-span-2" title={t('techStack.title')}>
            <div className="space-y-6">
              <div>
                <div className="text-sm text-primary mb-2 font-mono flex items-center gap-2"><Terminal size={14}/> {t('techStack.languages')}</div>
                <div className="flex flex-wrap gap-2">
                  {["Kotlin", "Python", "TypeScript", "SQL", "JS (ES6+)"].map(t => (
                     <span key={t} className="px-2 py-1 bg-secondary rounded text-xs text-text-secondary border border-border">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm text-primary mb-2 font-mono flex items-center gap-2"><Cpu size={14}/> {t('techStack.aiMl')}</div>
                 <div className="flex flex-wrap gap-2">
                  {["Scikit-learn", "Pandas", "NumPy", "Predictive Modeling"].map(t => (
                     <span key={t} className="px-2 py-1 bg-secondary rounded text-xs text-text-secondary border border-border">{t}</span>
                  ))}
                </div>
              </div>
               <div>
                <div className="text-sm text-primary mb-2 font-mono flex items-center gap-2"><Database size={14}/> {t('techStack.frameworksOps')}</div>
                 <div className="flex flex-wrap gap-2">
                  {["React.js", "Jetpack Compose", "Docker", "Jenkins", "Git"].map(t => (
                     <span key={t} className="px-2 py-1 bg-secondary rounded text-xs text-text-secondary border border-border">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>

          {/* BLOCK 3: Achievements */}
          <BentoCard title={t('achievements.title')} className="min-h-[240px] flex flex-col justify-center">
             <div className="space-y-4">
                
                {/* Achievement 1 */}
                <div className="flex items-start gap-3 group/item">
                   <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover/item:bg-primary/20 transition-colors mt-0.5">
                      <Trophy size={16} />
                   </div>
                   <div>
                      <h4 className="text-card-foreground text-sm font-bold">{t('achievements.msc')}</h4>
                      <p className="text-xs text-text-secondary mt-1">{t('achievements.mscLocation')}</p>
                   </div>
                </div>

                {/* Achievement 2 */}
                <div className="flex items-start gap-3 group/item">
                   <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 group-hover/item:bg-blue-500/20 transition-colors mt-0.5">
                      <Rocket size={16} />
                   </div>
                   <div>
                      <h4 className="text-card-foreground text-sm font-bold">{t('achievements.leadingAI')}</h4>
                      <p className="text-xs text-text-secondary mt-1">{t('achievements.leadingAILocation')}</p>
                   </div>
                </div>

                {/* Achievement 3 */}
                <div className="flex items-start gap-3 group/item">
                   <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500 group-hover/item:bg-purple-500/20 transition-colors mt-0.5">
                      <TrendingUp size={16} />
                   </div>
                   <div>
                      <h4 className="text-card-foreground text-sm font-bold">{t('achievements.uptime')}</h4>
                      <p className="text-xs text-text-secondary mt-1">{t('achievements.uptimeLocation')}</p>
                   </div>
                </div>

             </div>
          </BentoCard>

          {/* BLOCK 4: Education (UiO & USN) */}
          <BentoCard title={t('education.title')} className="flex flex-col justify-center">
             <div className="space-y-6">
                <div>
                   <div className="text-card-foreground font-bold leading-tight">{t('education.msc')}</div>
                   <div className="text-xs text-text-secondary">{t('education.mscDate')}</div>
                   <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                     {t('education.mscThesis')}
                   </p>
                </div>
                 <div>
                   <div className="text-card-foreground font-bold leading-tight">{t('education.bsc')}</div>
                   <div className="text-xs text-text-secondary">{t('education.bscDate')}</div>
                    <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                     {t('education.bscThesis')}
                   </p>
                </div>
             </div>
          </BentoCard>
        </div>

        {/* FULL WIDTH SECTIONS (Outside the Main Grid for better mobile flow) */}
        <div className="max-w-7xl mx-auto space-y-6">

          {/* BLOCK 5: Previous Experience (Full Width) */}
          <BentoCard colSpan="col-span-1" className="md:col-span-4" title={t('previousExperience.title')}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                
                 {/* Job 2: Beining & Bogen */}
                <div className="relative p-4 rounded-lg bg-card border border-border hover:border-primary/20 transition-colors group/job">
                   <div className="flex justify-between items-start mb-3">
                      <div>
                          <h3 className="text-card-foreground font-bold text-lg group-hover/job:text-primary transition-colors">{t('previousExperience.beiningTitle')}</h3>
                          <div className="text-xs text-text-secondary font-mono mt-1">{t('previousExperience.beiningCompany')}</div>
                      </div>
                      <span className="text-[10px] text-primary font-mono bg-primary/10 px-2 py-1 rounded">{t('previousExperience.beiningDate')}</span>
                   </div>
                   <p className="text-sm text-text-secondary leading-relaxed">
                      {t('previousExperience.beiningDescription')}
                   </p>
                </div>

                 {/* Job 3: KS Privatist */}
                <div className="relative p-4 rounded-lg bg-card border border-border hover:border-primary/20 transition-colors group/job">
                   <div className="flex justify-between items-start mb-3">
                      <div>
                          <h3 className="text-card-foreground font-bold text-lg group-hover/job:text-primary transition-colors">{t('previousExperience.ksTitle')}</h3>
                          <div className="text-xs text-text-secondary font-mono mt-1">{t('previousExperience.ksCompany')}</div>
                      </div>
                      <span className="text-[10px] text-primary font-mono bg-primary/10 px-2 py-1 rounded">{t('previousExperience.ksDate')}</span>
                   </div>
                   <p className="text-sm text-text-secondary leading-relaxed">
                      {t('previousExperience.ksDescription')}
                   </p>
                </div>
             </div>
          </BentoCard>

          {/* BLOCK 5.5: Projects Showcase (Clean Grid) */}
          <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-4">
                 <h2 className="text-xs font-bold uppercase tracking-widest text-text-secondary">{t('projects.title')}</h2>
                 <div className="h-px bg-border flex-1"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Project 1 */}
                  <ProjectCard 
                      title={t('projects.sentimentTitle')} 
                      description={t('projects.sentimentDescription')}
                      tags={["Python", "PyTorch", "FastAPI", "React"]}
                      links={{ github: "https://github.com/wahidullahr", demo: "#" }}
                      images={[
                          "/images/projects/ai-sentiment-analysis/screenshot-1.jpg",
                          "/images/projects/ai-sentiment-analysis/screenshot-2.jpg"
                      ]}
                  />
                  
                  {/* Project 2 */}
                  <ProjectCard 
                      title={t('projects.travelTitle')} 
                      description={t('projects.travelDescription')}
                      tags={["Kotlin", "Android SDK", "Google Maps API", "Firebase"]}
                      links={{ github: "https://github.com/wahidullahr" }}
                      images={[
                          "/images/projects/travel-tracker/screenshot-1.jpg",
                          "/images/projects/travel-tracker/screenshot-2.jpg"
                      ]}
                  />

                   {/* Project 3 */}
                   <ProjectCard 
                      title={t('projects.portfolioTitle')} 
                      description={t('projects.portfolioDescription')}
                      tags={["Next.js", "TypeScript", "Tailwind", "Three.js"]}
                      links={{ github: "https://github.com/wahidullahr/portfolio" }}
                      images={[
                          "/images/projects/portfolio-v4/screenshot-1.jpg",
                          "/images/projects/portfolio-v4/screenshot-2.jpg"
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
                           <span className="text-xs font-mono text-primary uppercase tracking-wider">{t('contact.openToWork')}</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-card-foreground tracking-tight mb-4">{t('contact.title')}</h3>
                        <p className="text-text-secondary leading-relaxed max-w-sm">
                           {t('contact.description')}
                        </p>
                    </div>

                    <div className="flex gap-4 mt-8">
                        {[
                           { icon: Linkedin, href: "https://www.linkedin.com/in/wahid-rahmani-91015bb7/", label: "LinkedIn" },
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

                 {/* Right: Contact Form */}
                 <div className="p-8 md:p-12 bg-card border-t md:border-t-0 md:border-l border-border">
                    <ContactForm />
                 </div>

              </div>
           </BentoCard>

        </div>
        
        {/* Footer */}
        <footer className="pt-20 pb-10 text-center text-text-secondary text-sm">
           <p>{t('footer.text')}</p>
        </footer>

      </div>
    </div>
  );
}
