import { useState } from "react";

function App() {
  const [mass, setMass] = useState(10);        // kg
  const [acceleration, setAcceleration] = useState(2); // m/s²

  const force = mass * acceleration; // F = m × a

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-6">
        {/* Kartu penjelasan teori */}
        <div className="bg-slate-800 rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-2xl font-bold mb-2">
            Simulasi Hukum Newton
          </h1>
          <p className="text-sm text-slate-300">
            Contoh web sederhana untuk memahami hubungan antara{" "}
            <span className="font-semibold">gaya (F)</span>,{" "}
            <span className="font-semibold">massa (m)</span>, dan{" "}
            <span className="font-semibold">percepatan (a)</span> berdasarkan{" "}
            <span className="font-semibold">Hukum II Newton</span>:
          </p>

          <div className="bg-slate-900/60 rounded-xl p-4 text-sm space-y-2">
            <h2 className="font-semibold text-lg">3 Hukum Newton (ringkas)</h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                <span className="font-semibold">Hukum I:</span> Benda akan tetap
                diam atau bergerak lurus beraturan jika resultan gaya = 0.
              </li>
              <li>
                <span className="font-semibold">Hukum II:</span> Resultan gaya
                sebanding dengan massa dan percepatan:{" "}
                <span className="font-mono">F = m × a</span>.
              </li>
              <li>
                <span className="font-semibold">Hukum III:</span> Setiap aksi
                selalu menimbulkan reaksi yang sama besar dan berlawanan arah.
              </li>
            </ol>
          </div>

          <div className="text-xs text-slate-400">
            ? Ubah nilai massa dan percepatan di panel kanan, lihat bagaimana
            gaya berubah.
          </div>
        </div>

        {/* Kartu simulasi */}
        <div className="bg-slate-800 rounded-2xl shadow-lg p-6 space-y-5">
          <h2 className="text-xl font-semibold mb-2">Simulasi F = m × a</h2>

          {/* Slider Massa */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Massa (m)</span>
              <span className="font-mono">{mass.toFixed(1)} kg</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={mass}
              onChange={(e) => setMass(Number(e.target.value))}
              className="w-full accent-blue-400"
            />
          </div>

          {/* Slider Percepatan */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Percepatan (a)</span>
              <span className="font-mono">{acceleration.toFixed(1)} m/s²</span>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              step="0.5"
              value={acceleration}
              onChange={(e) => setAcceleration(Number(e.target.value))}
              className="w-full accent-emerald-400"
            />
          </div>

          {/* Hasil Perhitungan */}
          <div className="bg-slate-900/70 rounded-xl p-4 space-y-3">
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-slate-300">Gaya (F)</span>
              <span className="text-3xl font-bold font-mono">
                {force.toFixed(1)}
              </span>
              <span className="text-sm text-slate-300">Newton (N)</span>
            </div>

            <div className="text-xs text-slate-300">
              Rumus:{" "}
              <span className="font-mono font-semibold">
                F = m × a = {mass.toFixed(1)} × {acceleration.toFixed(1)} ={" "}
                {force.toFixed(1)} N
              </span>
            </div>

            {/* Visualisasi sederhana */}
            <div className="mt-3">
              <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400"
                  style={{
                    width: `${Math.min((force / 2000) * 100, 100)}%`,
                    transition: "width 0.2s ease-out",
                  }}
                ></div>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Semakin besar massa atau percepatan, batang akan semakin panjang
                (gaya semakin besar).
              </p>
            </div>
          </div>

          {/* Catatan */}
          <div className="text-[11px] text-slate-400">
            ?? Di dunia nyata, gaya total juga dipengaruhi gesekan, gaya
            normal, gaya tarik, dll. Di sini kita fokus ke konsep dasar
            <span className="font-mono"> F = m × a</span>.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
