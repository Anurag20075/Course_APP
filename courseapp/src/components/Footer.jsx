import { GraduationCap, Mail, ArrowRight, MapPin, Phone, Heart } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  const quickLinks = ["Courses", "Features", "Pricing", "Blog", "About Us"];
  const supportLinks = [
    "Help Center",
    "Contact Us",
    "Terms of Service",
    "Privacy Policy",
    "Refund Policy",
  ];
  const resourceLinks = [
    "Career Guide",
    "Learning Path",
    "Free Courses",
    "FAQ",
    "Sitemap",
  ];

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* ── Newsletter Banner ── */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-violet-600/20 shrink-0">
                <Mail className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Stay in the loop
                </h3>
                <p className="text-sm text-gray-400 mt-0.5">
                  Get the latest courses, tips, and offers — straight to your
                  inbox. No spam, ever.
                </p>
              </div>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-l-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 w-full md:w-72 transition-colors"
              />
              <button className="bg-violet-600 hover:bg-violet-500 text-white px-5 py-3 rounded-r-xl text-sm font-medium flex items-center gap-2 transition-colors shrink-0">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="bg-violet-600 p-2 rounded-xl shadow-lg shadow-violet-600/25">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                CourseHub
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-xs leading-relaxed">
              Empowering learners worldwide to build in-demand skills and achieve
              their career goals through expert-led courses.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                <span>123 Learning Lane, San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-violet-400 shrink-0" />
                <span>+1 (555) 123‑4567</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:border-violet-600 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get the App */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Get the App
            </h4>
            <div className="space-y-3">
              <a
                href="#"
                className="group flex items-center gap-3 bg-white/5 border border-white/10 hover:border-white/20 px-3.5 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaApple className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <div className="text-[9px] text-gray-400 uppercase leading-none">
                    Download on the
                  </div>
                  <div className="text-sm font-semibold text-white leading-tight">
                    App Store
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="group flex items-center gap-3 bg-white/5 border border-white/10 hover:border-white/20 px-3.5 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaGooglePlay className="w-5 h-5 text-white flex-shrink-0 ml-0.5" />
                <div>
                  <div className="text-[9px] text-gray-400 uppercase leading-none">
                    Get it on
                  </div>
                  <div className="text-sm font-semibold text-white leading-tight">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2026 CourseHub. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Cookies
              </a>
            </div>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              Made with{" "}
              <Heart className="w-3.5 h-3.5 text-violet-400 fill-violet-400" />{" "}
              for learners everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}