import { motion } from 'framer-motion';
import { Heart, Shield, Rocket, Globe, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Learner First',
    description:
      'We put learners at the center of everything we do, designing experiences that empower growth.',
    color: 'text-primary',
    bg: 'bg-indigo-100',
  },
  {
    icon: Shield,
    title: 'Quality & Trust',
    description:
      'We ensure top-notch content and a safe learning environment you can always rely on.',
    color: 'text-icon-blue',
    bg: 'bg-blue-100',
  },
  {
    icon: Rocket,
    title: 'Inspiration',
    description:
      'We inspire curiosity and empower learners to grow beyond their boundaries.',
    color: 'text-icon-orange',
    bg: 'bg-amber-100',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description:
      'We make world-class education accessible to everyone, regardless of location or background.',
    color: 'text-primary',
    bg: 'bg-indigo-100',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i + 0.3, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Values() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary mb-4">
              Our Values
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4 leading-tight">
              Education with purpose and impact.
            </h2>
            <p className="text-text-tertiary leading-relaxed mb-8">
              We believe learning is more than acquiring knowledge — it&apos;s about
              transforming lives and building a better future for everyone.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Explore Courses
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right - Value Cards Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl p-6 shadow-[0_4px_6px_rgba(0,0,0,0.07)] hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`w-12 h-12 ${value.bg} rounded-lg flex items-center justify-center mb-4`}
                >
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-tertiary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
