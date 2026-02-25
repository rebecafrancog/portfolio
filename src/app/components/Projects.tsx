import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  id: string;
}

export const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const projects = [
    {
      title: "Meu Treino Ideal",
      description: "Plataforma desenvolvida para construir planos de treino personalizados.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "https://media.licdn.com/dms/image/v2/D4D2DAQHNE05i7KWDyQ/profile-treasury-image-shrink_1280_1280/B4DZrGNRxoGgAQ-/0/1764261961798?e=1772640000&v=beta&t=BDob_71vBqWehQn3HOLmNqfrVzXdWe9w6xT0IyyluA8",
      demoLink: "https://meu-treino-ideal-chi.vercel.app/",
      codeLink: "https://github.com/rebecafrancog/meu_treino_ideal.git"
    },
  ];

  return (
    <section id={id} className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos e <span className="text-purple-400">Ideias</span></h2>
        <p className="text-gray-400">Projetos, trabalhos ou ideias realizadas e/ou que estão em construção.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#0c0c0c] rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all group"
          >
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={project.codeLink} className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.demoLink} className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-gray-900 text-purple-200 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
