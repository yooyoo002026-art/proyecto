import { useState } from 'react';

function CalculatorShell({
  title,
  children,
  resultLabel,
  resultValue,
  buttonText,
  onCalculate,
}: {
  title: string;
  children: React.ReactNode;
  resultLabel: string;
  resultValue: string;
  buttonText: string;
  onCalculate: () => void;
}) {
  return (
    <section className="my-10 rounded-[30px] bg-white p-6 sm:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{title}</h2>
      <div className="mt-6 space-y-5">{children}</div>
      <button
        onClick={onCalculate}
        className="mt-6 w-full rounded-2xl bg-blue-600 px-5 py-4 text-base font-medium text-white transition hover:bg-blue-700"
      >
        {buttonText}
      </button>
      <div className="mt-8 text-center">
        <p className="text-xl text-slate-600">{resultLabel}</p>
        <p className="mt-2 text-4xl sm:text-5xl font-extrabold text-blue-600">{resultValue}</p>
      </div>
    </section>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[18px] font-medium text-slate-700">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-500"
      />
    </div>
  );
}

export function GasCalculator() {
  const [precio, setPrecio] = useState('');
  const [rendimiento, setRendimiento] = useState('');
  const [km, setKm] = useState('');
  const [resultado, setResultado] = useState('$0');

  const calcular = () => {
    const p = parseFloat(precio);
    const r = parseFloat(rendimiento);
    const k = parseFloat(km) || 0;

    if (p && r) {
      const costoPorKm = p / r;
      const costoTotal = k > 0 ? costoPorKm * k : costoPorKm;
      setResultado(`$${costoTotal.toFixed(2)}`);
    }
  };

  return (
    <CalculatorShell
      title="Calcula tu gasto de gasolina"
      resultLabel={km ? 'Costo estimado del recorrido' : 'Costo por kilómetro'}
      resultValue={resultado}
      buttonText="Calcular costo por km"
      onCalculate={calcular}
    >
      <InputField label="Precio de gasolina por litro" value={precio} onChange={setPrecio} placeholder="Ejemplo: 23" />
      <InputField label="Kilómetros por litro" value={rendimiento} onChange={setRendimiento} placeholder="Ejemplo: 12" />
      <InputField label="Kilómetros recorridos" value={km} onChange={setKm} placeholder="Ejemplo: 120" />
    </CalculatorShell>
  );
}

export function EarningsCalculator() {
  const [precioViaje, setPrecioViaje] = useState('');
  const [numViajes, setNumViajes] = useState('');
  const [dias, setDias] = useState('');
  const [resultado, setResultado] = useState('$0');

  const calcular = () => {
    const p = parseFloat(precioViaje);
    const n = parseFloat(numViajes);
    const d = parseFloat(dias);

    if (p && n && d) {
      const ingresoTotal = p * n * d;
      setResultado(`$${ingresoTotal.toFixed(2)}`);
    }
  };

  return (
    <CalculatorShell
      title="Calcula tus ganancias"
      resultLabel="Ganancia estimada"
      resultValue={resultado}
      buttonText="Calcular ganancias"
      onCalculate={calcular}
    >
      <InputField label="Precio por viaje" value={precioViaje} onChange={setPrecioViaje} placeholder="Ejemplo: 85" />
      <InputField label="Número de viajes" value={numViajes} onChange={setNumViajes} placeholder="Ejemplo: 14" />
      <InputField label="Días trabajados" value={dias} onChange={setDias} placeholder="Ejemplo: 26" />
    </CalculatorShell>
  );
}

export function CostsCalculator() {
  const [gasolina, setGasolina] = useState('');
  const [seguro, setSeguro] = useState('');
  const [mantenimiento, setMantenimiento] = useState('');
  const [resultado, setResultado] = useState('$0');

  const calcular = () => {
    const g = parseFloat(gasolina) || 0;
    const s = parseFloat(seguro) || 0;
    const m = parseFloat(mantenimiento) || 0;
    const total = g + s + m;
    setResultado(`$${total.toFixed(2)}`);
  };

  return (
    <CalculatorShell
      title="Calcula tus costos del auto"
      resultLabel="Costo total mensual"
      resultValue={resultado}
      buttonText="Calcular costos"
      onCalculate={calcular}
    >
      <InputField label="Gasolina mensual" value={gasolina} onChange={setGasolina} placeholder="Ejemplo: 6000" />
      <InputField label="Seguro mensual" value={seguro} onChange={setSeguro} placeholder="Ejemplo: 1500" />
      <InputField label="Mantenimiento mensual" value={mantenimiento} onChange={setMantenimiento} placeholder="Ejemplo: 900" />
    </CalculatorShell>
  );
}
