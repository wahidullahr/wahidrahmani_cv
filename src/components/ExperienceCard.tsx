"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExperienceProps {
  date: string;
  title: string;
  company: string;
  description: string; // This must be the XYZ format
  skills: string[];
  link?: string;
}

export const ExperienceCard = ({ date, title, company, description, skills, link }: ExperienceProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      // Group:hover allows interaction on the whole card
      className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
    >
      {/* The Hover Effect Background - This is critical */}
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      
      {/* Date Column: Sticky on mobile, left on desktop */}
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-secondary sm:col-span-2">
        {date}
      </header>
      
      {/* Content Column */}
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-foreground">
          <div>
            {link ? (
              <a 
                className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link transition-colors" 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-primary group-hover:text-primary transition-colors">
                  {title} · {company}
                </span>
              </a>
            ) : (
              <span className="text-primary group-hover:text-primary transition-colors">
                {title} · {company}
              </span>
            )}
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal text-text-secondary">
          {description}
        </p>
        {/* Badges: Make them smaller and more subtle */}
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {skills.map((skill) => (
            <li key={skill} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                {skill}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
