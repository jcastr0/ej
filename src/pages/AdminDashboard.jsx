import React, { useState } from 'react';
import { useBlog } from '@/context/BlogContext';
import { Button } from '@/components/ui/button';
import { CATEGORIES } from '@/data/categories';
import { Plus, Trash2, Edit, BarChart3, Eye, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const AdminDashboard = () => {
  const { posts, deletePost, addPost, updatePost, getStats } = useBlog();
  const [activeTab, setActiveTab] = useState('posts'); // 'posts' | 'stats' | 'create'
  const [editingId, setEditingId] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: CATEGORIES[0].name,
    excerpt: '',
    content: '',
    imageUrl: '',
    authorName: 'Equipo EJ'
  });

  const stats = getStats();

  const handleSubmit = (e) => {
    e.preventDefault();
    const slug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newPostData = {
      ...formData,
      slug,
      date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
      isoDate: new Date().toISOString().split('T')[0],
      readingTime: '5 min',
      author: {
        name: formData.authorName,
        role: 'Editor',
        image: 'https://horizons-cdn.hostinger.com/44782cdd-45ed-40ed-9124-e0edcb8986e7/logo_ej-K18L6.png'
      }
    };

    if (editingId) {
      updatePost(editingId, newPostData);
    } else {
      addPost(newPostData);
    }
    
    // Reset
    setFormData({ title: '', category: CATEGORIES[0].name, excerpt: '', content: '', imageUrl: '', authorName: 'Equipo EJ' });
    setEditingId(null);
    setActiveTab('posts');
  };

  const startEdit = (post) => {
    setFormData({
      title: post.title,
      category: post.category,
      excerpt: post.excerpt,
      content: typeof post.content === 'string' ? post.content : '',
      imageUrl: post.imageUrl,
      authorName: post.author.name
    });
    setEditingId(post.id);
    setActiveTab('create');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-8 max-w-6xl">
        <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <Button 
            variant={activeTab === 'posts' ? 'default' : 'outline'}
            onClick={() => setActiveTab('posts')}
            className={activeTab === 'posts' ? 'bg-[#A169A2]' : ''}
          >
            Gestionar Posts
          </Button>
          <Button 
            variant={activeTab === 'create' ? 'default' : 'outline'}
            onClick={() => { setActiveTab('create'); setEditingId(null); }}
            className={activeTab === 'create' ? 'bg-[#A169A2]' : ''}
          >
            <Plus className="w-4 h-4 mr-2" /> {editingId ? 'Editar Post' : 'Nuevo Post'}
          </Button>
          <Button 
            variant={activeTab === 'stats' ? 'default' : 'outline'}
            onClick={() => setActiveTab('stats')}
            className={activeTab === 'stats' ? 'bg-[#A169A2]' : ''}
          >
            <BarChart3 className="w-4 h-4 mr-2" /> Estadísticas
          </Button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          {activeTab === 'stats' && (
             <div className="grid md:grid-cols-3 gap-6">
               <div className="p-6 bg-purple-50 rounded-xl">
                 <h3 className="text-gray-500 text-sm font-medium">Total Artículos</h3>
                 <p className="text-3xl font-bold text-[#A169A2]">{stats.totalPosts}</p>
               </div>
               <div className="p-6 bg-blue-50 rounded-xl">
                 <h3 className="text-gray-500 text-sm font-medium">Total Visitas</h3>
                 <p className="text-3xl font-bold text-[#4CA7C0]">{stats.totalViews}</p>
               </div>
               <div className="p-6 bg-yellow-50 rounded-xl">
                 <h3 className="text-gray-500 text-sm font-medium">Valoración Promedio</h3>
                 <p className="text-3xl font-bold text-yellow-600">{stats.avgRating} / 5.0</p>
               </div>
             </div>
          )}

          {activeTab === 'posts' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100 text-gray-500 text-sm">
                    <th className="pb-3">Título</th>
                    <th className="pb-3">Categoría</th>
                    <th className="pb-3">Vistas</th>
                    <th className="pb-3 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {posts.map(post => (
                    <tr key={post.id} className="hover:bg-gray-50">
                      <td className="py-3 pr-4 font-medium text-gray-900">{post.title}</td>
                      <td className="py-3 pr-4">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{post.category}</span>
                      </td>
                      <td className="py-3 pr-4 text-sm text-gray-500">{post.views}</td>
                      <td className="py-3 text-right space-x-2">
                        <Button size="icon" variant="ghost" onClick={() => startEdit(post)}>
                          <Edit className="w-4 h-4 text-gray-500" />
                        </Button>
                        <Button size="icon" variant="ghost" onClick={() => deletePost(post.id)}>
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                        <Link to={`/blog/${post.slug}`}>
                          <Button size="icon" variant="ghost">
                            <Eye className="w-4 h-4 text-[#4CA7C0]" />
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'create' && (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-medium mb-1">Título</label>
                <input 
                  required
                  className="w-full border p-2 rounded-md"
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Categoría</label>
                  <select 
                    className="w-full border p-2 rounded-md"
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                  >
                    {CATEGORIES.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Autor</label>
                  <input 
                    className="w-full border p-2 rounded-md"
                    value={formData.authorName}
                    onChange={e => setFormData({...formData, authorName: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">URL Imagen (Unsplash)</label>
                <input 
                  className="w-full border p-2 rounded-md"
                  value={formData.imageUrl}
                  placeholder="https://images.unsplash.com/..."
                  onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Extracto (Resumen)</label>
                <textarea 
                  className="w-full border p-2 rounded-md h-20"
                  value={formData.excerpt}
                  onChange={e => setFormData({...formData, excerpt: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Contenido (HTML soportado)</label>
                <textarea 
                  className="w-full border p-2 rounded-md h-40 font-mono text-sm"
                  value={formData.content}
                  onChange={e => setFormData({...formData, content: e.target.value})}
                />
                <p className="text-xs text-gray-400 mt-1">Puedes usar tags HTML básicos como &lt;p&gt;, &lt;h2&gt;, &lt;ul&gt;.</p>
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="bg-[#A169A2]">
                  {editingId ? 'Actualizar Post' : 'Publicar Post'}
                </Button>
                <Button type="button" variant="outline" onClick={() => setActiveTab('posts')}>
                  Cancelar
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;