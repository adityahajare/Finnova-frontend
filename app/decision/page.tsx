"use client";

import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, BarChart, Bar,
  PieChart, Pie, Cell, CartesianGrid
} from "recharts";
import { AlertTriangle } from "lucide-react";

const trendData = [
  { name: "Mon", daily: 200, weekly: 800, monthly: 3200 },
  { name: "Tue", daily: 300, weekly: 1000, monthly: 3500 },
  { name: "Wed", daily: 150, weekly: 900, monthly: 3100 },
  { name: "Thu", daily: 400, weekly: 1100, monthly: 4000 },
  { name: "Fri", daily: 250, weekly: 950, monthly: 3300 },
];

const perceptionData = [
  { name: "Perceived", value: 70 },
  { name: "Actual", value: 45 },
];

export default function DecisionDashboard() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="min-h-screen relative bg-[url('/office.jpg')] bg-cover bg-center">

      {/* Overlay Blur */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/60"></div>

      {/* Main Glass Container */}
      <div className="relative z-10 p-10">
        <div className="rounded-3xl border border-cyan-400/30 shadow-[0_0_40px_#00ffff33] bg-white/5 backdrop-blur-2xl p-8">

          <h1 className="text-4xl font-bold text-cyan-300 mb-10 tracking-wide">
            AI Decision Module
          </h1>

          <div className="grid grid-cols-3 gap-8">

            {/* AI WARNING */}
            <GlassCard>
              <div className="flex items-center gap-2 text-yellow-400">
                <AlertTriangle />
                <h3 className="font-semibold">AI Decision Warning System</h3>
              </div>
              <p className="mt-4 text-yellow-300">
                Risk: Unplanned investment detected
              </p>
            </GlassCard>

            {/* WHAT IF */}
            <GlassCard>
              <h3 className="text-cyan-300 font-semibold">
                What-If Spending Simulator
              </h3>
              <p className="mt-4">Spend on new gadget?</p>

              {/* Toggle */}
              <div
                onClick={() => setToggle(!toggle)}
                className={`w-14 h-7 mt-3 rounded-full cursor-pointer transition ${
                  toggle ? "bg-cyan-400" : "bg-gray-600"
                }`}
              >
                <div
                  className={`h-7 w-7 bg-white rounded-full transition ${
                    toggle ? "translate-x-7" : ""
                  }`}
                />
              </div>

              <p className="mt-4 text-red-400 font-bold">
                Projected Balance: -$500
              </p>
            </GlassCard>

            {/* SAVINGS */}
            <GlassCard>
              <h3 className="text-green-400 font-semibold">
                Savings Summary
              </h3>
              <p className="text-3xl mt-4 text-green-300 font-bold">
                +$800
              </p>
              <p className="text-sm text-slate-400">this month</p>
            </GlassCard>

            {/* TREND GRAPH */}
            <GlassCard className="col-span-2">
              <h3 className="text-cyan-300 font-semibold mb-4">
                Spending Trend
              </h3>
              <div className="h-64">
                <ResponsiveContainer>
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#0ea5e9" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="daily"
                      stroke="#00ffff"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>

            {/* SUGGESTIONS */}
            <GlassCard>
              <h3 className="text-cyan-300 font-semibold">
                Personalized Financial Suggestions
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>1. Increase retirement contribution by 2%</li>
                <li>2. Open a high-yield savings account</li>
                <li>3. Explore low-fee index funds</li>
              </ul>
            </GlassCard>

            {/* PERCEPTION VS REALITY */}
            <GlassCard>
              <h3 className="text-green-400 font-semibold mb-4">
                Money Perception vs Reality
              </h3>
              <div className="h-56">
                <ResponsiveContainer>
                  <BarChart data={perceptionData}>
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>

            {/* RISK GAUGE */}
            <GlassCard>
              <h3 className="text-red-400 font-semibold mb-4">
                Financial Risk Gauge
              </h3>
              <div className="h-56 flex items-center justify-center relative">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={[{ value: 65 }, { value: 35 }]}
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                    >
                      <Cell fill="#ef4444" />
                      <Cell fill="#1e293b" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute text-center">
                  <p className="text-red-400 font-bold">
                    Medium-High Risk
                  </p>
                  <p className="text-xs text-slate-400">
                    Based on recent overdrafts & late payments
                  </p>
                </div>
              </div>
            </GlassCard>

          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable Glass Card */
function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl p-6 bg-white/5 border border-cyan-400/20 backdrop-blur-xl shadow-[0_0_20px_#00ffff22] hover:shadow-[0_0_40px_#00ffff55] transition ${className}`}
    >
      {children}
    </div>
  );
}