import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Login() {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    console.log(`Logging in with ${email}`);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-5xl font-semibold">Welcome to BidQ</h1>
        <p className="text-lg text-gray-400">Sign in with your email to access AI-driven takeoffs.</p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl bg-white/5 text-white border border-white/20 mb-4"
          />
          <Button className="w-full py-3 text-lg rounded-xl bg-white text-black hover:bg-gray-200 transition" onClick={handleLogin}>
            Sign In
          </Button>
        </div>
        <p className="text-sm text-gray-500">$199/mo. 7-day free trial. Secure payments powered by Stripe.</p>
      </div>
    </section>
  );
}
