"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface ExperienceProps {

  date: string;

  title: string;

  company: string;

  description: string; // This must be the XYZ format

  skills: string[];

}

export const ExperienceCard = ({ date, title, company, description, skills }: ExperienceProps) => {

  return (

    <motion.div 

      initial={{ opacity: 0, y: 20 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true }}

      transition={{ duration: 0.5 }}

      // Group:hover allows interaction on the whole card

      className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"

    >

      {/* Date Column: Sticky on mobile, left on desktop */}

      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-secondary sm:col-span-2">

        {date}

      </header>

      

      {/* Content Column */}

      <div className="z-10 sm:col-span-6">

        <h3 className="font-medium leading-snug text-text-primary">

          <div>

            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block lg:group-hover:bg-surface/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg motion-reduce:transition-none"></span>

            <span className="text-primary group-hover:text-emerald-300 transition-colors">

              {title} · {company}

            </span>

          </div>

        </h3>

        <p className="mt-2 text-sm leading-normal text-text-secondary">

          {description}

        </p>

        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">

          {skills.map((skill) => (

            <li key={skill} className="mr-1.5 mt-2">

              <div className="flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium leading-5 text-emerald-300">

                {skill}

              </div>

            </li>

          ))}

        </ul>

      </div>

    </motion.div>

  );

};

