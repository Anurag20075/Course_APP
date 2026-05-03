import { motion } from 'framer-motion';
import { Users, BookOpen, PlayCircle, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '10M+',
    label: 'Active Learners',
    subLabel: 'From 180+ countries',
    color: 'text-primary',
    bg: 'bg-indigo-100',
  },
  {
    icon: BookOpen,
    number: '50K+',
    label: 'Courses',
    subLabel: 'Across 75+ categories',
    color: 'text-icon-orange',
    bg: 'bg-amber-100',
  },
  {
    icon: PlayCircle,
    number: '250M+',
    label: 'Lessons Delivered',
    subLabel: 'And counting every day',
    color: 'text-icon-green',
    bg: 'bg-green-100',
  },
  {
    icon: Star,
    number: '98%',
    label: 'Satisfaction Rate',
    subLabel: 'From our amazing learners',
    color: 'text-icon-blue',
    bg: 'bg-blue-100',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Stats() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`w-14 h-14 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-text-primary mb-1">
                {stat.number}
              </h3>
              <p className="text-sm font-medium text-text-tertiary mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-text-muted">{stat.subLabel}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
