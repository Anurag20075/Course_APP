import { motion } from 'framer-motion';
import { SiGoogle, SiNotion, SiAirbnb, SiSpotify } from 'react-icons/si';
import { FaMicrosoft, FaAws } from 'react-icons/fa';

const logos = [
  { icon: SiGoogle, label: 'Google' },
  { icon: FaMicrosoft, label: 'Microsoft' },
  { icon: SiNotion, label: 'Notion' },
  { icon: SiAirbnb, label: 'Airbnb' },
  { icon: SiSpotify, label: 'Spotify' },
  { icon: FaAws, label: 'Amazon' },
];

export default function TrustLogos() {
  return (
    <section className="py-12 border-y border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
            Trusted by Learners & Teams at
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-14"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="flex items-center gap-2 opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <logo.icon className="w-7 h-7 text-text-tertiary" />
              <span className="text-lg font-semibold text-text-tertiary">
                {logo.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
