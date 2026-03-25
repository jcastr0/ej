export const CATEGORIES = [
  { id: 'gestion', name: 'Gestión y Planeación', color: 'bg-purple-100 text-purple-800', hex: '#A169A2' },
  { id: 'marketing', name: 'Marketing Digital', color: 'bg-blue-100 text-blue-800', hex: '#4CA7C0' },
  { id: 'social', name: 'Redes Sociales', color: 'bg-pink-100 text-pink-800', hex: '#E1306C' },
  { id: 'mindset', name: 'Mindset Emprendedor', color: 'bg-yellow-100 text-yellow-800', hex: '#F59E0B' },
  { id: 'finanzas', name: 'Finanzas Básicas', color: 'bg-green-100 text-green-800', hex: '#10B981' },
  { id: 'servicio', name: 'Servicio al Cliente', color: 'bg-orange-100 text-orange-800', hex: '#F97316' },
  { id: 'exito', name: 'Historias de Éxito', color: 'bg-teal-100 text-teal-800', hex: '#14B8A6' },
];

export const getCategoryById = (id) => CATEGORIES.find(c => c.id === id);
export const getCategoryByName = (name) => CATEGORIES.find(c => c.name === name);