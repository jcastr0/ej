import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, X, ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { testimonios } from '@/data/speakData';
import { cn } from '@/lib/utils';

const TestimoniosSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonios.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  };

  // Determine visible items based on current index (Looping)
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonios.length;
      items.push(testimonios[index]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(4px)",
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(4px)",
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  // Helper function to extract hex color from Tailwind class
  const extractColorFromClass = (colorClass) => {
    const match = colorClass?.match(/#[0-9A-Fa-f]{6}/);
    return match ? match[0] : null;
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-60" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#A169A2] font-semibold tracking-wider uppercase text-sm mb-3 block"
          >
            Voces de la Comunidad
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Lo que dicen nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A169A2] to-[#4CA7C0]">Emprendedoras</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-[#A169A2] to-[#4CA7C0] mx-auto rounded-full"
          />
        </div>

        {/* Carousel Content */}
        <div className="relative">
          <div className="min-h-[280px] overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextSlide();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevSlide();
                  }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleItems.map((item, index) => (
                  <Dialog key={`${item.id}-${index}`} open={selectedTestimonial?.id === item.id} onOpenChange={(open) => !open && setSelectedTestimonial(null)}>
                    <DialogTrigger asChild>
                      <motion.div
                        onClick={() => setSelectedTestimonial(item)}
                        className={cn(
                          "group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col justify-between hover:-translate-y-2 select-none",
                          index === 1 && "hidden md:flex",
                          index === 2 && "hidden lg:flex"
                        )}
                      >
                        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-100 transition-opacity duration-300">
                          <Quote className="w-8 h-8 text-[#A169A2]" />
                        </div>

                        <div className="mb-6">
                          <div className={`w-12 h-12 rounded-full mb-4 bg-gradient-to-br ${item.color} p-[2px]`}>
                            <Avatar className="w-full h-full border-2 border-white">
                              <AvatarImage src={item.image} alt={item.name} className="object-cover" />
                              <AvatarFallback>{item.name[0]}</AvatarFallback>
                            </Avatar>
                          </div>
                          <p className="text-lg font-medium text-gray-800 italic leading-relaxed pointer-events-none">
                            "{item.quote}"
                          </p>
                        </div>

                        <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                            <p className="text-xs text-gray-500">{item.role}</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#A169A2] group-hover:text-white transition-colors duration-300">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </motion.div>
                    </DialogTrigger>

                    <DialogContent
                      className="max-w-5xl w-[95vw] p-0 overflow-y-auto bg-white border-none shadow-2xl rounded-2xl md:rounded-3xl max-h-[90vh] [&>button]:hidden"
                    >
                      <div className="flex flex-col md:flex-row min-h-0">
                        {/* Image Side */}
                        <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0 bg-gray-100">
                          {item.image_modal ? (
                            // Clean image without overlay as requested
                            <img
                              src={item.image_modal}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90`} />
                          )}

                          {/* Text overlay over image - Color from data or white by default */}
                          <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 md:p-8 pointer-events-none">
                            <div className={`${item.badgeBg || 'bg-[#1d1d1d]/25'} rounded-lg p-3 md:p-6`}>
                              <Quote className={`w-8 md:w-12 h-8 md:h-12 mb-2 md:mb-4 drop-shadow-md ${item.textOverlayColor || 'text-white'}`} />
                              <h3 className={`text-lg md:text-3xl font-bold mb-1 md:mb-2 drop-shadow-md ${item.textOverlayColor || 'text-white'}`}>
                                {item.name}
                              </h3>
                              <p className={`text-xs md:text-base font-medium tracking-wide drop-shadow-md mb-2 ${item.textOverlayColor ? item.textOverlayColor : 'text-white/90'}`}>
                                {item.role}
                              </p>

                              {/* Added Link 1: Image Overlay */}
                              {item.emprendimiento && item.emprende_name && (
                                <a
                                  href={item.emprendimiento}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={cn(
                                    "pointer-events-auto mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-sm backdrop-blur-md border w-fit group",
                                    item.textOverlayColor
                                      ? "bg-white/90 border-gray-200 text-gray-900 hover:bg-white"
                                      : "bg-white/20 border-white/30 text-white hover:bg-white/30"
                                  )}
                                >
                                  {item.emprende_name}
                                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-3/5 p-6 md:p-12 flex flex-col justify-center bg-white relative">
                          {/* Elegant Close Button */}
                          <button
                            onClick={() => setSelectedTestimonial(null)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 text-gray-400 hover:text-red-500 hover:bg-white hover:border-red-100 hover:shadow-md transition-all duration-300 z-50 group transform hover:scale-105"
                          >
                            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                          </button>

                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <div className="mb-6">
                              <span
                                className="inline-block px-4 py-2 rounded-full text-xs font-bold text-white mb-4"
                                style={{
                                  backgroundColor:  extractColorFromClass(item.color) || '#A169A2'
                                }}
                              >
                                Testimonio
                              </span>
                              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                                "{item.quote}"
                              </h4>

                              {/* Added Link 2: Between Quote and Full Text - Hidden on mobile, visible on desktop */}
                              {item.emprendimiento && item.emprende_name && (
                                <div className="mb-6 hidden md:block">
                                  <a
                                    href={item.emprendimiento}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-md bg-[#A169A2] text-white hover:bg-[#4CA7C0] focus:outline-none focus:ring-2 focus:ring-[#A169A2] focus:ring-opacity-50"
                                  >
                                    {item.emprende_name}
                                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                  </a>
                                </div>
                              )}

                              <p className="text-gray-600 leading-loose text-lg whitespace-pre-wrap">
                                {item.fullTestimonial}
                              </p>
                            </div>

                            <div className="pt-6 border-t border-gray-100 flex items-center gap-2">
                              <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-sm text-gray-500 font-medium ml-2">5.0 de calificación</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border border-gray-100 text-gray-600 hover:text-[#A169A2] hover:border-[#A169A2] transition-colors shadow-sm hover:shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicators */}
            <div className="flex items-center gap-2">
              {testimonios.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#A169A2] w-8' : 'bg-gray-200 w-2 hover:bg-gray-300'}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="p-3 rounded-full bg-white border border-gray-100 text-gray-600 hover:text-[#4CA7C0] hover:border-[#4CA7C0] transition-colors shadow-sm hover:shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;