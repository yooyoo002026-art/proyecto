export interface PageData {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  calcType: 'gas' | 'earnings' | 'costs';
}

export const pages: PageData[] = [
  { slug: 'cuanto-gana-uber-en-mexico', keyword: 'cuanto gana un uber en mexico', title: '¿Cuánto gana un Uber en México? | Calculadora Real 2024', description: 'Descubre cuánto gana un Uber en México realmente. Usa nuestra calculadora de ganancias netas, considerando gasolina y gastos operativos diarios.', h1: 'Descubre cuánto gana un Uber en México y calcula tus ganancias', calcType: 'earnings' },
  { slug: 'cuanto-gasta-uber-en-gasolina', keyword: 'cuanto gasta un uber en gasolina', title: '¿Cuánto gasta un Uber en gasolina? | Calculadora de Gastos', description: 'Calcula exactamente cuánto gasta un Uber en gasolina por día y mes. Optimiza tus ganancias controlando el rendimiento y consumo de tu auto.', h1: 'Aprende cuánto gasta un Uber en gasolina y reduce tus costos', calcType: 'gas' },
  { slug: 'calculadora-gasolina-por-km', keyword: 'calculadora gasolina por km', title: 'Calculadora Gasolina por Km | Calcula tu Costo Diario', description: 'Usa nuestra calculadora gasolina por km gratuita. Conoce el costo real de tu combustible por cada viaje y optimiza tus ganancias como conductor.', h1: 'La mejor calculadora gasolina por km para conductores de apps', calcType: 'gas' },
  { slug: 'calculadora-ganancias-uber', keyword: 'calculadora ganancias uber', title: 'Calculadora Ganancias Uber | Estima tus Ingresos Reales', description: 'Utiliza esta calculadora ganancias uber para proyectar tu sueldo mensual. Resta gasolina y comisiones para obtener tu ganancia neta diaria.', h1: 'Prueba la calculadora ganancias uber y proyecta tu sueldo mensual', calcType: 'earnings' },
  { slug: 'cuanto-cuesta-trabajar-en-uber', keyword: 'cuanto cuesta trabajar en uber', title: '¿Cuánto cuesta trabajar en Uber? | Gastos y Calculadora', description: 'Averigua cuánto cuesta trabajar en Uber realmente. Desglosamos gastos de gasolina, mantenimiento y seguro para que sepas si es rentable.', h1: 'Descubre cuánto cuesta trabajar en Uber y calcula tu rentabilidad', calcType: 'costs' },
  { slug: 'cuanto-gana-un-uber-por-dia', keyword: 'cuanto gana un uber por dia', title: '¿Cuánto gana un Uber por día? | Calculadora de Ingresos', description: 'Conoce cuánto gana un Uber por día en promedio. Estima tus viajes diarios y calcula tu ganancia neta restando los costos operativos.', h1: 'Entiende cuánto gana un Uber por día con datos reales', calcType: 'earnings' },
  { slug: 'cuanto-gana-un-uber-al-mes', keyword: 'cuanto gana un uber al mes', title: '¿Cuánto gana un Uber al mes? | Sueldo Real y Calculadora', description: 'Analiza cuánto gana un Uber al mes trabajando tiempo completo o medio tiempo. Utiliza la calculadora para estimar tus ingresos mensuales netos.', h1: 'Sabe cuánto gana un Uber al mes y planifica tu economía', calcType: 'earnings' },
  { slug: 'calculadora-costo-por-kilometro', keyword: 'costo por kilometro auto', title: 'Calculadora: Costo por kilómetro auto | Gastos Exactos', description: 'Calcula el costo por kilometro auto con nuestra herramienta gratuita. Indispensable para choferes de Uber o DiDi que desean maximizar utilidades.', h1: 'Calcula el costo por kilometro auto y mejora tu rentabilidad', calcType: 'gas' },
  { slug: 'calculadora-costo-viaje-uber', keyword: 'costo por viaje uber', title: 'Calculadora: Costo por viaje Uber | Analiza tus Gastos', description: 'Determina el costo por viaje uber exacto considerando desgaste, gasolina y tiempo. Maximiza las ganancias de tu jornada laboral.', h1: 'Mide el costo por viaje uber y no pierdas dinero al manejar', calcType: 'costs' },
  { slug: 'cuanto-gasta-un-auto-en-gasolina', keyword: 'cuanto gasta un auto en gasolina', title: '¿Cuánto gasta un auto en gasolina? | Calculadora 2024', description: 'Averigua cuánto gasta un auto en gasolina mensual y diariamente. Herramienta vital para calcular rentabilidad en plataformas de transporte.', h1: 'Conoce cuánto gasta un auto en gasolina antes de trabajar', calcType: 'gas' },
  { slug: 'calculadora-rendimiento-gasolina', keyword: 'rendimiento gasolina km por litro', title: 'Calculadora: Rendimiento gasolina km por litro', description: 'Estima tu rendimiento gasolina km por litro. Descubre si tu vehículo es apto para trabajar en Uber o DiDi sin gastar todo en combustible.', h1: 'Mejora tu rendimiento gasolina km por litro con esta calculadora', calcType: 'gas' },
  { slug: 'calculadora-gastos-conductor-uber', keyword: 'gastos conductor uber', title: 'Calculadora de Gastos Conductor Uber | Controla tu Dinero', description: 'Gestiona los gastos conductor uber eficientemente. Desde gasolina hasta mantenimiento, conoce tu punto de equilibrio diario y mensual.', h1: 'Administra los gastos conductor uber y asegura tus ganancias', calcType: 'costs' },
  { slug: 'cuanto-gana-un-didi-en-mexico', keyword: 'cuanto gana didi en mexico', title: '¿Cuánto gana DiDi en México? | Sueldo y Calculadora', description: 'Descubre cuánto gana didi en mexico. Compara tarifas, bonos y comisiones para saber si conviene más que otras aplicaciones de transporte.', h1: 'Averigua cuánto gana didi en mexico trabajando tiempo completo', calcType: 'earnings' },
  { slug: 'cuanto-gana-un-repartidor', keyword: 'cuanto gana un repartidor', title: '¿Cuánto gana un repartidor? | Uber Eats, DiDi Food y Rappi', description: 'Conoce cuánto gana un repartidor en moto o auto. Calcula tus ganancias diarias restando el costo de combustible y mantenimiento.', h1: 'Entérate de cuánto gana un repartidor en las apps más populares', calcType: 'earnings' },
  { slug: 'calculadora-sueldo-conductor', keyword: 'sueldo conductor uber', title: 'Calculadora Sueldo Conductor Uber | Estima tus Ganancias', description: 'Calcula el sueldo conductor uber real. Ingresa tus horas de conexión y viajes promedio para obtener tu ingreso mensual libre de polvo y paja.', h1: 'Proyecta tu sueldo conductor uber con nuestra calculadora gratuita', calcType: 'earnings' },
  { slug: 'cuanto-gana-uber-por-viaje', keyword: 'cuanto gana uber por viaje', title: '¿Cuánto gana Uber por viaje? | Comisiones y Ganancias', description: 'Entiende cuánto gana uber por viaje descontando comisiones e impuestos. Herramienta útil para seleccionar los viajes más rentables.', h1: 'Descubre cuánto gana uber por viaje y elige mejor tus rutas', calcType: 'earnings' },
  { slug: 'calculadora-ingresos-uber', keyword: 'ingresos uber calculadora', title: 'Calculadora de Ingresos Uber | Proyección Diaria y Mensual', description: 'Usa nuestra ingresos uber calculadora para planear tu semana laboral. Resta los gastos operativos y descubre tu ganancia neta real.', h1: 'Aprovecha nuestra ingresos uber calculadora y planifica tus metas', calcType: 'earnings' },
  { slug: 'cuanto-gasta-uber-por-dia', keyword: 'cuanto gasta uber por dia', title: '¿Cuánto gasta Uber por día? | Combustible y Mantenimiento', description: 'Analiza cuánto gasta uber por dia en promedio. Conocer tus costos diarios es la clave para ser un conductor rentable a largo plazo.', h1: 'Calcula cuánto gasta uber por dia y no trabajes perdiendo dinero', calcType: 'costs' },
  { slug: 'calculadora-costos-auto', keyword: 'costo de mantener un auto', title: 'Calculadora: Costo de mantener un auto trabajando en Apps', description: 'Descubre el costo de mantener un auto. Desde tenencia, seguro, servicios y gasolina, calcula tu gasto anual total fácilmente.', h1: 'Conoce el verdadero costo de mantener un auto para trabajar', calcType: 'costs' },
  { slug: 'cuanto-cuesta-mantener-un-auto', keyword: 'cuanto cuesta mantener un auto', title: '¿Cuánto cuesta mantener un auto? | Guía para Conductores', description: 'Entérate de cuánto cuesta mantener un auto si lo usas para Uber o DiDi. Haz un presupuesto claro y asegura la rentabilidad de tu negocio.', h1: 'Averigua cuánto cuesta mantener un auto trabajando todos los días', calcType: 'costs' }
];

