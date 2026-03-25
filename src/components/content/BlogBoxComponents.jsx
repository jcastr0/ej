import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Lightbulb, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Shared Base Styles ---
const BoxBase = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-5%" }}
    transition={{ duration: 0.5 }}
    className={cn(
      "p-6 md:p-8 my-8 rounded-xl border-l-4 shadow-sm relative overflow-hidden",
      className
    )}
  >
    {children}
  </motion.div>
);

// --- 1. Quote Box ---
export const QuoteBox = ({ quote, author }) => (
  <BoxBase className="bg-gradient-to-r from-purple-50 to-white border-purple-400">
    <Quote className="h-8 w-8 text-purple-300 absolute top-4 right-4 opacity-50" />
    <blockquote className="relative z-10">
      <p className="text-xl md:text-2xl font-serif italic text-gray-800 mb-4 leading-relaxed">
        "{quote}"
      </p>
      {author && (
        <footer className="text-sm font-bold text-purple-600 uppercase tracking-wide">
          — {author}
        </footer>
      )}
    </blockquote>
  </BoxBase>
);

// --- 2. Tip Box ---
export const TipBox = ({ title, children }) => (
  <BoxBase className="bg-[#F0FDFA] border-teal-500">
    <div className="flex gap-4 items-start">
      <div className="p-2 bg-teal-100 rounded-full shrink-0">
        <Lightbulb className="h-6 w-6 text-teal-600" />
      </div>
      <div>
        <h4 className="font-bold text-teal-800 text-lg mb-2">{title || "Consejo Práctico"}</h4>
        <div className="text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </BoxBase>
);

// --- 3. Warning Box ---
export const WarningBox = ({ title, children }) => (
  <BoxBase className="bg-orange-50 border-orange-400">
    <div className="flex gap-4 items-start">
      <div className="p-2 bg-orange-100 rounded-full shrink-0">
        <AlertTriangle className="h-6 w-6 text-orange-600" />
      </div>
      <div>
        <h4 className="font-bold text-orange-800 text-lg mb-2">{title || "Ten cuidado"}</h4>
        <div className="text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </BoxBase>
);

// --- 4. Emphasis Box ---
export const EmphasisBox = ({ children, variant = "default" }) => {
  const styles = {
    default: "bg-gray-50 border-gray-400",
    purple: "bg-purple-50 border-purple-500",
    blue: "bg-blue-50 border-blue-500",
  };

  return (
    <BoxBase className={cn(styles[variant] || styles.default)}>
      <div className="text-lg font-medium text-gray-800 leading-relaxed text-center italic">
        {children}
      </div>
    </BoxBase>
  );
};

// --- 5. Success Box ---
export const SuccessBox = ({ title, children }) => (
  <BoxBase className="bg-green-50 border-green-500">
    <div className="flex gap-4 items-start">
      <div className="p-2 bg-green-100 rounded-full shrink-0">
        <CheckCircle className="h-6 w-6 text-green-600" />
      </div>
      <div>
        <h4 className="font-bold text-green-800 text-lg mb-2">{title || "Clave del éxito"}</h4>
        <div className="text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </BoxBase>
);

// --- 6. Comparison Box ---
export const ComparisonBox = ({ leftTitle, leftContent, rightTitle, rightContent }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="grid md:grid-cols-2 gap-4 my-10"
  >
    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
      <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
        <span className="text-xl">✕</span> {leftTitle}
      </h4>
      <p className="text-gray-700">{leftContent}</p>
    </div>
    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
      <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
        <span className="text-xl">✓</span> {rightTitle}
      </h4>
      <p className="text-gray-700">{rightContent}</p>
    </div>
  </motion.div>
);