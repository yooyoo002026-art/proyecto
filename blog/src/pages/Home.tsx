import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { pages } from '../data';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <Helmet>
        <title>Calculadoras para Conductores | Uber, DiDi y Repartidores</title>
        <meta name="description" content="Accede a las mejores calculadoras gratuitas para conductores de apps. Mide tus ganancias, costos y gasolina por kilómetro." />
      </Helmet>

      <section className="mb-16 rounded-[36px] bg-[#f5f7fc] px-4 py-10 sm:px-8 sm:py-16 text-center">
        <div className="mx-auto mb-8 h-8 w-full max-w-5xl rounded-full bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 opacity-40"></div>
        <h1 className="mx-auto max-w-4xl text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
          Herramientas inteligentes para conductores
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-500">
          Calcula gasolina, ganancias reales y el costo de tus viajes fácilmente.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Calculadoras disponibles</h2>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {pages.map((p) => (
          <article
            key={p.slug}
            className="rounded-[28px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
          >
            <h3 className="text-[22px] leading-tight font-extrabold text-slate-900 mb-3">
              {p.title.split('|')[0]}
            </h3>
            <p className="min-h-[78px] text-lg leading-8 text-slate-500">
              {p.description.length > 95 ? `${p.description.substring(0, 95)}...` : p.description}
            </p>
            <div className="mt-6">
              <Link
                to={`/${p.slug}`}
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-sm transition hover:bg-blue-700"
              >
                Abrir calculadora
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
