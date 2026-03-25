import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Brain, Coffee, BarChart, FileText, Briefcase, Calendar, CheckCircle2, Smartphone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBlog } from '@/context/BlogContext';
import { QuoteBox, TipBox, WarningBox, SuccessBox, EmphasisBox, ComparisonBox } from '@/components/content/BlogBoxComponents';

// Animation Utilities
const useFadeIn = (delay = 0, duration = 0.5) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration, delay, ease: "easeOut" }
});

const useSlideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.6, delay, ease: "easeOut" }
});

const AnimatedP = ({ children, className = "" }) => (
  <motion.p
    {...useFadeIn()}
    className={`text-lg md:text-[20px] leading-[1.8] text-[#1D1D1D] mb-6 font-normal tracking-wide ${className}`}
  >
    {children}
  </motion.p>
);

const AnimatedH2 = ({ children, id }) => (
  <motion.div
    {...useSlideLeft()}
    className="mt-16 mb-8 group"
  >
    <h2
      id={id}
      className="text-[22px] md:text-[28px] font-bold text-[#1D1D1D] tracking-tight relative inline-block scroll-mt-28"
    >
      {children}
      <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#4CA7C0] transition-all duration-700 group-hover:w-full group-in-view:w-full" />
    </h2>
  </motion.div>
);

const Highlight = ({ children }) => (
  <motion.span
    className="text-[#A169A2] font-semibold cursor-default inline-block"
    whileHover={{ scale: 1.05 }}
  >
    {children}
  </motion.span>
);

