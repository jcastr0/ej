import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  ClipboardList,
  MessageCircle,
  Send,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { surveyQuestions, saveSurveyResponse } from '@/data/surveyData';

const ProgressBar = ({ current, total }) => (
  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
    <motion.div
      className="h-full bg-gradient-to-r from-[#A169A2] to-[#C49A2B] rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${((current + 1) / total) * 100}%` }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    />
  </div>
);

const EncuestaBootcamp = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const question = surveyQuestions[currentStep];
  const isLast = currentStep === surveyQuestions.length - 1;
  const isFirst = currentStep === 0;

  const handleAnswer = (value) => {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
    setError('');
  };

  const handleNext = () => {
    if (question.required && !answers[question.id]?.trim()) {
      setError('Este campo es obligatorio');
      return;
    }
    setError('');
    if (isLast) {
      handleSubmit();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (!isFirst) {
      setError('');
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    const result = saveSurveyResponse(answers);
    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.message);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && question.type !== 'textarea') {
      e.preventDefault();
      handleNext();
    }
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>¡Gracias! — Encuesta Bootcamp · Emprendiendo Juntas</title>
        </Helmet>
        <section className="min-h-[100svh] flex items-center justify-center px-5 bg-gradient-to-br from-[#19152A] to-[#1f1a35] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#A169A2] rounded-full blur-[120px]" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#C49A2B] rounded-full blur-[120px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center max-w-lg mx-auto space-y-8"
          >
            <div className="w-20 h-20 bg-[#C49A2B]/20 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-10 h-10 text-[#C49A2B]" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              ¡Gracias por tu tiempo!
            </h1>
            <p className="text-white/60 text-lg leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Tu opinión es fundamental para diseñar un bootcamp que realmente resuelva lo que necesitas.
              Te contactaremos pronto con novedades.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button
                onClick={() => window.open('https://chat.whatsapp.com/H7tDkda2guM37g2o4GEEIr', '_blank')}
                size="lg"
                className="bg-[#25D366] hover:bg-[#1fb855] text-white px-8 py-6 text-base font-semibold rounded-full group"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Únete al grupo de WhatsApp
              </Button>
              <Button
                onClick={() => (window.location.href = '/bootcamp')}
                variant="ghost"
                size="lg"
                className="text-white/70 hover:text-white hover:bg-white/10 px-8 py-6 text-base font-semibold rounded-full border border-white/15"
              >
                Ver el Bootcamp
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Encuesta — ¿Te interesa el Bootcamp? · Emprendiendo Juntas</title>
        <meta
          name="description"
          content="Ayúdanos a diseñar el bootcamp perfecto para emprendedoras. Tu opinión cuenta."
        />
      </Helmet>

      <section className="min-h-[100svh] flex flex-col bg-gradient-to-br from-[#19152A] to-[#1f1a35] relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 right-10 w-60 h-60 bg-[#A169A2] rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#4CA7C0] rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#C49A2B] rounded-full blur-[80px]" />
        </div>

        {/* Header */}
        <div className="relative z-10 pt-24 sm:pt-28 px-5">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#C49A2B]/20 rounded-xl flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-[#C49A2B]" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Encuesta de validación
                </p>
                <p className="text-white text-sm font-bold">
                  Bootcamp Marketing Digital + IA
                </p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-white/40 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Pregunta
                </p>
                <p className="text-white font-bold text-sm">
                  {currentStep + 1} / {surveyQuestions.length}
                </p>
              </div>
            </div>
            <ProgressBar current={currentStep} total={surveyQuestions.length} />
          </div>
        </div>

        {/* Question */}
        <div className="relative z-10 flex-1 flex items-center px-5 py-10">
          <div className="max-w-2xl mx-auto w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                    {question.label}
                  </h2>
                  {!question.required && (
                    <span className="text-white/30 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Opcional
                    </span>
                  )}
                </div>

                {/* Input types */}
                {question.type === 'text' && (
                  <input
                    type="text"
                    value={answers[question.id] || ''}
                    onChange={(e) => handleAnswer(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={question.placeholder}
                    autoFocus
                    className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#C49A2B] text-white text-xl sm:text-2xl py-4 outline-none transition-colors placeholder:text-white/20"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                )}

                {question.type === 'tel' && (
                  <input
                    type="tel"
                    value={answers[question.id] || ''}
                    onChange={(e) => handleAnswer(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={question.placeholder}
                    autoFocus
                    className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#C49A2B] text-white text-xl sm:text-2xl py-4 outline-none transition-colors placeholder:text-white/20"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                )}

                {question.type === 'textarea' && (
                  <textarea
                    value={answers[question.id] || ''}
                    onChange={(e) => handleAnswer(e.target.value)}
                    placeholder={question.placeholder}
                    autoFocus
                    rows={4}
                    className="w-full bg-white/5 border-2 border-white/10 focus:border-[#C49A2B] text-white text-lg rounded-2xl p-5 outline-none transition-colors placeholder:text-white/20 resize-none"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                )}

                {question.type === 'select' && (
                  <div className="space-y-3">
                    {question.options.map((option, i) => {
                      const isSelected = answers[question.id] === option;
                      return (
                        <motion.button
                          key={option}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          onClick={() => {
                            handleAnswer(option);
                            // Auto-advance on select after small delay
                            if (!isLast) {
                              setTimeout(() => setCurrentStep((prev) => prev + 1), 300);
                            }
                          }}
                          className={`w-full flex items-center gap-4 text-left px-6 py-4 rounded-2xl border-2 transition-all duration-200 group ${
                            isSelected
                              ? 'border-[#C49A2B] bg-[#C49A2B]/10 text-white'
                              : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <span
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-[#C49A2B] text-white'
                                : 'bg-white/10 text-white/40 group-hover:bg-white/20'
                            }`}
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span className="text-base sm:text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {option}
                          </span>
                          {isSelected && <Check className="w-5 h-5 text-[#C49A2B] ml-auto flex-shrink-0" />}
                        </motion.button>
                      );
                    })}
                  </div>
                )}

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {error}
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div className="relative z-10 px-5 pb-8 sm:pb-12">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <Button
              onClick={handleBack}
              disabled={isFirst}
              variant="ghost"
              className={`text-white/50 hover:text-white hover:bg-white/10 rounded-full px-6 py-5 ${
                isFirst ? 'opacity-0 pointer-events-none' : ''
              }`}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Anterior
            </Button>

            {question.type !== 'select' && (
              <Button
                onClick={handleNext}
                size="lg"
                className="bg-[#C49A2B] hover:bg-[#a67d1f] text-white px-8 py-6 text-base font-bold rounded-full shadow-xl shadow-[#C49A2B]/20 group"
              >
                {isLast ? (
                  <>
                    Enviar encuesta
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                ) : (
                  <>
                    Siguiente
                    <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            )}

            {question.type === 'select' && isLast && (
              <Button
                onClick={handleSubmit}
                size="lg"
                className="bg-[#C49A2B] hover:bg-[#a67d1f] text-white px-8 py-6 text-base font-bold rounded-full shadow-xl shadow-[#C49A2B]/20 group"
              >
                Enviar encuesta
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
          </div>

          {/* Keyboard hint */}
          {question.type !== 'select' && (
            <p className="text-center text-white/20 text-xs mt-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Presiona <kbd className="bg-white/10 px-2 py-0.5 rounded text-white/40">Enter ↵</kbd> para continuar
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default EncuestaBootcamp;

