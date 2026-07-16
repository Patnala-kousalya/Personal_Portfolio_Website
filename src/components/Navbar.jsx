import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  function handleNavClick(e, id) {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-gray-900/60 border-b border-transparent dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center space-x-2">
              <span className="w-8 h-8 rounded-md bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-400 flex items-center justify-center text-white font-bold">K</span>
              <span className="sr-only">Kousalya - Home</span>
              <span className="hidden sm:inline font-semibold text-gray-800 dark:text-gray-100">Kousalya</span>
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => handleNavClick(e, l.id)}
                className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="ml-2 inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white rounded-md text-sm font-medium shadow-sm hover:bg-indigo-500 transition-colors"
            >
              View My Work
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-controls="mobile-menu"
              aria-expanded={open}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      {open && (
        <div id="mobile-menu" className="md:hidden bg-white/90 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => handleNavClick(e, l.id)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="block mt-1 px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500"
            >
              View My Work
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
