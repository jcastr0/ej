import React from 'react';
import { motion } from 'framer-motion';
import { QuoteBox, TipBox, WarningBox, EmphasisBox, SuccessBox } from '@/components/content/BlogBoxComponents';

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

const LaPerfeccionContent = () => {
  return (
    <div className="font-sans antialiased text-[#1D1D1D] max-w-4xl mx-auto px-4 py-8">

      {/* Entradilla */}
      <AnimatedP className="text-xl">
        En el acompañamiento a mujeres emprendedoras, hay un patrón que se repite con frecuencia: la búsqueda constante de la perfección como condición para avanzar. Lo que suele presentarse como una intención positiva termina convirtiéndose en una barrera silenciosa que retrasa decisiones, frena procesos y genera frustración.
      </AnimatedP>

      {/* Sección 1 */}
      <AnimatedH2 id="perfeccionismo-trampa">El perfeccionismo: una trampa silenciosa</AnimatedH2>
      <AnimatedP>
        Emprender implica tomar decisiones todos los días, muchas veces sin tener todas las respuestas. Sin embargo, cuando el perfeccionismo se instala, aparece la idea de que todo debe estar completamente listo para poder avanzar: el producto, la imagen, el mensaje, el contexto y hasta el momento personal.
      </AnimatedP>

      <WarningBox title="La trampa de la perfección">
        En la práctica, esto se traduce en proyectos que se postergan, publicaciones que no se lanzan, servicios que no se ofrecen y oportunidades que se dejan pasar esperando el escenario ideal. El resultado no es excelencia, sino estancamiento, desgaste emocional y pérdida de confianza en el propio proceso.
      </WarningBox>

      {/* Sección 2 */}
      <AnimatedH2 id="comunicar-vender">Cuando comunicar se vuelve más difícil que vender</AnimatedH2>
      <AnimatedP>
        En el trabajo cercano con emprendedoras de distintos sectores, se repiten situaciones muy concretas: miedo a hablar frente a la cámara, temor al ridículo, dificultad para organizar ideas o para construir mensajes propios que conecten con su público. Muchas encuentran más fácil replicar tendencias que comunicar desde su experiencia, su conocimiento o el valor real de su marca.
      </AnimatedP>

      <QuoteBox 
        quote="No tengas miedo de equivocarte, ten miedo de no intentarlo."
        author="Roy T. Bennett"
      />

      <AnimatedP>
        Detrás del perfeccionismo suele esconderse un miedo profundo a equivocarse o a ser juzgadas. Creemos que si todo es perfecto, nadie podrá criticarnos. Pero el error es parte fundamental del aprendizaje y un emprendimiento que no se equivoca es un emprendimiento que no arriesga.
      </AnimatedP>

      {/* Sección Video */}
      <AnimatedH2 id="encontrar-voz">Avanzar imperfectamente, no es improvisar</AnimatedH2>

      <motion.div
        {...useFadeIn()}
        className="my-16"
      >
        <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
          {/* Video */}
          <div className="w-full md:w-[400px] flex-shrink-0 overflow-hidden">
            <iframe
              src="https://www.instagram.com/reel/DTMjUypjIdl/embed"
              width="100%"
              height="710"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
            />
          </div>

          {/* Caption Manual */}
          <div className="w-full md:w-[380px] flex-shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://horizons-cdn.hostinger.com/44782cdd-45ed-40ed-9124-e0edcb8986e7/logo_ej-K18L6.png"
                alt="emprendiendo.juntas"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-[#1D1D1D] text-sm">emprendiendo.juntas</p>
                <p className="text-xs text-gray-500">Audio original</p>
              </div>
            </div>
            <p className="text-[14px] text-[#1D1D1D] mb-3 leading-relaxed">
              <strong>A muchas emprendedoras no las detiene la falta de ideas.</strong>
              <br /><br />
              Las detiene la exigencia constante de hacerlo todo perfecto antes de avanzar.
              <br /><br />
              En el trabajo cercano con procesos emprendedores, este patrón aparece con frecuencia: decisiones que se postergan, mensajes que no se comunican y proyectos que se quedan esperando el "momento ideal".
              <br /><br />
              Pero el crecimiento de un emprendimiento no se construye desde la espera, sino desde la conciencia del proceso y la claridad de la etapa que se está viviendo.
              <br /><br />
              📖 En el blog de la comunidad Emprendiendo Juntas analizamos cómo la búsqueda de la perfección puede convertirse en un freno silencioso para el emprendimiento y por qué avanzar imperfectamente no significa improvisar.
              <br /><br />
              💬 Si este mensaje conectó contigo, te leo en los comentarios.
            </p>

            <div className="text-[12px] text-[#4CA7C0] mb-4 leading-relaxed font-medium">
              #comunicacióndigital #marketinghumanizado #emprenderconsentido #lavozdetumarca #aprendiendojuntas
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sección 3 */}
      <AnimatedH2 id="avanzar-imperfectamente">Avanzar imperfectamente no es improvisar</AnimatedH2>
      <AnimatedP>
        Avanzar imperfectamente no significa actuar sin criterio ni dejar todo al azar. Implica tomar decisiones conscientes, ejecutar con lo que se tiene, evaluar y ajustar en el camino. Lejos de promover la improvisación, este enfoque reconoce que el aprendizaje ocurre en la acción y no en la espera.
      </AnimatedP>

      <SuccessBox title="Lo que cambia cuando te atreves a avanzar">
        Cuando una emprendedora se permite avanzar, aun con miedo, lo primero que cambia no son las ventas, sino la confianza. Aparece mayor claridad, se amplía la visión, mejoran las conversaciones con clientes y proveedores, y se abren puertas a oportunidades que antes parecían inalcanzables.
      </SuccessBox>

      {/* Sección 4 */}
      <AnimatedH2 id="paralisis-analisis">La parálisis por análisis</AnimatedH2>
      <AnimatedP>
        A veces, el deseo de tener todo bajo control nos lleva a sobreanalizar cada decisión. ¿Será este el color correcto? ¿Debo publicar a las 5 o a las 6? ¿Este proveedor o aquel? Cuando pasamos demasiado tiempo analizando, la energía se drena en la teoría.
      </AnimatedP>

      <EmphasisBox variant="purple">
        La acción imperfecta siempre le ganará a la inacción perfecta. También aparecen dos extremos frecuentes: quienes se frenan esperando una estética perfecta y quienes, por salir del paso, descuidan por completo la presentación. Avanzar no implica hacerlo todo impecable, pero tampoco hacerlo sin intención.
      </EmphasisBox>

      {/* Sección 5 */}
      <AnimatedH2 id="equilibrio">Buscando el equilibrio: La mejora continua</AnimatedH2>
      <AnimatedP>
        <Highlight>Sostener el proceso también es crecer.</Highlight> El crecimiento de un emprendimiento no siempre se refleja en grandes resultados visibles. A veces está en atreverse a comunicar, formalizar, pedir ayuda, buscar alianzas o sostener el proceso en medio de la incertidumbre.
      </AnimatedP>

      <TipBox title="Apostar por la autenticidad con criterio">
        En muchos emprendimientos, el perfeccionismo termina siendo un freno silencioso: retrasa decisiones, apaga la voz propia y genera frustración. Apostar por la autenticidad no significa exponerse sin criterio ni improvisar, sino comunicar desde un lugar honesto y coherente con la etapa del negocio. Implica atreverse a mostrar procesos reales, reconocer lo que aún se está aprendiendo y construir mensajes que conecten desde la experiencia, no desde la comparación constante.
      </TipBox>

      <AnimatedP>
        En muchos casos, sostener el proceso también implica dejarse acompañar. Compartir experiencias –tanto los aciertos como los errores– permite aprender de lo que ha funcionado y de lo que no, ampliar la mirada y tomar decisiones más conscientes. Cuando el camino se recorre en comunidad, el aprendizaje se vuelve más cercano y práctico: se fortalecen las ideas, se ajustan estrategias y se gana confianza para avanzar sin quedar atrapadas en la comparación o el miedo al error.
      </AnimatedP>

    </div>
  );
};

export default LaPerfeccionContent;