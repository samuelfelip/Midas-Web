import React, { useState } from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      setStatus({
        type: 'success',
        message: 'Mensaje enviado exitosamente. Nos pondremos en contacto pronto.',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Error al enviar el mensaje. Por favor, intenta nuevamente.',
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'contacto@midastrading.com',
      action: 'mailto:contacto@midastrading.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Teléfono',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Ubicación',
      details: 'Ciudad de México, México',
      action: 'https://maps.google.com',
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Encabezado */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
              <p className="text-xl text-muted-foreground">
                ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
              </p>
            </div>

            {/* Información de contacto */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4 text-primary">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.details}</p>
                </a>
              ))}
            </div>

            {/* Formulario de contacto */}
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
              
              {status.type && (
                <div
                  className={`mb-6 p-4 rounded-md ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-red-50 text-red-700'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="general">Consulta general</option>
                    <option value="courses">Información sobre cursos</option>
                    <option value="support">Soporte técnico</option>
                    <option value="business">Propuesta de negocio</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-md font-medium"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact; 