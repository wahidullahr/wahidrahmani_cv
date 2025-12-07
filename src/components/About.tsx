export const About = () => {

  return (

    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">

      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[var(--color-background)]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">

        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>

      </div>

      

      <div className="text-slate-400 leading-relaxed space-y-4 max-w-xl">

        <p>

          I exist at the intersection of <span className="text-emerald-300 font-medium">Deep Tech</span> and <span className="text-emerald-300 font-medium">Product Design</span>. 

          While many engineers stay in one lane, I've spent the last few years bridging the gap between complex 

          <span className="text-slate-200"> AI/ML algorithms</span> and fluid, human-centric user interfaces.

        </p>



        <p>

          My journey started in the weeds of <span className="text-slate-200">Informatics and Machine Learning</span> (M.Sc.), where I analyzed 

          user sentiment and evaluated complex data structures. But I realized that the best algorithm in the world is useless 

          if the deployment is clunky. That pushed me into <span className="text-slate-200">Full Stack Engineering</span>.

        </p>



        <p>

          Today, I build scalable, production-grade applications. Whether it's architecting robust backends with 

          <span className="text-emerald-300 font-medium"> Python & Node.js</span> or crafting pixel-perfect mobile experiences with 

          <span className="text-emerald-300 font-medium"> Kotlin & React</span>, I focus on performance, type safety, and maintainability.

        </p>



        <p>

          When I'm not pushing code, I'm usually refining my <span className="text-slate-200">Vim configuration</span>, reading about distributed systems, 

          or exploring the Norwegian outdoors.

        </p>

      </div>

    </section>

  );

};

