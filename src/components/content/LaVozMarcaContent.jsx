import React from 'react';
import { motion } from 'framer-motion';
import { QuoteBox, TipBox, WarningBox, EmphasisBox, SuccessBox, ComparisonBox } from '@/components/content/BlogBoxComponents';

// Animation Utilities (Shared)
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

const LaVozMarcaContent = () => {
  return (
    <div className="font-sans antialiased text-[#1D1D1D] max-w-4xl mx-auto px-4 py-8">
      
      {/* Entradilla */}
      <AnimatedP className="text-xl">
        La manera en que una emprendedora se comunica con sus clientes –a través de mensajes, audios o publicaciones en redes sociales– se ha convertido en uno de los factores más influyentes en la percepción de una marca. Más allá del producto o servicio, la voz con la que se habla también construye cercanía, confianza o, por el contrario, distancia.
      </AnimatedP>

      {/* Sección 1 */}
      <AnimatedH2 id="construccion">La comunicación también construye marca</AnimatedH2>
      <AnimatedP>
        En la era digital, cada interacción cuenta. Desde un saludo por WhatsApp hasta la respuesta a un comentario en redes sociales, forma parte de la construcción de una identidad que no solo es visual, sino también sonora y textual. No se trata únicamente de vender, sino de establecer relaciones basadas en la claridad y la calidez del lenguaje.
      </AnimatedP>

      <ComparisonBox
        leftTitle="Marca sin voz definida"
        rightTitle="Marca con voz auténtica"
        leftContent={
          <ul className="list-disc pl-4 space-y-2 text-sm">
            <li>Suena robótica o demasiado formal.</li>
            <li>Copia frases de moda sin sentido.</li>
            <li>Genera desconfianza por inconsistencia.</li>
          </ul>
        }
        rightContent={
          <ul className="list-disc pl-4 space-y-2 text-sm">
            <li>Se siente humana y cercana.</li>
            <li>Usa un lenguaje propio y reconocible.</li>
            <li>Crea conexión emocional inmediata.</li>
          </ul>
        }
      />

      <AnimatedP>
        Esto involucra a emprendedores, marcas personales y pequeñas empresas que gestionan directamente sus canales de comunicación digital, pero también a los consumidores esperan experiencias más humanas en medio de procesos cada vez más automatizados. Espacios como Instagram, plataformas web y servicios de mensajería se han convertido en escenarios donde cada palabra queda expuesta y aporta a la reputación de un negocio.
      </AnimatedP>

      {/* Sección 2 */}
      <AnimatedH2 id="cercania">Cuando la voz acerca… o aleja</AnimatedH2>
      <AnimatedP>
        La importancia de la voz de una marca radica en su capacidad para generar confianza o romperla. Una respuesta distante, impersonal o demasiado técnica puede alejar a un posible cliente, mientras que un mensaje cercano, claro y respetuoso fortalece el vínculo y mejora la recordación de marca.
      </AnimatedP>

      <QuoteBox
        quote="La gente no compra lo que haces, compra por qué lo haces y cómo los haces sentir al hacerlo."
        author="Simon Sinek"
        role="Experto en Liderazgo"
      />

      <AnimatedP>
        Como suele repetirse entre expertos en comunicación, las personas no solo recuerdan lo que compran, sino cómo se sintieron al interactuar con una empresa. La experiencia comunicativa también deja huella.
      </AnimatedP>


      {/* Sección 3 */}
      <AnimatedH2 id="propia-voz">Encuentra tu propia voz</AnimatedH2>

      {/* Instagram Embed Section */}
      <motion.div
        {...useFadeIn()}
        className="my-16"
      >
        <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
          {/* Video */}
          <div className="w-full md:w-[400px] flex-shrink-0 overflow-hidden">
            <iframe
              src="https://www.instagram.com/reel/DTJm8y7ke31/embed"
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
                src="/images/logo_ej.png"
                alt="emprendiendo.juntas"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-[#1D1D1D] text-sm">emprendiendo.juntas y bedealar_</p>
                <p className="text-xs text-gray-500">Audio original</p>
              </div>
            </div>

            <p className="text-[14px] text-[#1D1D1D] mb-3 leading-relaxed">
              <strong>¿Cómo le estás hablando a tus clientes?</strong>
              <br /><br />
              Cada mensaje, cada audio y cada respuesta construyen la experiencia que otros tienen de tu marca.
              <br /><br />
              La forma en que te comunicas puede acercar… o alejar.
              <br /><br />
              Este video hace parte de una reflexión más amplia que desarrollamos en el blog de Emprendiendo Juntas.
              <br /><br />
              🔗 Encuentra el artículo completo en el link de la bio o déjanos un comentario y con gusto te lo enviamos por mensaje.
            </p>

            <div className="text-[12px] text-[#4CA7C0] mb-4 leading-relaxed font-medium">
              #comunicacióndigital #marketinghumanizado #emprenderconsentido #lavozdetumarca #aprendiendojuntas
            </div>
          </div>
        </div>
      </motion.div>

      <TipBox title="Ejercicio rápido">
        Describe tu marca en tres adjetivos. Por ejemplo: "Cercana, experta y honesta". Ahora revisa tus últimos 3 posts. ¿Esos textos reflejan esos tres adjetivos? Si la respuesta es no, es hora de ajustar la brújula.
      </TipBox>
      
      {/* Sección 4 */}
      <AnimatedH2 id="valores">Hablar desde los valores del negocio</AnimatedH2>
      <AnimatedP>
        Construir la voz de una marca no implica aprender fórmulas complejas, sino adoptar un lenguaje coherente con los valores del negocio. Cambiar expresiones frías por frases más humanas puede marcar una gran diferencia en la relación con los clientes.
      </AnimatedP>

      <TipBox title="La pequeña diferencia que marca conexión">
        No es lo mismo escribir:
        <em>"Su solicitud será procesada en un plazo de cuarenta y ocho (48) horas hábiles"</em>
        <br />
        que decir:
        <em>"En máximo dos días te estaremos dando respuesta. Gracias por confiar en nosotros".</em>
        <br />
        <b>En esa pequeña diferencia se juega gran parte de la conexión con los clientes.</b>
      </TipBox>
      
      {/* Sección 5 */}
      <AnimatedH2 id="estrategia">La voz como herramienta estratégica</AnimatedH2>
      <AnimatedP>
        Tener una voz clara no es solo "bonito", es rentable. Te diferencia en un mercado saturado. Cuando todos venden lo mismo, la personalidad es lo único que no se puede copiar.
      </AnimatedP>
      <TipBox title="Crea tu manual de voz">
        No tiene que ser complejo. Abre un documento y define:
        <ul className="list-disc pl-5 mt-3 space-y-2 text-sm">
          <li><strong>Quiénes somos:</strong> (Ej. Somos guías expertas).</li>
          <li><strong>Cómo hablamos:</strong> (Ej. Usamos palabras simples, evitamos tecnicismos).</li>
          <li><strong>Palabras clave:</strong> (Lista de 5 palabras que siempre usamos).</li>
          <li><strong>Lo que nunca decimos:</strong> (Lista de palabras prohibidas).</li>
        </ul>
      </TipBox>

      <WarningBox title="Cuidado con la imitación">
        Es tentador copiar el estilo de esa influencer exitosa o de la competencia líder. Pero recuerda: una copia siempre valdrá menos que el original. Tu audiencia notará la falta de autenticidad. Sé tú misma, es tu superpoder.
      </WarningBox>

      {/* Conclusión */}
      <AnimatedP>
        Encontrar tu voz toma tiempo y práctica. No tengas miedo de experimentar hasta que sientas que tus textos fluyen con naturalidad. Cuando lo logres, escribir posts dejará de ser una tortura para convertirse en una conversación fluida con tu comunidad.
      </AnimatedP>


    </div>
  );
};

export default LaVozMarcaContent;