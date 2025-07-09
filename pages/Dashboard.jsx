import React from 'react';
import { Button } from '@/components/ui/button';

export function Dashboard() {
  const dummyTakeoff = {
    Framing: [{ type: "2x4 Lumber", quantity: 120, unit: "pcs" }],
    HVAC: [{ type: "HVAC Duct", quantity: 300, unit: "ft" }],
  };

  return (
    <section className="min-h-screen px-6 py-12 bg-black text-white">
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-10">Your Project Takeoff</h1>
      <div className="max-w-5xl mx-auto space-y-8">
        {Object.entries(dummyTakeoff).map(([trade, items]) => (
          <div key={trade} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">{trade}</h2>
            <ul className="space-y-2">
              {items.map((item, idx) => (
                <li key={idx} className="flex justify-between text-gray-100 border-b border-white/10 pb-1">
                  <span>{item.type}</span>
                  <span>{item.quantity} {item.unit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex justify-center gap-4 pt-10">
          <Button className="px-6 py-3 rounded-xl text-lg bg-white text-black hover:bg-gray-200 transition">Download PDF</Button>
          <Button className="px-6 py-3 rounded-xl text-lg bg-white text-black hover:bg-gray-200 transition">Download Excel</Button>
        </div>
      </div>
    </section>
  );
}
