import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import teamAlex from '../assets/team-alex.png';
import teamPriya from '../assets/team-priya.png';
import teamArjun from '../assets/team-arjun.png';
import teamSophia from '../assets/team-sophia.png';
import teamDaniel from '../assets/team-daniel.png';

const team = [
  {
    name: 'Alex Morgan',
    title: 'Co-Founder & CEO',
    image: teamAlex,
  },
  {
    name: 'Priya Sharma',
    title: 'Co-Founder & CTO',
    image: teamPriya,
  },
  {
    name: 'Arjun Patel',
    title: 'Head of Product',
    image: teamArjun,
  },
  {
    name: 'Sophia Lee',
    title: 'Head of Design',
    image: teamSophia,
  },
  {
    name: 'Daniel Kim',
    title: 'Head of Growth',
    image: teamDaniel,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Team() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Meet the Team
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
            The passionate people behind CourseApp
          </h2>
        </motion.div>

        {/* Team Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-3 ring-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-0.5">
                {member.name}
              </h3>
              <p className="text-xs text-text-tertiary mb-3">{member.title}</p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-indigo-50 hover:bg-indigo-100 flex items-center justify-center transition-colors duration-200"
                >
                  <FaLinkedinIn className="w-3.5 h-3.5 text-primary" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-indigo-50 hover:bg-indigo-100 flex items-center justify-center transition-colors duration-200"
                >
                  <FaTwitter className="w-3.5 h-3.5 text-primary" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
