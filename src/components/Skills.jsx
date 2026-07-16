import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  const skills = [
    {
      id: 1,
      name: 'HTML',
      icon: FaHtml5,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20',
    },
    {
      id: 2,
      name: 'CSS',
      icon: FaCss3Alt,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    },
    {
      id: 3,
      name: 'JavaScript',
      icon: FaJsSquare,
      color: 'from-yellow-300 to-yellow-600',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/20',
    },
    {
      id: 4,
      name: 'React',
      icon: FaReact,
      color: 'from-cyan-400 to-blue-600',
      bgColor: 'bg-cyan-100 dark:bg-cyan-900/20',
    },
    {
      id: 5,
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: 'from-cyan-500 to-teal-600',
      bgColor: 'bg-cyan-100 dark:bg-cyan-900/20',
    },
    {
      id: 6,
      name: 'Git',
      icon: FaGitAlt,
      color: 'from-red-500 to-orange-600',
      bgColor: 'bg-red-100 dark:bg-red-900/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-indigo-100 to-transparent dark:from-indigo-900/20 rounded-full filter blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of technologies and tools I've mastered to build modern, responsive web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="group relative"
              >
                {/* Card */}
                <div className={`${skill.bgColor} rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600`}>
                  {/* Icon Container */}
                  <div className={`bg-gradient-to-br ${skill.color} rounded-lg p-4 w-fit mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}>
                    <IconComponent
                      className="text-white text-3xl sm:text-4xl"
                      aria-label={`${skill.name} icon`}
                    />
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-center text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-indigo-400 to-purple-400 blur-xl" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
