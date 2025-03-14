import React from 'react';
import { Link } from 'react-router-dom';

const StocksCourse: React.FC = () => {
  const courseModules = [
    {
      title: 'Fundamentos del Mercado de Valores',
      description: 'Comprende cómo funciona la bolsa de valores',
      duration: '3 horas',
    },
    {
      title: 'Análisis de Empresas',
      description: 'Evaluación fundamental de acciones',
      duration: '4 horas',
    },
    {
      title: 'Estrategias de Inversión',
      description: 'Técnicas de trading y gestión de portafolio',
      duration: '4 horas',
    },
    {
      title: 'Psicología del Trading',
      description: 'Control emocional y disciplina en el trading',
      duration: '2 horas',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Curso de Trading en Bolsa</h1>
          
          <div className="bg-card rounded-lg p-6 mb-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Descripción del Curso</h2>
            <p className="text-muted-foreground mb-4">
              Domina el arte de invertir en el mercado de valores. Aprenderás a analizar empresas,
              identificar oportunidades de inversión y construir un portafolio rentable.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-background p-4 rounded-md">
                <h3 className="font-semibold mb-2">Duración</h3>
                <p className="text-muted-foreground">13 horas de contenido</p>
              </div>
              <div className="bg-background p-4 rounded-md">
                <h3 className="font-semibold mb-2">Nivel</h3>
                <p className="text-muted-foreground">Principiante a Avanzado</p>
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
                <span>Análisis de casos reales de empresas cotizadas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Acceso a herramientas profesionales de análisis</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Estrategias probadas de inversión a largo plazo</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Mentorías grupales semanales</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StocksCourse; 