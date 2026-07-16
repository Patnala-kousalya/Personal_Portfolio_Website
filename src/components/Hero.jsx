import React from 'react';
import { Parallax } from 'react-scroll-parallax';

export default function Hero() {
  const handleCTA = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Decorative shapes */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-500 to-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      {/* Subtle parallax glow */}
      <Parallax speed={-10} className="pointer-events-none absolute bottom-10 right-4 sm:bottom-16 sm:right-10 lg:bottom-20 lg:right-16" aria-hidden="true">
        <div className="h-28 w-28 sm:h-40 sm:w-40 lg:h-52 lg:w-52 rounded-full bg-gradient-to-br from-cyan-400/20 via-indigo-400/20 to-transparent blur-3xl opacity-70" />
      </Parallax>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 md:space-y-8">
          {/* Eyebrow */}
          <div className="inline-block">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100/50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2 animate-pulse" />
              <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                Welcome to my portfolio
              </p>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-pink-600 to-amber-500 bg-clip-text text-transparent">
                Kousalya
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Frontend Developer
            </p>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I build modern, responsive, and user-focused web applications using React, Tailwind CSS, and modern frontend technologies — combining clean design with smooth user experiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={handleCTA}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-indigo-500 hover:to-purple-500 transition-all transform hover:scale-105 active:scale-95"
            >
              View My Work
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-8 py-3 border-2 border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-8 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-gray-600 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
