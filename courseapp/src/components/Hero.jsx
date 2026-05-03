import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Search,
  Play,
  ArrowRight,
  BookOpen,
  Users,
  Star,
  Clock,
  Check,
  X,
  Minus,
  Crown,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
  Monitor,
  Code,
  Users as UsersIcon,
  BarChart3,
  Award,
  ChevronRight,
  Smartphone,
  Bookmark,
  CheckSquare,
  MessageSquare,
  Settings,
  ChevronLeft,
  Quote
} from 'lucide-react';

const dashboardMenu = [
  { icon: GraduationCap, label: "Dashboard", active: true },
  { icon: BookOpen, label: "My Courses" },
  { icon: Bookmark, label: "Bookmarks" },
  { icon: CheckSquare, label: "Assignments" },
  { icon: Award, label: "Certificates" },
  { icon: MessageSquare, label: "Messages" },
  { icon: Settings, label: "Settings" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1 }
  },
  viewport: { once: true }
};

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-500 text-white overflow-hidden min-h-[550px] md:min-h-[600px] flex items-center">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-sm" />
        <div className="absolute top-20 -right-10 w-80 h-80 bg-white/5 rounded-full blur-md" />
        <div className="absolute -bottom-10 left-1/3 w-56 h-56 bg-white/5 rounded-full blur-sm" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-5 py-10 md:py-12 grid lg:grid-cols-2 gap-8 items-center">

        {/* Left Section - Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            custom={0}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-xs font-medium px-3 py-1 rounded-full mb-4 border border-white/10"
          >
            <Zap className="w-3.5 h-3.5 text-indigo-200" /> New courses added weekly
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight max-w-2xl"
          >
            Learn Anytime, <br className="hidden sm:block" /> Anywhere
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="mt-3 text-lg md:text-xl font-semibold text-indigo-100"
          >
            Master In-Demand Tech Skills from Industry Experts
          </motion.p>

          <motion.p
            variants={fadeInUp}
            custom={3}
            className="mt-3 text-indigo-100/80 max-w-md leading-relaxed text-sm"
          >
            CourseHub helps you learn, practice, and grow with expert-led courses, hands-on
            projects, and certificates that get you job-ready.
          </motion.p>

          <motion.div variants={fadeInUp} custom={4} className="mt-6 flex flex-wrap gap-3">
            <button className="bg-white text-indigo-600 font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-indigo-300/30 transition-all flex items-center gap-2 text-sm">
              Explore Courses <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button className="bg-white/10 backdrop-blur border border-white/20 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-white/20 transition-all flex items-center gap-2 text-sm">
              <Play className="w-3.5 h-3.5" /> Watch Demo
            </button>
          </motion.div>

          <motion.div variants={fadeInUp} custom={5} className="mt-6 flex items-center gap-3 text-xs flex-wrap">
            <span className="text-indigo-200 font-medium">Available on:</span>
            <button className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-3 py-1.5 rounded-lg hover:bg-white/20 transition-colors duration-200">
              <Monitor className="w-3.5 h-3.5 text-indigo-200" /> App Store
            </button>
            <button className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-3 py-1.5 rounded-lg hover:bg-white/20 transition-colors duration-200">
              <Smartphone className="w-3.5 h-3.5 text-indigo-200" /> Google Play
            </button>
          </motion.div>
        </motion.div>

        {/* Right Section - Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block max-w-md ml-auto w-full"
        >
          <div className="bg-white rounded-2xl shadow-2xl shadow-indigo-900/15 overflow-hidden border border-gray-100">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-50 bg-white">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4.5 h-4.5 text-indigo-600" />
                <span className="font-bold text-gray-800 text-xs tracking-tight">CourseHub</span>
              </div>
              <Search className="w-4 h-4 text-gray-400 cursor-pointer hover:text-indigo-600 transition" />
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="w-36 bg-gray-50 py-3 px-2 border-r border-gray-100 flex-shrink-0">
                {dashboardMenu.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[10px] font-medium mb-0.5 cursor-default transition-all ${item.active
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                      }`}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Dashboard Content */}
              <div className="flex-1 p-3.5 space-y-3 bg-white text-[11px]">
                <div>
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">Welcome back</p>
                  <p className="text-xs font-bold text-gray-800 flex items-center gap-1 mt-0.5">
                    Alex <span className="animate-wave">👋</span>
                  </p>
                  <p className="text-[9px] text-gray-400 leading-none">Continue your learning journey</p>
                </div>

                <div className="bg-indigo-50/70 border border-indigo-100/50 rounded-xl p-3">
                  <p className="text-[9px] font-semibold text-indigo-600 mb-1.5 tracking-wide uppercase">Current Course</p>
                  <p className="text-[11px] font-bold text-gray-800">UI/UX Design Fundamentals</p>
                  <div className="mt-2 w-full h-1.5 bg-indigo-100/80 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                      className="h-full bg-indigo-600 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-2 text-[10px]">
                    <span className="text-gray-500 font-medium">75% Complete</span>
                    <button className="font-semibold text-indigo-600 flex items-center gap-0.5 hover:underline">
                      Continue <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-50/80 border border-blue-100/40 rounded-lg p-2 text-center">
                    <p className="text-lg font-extrabold text-blue-600">12</p>
                    <p className="text-[9px] font-medium text-blue-500 uppercase tracking-wide mt-0.25">
                      In Progress
                    </p>
                  </div>
                  <div className="bg-emerald-50/80 border border-emerald-100/40 rounded-lg p-2 text-center">
                    <p className="text-lg font-extrabold text-emerald-600">5</p>
                    <p className="text-[9px] font-medium text-emerald-600 uppercase tracking-wide mt-0.25">
                      Completed
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <p className="text-[10px] font-bold text-gray-700 tracking-wide">Recommended</p>
                    <span className="text-[9px] text-indigo-600 font-semibold cursor-pointer hover:underline">
                      View all
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50/80 border border-gray-100 rounded-lg p-2 hover:bg-gray-50">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
                      <Code className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-semibold text-gray-800 truncate">
                        React.js - Guide
                      </p>
                      <p className="text-[9px] text-gray-400 mt-0.25">⭐ 4.8 · 12 hrs</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-600 to-violet-500 rounded-lg p-3 text-white shadow-md shadow-indigo-500/10">
                  <p className="text-[11px] font-bold">Upgrade to Pro</p>
                  <p className="text-[9px] text-indigo-100/90 mt-0.25">Unlock all features & certificates</p>
                  <button className="mt-2 bg-white text-indigo-600 text-[10px] font-bold px-3 py-1 rounded shadow-sm hover:bg-indigo-50 hover:shadow transition">
                    Upgrade Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const Stats = () => {
  const stats = [
    { icon: Users, value: '50K+', label: 'Happy Students' },
    { icon: BookOpen, value: '1,200+', label: 'Active Courses' },
    { icon: UsersIcon, value: '300+', label: 'Expert Instructors' },
    { icon: Award, value: '92%', label: 'Job Placement Rate' }
  ];

  return (
    <section className="bg-gradient-to-r from-violet-600 to-violet-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="flex items-center gap-4 text-white"
            >
              <stat.icon className="w-8 h-8 opacity-80" />
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TrustBadges = () => {
  const companies = ['Google', 'Microsoft', 'amazon', 'IBM', 'Infosys', 'tcs'];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-500 mb-8">Trusted by students and professionals at</p>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50"
        >
          {companies.map((company) => (
            <motion.span
              key={company}
              variants={fadeInUp}
              className="text-xl md:text-2xl font-bold text-gray-700 tracking-tight"
            >
              {company}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Categories = () => {
  const categories = [
    { name: 'Web Development', icon: Code },
    { name: 'Mobile Development', icon: Smartphone },
    { name: 'UI/UX Design', icon: Award },
    { name: 'Data Science & Analytics', icon: BarChart3 },
    { name: 'Machine Learning', icon: Code },
    { name: 'DevOps & Cloud', icon: Cloud },
    { name: 'Cyber Security', icon: Award },
    { name: 'Business & Marketing', icon: UsersIcon }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-violet-600 text-sm font-semibold tracking-wider uppercase">Explore Top Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Find the Right Course for You</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-violet-50 hover:border-violet-100 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-violet-100 transition-colors">
                <cat.icon className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{cat.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Cloud = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19c0-1.7-1.3-3-3-3h-11c-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.7 0 3-1.3 3-3z" />
    <path d="M17.5 19c0-1.7-1.3-3-3-3h-11c-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.7 0 3-1.3 3-3z" transform="rotate(-45 12 12)" />
  </svg>
);

const FeaturedCourses = () => {
  const courses = [
    {
      title: 'React.js - The Complete Guide',
      subtitle: 'Build real-world web applications',
      rating: 4.8,
      students: '12.5K',
      level: 'Beginner',
      duration: '12 hours',
      price: '₹499',
      originalPrice: '₹999',
      discount: '50% OFF',
      color: 'bg-blue-500'
    },
    {
      title: 'UI/UX Design Masterclass',
      subtitle: 'Design beautiful and usable products',
      rating: 4.7,
      students: '9.6K',
      level: 'All Levels',
      duration: '10 hours',
      price: '₹599',
      originalPrice: '₹1,199',
      discount: '50% OFF',
      color: 'bg-violet-500'
    },
    {
      title: 'Python for Data Science',
      subtitle: 'Data analysis, visualization & more',
      rating: 4.6,
      students: '8.1K',
      level: 'Beginner',
      duration: '15 hours',
      price: '₹699',
      originalPrice: '₹1,399',
      discount: '50% OFF',
      color: 'bg-yellow-500'
    },
    {
      title: 'Full Stack Web Development',
      subtitle: 'MERN stack from scratch',
      rating: 4.8,
      students: '7.2K',
      level: 'Intermediate',
      duration: '20 hours',
      price: '₹799',
      originalPrice: '₹1,599',
      discount: '50% OFF',
      color: 'bg-green-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900"
          >
            Featured Courses
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#"
            className="text-violet-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
          >
            View all courses
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {courses.map((course) => (
            <motion.div
              key={course.title}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-violet-50 transition-all group cursor-pointer"
            >
              <div className={`h-40 ${course.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white/30" />
                </div>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg">
                  <Play className="w-3 h-3 inline mr-1" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600 transition-colors">{course.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{course.subtitle}</p>
                <div className="flex items-center gap-3 mb-3 text-xs">
                  <span className="flex items-center gap-1 text-amber-500 font-medium">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {course.rating}
                  </span>
                  <span className="text-gray-400">({course.students})</span>
                  <span className="text-violet-600 font-medium">{course.level}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400 mb-4">
                  <Clock className="w-3.5 h-3.5" />
                  {course.duration}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">{course.price}</span>
                    <span className="text-xs text-gray-400 line-through">{course.originalPrice}</span>
                  </div>
                  <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {course.discount}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const features = [
    {
      icon: Code,
      title: 'Learn by Doing',
      desc: 'Hands-on projects and real-world exercises to build job-ready skills.'
    },
    {
      icon: UsersIcon,
      title: 'Learn from Experts',
      desc: 'Industry professionals with years of real-world experience.'
    },
    {
      icon: BarChart3,
      title: 'Track Your Progress',
      desc: 'Smart analytics to help you learn better and stay on track.'
    },
    {
      icon: Award,
      title: 'Earn Certificates',
      desc: 'Shareable certificates to boost your resume and career.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-violet-600 text-sm font-semibold tracking-wider uppercase">Why Choose CourseHub?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Everything You Need to Succeed</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-violet-50 hover:border-violet-100 transition-all text-center"
            >
              <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-violet-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const plans = [
  {
    id: "free",
    name: "Free",
    icon: Zap,
    description: "For learners getting started",
    monthlyPrice: 0,
    yearlyPrice: 0,
    priceSuffix: "/forever",
    features: [
      { text: "Access to selected free courses", included: true },
      { text: "Basic practice quizzes", included: true },
      { text: "Community forum access", included: true },
      { text: "Downloadable resources", included: false },
      { text: "Certificate of completion", included: false },
      { text: "Priority mentor support", included: false },
    ],
    cta: "Get Started Free",
    variant: "default",
  },
  {
    id: "premium",
    name: "Premium",
    icon: Crown,
    description: "For serious learners",
    monthlyPrice: 149,
    yearlyPrice: 999,
    priceSuffix: "",
    features: [
      { text: "Access to all premium courses", included: true },
      { text: "Practice tests & assignments", included: true },
      { text: "Downloadable resources", included: true },
      { text: "Certificate of completion", included: true },
      { text: "Community forum access", included: true },
      { text: "Priority mentor support", included: false },
    ],
    cta: "Upgrade to Premium",
    variant: "featured",
    badge: "Most Popular",
  },
  {
    id: "pro",
    name: "Pro",
    icon: Rocket,
    description: "For professionals & teams",
    monthlyPrice: 299,
    yearlyPrice: 1999,
    priceSuffix: "",
    features: [
      { text: "Everything in Premium", included: true },
      { text: "1-on-1 mentor sessions", included: true },
      { text: "Real-world capstone projects", included: true },
      { text: "LinkedIn profile review", included: true },
      { text: "Job referral network", included: true },
      { text: "Priority mentor support", included: true },
    ],
    cta: "Go Pro",
    variant: "default",
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  const getPrice = (plan) => {
    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    return {
      amount: price,
      suffix: price === 0 ? plan.priceSuffix : isYearly ? "/year" : "/month",
    };
  };

  const getSavings = (plan) => {
    if (!isYearly || plan.monthlyPrice === 0) return null;
    const monthlyTotal = plan.monthlyPrice * 12;
    const saved = monthlyTotal - plan.yearlyPrice;
    const percent = Math.round((saved / monthlyTotal) * 100);
    return { amount: saved, percent };
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50/50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-violet-600 text-sm font-semibold tracking-wider uppercase bg-violet-50 px-4 py-1.5 rounded-full border border-violet-100">
            <Sparkles className="w-3.5 h-3.5" />
            Choose Your Plan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-5 leading-tight">
            Simple, Transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              Pricing
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto text-base">
            No hidden fees. No surprises. Pick a plan that fits your learning
            goals.
          </p>
        </motion.div>

        {/* ── Billing Toggle ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <span
            className={`text-sm font-medium transition-colors duration-300 ${!isYearly ? "text-gray-900" : "text-gray-400"
              }`}
          >
            Monthly
          </span>

          <button
            onClick={() => setIsYearly(!isYearly)}
            aria-label="Toggle billing period"
            className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
            style={{ backgroundColor: isYearly ? "#7c3aed" : undefined }}
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md"
              style={{ marginLeft: isYearly ? "28px" : "0px" }}
            />
          </button>

          <span
            className={`text-sm font-medium transition-colors duration-300 ${isYearly ? "text-gray-900" : "text-gray-400"
              }`}
          >
            Yearly
          </span>

          {isYearly && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8, x: -8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"
            >
              Save up to 44%
            </motion.span>
          )}
        </motion.div>

        {/* ── Cards ── */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5 items-start"
        >
          {plans.map((plan) => {
            const { amount, suffix } = getPrice(plan);
            const savings = getSavings(plan);
            const isFeatured = plan.variant === "featured";
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`relative rounded-2xl flex flex-col overflow-hidden ${isFeatured
                  ? "bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-700 text-white shadow-2xl shadow-violet-300/40 lg:-mt-4 lg:mb-[-16px] lg:z-10"
                  : "bg-white border border-gray-200 hover:border-violet-200"
                  }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-400 to-orange-400 text-center text-xs font-bold py-1.5 text-gray-900 flex items-center justify-center gap-1.5">
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </div>
                )}

                {/* Card Content */}
                <div
                  className={`p-7 md:p-8 flex flex-col flex-1 ${isFeatured ? "pt-10" : ""
                    }`}
                >
                  {/* Plan Icon + Name */}
                  <div className="flex items-center gap-3 mb-1">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${isFeatured
                        ? "bg-white/15 backdrop-blur-sm border border-white/10"
                        : "bg-violet-50 border border-violet-100"
                        }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${isFeatured ? "text-white" : "text-violet-600"
                          }`}
                      />
                    </div>
                    <h3
                      className={`text-lg font-bold ${isFeatured ? "text-white" : "text-gray-900"
                        }`}
                    >
                      {plan.name}
                    </h3>
                  </div>

                  <p
                    className={`text-sm mb-6 ${isFeatured ? "text-violet-200" : "text-gray-500"
                      }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${plan.id}-${amount}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`text-4xl md:text-5xl font-extrabold tracking-tight ${isFeatured ? "text-white" : "text-gray-900"
                          }`}
                      >
                        ₹{amount.toLocaleString("en-IN")}
                      </motion.span>
                    </AnimatePresence>
                    <span
                      className={`text-sm font-medium ${isFeatured ? "text-violet-200" : "text-gray-400"
                        }`}
                    >
                      {suffix}
                    </span>
                  </div>

                  {/* Savings Badge */}
                  {savings && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs font-semibold text-emerald-300 mb-6"
                    >
                      Save ₹{savings.amount.toLocaleString("en-IN")}/year (
                      {savings.percent}% off)
                    </motion.p>
                  )}
                  {!savings && <div className="mb-6" />}

                  {/* Divider */}
                  <div
                    className={`h-px mb-6 ${isFeatured ? "bg-white/10" : "bg-gray-100"
                      }`}
                  />

                  {/* Features */}
                  <ul className="space-y-3.5 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.text}
                        className="flex items-start gap-3 text-sm"
                      >
                        {feature.included ? (
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isFeatured
                              ? "bg-emerald-400/20 text-emerald-300"
                              : "bg-violet-100 text-violet-600"
                              }`}
                          >
                            <Check className="w-3 h-3" strokeWidth={3} />
                          </div>
                        ) : (
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isFeatured
                              ? "bg-white/10 text-white/30"
                              : "bg-gray-100 text-gray-300"
                              }`}
                          >
                            <Minus className="w-3 h-3" strokeWidth={2} />
                          </div>
                        )}
                        <span
                          className={
                            feature.included
                              ? isFeatured
                                ? "text-white/90"
                                : "text-gray-700"
                              : isFeatured
                                ? "text-white/30"
                                : "text-gray-400"
                          }
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${isFeatured
                      ? "bg-white text-violet-700 hover:bg-gray-50 shadow-lg shadow-black/10"
                      : "border-2 border-gray-200 text-gray-700 hover:border-violet-600 hover:text-violet-600 hover:bg-violet-50/50"
                      }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Featured card glow effect */}
                {isFeatured && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-violet-600/20 blur-2xl rounded-full pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Trust Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-gray-500"
        >
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" />
            7-day money-back guarantee
          </span>
          <span className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" />
            Cancel anytime, no questions asked
          </span>
          <span className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" />
            Secure SSL encrypted payment
          </span>
        </motion.div>
      </div>
    </section>
  );
};

// export default Pricing;
const avatarGradients = [
  "from-violet-500 to-purple-600",
  "from-pink-500 to-rose-600",
  "from-amber-500 to-orange-600",
  "from-emerald-500 to-teal-600",
  "from-blue-500 to-indigo-600",
  "from-fuchsia-500 to-pink-600",
];

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "CourseHub helped me go from zero to landing my dream job as a Frontend Developer in just 6 months. The structured path was exactly what I needed.",
      name: "Rohit Sharma",
      role: "Frontend Developer at Swiggy",
      avatar: "RS",
      rating: 5,
    },
    {
      quote:
        "The courses are practical, well-structured, and the projects really boosted my confidence during interviews. Highly recommend to anyone starting out.",
      name: "Ananya Verma",
      role: "Data Analyst at Deloitte",
      avatar: "AV",
      rating: 5,
    },
    {
      quote:
        "I loved the mentorship and how easy it was to learn advanced concepts step by step. The community is incredibly supportive too.",
      name: "Karan Mehta",
      role: "Software Engineer at Amazon",
      avatar: "KM",
      rating: 5,
    },
    {
      quote:
        "The community support alone is worth the investment. I've never felt stuck for more than a few minutes with mentors always ready to help.",
      name: "Priya Iyer",
      role: "ML Engineer at Google",
      avatar: "PI",
      rating: 5,
    },
    {
      quote:
        "Switched careers from accounting to UX design. CourseHub made the transition smoother than I ever imagined possible.",
      name: "Deepak Nair",
      role: "UX Designer at Microsoft",
      avatar: "DN",
      rating: 4,
    },
    {
      quote:
        "Best investment I've made in my career. The project-based approach helped me build a killer portfolio that stood out in every interview.",
      name: "Sneha Kapoor",
      role: "Full Stack Developer at Razorpay",
      avatar: "SK",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const [slideOffset, setSlideOffset] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isMeasured, setIsMeasured] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const updateLayout = useCallback(() => {
    if (trackRef.current && trackRef.current.children.length > 0) {
      const firstCard = trackRef.current.children[0];
      const containerStyle = window.getComputedStyle(trackRef.current);
      const gap = parseFloat(containerStyle.gap) || 0;
      setSlideOffset(firstCard.offsetWidth + gap);
      setIsMeasured(true);
    }
    if (window.innerWidth < 768) setVisibleCount(1);
    else if (window.innerWidth < 1024) setVisibleCount(2);
    else setVisibleCount(3);
  }, []);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [maxIndex, currentIndex]);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play — resets on every index change (swipe, click, or timer)
  useEffect(() => {
    if (isPaused || !isMeasured) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, isMeasured, next, currentIndex]);

  // Touch / Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-violet-50/80 to-transparent rounded-full blur-3xl -translate-y-3/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-3xl translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-violet-600 text-sm font-semibold tracking-wider uppercase bg-violet-50 px-4 py-1.5 rounded-full border border-violet-100">
            <Star className="w-3.5 h-3.5 fill-violet-500 text-violet-500" />
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-5 leading-tight">
            Loved by Learners{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              Worldwide
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base">
            Real stories from real people who transformed their careers with
            CourseHub.
          </p>
        </motion.div>

        {/* ── Carousel ── */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Arrow — Previous */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-1 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-violet-600 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/60 active:scale-95 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Arrow — Next */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-1 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-violet-600 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/60 active:scale-95 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Track */}
          <div className="overflow-hidden mx-6 md:mx-14">
            <div
              ref={trackRef}
              className="flex gap-6"
              style={{
                transform:
                  isMeasured && slideOffset > 0
                    ? `translateX(-${currentIndex * slideOffset}px)`
                    : "none",
                transition:
                  "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(i * 0.08, 0.4),
                      ease: "easeOut",
                    }}
                    className="relative bg-white border border-gray-100 rounded-2xl p-7 h-full flex flex-col group hover:border-violet-200/70 hover:shadow-xl hover:shadow-violet-100/40 transition-all duration-300"
                  >
                    {/* Decorative Quote */}
                    <Quote className="absolute top-5 right-6 w-10 h-10 text-violet-100 group-hover:text-violet-200 transition-colors duration-300 pointer-events-none" />

                    {/* Star Rating */}
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star
                          key={si}
                          className={`w-4 h-4 ${si < t.rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-gray-100 text-gray-100"
                            }`}
                        />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="text-gray-700 leading-relaxed text-[15px] flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    {/* Divider + Author */}
                    <div className="mt-6 pt-5 border-t border-gray-100">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br shadow-sm ${avatarGradients[i % avatarGradients.length]}`}
                        >
                          {t.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            {t.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {t.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Dot Indicators ── */}
          <div className="flex justify-center items-center gap-2 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${i === currentIndex
                  ? "w-8 h-2.5 bg-violet-600 shadow-sm shadow-violet-200"
                  : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Hero />
      <Stats />
      <TrustBadges />
      <Categories />
      <FeaturedCourses />
      <WhyChoose />
      <Pricing />
      <Testimonials />
      {/* <Newsletter /> */}
    </div>
  );
}