import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-purple-100 to-transparent dark:from-purple-900/20 rounded-full filter blur-3xl opacity-50" />
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
            About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Avatar & Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col items-center md:items-start"
          >
            {/* Avatar */}
            <div className="mb-8 w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-indigo-200 dark:border-indigo-800 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-6xl sm:text-7xl">👩‍💻</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="text-center p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md"
              >
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">10+</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Projects</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: '-100px' }}
                className="text-center p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md"
              >
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">∞</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Learning</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: '-100px' }}
                className="text-center p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md"
              >
                <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">100%</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Dedicated</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Bio & Learning */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            {/* Bio */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Frontend Developer & UI Enthusiast
              </h3>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm Kousalya, a passionate frontend developer focused on creating modern, responsive, and user-friendly web experiences. I enjoy building clean interfaces, smooth animations, and scalable component-based applications using React, Tailwind CSS, and modern frontend technologies.
              </p>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm continuously improving my problem-solving skills, exploring UI/UX design principles, and learning industry-standard development practices to build impactful digital experiences.
              </p>
            </div>

            {/* Learning & Interests */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Currently Learning
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'Web Performance', 'Accessibility'].map((item, idx) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium border border-indigo-200 dark:border-indigo-700"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