const TrabajoAvanzoContent = () => {
  const { getPostBySlug } = useBlog();
  const post = getPostBySlug('trabajo-todo-el-dia-y-no-avanzo');

  const weeklySchedule = [
    { day: "Lunes", icon: BarChart, title: "Estrategia", color: "bg-purple-50 text-[#A169A2]", desc: "Revisión de métricas, planificación de la semana y establecimiento de objetivos." },
    { day: "Martes", icon: Brain, title: "Operación (Deep Work)", color: "bg-blue-50 text-[#4CA7C0]", desc: "Trabajo profundo sin interrupciones (creación de producto o servicio)." },
    { day: "Miércoles", icon: Coffee, title: "Relaciones", color: "bg-pink-50 text-pink-600", desc: "Ventas, networking y seguimiento de clientes potenciales." },
    { day: "Jueves", icon: FileText, title: "Administración", color: "bg-orange-50 text-orange-600", desc: "Finanzas, facturación y tareas operativas pendientes." },
    { day: "Viernes", icon: CheckCircle2, title: "Cierre y Aprendizaje", color: "bg-green-50 text-green-600", desc: "Revisión de logros, cierre de la semana y capacitación breve." },
    { day: "Sábado", icon: Briefcase, title: "Creatividad (Opcional)", color: "bg-yellow-50 text-yellow-600", desc: "Tiempo libre para explorar nuevas ideas sin presión." },
    { day: "Domingo", icon: Calendar, title: "Descanso", color: "bg-teal-50 text-teal-600", desc: "Desconexión total para recargar energía." }
  ];

  return (
    <div className="font-sans antialiased text-[#1D1D1D] pb-40">
      {/* Intro */}
      <AnimatedP>
        Emprender implica atender clientes, responder mensajes, vender, organizar pedidos y tomar decisiones casi de forma simultánea. Para muchas emprendedoras, el problema no es la falta de trabajo, sino la sensación constante de estar ocupadas sin avanzar. En ese escenario, la planeación deja de ser una tarea tediosa y se convierte en una herramienta clave para recuperar el control del negocio.
      </AnimatedP>

      {/* Section 1 */}
      <AnimatedH2 id="prioridades">Planear no es llenarse de tareas, es ordenar prioridades</AnimatedH2>
      <AnimatedP>
        Planear no significa escribir listas interminables ni sumar más carga al día a día. En la práctica, se trata de ordenar las tareas, identificar cuáles no pueden esperar y decidir conscientemente qué se puede dejar para después. Cuando no hay claridad, el día se diluye entre muchas actividades pequeñas y al final no se avanza en nada concreto.
      </AnimatedP>

      <QuoteBox
        quote="La verdadera productividad no se mide por la cantidad de tareas tachadas, sino por el impacto de esas tareas en tus objetivos a largo plazo"
        author="Sergio Urzua Cardenas"
      />

      <AnimatedP>
        Tener claro qué hacer primero permite que la jornada rinda más y reduce la sensación de desgaste. Avanzar paso a paso, cumplir lo que se propone y ajustar cuando algo no sale como se esperaba es parte natural del proceso. Los imprevistos existen, pero preverlos y pensar en posibles soluciones evita que se conviertan en obstáculos mayores.
      </AnimatedP>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="my-12 p-8 md:p-10 bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100/50 overflow-hidden relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A169A2] to-[#4CA7C0]" />
        <h3 className="text-xl font-bold mb-8 text-center text-[#1D1D1D]">¿En qué gastas tu energía?</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Reactivo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-red-50 rounded-lg">
                <Clock className="w-5 h-5 text-red-500" />
              </div>
              <h4 className="font-bold text-red-700">Modo Reactivo</h4>
            </div>
            <ul className="space-y-3">
              {["Responder mensajes inmediatos", "Solucionar urgencias ajenas", "Reuniones sin agenda"].map((text, i) => (
                <li key={i} className="flex items-center text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-red-300 rounded-full mr-2 shrink-0" /> {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Estratégico */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-50 rounded-lg">
                <Brain className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="font-bold text-green-700">Modo Estratégico</h4>
            </div>
            <ul className="space-y-3">
              {["Bloques de trabajo profundo", "Planificación semanal", "Automatización de procesos"].map((text, i) => (
                <li key={i} className="flex items-center text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 shrink-0" /> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Section 2 */}
      <AnimatedH2 id="cliente">Escuchar al cliente también hace parte de la planeación</AnimatedH2>
      <AnimatedP>
        La planeación no solo se aplica a las tareas internas. Saber qué tan satisfechos están los clientes con los productos o servicios es fundamental para mejorar. Esto se logra conversando, escuchando opiniones y prestando atención a sugerencias y detalles que muchas veces pasan desapercibidos.
      </AnimatedP>

      <TipBox title="Escucha activa">
        Cuando el cliente percibe que su opinión cuenta, se fortalece la relación y se obtiene información valiosa para tomar decisiones más acertadas. Con el tiempo, este ejercicio ayuda a entender mejor el mercado al que se dirige el emprendimiento y a ajustar la oferta según las necesidades reales.
      </TipBox>

      {/* Section 3 */}
      <AnimatedH2 id="recursos">Organizar los recursos evita errores y gastos innecesarios</AnimatedH2>
      <AnimatedP>
        Otro aspecto clave de la planeación es el manejo de los recursos disponibles. No siempre hay mucho dinero, por lo que organizarse se vuelve indispensable. Saber cuánto se puede gastar, qué se necesita realmente y cómo aprovechar mejor el tiempo ayuda a evitar errores y gastos innecesarios.
      </AnimatedP>

      <SuccessBox title="Clave del Éxito">
        Plantearse metas pequeñas y alcanzables --semanales o mensuales-- permite ver avances reales y mantener la motivación. El crecimiento no siempre es inmediato, pero la constancia marca la diferencia.
      </SuccessBox>

      {/* Section 4 */}
      <AnimatedH2 id="administrativo">Lo administrativo también cuenta</AnimatedH2>

      <WarningBox title="Ten Cuidado">
        Aunque suele resultar engorroso, organizar los temas legales y administrativos es necesario para que un emprendimiento funcione de manera sostenible. Hacerlo a tiempo evita problemas posteriores y facilita la toma de decisiones.
      </WarningBox>

      <AnimatedP>
        Además, detenerse con frecuencia a revisar cómo van las cosas permite identificar qué está funcionando y qué puede mejorar. Muchas decisiones acertadas nacen de la experiencia y del aprendizaje continuo en el camino.
      </AnimatedP>

      {/* Section 5 */}
      <AnimatedH2 id="planeacion">Una planeación sencilla, pero constante</AnimatedH2>
      <AnimatedP>
        Para salir del ciclo de la reactividad, intenta estructurar tu semana por bloques temáticos. No necesitas herramientas complejas, solo intención. Aquí tienes un modelo completo que funciona:
      </AnimatedP>

      {/* Agenda Semanal */}
      <AnimatedH2 id="agenda">Ejemplo de una agenda semanal efectiva</AnimatedH2>
      <div className="space-y-4 my-10">
        {weeklySchedule.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center p-5 bg-[#F9F9F9] rounded-2xl border border-transparent hover:border-[#4CA7C0]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default"
          >
            <div className={`p-3 rounded-xl mr-5 mb-3 sm:mb-0 w-fit ${item.color} group-hover:scale-110 transition-transform duration-300`}>
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#1D1D1D] text-lg mb-1">{item.day}: <span className="font-medium text-gray-600">{item.title}</span></h4>
              <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <EmphasisBox variant="teal">
        Para llevar este control, puede bastar una libreta, las notas del celular o una aplicación sencilla de planificación semanal. Lo importante no es la herramienta, sino el hábito de organizarse y revisar.
      </EmphasisBox>

      <AnimatedH2 id="herramientas">Herramientas para avanzar</AnimatedH2>

      <TipBox title="Comienza hoy mismo">
        El primer paso no requiere software costoso ni la app más sofisticada. Anota la noche anterior las 3 tareas cruciales para el día siguiente. Recupera el control de tu tiempo y verás cómo tu negocio empieza a avanzar de verdad.
      </TipBox>

      {/* Digital Resource - App Store Style */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#1D1D1D] rounded-[32px] p-8 md:p-12 text-center mt-16 relative overflow-hidden group shadow-2xl"
      >
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#A169A2] rounded-full filter blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg">
            <Smartphone className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Lleva tu planeación al siguiente nivel</h3>
          <p className="text-gray-300 mb-10 max-w-lg mx-auto text-lg font-light leading-relaxed">
            Descarga nuestro planificador digital recomendado para organizar tus bloques de tiempo directamente desde tu móvil.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            {/* Apple Store Button */}
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#1D1D1D] font-bold h-14 px-6 rounded-xl shadow-lg hover:shadow-white/20 transition-all hover:scale-105 active:scale-95 gap-3 flex-1 sm:flex-initial"
              onClick={() => window.open('https://apps.apple.com/us/app/structured-daily-planner/id1499198908', '_blank')}
            >
              <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5 shrink-0">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 104.5 80.9 104.5 29.8 0 41.5-19.3 78.6-19.3 36.5 0 46.5 19.3 77.4 19.3 35.8 0 67-68 83-100.9-41.6-17.7-69.3-56.1-69.6-89.6zM226.5 88.3c16.9-21.7 28.5-51.5 25.4-84.3-26.9 1-59.5 17.5-78.6 40.5-15.3 17.9-28.5 46.6-24.9 83.3 30.6 2.1 61.3-17.7 78.1-39.5z" />
              </svg>
              App Store
            </Button>

            {/* Google Play Button */}
            <Button
              size="lg"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold h-14 px-6 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 gap-3 flex-1 sm:flex-initial"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.weeklyplannerapp.weekplan&hl=es_CO', '_blank')}
            >
              <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 shrink-0">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3L59.3 227.6 104.6 499z" />
              </svg>
              Google Play
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TrabajoAvanzoContent;