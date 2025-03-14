import React from 'react';
import { Link } from 'react-router-dom';

const ForexCourse: React.FC = () => {
  const courseModules = [
    {
      title: 'Introducción al Forex',
      description: 'Fundamentos básicos del mercado de divisas',
      duration: '2 horas',
    },
    {
      title: 'Análisis Técnico',
      description: 'Herramientas y patrones de trading',
      duration: '4 horas',
    },
    {
      title: 'Análisis Fundamental',
      description: 'Indicadores económicos y su impacto',
      duration: '3 horas',
    },
    {
      title: 'Gestión de Riesgo',
      description: 'Estrategias de manejo de capital',
      duration: '2 horas',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Curso de Trading Forex</h1>
          
          <div className="bg-card rounded-lg p-6 mb-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Descripción del Curso</h2>
            <p className="text-muted-foreground mb-4">
              Aprende a operar en el mercado de divisas más grande del mundo. Este curso te proporcionará
              las herramientas y conocimientos necesarios para comenzar tu carrera como trader de Forex.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-background p-4 rounded-md">
                <h3 className="font-semibold mb-2">Duración</h3>
                <p className="text-muted-foreground">11 horas de contenido</p>
              </div>
              <div className="bg-background p-4 rounded-md">
                <h3 className="font-semibold mb-2">Nivel</h3>
                <p className="text-muted-foreground">Principiante a Intermedio</p>
              </div>
            </div>
            <Link to="/register">
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-md font-medium">
                Inscríbete Ahora
              </button>
            </Link>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Contenido del Curso</h2>
            {courseModules.map((module, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">{module.title}</h3>
                  <span className="text-sm text-muted-foreground">{module.duration}</span>
                </div>
                <p className="text-muted-foreground">{module.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">¿Por qué elegir este curso?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Acceso de por vida al contenido del curso</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Soporte personalizado de instructores expertos</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Ejercicios prácticos y casos de estudio reales</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Comunidad activa de traders</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForexCourse; 