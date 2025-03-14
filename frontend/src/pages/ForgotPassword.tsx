import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Error al procesar la solicitud');
      }

      setMessage('Se ha enviado un enlace de recuperación a tu correo electrónico');
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al procesar la solicitud');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-center">
              Recuperar contraseña
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Ingresa tu correo electrónico y te enviaremos las instrucciones para restablecer tu contraseña.
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-md bg-destructive/10 p-4">
                <div className="text-sm text-destructive">{error}</div>
              </div>
            )}
            {message && (
              <div className="rounded-md bg-green-100 p-4">
                <div className="text-sm text-green-700">{message}</div>
              </div>
            )}
            <div>
              <label htmlFor="email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="/login" className="font-medium text-primary hover:text-primary/90">
                  Volver al inicio de sesión
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar instrucciones'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword; 