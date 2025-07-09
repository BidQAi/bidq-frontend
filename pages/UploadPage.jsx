import React from 'react';
import { Button } from '@/components/ui/button';

export function UploadPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-black text-white">
      <h1 className="text-5xl md:text-6xl font-semibold mb-4">Upload Your Blueprint</h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
        Our AI will read your plans and generate a full material takeoff by trade.
      </p>
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md shadow-xl">
        <input
          type="file"
          accept="application/pdf,image/*"
          className="w-full p-3 mb-6 text-sm bg-white/5 text-white rounded-xl border border-white/20"
        />
        <Button className="w-full text-lg py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition">
          Upload & Analyze
        </Button>
      </div>
    </section>
  );
}
