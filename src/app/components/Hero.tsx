import React from 'react';
import { motion } from 'motion/react';
import { Download, Layers } from 'lucide-react';

interface HeroProps {
  id: string;
}

export const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 bg-purple-900/30 border border-purple-800 rounded text-purple-400 text-sm font-medium tracking-wider">
            SOFTWARE DEVELOPER
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Olá. Eu sou a<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Rebeca Franco
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-400 font-light">
            Análise e Desenvolvimento de Sistemas • HTML • CSS • JavaScript • SQL • Python
          </h2>

          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            Estudante de Análise e Desenvolvimento de Sistemas, com experiência sólida em atendimento ao cliente e liderança, atualmente em transição
            para a área de tecnologia, com foco atualmente em desenvolvimento full stack.
            Tenho forte interesse em aprender e estou sempre disposta para me dedicar em experiências e oportunidades.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://github.com/rebecafrancog/rebecafrancog/blob/f75ce10a3eac26026fe39f2d38b6754ad252c8b9/CURRICULUM%20-%20REBECA%20FRANCO%2026.pdf" download="Rebeca_Franco_CV.pdf">
              <button className="px-6 py-3 border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-purple-400 font-semibold rounded transition-all flex items-center gap-2">
                <Download size={20} />
                Download CV
              </button>
            </a>
          </div>
        </motion.div>

        {/* Right Content - Terminal Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-[#0c0c0c] border border-gray-800 rounded-xl p-6 shadow-2xl overflow-hidden group hover:border-purple-500/30 transition-colors duration-500">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-2 border-gray-700 shadow-lg">
                  <img 
                    src="https://photos.google.com/search/CgAiCBIGCgRyAgoAKKm3g6vJMw%3D%3D/photo/AF1QipO6gnFRc7qZJXr1v3nD5qnkcficC4Q3Yrupck4u"
                    alt="Rebeca Franco" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative dots around image */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-500 rounded-full animate-pulse delay-700" />
              </div>

              {/* Terminal Text */}
              <div className="font-mono text-sm md:text-base space-y-4 flex-1">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-green-400">➜</span>
                    <span>~</span>
                    <span className="text-gray-400">$ whoami</span>
                  </div>
                  <div className="text-purple-300 pl-6">
                    rebeca-franco
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-green-400">➜</span>
                    <span>~</span>
                    <span className="text-gray-400">$ current-role</span>
                  </div>
                  <div className="text-yellow-300 pl-6">
                    "Student / Dev"
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-green-400">➜</span>
                    <span>~</span>
                    <span className="text-gray-400">$ skills</span>
                  </div>
                  <div className="text-white pl-6 flex flex-wrap gap-2">
                    <span className="text-orange-400">HTML</span>
                    <span className="text-purple-400">CSS</span>
                    <span className="text-yellow-400">JS</span>
                    <span className="text-blue-400">SQL</span>
                    <span className="text-green-400">Python</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Back decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 transform rotate-3 scale-105 rounded-xl opacity-20 -z-10 blur-sm" />
        </motion.div>
      </div>
    </section>
  );
};