export const generateContent = (page: PageData) => {
  const k = page.keyword;
  
  return {
    intro: `
      Muchos conductores y aspirantes a trabajar en aplicaciones de movilidad se preguntan constantemente sobre temas financieros relacionados con sus vehículos. 
      Comprender a fondo <strong>${k}</strong> es el primer paso para garantizar que tu trabajo sea verdaderamente rentable. 
      Ya sea que manejes en Uber, DiDi, o trabajes como repartidor, la gestión financiera es fundamental. En esta guía completa y detallada, 
      te explicaremos todo lo que necesitas saber, desglosando los gastos ocultos, los ingresos brutos y netos, y proporcionándote herramientas prácticas. 
      El objetivo principal es que, al terminar de leer este artículo sobre <em>${k}</em>, tengas una visión clara y matemática de tu negocio sobre ruedas, 
      evitando pérdidas por desconocimiento de factores clave como la depreciación, el desgaste de las llantas o el gasto hormiga en combustible.
    `,
    problem: `
      El problema principal al que se enfrentan miles de socios conductores es la falta de educación financiera aplicada a los vehículos de trabajo. 
      Cuando alguien busca información sobre <strong>${k}</strong>, generalmente es porque ha notado que sus ingresos a fin de mes no cuadran 
      con las horas invertidas al volante. Los ingresos brutos (lo que la aplicación te deposita) rara vez reflejan tu ganancia real. 
      Hay que descontar gasolina, planes de datos móviles, seguros de cobertura amplia para plataformas, mantenimiento preventivo (aceite, balatas, filtros) 
      y la depreciación inevitable del coche. Sin una estrategia clara para abordar la cuestión de <em>${k}</em>, muchos conductores terminan subsidiando 
      los viajes de los pasajeros con el valor de su propio automóvil, dándose cuenta del error meses después cuando se presenta una avería mecánica costosa 
      y no cuentan con un fondo de emergencia.
    `,
    howItWorks: `
      Nuestra calculadora está diseñada específicamente para resolver tus dudas sobre <strong>${k}</strong> mediante una interfaz sencilla impulsada por 
      HTML y JavaScript. Para utilizarla, simplemente debes ingresar los valores que corresponden a tu jornada laboral habitual. 
      Si es una calculadora de gasolina, ingresa el costo por litro en tu ciudad y el rendimiento real de tu motor. Si es una calculadora de ingresos, 
      coloca el precio promedio por viaje y el número de viajes diarios. El algoritmo procesa instantáneamente estos datos para arrojarte una cifra neta, 
      restándole los factores de fricción comunes en el manejo por aplicación. Conocer estos números en tiempo real te permite decidir si vale la pena 
      salir a trabajar en ciertas horas del día o si es mejor esperar a que haya tarifas dinámicas (multiplicadores de alta demanda).
    `,
    example: `
      Veamos un ejemplo práctico con números reales en México para entender mejor <strong>${k}</strong>. 
      Supongamos que un conductor sale a trabajar 6 días a la semana durante 10 horas diarias. Si su vehículo tiene un motor de 1.6 litros que rinde 
      aproximadamente 12 km por litro en ciudad con tráfico denso, y el precio de la gasolina magna ronda los $23.50 MXN, el costo por kilómetro es de 
      casi $1.95 MXN. Si en un día recorre 200 kilómetros, estará gastando $390 MXN únicamente en combustible. Ahora bien, si ese día generó $1,200 MXN 
      brutos en viajes, su ganancia después de gasolina será de $810 MXN. Sin embargo, a este monto de $810 MXN aún falta restarle la proporción diaria 
      del seguro de auto, el cambio de aceite futuro, el plan de celular y los impuestos retenidos. Analizar <em>${k}</em> de esta manera realista 
      es lo que diferencia a un conductor amateur de un verdadero profesional del volante.
    `,
    factors: `
      Existen múltiples factores externos e internos que pueden alterar dramáticamente el cálculo de <strong>${k}</strong>. 
      <ul class="list-disc pl-6 mt-4 space-y-2 text-gray-700">
        <li><strong>El tráfico de la ciudad:</strong> Estar atascado en el tráfico reduce drásticamente tu rendimiento de kilómetros por litro a casi la mitad.</li>
        <li><strong>Tipo y peso del vehículo:</strong> Un auto sedán compacto o un híbrido generará muchos menos gastos que una camioneta SUV.</li>
        <li><strong>Mantenimiento general:</strong> Llantas desinfladas o bujías viejas pueden aumentar tu consumo de combustible hasta en un 20%.</li>
        <li><strong>Estilo de conducción:</strong> Acelerar bruscamente de semáforo a semáforo consume mucha más gasolina que mantener una velocidad constante.</li>
        <li><strong>Uso del aire acondicionado:</strong> En zonas de mucho calor, llevar el AC encendido en todo momento impacta directamente en tu bolsillo.</li>
      </ul>
      Tener en cuenta estos puntos te ayudará a optimizar tus resultados financieros al volante.
    `,
    faqs: [
      {
        q: `¿Cuál es el secreto mejor guardado sobre ${k}?`,
        a: `El secreto es llevar un registro diario en una libreta o aplicación de celular. Anotar el kilometraje inicial, final, monto cargado de combustible e ingresos totales. Al cabo de un mes, tendrás una respuesta exacta y personalizada sobre ${page.keyword}.`
      },
      {
        q: `¿Cómo afecta el modelo de mi auto en relación a ${k}?`,
        a: `Afecta muchísimo. Vehículos de 4 cilindros con motores entre 1.2L y 1.6L son el estándar de oro para aplicaciones, ofreciendo un equilibrio perfecto entre potencia y economía para maximizar resultados relacionados con ${page.keyword}.`
      },
      {
        q: `¿Es rentable trabajar en aplicaciones considerando el tema de ${k}?`,
        a: `Sí, sigue siendo rentable si trabajas de forma inteligente. Esto significa enfocarte en horarios de alta demanda, evitar kilómetros vacíos (conducir sin pasaje) y tener un estricto control sobre ${page.keyword}.`
      },
      {
        q: `¿Puedo reducir mis gastos de gasolina cambiando mi estilo de manejo?`,
        a: `Totalmente. Aplicar técnicas de "hypermiling" o conducción ecológica, como anticipar las frenadas y no sobrepasar los límites de velocidad urbanos, es vital para mejorar tus números respecto a ${page.keyword}.`
      },
      {
        q: `¿Qué otras herramientas existen para controlar ${k}?`,
        a: `Además de la calculadora de esta página, existen medidores OBD2 Bluetooth que se conectan al puerto de tu auto y a tu celular, brindándote telemetría en tiempo real sobre consumo y rendimiento real.`
      }
    ],
    conclusion: `
      En conclusión, tener el control total sobre <strong>${k}</strong> no es opcional si deseas tener éxito como conductor de plataformas de movilidad. 
      La diferencia entre fracasar y tener un negocio próspero radica en los detalles y en los centavos. Te recomendamos ampliamente utilizar la 
      calculadora proporcionada en esta página de forma recurrente, guardar este sitio en tus favoritos y ajustar tu estrategia de manejo 
      semanalmente. Ahora que conoces la realidad sobre <em>${k}</em>, tienes las herramientas necesarias para salir a la calle y tomar decisiones 
      que beneficiarán directamente a tu cartera y al bienestar de tu familia. ¡Mucho éxito en tus próximos viajes!
    `
  };
};