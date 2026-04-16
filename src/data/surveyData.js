/**
 * Bootcamp Survey Service
 * Maneja la persistencia de respuestas de la encuesta de validación del bootcamp.
 * Usa localStorage para simular base de datos.
 */

const STORAGE_KEY = 'bootcamp_survey_responses';

export const surveyQuestions = [
  {
    id: 'nombre',
    type: 'text',
    label: '¿Cómo te llamas?',
    placeholder: 'Tu nombre completo',
    required: true,
  },
  {
    id: 'whatsapp',
    type: 'tel',
    label: '¿Cuál es tu número de WhatsApp?',
    placeholder: 'Ej: 300 123 4567',
    required: true,
  },
  {
    id: 'ciudad',
    type: 'text',
    label: '¿En qué ciudad estás?',
    placeholder: 'Ej: Santa Marta',
    required: true,
  },
  {
    id: 'negocio',
    type: 'select',
    label: '¿Tienes un emprendimiento activo?',
    options: [
      'Sí, ya vendo productos físicos',
      'Sí, vendo servicios',
      'Estoy empezando, aún no vendo',
      'Tengo la idea pero no he comenzado',
    ],
    required: true,
  },
  {
    id: 'producto',
    type: 'text',
    label: '¿Qué vendes o qué te gustaría vender?',
    placeholder: 'Ej: Accesorios artesanales, alimentos, cosméticos…',
    required: true,
  },
  {
    id: 'redes',
    type: 'select',
    label: '¿Usas redes sociales para tu negocio?',
    options: [
      'Sí, publico frecuentemente pero no vendo como quisiera',
      'Sí, pero publico sin estrategia',
      'Tengo cuenta pero casi no publico',
      'No tengo redes para mi negocio',
    ],
    required: true,
  },
  {
    id: 'mayor_reto',
    type: 'select',
    label: '¿Cuál es tu mayor reto hoy como emprendedora?',
    options: [
      'No sé cómo crear contenido que venda',
      'No tengo una estrategia de marketing digital',
      'Mis fotos de producto no se ven profesionales',
      'No sé usar herramientas de inteligencia artificial',
      'Me falta visibilidad y alcance en redes',
      'No sé fijar precios ni calcular costos',
      'Todo lo anterior',
    ],
    required: true,
  },
  {
    id: 'ia_experiencia',
    type: 'select',
    label: '¿Has usado herramientas de inteligencia artificial (ChatGPT, Claude, Gemini)?',
    options: [
      'Sí, las uso frecuentemente',
      'Las he probado pero no sé aprovecharlas para mi negocio',
      'He escuchado de ellas pero nunca las he usado',
      'No sé qué son',
    ],
    required: true,
  },
  {
    id: 'interes_bootcamp',
    type: 'select',
    label: 'Si existiera un bootcamp de 4 horas donde construyes tu estrategia de contenido, copies y piezas visuales con IA, ¿te interesaría?',
    options: [
      '¡Sí, me inscribo ya!',
      'Me interesa, quiero saber más',
      'Tal vez, depende del precio y horario',
      'No me interesa por ahora',
    ],
    required: true,
  },
  {
    id: 'precio',
    type: 'select',
    label: '¿Cuánto estarías dispuesta a invertir en una formación así?',
    options: [
      'Menos de $30.000 COP',
      'Entre $30.000 y $50.000 COP',
      'Entre $50.000 y $80.000 COP',
      'Entre $80.000 y $120.000 COP',
      'Más de $120.000 COP si el contenido lo vale',
    ],
    required: true,
  },
  {
    id: 'horario',
    type: 'select',
    label: '¿Qué horario te funciona mejor?',
    options: [
      'Mañana (8am - 12pm)',
      'Tarde (2pm - 6pm)',
      'Noche (7pm - 10pm)',
      'Fines de semana',
    ],
    required: true,
  },
  {
    id: 'modalidad',
    type: 'select',
    label: '¿Qué modalidad prefieres?',
    options: [
      'Virtual en vivo (Zoom/Google Meet)',
      'Presencial en Santa Marta',
      'Cualquiera de las dos',
    ],
    required: true,
  },
  {
    id: 'comentario',
    type: 'textarea',
    label: '¿Hay algo más que te gustaría que incluyera este bootcamp?',
    placeholder: 'Cuéntanos qué te gustaría aprender o resolver…',
    required: false,
  },
];

export const saveSurveyResponse = (answers) => {
  try {
    const existingData = localStorage.getItem(STORAGE_KEY);
    const responses = existingData ? JSON.parse(existingData) : [];

    const newResponse = {
      id: Date.now(),
      answers,
      submittedAt: new Date().toISOString(),
    };

    responses.push(newResponse);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(responses));

    console.log('Survey response saved:', newResponse);
    console.log('Total responses:', responses.length);

    return {
      success: true,
      message: '¡Gracias por completar la encuesta! Tu opinión es muy valiosa para nosotras.',
    };
  } catch (error) {
    console.error('Survey save error:', error);
    return {
      success: false,
      message: 'Hubo un error al guardar tu respuesta. Por favor intenta de nuevo.',
    };
  }
};

export const getSurveyResponses = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

export const getSurveyStats = () => {
  const responses = getSurveyResponses();
  if (responses.length === 0) return null;

  const countByField = (fieldId) => {
    const counts = {};
    responses.forEach((r) => {
      const val = r.answers[fieldId];
      if (val) counts[val] = (counts[val] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([label, count]) => ({ label, count, pct: Math.round((count / responses.length) * 100) }))
      .sort((a, b) => b.count - a.count);
  };

  return {
    total: responses.length,
    interes: countByField('interes_bootcamp'),
    precio: countByField('precio'),
    horario: countByField('horario'),
    modalidad: countByField('modalidad'),
    reto: countByField('mayor_reto'),
    ia: countByField('ia_experiencia'),
    negocio: countByField('negocio'),
    redes: countByField('redes'),
  };
};

export const exportSurveyJSON = () => {
  const responses = getSurveyResponses();
  const blob = new Blob([JSON.stringify(responses, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `encuesta_bootcamp_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

