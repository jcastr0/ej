import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CalendarDays, Users, MapPin, HeartHandshake } from 'lucide-react';

const stats = [
  { icon: CalendarDays, value: 5, suffix: '+', label: 'Años de comunidad' },
  { icon: Users, value: 60, suffix: '+', label: 'Emprendedoras activas' },
  { icon: MapPin, value: 6, suffix: '', label: 'Ciudades con presencia' },
  { icon: HeartHandshake, value: 100, suffix: '%', label: 'Acompañamiento' },
];

const AnimatedNumber = ({ target, suffix, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatsBar = ({ variant = 'light' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const isDark = variant === 'dark';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`py-12 px-4 ${
        isDark
          ? 'bg-gradient-to-r from-[#A169A2] to-[#4CA7C0] text-white'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                  isDark ? 'bg-white/20' : 'bg-[#A169A2]/10'
                }`}
              >
                <stat.icon
                  className={`w-6 h-6 ${isDark ? 'text-white' : 'text-[#A169A2]'}`}
                />
              </div>
              <p
                className={`text-3xl md:text-4xl font-extrabold mb-1 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                <AnimatedNumber target={stat.value} suffix={stat.suffix} isInView={isInView} />
              </p>
              <p
                className={`text-sm font-medium ${
                  isDark ? 'text-white/80' : 'text-gray-500'
                }`}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StatsBar;

