import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description:
        'Personal portfolio built with React, Tailwind CSS, and Framer Motion animations to showcase skills and projects in a modern, responsive design.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/kousalya',
      demo: null,
      icon: '🎨',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      id: 2,
      title: 'Second-Hand Car Website',
      description:
        'A comprehensive web platform for buying and selling used cars with advanced filters, user authentication, and admin dashboard for listings management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      github: 'https://github.com/kousalya',
      demo: null,
      icon: '🚗',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      id: 3,
      title: 'Matrix Problem Solver',
      description:
        'An optimized algorithm-based application that solves complex matrix transformation problems with efficient computation and detailed step-by-step solutions.',
      tech: ['JavaScript', 'Algorithms', 'Data Structures', 'Canvas API'],
      github: 'https://github.com/kousalya',
      demo: null,
      icon: '🔢',
      gradient: 'from-orange-500 to-pink-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      id="projects"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-indigo-100 to-transparent dark:from-indigo-900/20 rounded-full filter blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-l from-purple-100 to-transparent dark:from-purple-900/20 rounded-full filter blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in frontend development, full-stack engineering, and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group h-full"
            >
              {/* Card */}
              <div className="relative h-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pointer-events-none" />

                {/* Content Container */}
                <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl h-full flex flex-col p-6 sm:p-8">
                  {/* Icon & Title Section */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>
                    <div className={`bg-gradient-to-br ${project.gradient} rounded-lg p-3 text-white text-2xl flex-shrink-0 ml-3 shadow-md`}>
                      {project.icon}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.05 * idx }}
                        viewport={{ once: true, margin: '-100px' }}
                        className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-medium border border-indigo-200 dark:border-indigo-700"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub className="text-lg" />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <FaExternalLinkAlt className="text-lg" />
                          <span className="hidden sm:inline">Demo</span>
                        </a>
                      ) : (
                        <span
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-indigo-600/60 text-indigo-600/60 dark:text-indigo-400/60 dark:border-indigo-400/60 font-medium rounded-lg cursor-not-allowed select-none"
                          aria-disabled="true"
                        >
                          <FaExternalLinkAlt className="text-lg" />
                          <span className="hidden sm:inline">Coming Soon</span>
                        </span>
                      )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-16 sm:mt-20"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/kousalya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-indigo-500 hover:to-purple-500 transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label="Visit full portfolio on GitHub"
          >
            <FaGithub className="text-xl" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
