"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Github, ExternalLink, Folder } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  images: string[]; // For now we will assume these are URLs, or we can render divs if empty
}

export const ProjectCard = ({ title, description, tags, links, images }: ProjectProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentImage((prev) => {
        let nextIndex = prev + newDirection;
        if (nextIndex < 0) nextIndex = images.length - 1;
        if (nextIndex >= images.length) nextIndex = 0;
        return nextIndex;
    });
  };

  return (
    <div className="group/project flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/20 transition-colors">
      
      {/* Image Carousel */}
      <div className="relative h-48 w-full overflow-hidden bg-background border-b border-border group">
        <AnimatePresence initial={false} custom={direction}>
            <motion.div
                key={currentImage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 flex items-center justify-center bg-secondary"
            >
                {/* Fallback if image string is empty or placeholder */}
                {images[currentImage].startsWith("http") ? (
                   // eslint-disable-next-line @next/next/no-img-element
                   <img src={images[currentImage]} alt={`${title} screenshot ${currentImage + 1}`} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                ) : (
                   <div className="flex flex-col items-center text-text-secondary gap-2">
                      <Folder size={32} />
                      <span className="text-xs font-mono">Image {currentImage + 1}</span>
                   </div>
                )}
            </motion.div>
        </AnimatePresence>

        {/* Controls (Visible on hover) */}
        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <button 
                onClick={(e) => { e.stopPropagation(); paginate(-1); }}
                className="p-1.5 rounded-full bg-black/50 text-white/70 hover:bg-black/80 hover:text-white transition-colors backdrop-blur-sm"
            >
                <ChevronLeft size={16} />
            </button>
            <button 
                onClick={(e) => { e.stopPropagation(); paginate(1); }}
                className="p-1.5 rounded-full bg-black/50 text-white/70 hover:bg-black/80 hover:text-white transition-colors backdrop-blur-sm"
            >
                <ChevronRight size={16} />
            </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
            {images.map((_, idx) => (
                <div 
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImage ? "w-4 bg-emerald-500" : "w-1.5 bg-white/50"}`}
                />
            ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col">
        <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-bold text-card-foreground group-hover/project:text-primary transition-colors">{title}</h3>
            <div className="flex gap-2">
                {links.github && (
                    <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-foreground transition-colors">
                        <Github size={18} />
                    </a>
                )}
                {links.demo && (
                    <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-foreground transition-colors">
                        <ExternalLink size={18} />
                    </a>
                )}
            </div>
        </div>
        
        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">
            {description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
            {tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-primary/5 text-text-secondary border border-border">
                    {tag}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};

