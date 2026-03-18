import React from 'react';
import { Link } from 'react-router-dom';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col">
      <header className="bg-gray-900 text-white p-4 text-center sticky top-0 z-10 shadow-md">
        <Link to="/" className="text-xl font-bold hover:text-blue-300 transition-colors">
          Calculadoras para Conductores
        </Link>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white my-4 shadow-sm rounded-md">
        {children}
      </main>

      <footer className="bg-gray-900 text-white p-6 text-center mt-auto">
        <p className="mb-2">Calculadoras y Guías para conductores de Uber y DiDi</p>
        <p className="text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Política de privacidad</a> |{' '}
          <a href="#" className="hover:text-white transition-colors">Términos</a>
        </p>
      </footer>
    </div>
  );
};
