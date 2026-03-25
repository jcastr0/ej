import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CAROLINA_IMAGE =
  'https://horizons-cdn.hostinger.com/44782cdd-45ed-40ed-9124-e0edcb8986e7/b09b90f2584b8df9d5dc7bc9a400ac9a.jpg';

const CarolinaSection = ({ variant = 'compact' }) => {
  if (variant === 'full') return <FullVariant />;
  return <CompactVariant />;
};

/* ───────────── Compact — Para el Home ───────────── */
const CompactVariant = () => (
  <section className="py-20 px-4 bg-[#F5EEF8]/60">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-3 bg-gradient-to-br from-[#A169A2]/20 to-[#4CA7C0]/20 rounded-3xl blur-xl" />
          <img
            src={CAROLINA_IMAGE}
            alt="Leidy Carolina Granados Celis — Directora de Emprendiendo Juntas"
            className="relative rounded-3xl shadow-2xl w-full h-[420px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5"
        >
          <span className="inline-block bg-[#A169A2]/10 text-[#A169A2] font-semibold text-sm px-4 py-1.5 rounded-full">
            Nuestra directora
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Leidy Carolina{' '}
            <span className="text-[#A169A2]">Granados Celis</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Contadora pública y estudiante de Comunicación Social. Tomó las riendas de Emprendiendo Juntas
            cuando las fundadoras originales pasaron a nuevas etapas, y desde entonces lidera la estrategia,
            el contenido, la comunidad y las formaciones.
          </p>

          <div className="bg-white rounded-2xl p-5 border border-purple-100 shadow-sm">
            <Quote className="w-6 h-6 text-[#A169A2] mb-2" />
            <p className="text-gray-700 italic leading-relaxed">
              "El crecimiento empresarial también requiere comunidad, orientación y contención humana."
            </p>
          </div>

          <Link to="/nosotras">
            <Button
              variant="outline"
              className="border-[#A169A2] text-[#A169A2] hover:bg-[#A169A2] hover:text-white rounded-full px-6 mt-2 group"
            >
              Conoce nuestra historia
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ───────────── Full — Para Nosotras ───────────── */
const FullVariant = () => (
  <section className="py-20 px-4 bg-[#F5EEF8]/60">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="inline-block bg-[#A169A2]/10 text-[#A169A2] font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
          La líder del proyecto
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Leidy Carolina{' '}
          <span className="text-[#A169A2]">Granados Celis</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-10 items-start">
        {/* Foto grande */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-2 relative"
        >
          <div className="absolute -inset-3 bg-gradient-to-br from-[#A169A2]/20 to-[#4CA7C0]/20 rounded-3xl blur-xl" />
          <img
            src={CAROLINA_IMAGE}
            alt="Leidy Carolina Granados Celis"
            className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />
          <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 max-w-[200px]">
            <p className="text-sm font-bold text-[#A169A2]">Directora</p>
            <p className="text-xs text-gray-500">Emprendiendo Juntas</p>
          </div>
        </motion.div>

        {/* Historia */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3 space-y-6"
        >
          <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm">
            <Quote className="w-6 h-6 text-[#A169A2] mb-3" />
            <p className="text-lg text-gray-700 italic leading-relaxed">
              "El crecimiento empresarial también requiere comunidad, orientación y contención humana."
            </p>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-900">Anabella Corvacho</strong> la invitó a vincularse al proyecto.
              Carolina ya contaba con experiencia significativa en liderazgo comunitario: había sido jefe de
              recursos humanos y, durante la pandemia, había acompañado a una comunidad de aproximadamente
              200 personas aspirantes a subsidios de desempleo.
            </p>
            <p>
              Esa experiencia le dio herramientas para escuchar, orientar, organizar grupos y brindar
              acompañamiento con enfoque humano.
            </p>
            <p>
              Cuando las fundadoras originales —{' '}
              <strong className="text-gray-900">Madelaine Avendaño, Leidy Casas y Anabella Corvacho</strong> — se
              retiraron por razones personales, se tomó la decisión colectiva de que Carolina asumiera la
              continuidad del proyecto.
            </p>
            <p>
              Desde entonces lidera Emprendiendo Juntas de manera integral:{' '}
              <span className="text-[#A169A2] font-semibold">
                estrategia, contenido, comunidad, formaciones y relaciones institucionales.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-purple-100 text-center">
              <p className="text-sm text-gray-500">Formación</p>
              <p className="font-bold text-gray-900 text-sm">Contadora Pública</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-purple-100 text-center">
              <p className="text-sm text-gray-500">Estudiando</p>
              <p className="font-bold text-gray-900 text-sm">Comunicación Social</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#A169A2]/10 to-[#4CA7C0]/10 rounded-2xl p-5">
            <p className="text-sm font-bold text-gray-900 mb-1">🎥 El Vlog de Carito</p>
            <p className="text-sm text-gray-600">
              Su canal personal funciona como amplificador de visibilidad para Emprendiendo Juntas,
              llegando a audiencias adicionales desde su voz y experiencia personal.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CarolinaSection;

