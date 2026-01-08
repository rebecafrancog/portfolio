import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

interface AboutProps {
  id: string;
}

export const About: React.FC<AboutProps> = ({ id }) => {
  const experiences = [
    {
      role: "Líder de Recepção",
      company: "Hotel Village Premium - João Pessoa",
      period: "Set-2024 - Presente",
      description: "Realizo o trabalho de supervisão e orientação para com a minha equipe/setor, com o objetivo de promover uma ótima experiência na hospedagem do cliente, fazendo com que o próprio sinta-se acolhido e bem atendido."
    },
    {
      role: "Recepcionista",
      company: "Hotel Village Premium - João Pessoa",
      period: "Mar-2022 - Set-2024",
      description: "Realizei atendimentos com cordialidade e empatia, proporcionando melhor experiência para os hóspedes, orientando sobre serviços, tirando dúvidas e indicando pontos turísticos."
    },
    {
      role: "Projeto Voluntário",
      company: "Projeto Família Acolhedora - Prefeitura de João Pessoa",
      period: "Ago-2015 - Presente",
      description: "Realizo apoio no acolhimento de crianças e adolescentes em situações de risco. Os acolhimentos são realizados em casa, onde convivem com minha família até decisão judicial."
    },
    {
      role: "Cobradora de Transporte (Jovem Aprendiz)",
      company: "Empresa Navegantes",
      period: "Jul-2016 - Set-2016",
      description: "Atendimento ao público no geral, tirando dúvidas sobre rotas e cobrança de passagens. Foi meu primeiro emprego."
    }
  ];

  const education = [
    {
      degree: "Análise e Desenvolvimento de Sistemas",
      school: "UNINASSAU João Pessoa",
      period: "Fev 2025 - Dez 2026 (Cursando)"
    },
    {
      degree: "Psicologia",
      school: "Faculdade Internacional da Paraíba - FPB",
      period: "2014 - 2018"
    },
    {
      degree: "Ensino Médio Completo",
      school: "E.E.E.F.M Prof Luiz Gonzaga Albuquerque Burity",
      period: "Concluído em 2014"
    }
  ];

  return (
    <section id={id} className="py-20 bg-black">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Sobre<span className="text-purple-400">Mim</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sempre em busca de uma oportunidade para me dedicar e aberta para novos aprendizados e experiências. 
            Busco contribuir com meu empenho para o crescimento da organização enquanto desenvolvo meus talentos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-purple-400" size={24} />
              <h3 className="text-2xl font-semibold">Experiência</h3>
            </div>
            
            <div className="space-y-8 pl-4 border-l border-gray-800">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 bg-purple-500 rounded-full border-4 border-black" />
                  <h4 className="text-lg font-bold text-white leading-tight">{exp.role}</h4>
                  <div className="text-purple-400 text-sm mb-1 mt-1">{exp.company}</div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-pink-400" size={24} />
              <h3 className="text-2xl font-semibold">Educação</h3>
            </div>
            
            <div className="space-y-8 pl-4 border-l border-gray-800">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 bg-pink-500 rounded-full border-4 border-black" />
                  <h4 className="text-lg font-bold text-white leading-tight">{edu.degree}</h4>
                  <div className="text-pink-400 text-sm mb-1 mt-1">{edu.school}</div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                    <Calendar size={12} />
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
