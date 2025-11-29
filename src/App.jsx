import React, { useState, useEffect, useRef } from "react";

// Game Hukum Newton + Animasi Orang Mendorong Balok
// F = m * a ? percepatan mempengaruhi gerakan balok
export default function NewtonPushGame() {
  const [force, setForce] = useState(10);
  const [mass, setMass] = useState(5);
  const [position, setPosition] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [running, setRunning] = useState(false);
  const requestRef = useRef();

  const acceleration = force / mass; // Hukum Newton II

  const loop = () => {
    setVelocity((v) => v + acceleration * 0.016);
    setPosition((p) => p + velocity * 0.016);
    requestRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    if (running) {
      requestRef.current = requestAnimationFrame(loop);
    } else {
      cancelAnimationFrame(requestRef.current);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [running]);

  const reset = () => {
    setVelocity(0);
    setPosition(0);
    setRunning(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Simulasi Dorongan (Hukum Newton)</h1>

      {/* INPUT */}
      <div className="grid grid-cols-2 gap-4 mb-6 w-full max-w-lg">
        <div className="flex flex-col">
          <label className="font-semibold">Gaya (N)</label>
          <input
            type="number"
            className="p-2 border rounded-xl"
            value={force}
            onChange={(e) => setForce(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Massa Balok (kg)</label>
          <input
            type="number"
            className="p-2 border rounded-xl"
            value={mass}
            onChange={(e) => setMass(Number(e.target.value))}
          />
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setRunning(!running)}
          className="bg-blue-600 text-white px-4 py-2 rounded-2xl shadow"
        >
          {running ? "Stop" : "Start"}
        </button>
        <button
          onClick={reset}
          className="bg-red-600 text-white px-4 py-2 rounded-2xl shadow"
        >
          Reset
        </button>
      </div>

      {/* INFO */}
      <div className="mt-6 p-4 bg-white rounded-xl shadow w-full max-w-lg">
        <p><strong>Percepatan (a):</strong> {acceleration.toFixed(2)} m/s²</p>
        <p><strong>Kecepatan (v):</strong> {velocity.toFixed(2)} m/s</p>
        <p><strong>Posisi (x):</strong> {position.toFixed(2)} meter</p>
      </div>
    </div>
  );
}
