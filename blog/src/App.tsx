import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fc] font-sans text-slate-900">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-slate-900">
            Control Total Conductor
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
            >
              Herramientas y más
            </Link>
            <Link
              to="/calculadora-gasolina-por-km"
              className="hidden sm:inline-flex items-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
            >
              Calcular gasto
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<CalculatorPage />} />
        </Routes>
      </main>

      <footer className="bg-white pt-4 sm:pt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-4 h-8 w-full max-w-5xl rounded-full bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 opacity-40"></div>
        </div>

        <section className="bg-[#131b2d] py-16 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold">App para conductores</h2>
            <p className="mt-4 text-lg text-slate-200">
              Estamos desarrollando la app <span className="font-bold">Control Total Conductor</span> para ayudarte a controlar ingresos,
              gasolina y rentabilidad real.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-lg font-medium text-white shadow-lg transition hover:bg-blue-700"
              >
                Próximamente — Regístrate aquí
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Calculadoras de Ganancias</h3>
            <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-slate-500">
              Las mejores herramientas para conductores de Uber y DiDi. Todas las tácticas, costos y gastos desglosados para mejorar tu rentabilidad en México.
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
}
