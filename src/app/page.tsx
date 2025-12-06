import { ExperienceCard } from "@/components/ExperienceCard";

import { Github, Linkedin, Mail } from "lucide-react"; // Icons

export default function Home() {

  return (

    <div className="lg:flex lg:justify-between lg:gap-4">

      {/* Left Side: Fixed Header (Sticky) */}

      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">

        <div>

          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">

            [Your Name]

          </h1>

          <h2 className="mt-3 text-lg font-medium tracking-tight text-text-primary sm:text-xl">

            Software Engineer

          </h2>

          <p className="mt-4 max-w-xs leading-normal text-text-secondary">

            I build pixel-perfect, accessible, and performant web experiences.

          </p>

          

          {/* Simple Nav for Jump Links (Optional but nice) */}

          <nav className="nav hidden lg:block mt-16">

             {/* Add navigation links here if needed */}

          </nav>

        </div>

        

        {/* Social Links */}

        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">

          <li className="mr-5 text-xs">

            <a href="#" className="block hover:text-text-primary transition-colors">

              <Github className="h-6 w-6" />

            </a>

          </li>

          <li className="mr-5 text-xs">

            <a href="#" className="block hover:text-text-primary transition-colors">

              <Linkedin className="h-6 w-6" />

            </a>

          </li>

          <li className="mr-5 text-xs">

             <a href="mailto:email@example.com" className="block hover:text-text-primary transition-colors">

              <Mail className="h-6 w-6" />

            </a>

          </li>

        </ul>

      </header>

      {/* Right Side: Scrollable Content */}

      <main className="pt-24 lg:w-1/2 lg:py-24">

        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">

            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">

              <h2 className="text-sm font-bold uppercase tracking-widest text-text-primary lg:sr-only">About</h2>

            </div>

            <p className="text-text-secondary leading-relaxed">

              Back in 2018, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding. Fast-forward to today, and I've had the privilege of building software for an <span className="text-primary font-medium">advertising agency</span>, a <span className="text-primary font-medium">start-up</span>, and a <span className="text-primary font-medium">huge corporation</span>.

            </p>

        </section>

        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">

           <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">

              <h2 className="text-sm font-bold uppercase tracking-widest text-text-primary lg:sr-only">Experience</h2>

            </div>

            <div className="group/list">

                {/* THIS IS WHERE YOU WIN OR LOSE. 

                  USE THE XYZ FORMULA: "Accomplished [X] as measured by [Y], by doing [Z]"

                */}

                <ExperienceCard 

                  date="2022 — Present"

                  title="Senior Frontend Engineer"

                  company="TechCorp"

                  description="Spearheaded the migration of a legacy jQuery monolith to Next.js 14, reducing page load times by 40% and improving SEO rankings. Engineered a reusable component library used by 3 separate squads, decreasing development velocity by 20%."

                  skills={["React", "Next.js", "TypeScript", "AWS"]}

                />

                 <ExperienceCard 

                  date="2020 — 2022"

                  title="Software Developer"

                  company="StartUp Inc"

                  description="Developed and maintained critical microservices processing 10k+ requests per minute. Implemented automated testing pipelines (CI/CD) that reduced deployment crashes by 95%."

                  skills={["Node.js", "PostgreSQL", "Docker", "Redis"]}

                />

            </div>

        </section>

      </main>

    </div>

  );

}
