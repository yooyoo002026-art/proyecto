import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { pages, generateContent } from '../data';
import { GasCalculator, EarningsCalculator, CostsCalculator } from '../components/Calculators';

export default function CalculatorPage() {
  const { slug } = useParams<{ slug: string }>();

  const page = pages.find((p) => p.slug === slug);
  if (!page) {
    return <Navigate to="/" replace />;
  }

  const content = generateContent(page);

  return (
    <>
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <section className="rounded-[36px] bg-[#f5f7fc] px-4 py-10 sm:px-8 sm:py-16 text-center">
          <h1 className="mx-auto max-w-5xl text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            {page.h1}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-500">{page.description}</p>
          <div className="mt-8 text-left text-slate-700 text-lg leading-relaxed max-w-4xl mx-auto" dangerouslySetInnerHTML={{ __html: content.intro }}></div>
        </section>

        <div className="mx-auto mt-8 max-w-5xl">
          {page.calcType === 'gas' && <GasCalculator />}
          {page.calcType === 'earnings' && <EarningsCalculator />}
          {page.calcType === 'costs' && <CostsCalculator />}
        </div>

        <article className="prose prose-lg max-w-5xl mx-auto px-1 sm:px-2 pt-10 text-slate-700">

          <h2 className="!text-slate-900">El problema de no calcular tus números</h2>
          <p dangerouslySetInnerHTML={{ __html: content.problem }} className="leading-relaxed"></p>

          <h2 className="!text-slate-900">Cómo funciona esta herramienta</h2>
          <p dangerouslySetInnerHTML={{ __html: content.howItWorks }} className="leading-relaxed"></p>

          <h2 className="!text-slate-900">Ejemplo real en México</h2>
          <p dangerouslySetInnerHTML={{ __html: content.example }} className="leading-relaxed"></p>

          <h2 className="!text-slate-900">Factores que afectan este cálculo</h2>
          <div dangerouslySetInnerHTML={{ __html: content.factors }} className="leading-relaxed"></div>
        </article>

        <section className="mt-16 bg-[#131b2d] py-16 text-white rounded-[36px]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold">App completa para conductores</h2>
            <p className="mt-4 text-lg text-slate-200">
              La calculadora es solo el inicio. La app <span className="font-bold">Control Total Conductor</span> te permite llevar control total de tu negocio como conductor.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-lg font-medium text-white shadow-lg transition hover:bg-blue-700"
              >
                Próximamente — Regístrate aquí
              </a>
              <p className="mt-4 text-sm text-slate-400">🔥 Más de 327 conductores ya están en lista de espera</p>
            </div>
          </div>
        </section>

        <article className="prose prose-lg max-w-5xl mx-auto px-1 sm:px-2 pt-10 text-slate-700">
          <h2 className="!text-slate-900">Preguntas Frecuentes</h2>
          <div className="not-prose space-y-6 mt-6">
            {content.faqs.map((faq, idx) => (
              <div key={idx} className="rounded-[24px] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-lg leading-8">{faq.a}</p>
              </div>
            ))}
          </div>

          <h2 className="!text-slate-900">Conclusión</h2>
          <p dangerouslySetInnerHTML={{ __html: content.conclusion }} className="leading-relaxed"></p>
        </article>

        <section className="max-w-5xl mx-auto mt-14 border-t border-slate-200 pt-8">
          <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Explora otras calculadoras</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pages
              .filter((p) => p.slug !== slug)
              .slice(0, 4)
              .map((p) => (
                <Link
                  key={p.slug}
                  to={`/${p.slug}`}
                  className="rounded-[24px] bg-white p-6 text-slate-900 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
                >
                  <span className="block text-xl font-bold">{p.title.split('|')[0]}</span>
                  <span className="mt-3 inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                    Abrir calculadora
                  </span>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
