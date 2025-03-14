import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/landing/Header';
import Footer from '../../components/landing/Footer';

const CryptoCourse: React.FC = () => {
  const courseModules = [
    {
      title: 'Introducción a las Criptomonedas',
      description: 'Blockchain, Bitcoin y el ecosistema crypto',
      duration: '3 horas',
    },
    {
      title: 'Trading de Criptomonedas',
      description: 'Estrategias específicas para mercados crypto',
      duration: '4 horas',
    },
    {
      title: 'DeFi y NFTs',
      description: 'Finanzas descentralizadas y tokens no fungibles',
      duration: '3 horas',
    },
    {
      title: 'Seguridad y Custodia',
      description: 'Protección de activos digitales',
      duration: '2 horas',
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Curso de Trading de Criptomonedas</h1>
            
            <div className="bg-card rounded-lg p-6 mb-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Descripción del Curso</h2>
              <p className="text-muted-foreground mb-4">
                Sumérgete en el mundo de las criptomonedas y la tecnología blockchain. Aprende a operar
                en los mercados crypto y descubre las oportunidades en DeFi y NFTs.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Duración</h3>
                  <p className="text-muted-foreground">12 horas de contenido</p>
                </div>
                <div className="bg-background p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Nivel</h3>
                  <p className="text-muted-foreground">Todos los niveles</p>
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
                  <span>Contenido actualizado con las últimas tendencias</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Guías paso a paso para operar en exchanges</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Estrategias de trading específicas para crypto</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Acceso a comunidad exclusiva de traders crypto</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CryptoCourse; 