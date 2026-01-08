import React from 'react';
import { motion } from 'motion/react';
import { Database, Code, Award, Terminal } from 'lucide-react';

interface SkillsProps {
  id: string;
}

export const Skills: React.FC<SkillsProps> = ({ id }) => {
  const skillCategories = [
    {
      title: "Tech Stack",
      icon: <Code className="text-pink-400" size={32} />,
      skills: ["HTML", "CSS", "JavaScript", "SQL", "Python"]
    },
    {
      title: "Soft Skills",
      icon: <Award className="text-yellow-400" size={32} />,
      skills: ["Liderança", "Gestão de Pessoas", "Atendimento ao Cliente", "Comunicação", "Empatia", "Proativa", "Trabalho em Equipe"]
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="text-purple-400" size={32} />,
      skills: ["Pacote Office", "Inglês Básico"]
    },
    {
      title: "Certificações",
      icon: <Database className="text-blue-400" size={32} />,
      skills: ["Liderança e Gestão (Udemy)", "Banco de Dados e SQL (Udemy)", "Atendimento (SECITEC)", "Assistente Admin (SECITEC)"]
    }
  ];

  return (
    <section id={id} className="py-20 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Cursos e <span className="text-purple-400">Habilidades</span></h2>
        <p className="text-gray-400">Minhas competências técnicas e comportamentais</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#0c0c0c] border border-gray-800 p-6 rounded-xl hover:border-purple-500/50 transition-colors group"
          >
            <div className="mb-4 p-3 bg-gray-900 rounded-lg inline-block group-hover:bg-gray-800 transition-colors">
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded-full border border-gray-800 hover:border-purple-500/30 hover:bg-purple-950/30 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
