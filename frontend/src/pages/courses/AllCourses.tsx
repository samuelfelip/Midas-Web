import React from 'react';
import { Link } from 'react-router-dom';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  image: string;
  category: string;
  path: string;
}

const AllCourses: React.FC = () => {
  const courses: Course[] = [
    {
      id: '1',
      title: 'Trading de Forex',
      description: 'Aprende a operar en el mercado de divisas más grande del mundo',
      duration: '11 horas',
      level: 'Principiante a Intermedio',
      price: '$199',
      image: '/images/forex.jpg',
      category: 'Forex',
      path: '/courses/forex',
    },
    {
      id: '2',
      title: 'Trading en Bolsa',
      description: 'Domina el arte de invertir en el mercado de valores',
      duration: '13 horas',
      level: 'Principiante a Avanzado',
      price: '$249',
      image: '/images/stocks.jpg',
      category: 'Stocks',
      path: '/courses/stocks',
    },
    {
      id: '3',
      title: 'Trading de Criptomonedas',
      description: 'Sumérgete en el mundo de las criptomonedas y la tecnología blockchain',
      duration: '12 horas',
      level: 'Todos los niveles',
      price: '$199',
      image: '/images/crypto.jpg',
      category: 'Crypto',
      path: '/courses/crypto',
    },
  ];

  const categories = ['Todos', 'Forex', 'Stocks', 'Crypto'];
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  const filteredCourses = selectedCategory === 'Todos'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Nuestros Cursos</h1>

          {/* Filtros */}
          <div className="flex gap-4 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card hover:bg-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid de cursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <div key={course.id} className="bg-card rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-accent">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Duración</span>
                      <p className="font-medium">{course.duration}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Nivel</span>
                      <p className="font-medium">{course.level}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold">{course.price}</span>
                    <span className="text-sm text-muted-foreground bg-accent px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>

                  <Link to={course.path}>
                    <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 rounded-md font-medium">
                      Ver Detalles
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses; 