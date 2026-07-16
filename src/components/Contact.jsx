import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaCheck } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form submission (no backend)
    // In production, you'd send this to a backend or email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('saikousalya2005@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      label: 'Email',
      value: 'saikousalya2005@gmail.com',
      href: 'mailto:saikousalya2005@gmail.com',
      icon: FaEnvelope,
      color: 'from-red-500 to-pink-600',
    },
    {
      label: 'GitHub',
      value: 'github.com/Patnala-kousalya',
      href: 'https://github.com/Patnala-kousalya',
      icon: FaGithub,
      color: 'from-gray-800 to-gray-900',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/patnala-kousalya',
      href: 'https://www.linkedin.com/in/patnala-kousalya-88b5a7325/',
      icon: FaLinkedin,
      color: 'from-blue-500 to-blue-700',
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
      id="contact"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-indigo-100 to-transparent dark:from-indigo-900/20 rounded-full filter blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind or want to collaborate? I'd love to hear from you. Reach out and let's create something amazing together.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 sm:mb-16"
        >
          {contactMethods.map((method, idx) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={method.label}
                variants={itemVariants}
                href={method.href}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="group relative"
              >
                <div className="relative rounded-lg p-6 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-md hover:shadow-lg transition-all duration-300">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} text-white mb-4 group-hover:shadow-lg transition-all duration-300`}>
                    <IconComponent className="text-xl" />
                  </div>

                  {/* Content */}
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">
                    {method.label}
                  </h3>
                  <p className="text-base font-medium text-gray-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {method.value}
                  </p>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-indigo-400 to-purple-400 blur-xl" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-2xl opacity-100 p-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

          {/* Card Content */}
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-10 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Send Me a Message
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-12"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 mb-4">
                  <FaCheck className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    aria-label="Your name"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: 0.1 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    aria-label="Your email"
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                    aria-label="Your message"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: 0.3 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  aria-label="Send message"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Copy Email Option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
            Or copy my email directly:
          </p>
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <FaCheck className="text-lg" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <FaEnvelope className="text-lg" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
