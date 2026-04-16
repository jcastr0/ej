import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { BarChart3, Download, Users, TrendingUp, Clock, MapPin, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getSurveyResponses, getSurveyStats, exportSurveyJSON, surveyQuestions } from '@/data/surveyData';

const StatBar = ({ label, count, pct, color = '#C49A2B' }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between items-baseline">
      <span className="text-sm text-gray-700 leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {label}
      </span>
      <span className="text-xs font-bold text-gray-500 ml-2 flex-shrink-0" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {count} ({pct}%)
      </span>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  </div>
);

const StatCard = ({ title, icon: Icon, data, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
  >
    <div className="flex items-center gap-3 mb-5">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: color + '15' }}>
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
    </div>
    <div className="space-y-4">
      {data.map((item, i) => (
        <StatBar key={i} {...item} color={color} />
      ))}
    </div>
  </motion.div>
);

const ResultadosEncuesta = () => {
  const stats = getSurveyStats();
  const responses = getSurveyResponses();

  const handleClear = () => {
    if (window.confirm('¿Estás segura de eliminar todas las respuestas? Esta acción no se puede deshacer.')) {
      localStorage.removeItem('bootcamp_survey_responses');
      window.location.reload();
    }
  };

  return (
    <>
      <Helmet>
        <title>Resultados Encuesta Bootcamp — Admin · Emprendiendo Juntas</title>
      </Helmet>

      <section className="pt-24 pb-20 px-5 min-h-screen bg-[#FAF8FC]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[#A169A2] font-semibold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Panel de resultados
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#19152A]">
                  Encuesta del <span className="text-[#C49A2B] italic">Bootcamp</span>
                </h1>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={exportSurveyJSON}
                  disabled={responses.length === 0}
                  className="bg-[#A169A2] hover:bg-[#8d5a8e] text-white rounded-full font-semibold"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Exportar JSON
                </Button>
                <Button
                  onClick={handleClear}
                  disabled={responses.length === 0}
                  variant="outline"
                  className="border-red-300 text-red-500 hover:bg-red-50 rounded-full font-semibold"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Limpiar
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Summary cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Users, label: 'Respuestas', value: responses.length, color: '#A169A2' },
              {
                icon: TrendingUp,
                label: 'Interés alto',
                value: stats
                  ? stats.interes
                      .filter((i) => i.label.includes('inscribo') || i.label.includes('saber más'))
                      .reduce((sum, i) => sum + i.count, 0)
                  : 0,
                color: '#C49A2B',
              },
              {
                icon: BarChart3,
                label: 'Precio $50-80k',
                value: stats
                  ? stats.precio
                      .filter((p) => p.label.includes('50.000') || p.label.includes('80.000'))
                      .reduce((sum, p) => sum + p.count, 0)
                  : 0,
                color: '#4CA7C0',
              },
              {
                icon: Clock,
                label: 'Última respuesta',
                value: responses.length > 0
                  ? new Date(responses[responses.length - 1].submittedAt).toLocaleDateString('es-ES')
                  : '—',
                color: '#E1306C',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
              >
                <card.icon className="w-6 h-6 mb-2" style={{ color: card.color }} />
                <p className="text-2xl font-bold text-[#19152A]">{card.value}</p>
                <p className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {card.label}
                </p>
              </motion.div>
            ))}
          </div>

          {!stats ? (
            <div className="text-center py-20">
              <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-400">Aún no hay respuestas</h2>
              <p className="text-gray-400 mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Comparte el enlace <code className="bg-gray-100 px-2 py-1 rounded text-sm">/encuesta-bootcamp</code> para comenzar a recopilar datos.
              </p>
            </div>
          ) : (
            <>
              {/* Charts grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <StatCard title="Interés en el Bootcamp" icon={TrendingUp} data={stats.interes} color="#C49A2B" />
                <StatCard title="Disposición de precio" icon={BarChart3} data={stats.precio} color="#A169A2" />
                <StatCard title="Mayor reto" icon={TrendingUp} data={stats.reto} color="#E1306C" />
                <StatCard title="Experiencia con IA" icon={BarChart3} data={stats.ia} color="#4CA7C0" />
                <StatCard title="Horario preferido" icon={Clock} data={stats.horario} color="#C49A2B" />
                <StatCard title="Modalidad preferida" icon={MapPin} data={stats.modalidad} color="#A169A2" />
                <StatCard title="Tipo de negocio" icon={Users} data={stats.negocio} color="#4CA7C0" />
                <StatCard title="Uso de redes sociales" icon={TrendingUp} data={stats.redes} color="#E1306C" />
              </div>

              {/* Responses table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900">Respuestas individuales</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-gray-500">
                        <th className="text-left py-3 px-4 font-medium">#</th>
                        <th className="text-left py-3 px-4 font-medium">Nombre</th>
                        <th className="text-left py-3 px-4 font-medium">WhatsApp</th>
                        <th className="text-left py-3 px-4 font-medium">Ciudad</th>
                        <th className="text-left py-3 px-4 font-medium">Interés</th>
                        <th className="text-left py-3 px-4 font-medium">Precio</th>
                        <th className="text-left py-3 px-4 font-medium">Fecha</th>
                      </tr>
                    </thead>
                    <tbody>
                      {responses.map((r, i) => (
                        <tr key={r.id} className="border-t border-gray-50 hover:bg-gray-50/50">
                          <td className="py-3 px-4 text-gray-400">{i + 1}</td>
                          <td className="py-3 px-4 font-medium text-gray-900">{r.answers.nombre || '—'}</td>
                          <td className="py-3 px-4 text-gray-600">{r.answers.whatsapp || '—'}</td>
                          <td className="py-3 px-4 text-gray-600">{r.answers.ciudad || '—'}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${
                                r.answers.interes_bootcamp?.includes('inscribo')
                                  ? 'bg-green-100 text-green-700'
                                  : r.answers.interes_bootcamp?.includes('saber más')
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              {r.answers.interes_bootcamp?.split(',')[0] || '—'}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{r.answers.precio || '—'}</td>
                          <td className="py-3 px-4 text-gray-400 text-xs">
                            {new Date(r.submittedAt).toLocaleDateString('es-ES')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ResultadosEncuesta;

