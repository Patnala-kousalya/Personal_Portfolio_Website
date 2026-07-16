import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    const heroElement = document.getElementById('home');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/Patnala-kousalya',
      icon: FaGithub,
      color: 'hover:text-gray-700 dark:hover:text-gray-300',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/patnala-kousalya-88b5a7325/',
      icon: FaLinkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      label: 'Email',
      href: 'mailto:saikousalya2005@gmail.com',
      icon: FaEnvelope,
      color: 'hover:text-red-600 dark:hover:text-red-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tl from-purple-100 to-transparent dark:from-purple-900/20 rounded-full filter blur-3xl opacity-50" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Main Footer Content */}
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Name & Tagline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Kousalya
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Frontend Developer • React Enthusiast • Creative Problem Solver
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-6"
          >
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{
                    scale: 1.3,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-300 ${link.color} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900`}
                >
                  <IconComponent className="text-lg" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
          />

          {/* Copyright & Back to Top */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Kousalya. All rights reserved.
            </p>

            <motion.button
              onClick={handleBackToTop}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <FaArrowUp className="text-xs" />
            </motion.button>
          </motion.div>
        </div>

        {/* Optional: Credits or Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
        >
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
            Designed & Built with{' '}
            <span className="text-red-500">❤️</span> using React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
