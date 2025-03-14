import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Carlos Rodríguez',
      role: 'CEO & Fundador',
      bio: 'Trader profesional con más de 10 años de experiencia en mercados financieros',
      image: '/images/team/carlos.jpg',
    },
    {
      name: 'Ana Martínez',
      role: 'Directora de Educación',
      bio: 'Especialista en pedagogía financiera y análisis técnico',
      image: '/images/team/ana.jpg',
    },
    {
      name: 'David López',
      role: 'Analista Senior',
      bio: 'Experto en análisis fundamental y mercados internacionales',
      image: '/images/team/david.jpg',
    },
  ];

  const stats = [
    {
      number: '5000+',
      label: 'Estudiantes',
    },
    {
      number: '95%',
      label: 'Satisfacción',
    },
    {
      number: '24/7',
      label: 'Soporte',
    },
    {
      number: '3',
      label: 'Cursos Especializados',
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Sección Hero */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">Sobre Midas Trading Academy</h1>
              <p className="text-xl text-muted-foreground">
                Formando la próxima generación de traders profesionales con educación
                de calidad y mentoría personalizada.
              </p>
            </div>

            {/* Nuestra Misión */}
            <div className="bg-card rounded-lg p-8 shadow-lg mb-16">
              <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
              <p className="text-muted-foreground mb-6">
                En Midas Trading Academy, nos dedicamos a democratizar la educación financiera
                y el trading profesional. Creemos que con la formación adecuada, cualquier
                persona puede desarrollar las habilidades necesarias para operar exitosamente
                en los mercados financieros.
              </p>
              <p className="text-muted-foreground">
                Nuestro compromiso es proporcionar educación de alta calidad, herramientas
                prácticas y soporte continuo para ayudar a nuestros estudiantes a alcanzar
                sus objetivos financieros.
              </p>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Nuestro Equipo */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 text-center">Nuestro Equipo</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-w-1 aspect-h-1">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-64"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary mb-2">{member.role}</p>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Comienza tu viaje en el trading
              </h2>
              <p className="mb-6">
                Únete a nuestra comunidad y aprende de los mejores profesionales del mercado.
              </p>
              <Link to="/courses/all">
                <button className="bg-background text-foreground hover:bg-accent px-6 py-3 rounded-md font-medium">
                  Ver Nuestros Cursos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About; 