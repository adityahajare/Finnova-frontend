"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar
} from "recharts";

const lineData = [
  { name: "Mon", value: 1200 },
  { name: "Tue", value: 1500 },
  { name: "Wed", value: 1100 },
  { name: "Thu", value: 1700 },
  { name: "Fri", value: 2000 },
];

const barData = [
  { name: "W1", value: 400 },
  { name: "W2", value: 600 },
  { name: "W3", value: 300 },
];

export default function HomeModule() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-8">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl">

        <h1 className="text-center text-4xl text-cyan-300 mb-10 tracking-widest">
          HOME MODULE
        </h1>

        {/* MAIN GRID 2x2 */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* TOP LEFT — TOTAL BALANCE */}
          <GlassCard>
            <h2 className="text-cyan-200 text-lg mb-2">Total Balance</h2>
            <p className="text-3xl font-bold text-white">$2,500.75</p>
            <p className="text-gray-400 text-sm">Available Funds</p>

            <div className="h-40 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <XAxis dataKey="name" stroke="#22d3ee" />
                  <YAxis stroke="#22d3ee" />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          {/* TOP RIGHT — FINANCIAL WELLNESS */}
          <GlassCard>
            <h2 className="text-cyan-200 text-lg mb-6">Financial Wellness Score</h2>

            <div className="flex items-center justify-between">

              {/* Circular Score */}
              <div className="relative w-36 h-36 flex items-center justify-center">
                <div className="absolute w-36 h-36 rounded-full border-4 border-cyan-400"></div>
                <div className="text-center">
                  <p className="text-3xl text-white font-bold">85/100</p>
                  <p className="text-green-400 text-sm">GOOD</p>
                </div>
              </div>

              {/* Small Line Graph */}
              <div className="w-48 h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData}>
                    <XAxis hide />
                    <YAxis hide />
                    <Line type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

            </div>
          </GlassCard>

          {/* BOTTOM LEFT — QUICK ACTIONS */}
          <GlassCard>
            <h2 className="text-cyan-200 text-lg mb-6">Quick Actions</h2>

            <div className="grid grid-cols-3 gap-4 text-center text-cyan-300 mb-6">
              <Action label="Transfer" />
              <Action label="Pay Bills" />
              <Action label="Budget" />
            </div>

            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" stroke="#22d3ee" />
                  <YAxis stroke="#22d3ee" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#22d3ee" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          {/* BOTTOM RIGHT — GOALS + TRANSACTIONS */}
          <GlassCard>
            <h2 className="text-cyan-200 text-lg mb-6">Your Goals</h2>

            <div className="flex justify-around mb-8">
              <Goal percent="65%" label="New Car" />
              <Goal percent="30%" label="Travel" />
            </div>

            <h3 className="text-cyan-200 text-lg mb-4">Recent Transactions</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Feb 2024 Expense Report - $50</li>
              <li>Annual Summary - $120</li>
              <li>Q4 2023 Summary - $80</li>
            </ul>
          </GlassCard>

        </div>
      </div>
    </div>
  );
}

function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
      {children}
    </div>
  );
}

function Action({ label }: { label: string }) {
  return (
    <div className="p-4 rounded-xl bg-cyan-400/10 border border-cyan-400/30 hover:bg-cyan-400/20 transition">
      {label}
    </div>
  );
}

function Goal({ percent, label }: { percent: string; label: string }) {
  return (
    <div className="text-center">
      <div className="w-24 h-24 rounded-full border-4 border-cyan-400 flex items-center justify-center text-white font-bold">
        {percent}
      </div>
      <p className="text-gray-400 text-sm mt-2">{label}</p>
    </div>
  );
}