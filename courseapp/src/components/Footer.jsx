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



// function Newsletter() {
//   const scaleIn = {
//     hidden: { opacity: 0, scale: 0.95, y: 20 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   const floatAnimation = {
//     animate: {
//       y: [0, -8, 0],
//       transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//     },
//   };

//   const pulseSlow = {
//     animate: {
//       scale: [1, 1.05, 1],
//       opacity: [0.05, 0.08, 0.05],
//       transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
//     },
//   };

//   return (
//     <section className="py-20 md:py-28">
//       <div className="max-w-7xl mx-auto px-5">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           variants={scaleIn}
//           className="relative"
//         >
//           {/* Main Card */}
//           <div className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 rounded-[2rem] overflow-hidden">
//             {/* Background Grid */}
//             <div
//               className="absolute inset-0 opacity-[0.07]"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
//                 backgroundSize: "40px 40px",
//               }}
//             />

//             {/* Decorative Circles */}
//             <motion.div
//               {...pulseSlow}
//               className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full"
//             />
//             <motion.div
//               animate={{
//                 scale: [1, 1.08, 1],
//                 opacity: [0.04, 0.07, 0.04],
//                 transition: {
//                   duration: 7,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 1,
//                 },
//               }}
//               className="absolute -bottom-20 -left-20 w-64 h-64 bg-white rounded-full"
//             />
//             <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-white/20 rounded-full" />
//             <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/15 rounded-full" />
//             <div className="absolute bottom-1/4 right-1/5 w-4 h-4 bg-white/10 rounded-full" />

//             {/* Gradient Overlays */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
//             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

//             {/* Content */}
//             <div className="relative px-8 py-14 md:px-16 md:py-20 text-center">
//               {/* Floating Icon */}
//               <motion.div {...floatAnimation} className="inline-block">
//                 <div className="w-14 h-14 mx-auto bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/10">
//                   <Mail className="w-7 h-7 text-indigo-200" />
//                 </div>
//               </motion.div>

//               {/* Badge */}
//               <div className="flex items-center justify-center gap-2 mb-3">
//                 <Sparkles className="w-4 h-4 text-amber-300" />
//                 <span className="text-xs font-semibold uppercase tracking-widest text-indigo-200/80">
//                   Free Newsletter
//                 </span>
//                 <Sparkles className="w-4 h-4 text-amber-300" />
//               </div>

//               {/* Heading */}
//               <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
//                 Stay in the Loop
//               </h2>
//               <p className="mt-4 text-indigo-100/80 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
//                 Get the latest course updates, free resources, and curated learning tips
//                 delivered straight to your inbox. No spam, ever.
//               </p>

//               {/* Trust Indicators */}
//               <div className="flex items-center justify-center gap-4 mt-6 text-xs text-indigo-200/60">
//                 <span className="flex items-center gap-1.5">
//                   <CheckCircle className="w-3.5 h-3.5" />
//                   No spam
//                 </span>
//                 <span className="w-1 h-1 bg-indigo-300/30 rounded-full" />
//                 <span className="flex items-center gap-1.5">
//                   <CheckCircle className="w-3.5 h-3.5" />
//                   Unsubscribe anytime
//                 </span>
//                 <span className="w-1 h-1 bg-indigo-300/30 rounded-full hidden sm:block" />
//                 <span className="hidden sm:flex items-center gap-1.5">
//                   <CheckCircle className="w-3.5 h-3.5" />
//                   Free resources
//                 </span>
//               </div>

//               {/* Input + Button */}
//               <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
//                 <input
//                   type="email"
//                   placeholder="Enter your email address"
//                   className="flex-1 px-5 py-3.5 rounded-xl text-gray-800 text-sm bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-violet-600 transition-all duration-200"
//                 />
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="group bg-gray-900 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 min-w-[140px] shadow-lg shadow-black/20"
//                 >
//                   Subscribe
//                   <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
//                 </motion.button>
//               </div>

//               {/* Social Proof */}
//               <p className="mt-6 text-xs text-indigo-200/50">
//                 Joined by{" "}
//                 <span className="font-semibold text-indigo-200/70">12,000+</span>{" "}
//                 learners
//               </p>
//             </div>
//           </div>

//           {/* Bottom Glow */}
//           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-violet-600/20 blur-2xl rounded-full" />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Newsletter;
