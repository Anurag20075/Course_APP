import { useState } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
const links = ['Home', 'Courses', 'Features', 'Pricing', 'Testimonials', 'Blog', 'About'];
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo Section */}
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="bg-gradient-to-tr from-indigo-600 to-violet-500 p-1.5 rounded-lg shadow-sm shadow-indigo-500/20">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
              CourseHub
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-semibold tracking-wide transition-all duration-200 ${link === 'Home'
                  ? 'text-indigo-600 border-b-2 border-indigo-600 -mb-0.5 pb-5 pt-5'
                  : 'text-gray-600 hover:text-indigo-600'
                  }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-700 hover:to-violet-600 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-200">
              Download App
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50 focus:outline-none transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-indigo-600" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="md:hidden bg-white border-t border-gray-100 px-5 py-4 space-y-3 shadow-sm"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-medium py-2 transition-colors ${link === 'Home' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                }`}
            >
              {link}
            </a>
          ))}
          <button className="w-full bg-gradient-to-r from-indigo-600 to-violet-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm mt-3 hover:opacity-95 transition">
            Download App
          </button>
        </motion.div>
      )}
    </nav>
  );
}
