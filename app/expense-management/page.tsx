"use client";

import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell,
  BarChart, Bar, CartesianGrid
} from "recharts";
import { AlertTriangle, Bell } from "lucide-react";

/* ---------------- SAMPLE DATA ---------------- */

const categoryData = [
  { name: "Food", value: 400 },
  { name: "Tech", value: 300 },
  { name: "Bills", value: 200 },
  { name: "Travel", value: 150 },
];

const spendingTrend = [
  { day: "Mon", spend: 200 },
  { day: "Tue", spend: 300 },
  { day: "Wed", spend: 250 },
  { day: "Thu", spend: 400 },
  { day: "Fri", spend: 280 },
];

const weekendWeekday = [
  { name: "Weekday", value: 1200 },
  { name: "Weekend", value: 800 },
];

const cashFlow = [
  { month: "Jan", income: 5000, expense: 3200 },
  { month: "Feb", income: 5200, expense: 4000 },
  { month: "Mar", income: 4800, expense: 3500 },
];

const COLORS = ["#00f5ff", "#0088fe", "#00c6ff", "#33ccff"];

/* ---------------- COMPONENT ---------------- */

export default function ExpenseManagement() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-cyan-900/20"></div>

      <div className="relative z-10 p-12">

        <div className="rounded-3xl border border-cyan-400/30 
          bg-white/5 backdrop-blur-3xl 
          shadow-[0_0_80px_#00f5ff33] 
          p-10">

          <h1 className="text-5xl font-bold text-cyan-300 mb-12 tracking-wide glow-text">
            Holographic Expense Intelligence System
          </h1>

          <div className="grid grid-cols-3 gap-10">

            {/* Manual Entry */}
            <GlassCard>
              <h3 className="text-cyan-300 font-semibold mb-4">
                Manual Expense Entry
              </h3>

              <input
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="futuristic-input"
              />

              <input
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="futuristic-input mt-4"
              />

              <button className="neon-button mt-6">
                Add Expense
              </button>
            </GlassCard>

            {/* AI Categorization */}
            <GlassCard>
              <h3 className="text-cyan-300 font-semibold mb-4">
                AI Categorization Confidence
              </h3>
              <div className="h-56 flex items-center justify-center relative">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={[{ value: 85 }, { value: 15 }]}
                      innerRadius={60}
                      outerRadius={90}
                      dataKey="value"
                    >
                      <Cell fill="#00f5ff" />
                      <Cell fill="#0f172a" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute text-3xl font-bold text-cyan-300 glow-text">
                  85%
                </div>
              </div>
            </GlassCard>

            {/* Overspending Alert */}
            <GlassCard>
              <div className="flex items-center gap-3 text-red-400">
                <AlertTriangle />
                <h3 className="font-semibold">Overspending Alert</h3>
              </div>
              <p className="mt-4 text-red-300">
                You exceeded your tech budget by $200.
              </p>
            </GlassCard>

            {/* Category Donut */}
            <GlassCard className="col-span-2">
              <h3 className="text-cyan-300 font-semibold mb-4">
                Category-wise Expense Distribution
              </h3>
              <div className="h-64">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      innerRadius={70}
                      outerRadius={110}
                      dataKey="value"
                    >
                      {categoryData.map((_, i) => (
                        <Cell key={i} fill={COLORS[i]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>

            {/* Spending Pattern */}
            <GlassCard>
              <h3 className="text-cyan-300 font-semibold mb-4">
                Spending Pattern Analysis
              </h3>
              <div className="h-56">
                <ResponsiveContainer>
                  <LineChart data={spendingTrend}>
                    <CartesianGrid stroke="#0ea5e9" strokeDasharray="3 3" />
                    <XAxis dataKey="day" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="spend"
                      stroke="#00f5ff"
                      strokeWidth={4}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>

            {/* Weekend vs Weekday */}
            <GlassCard>
              <h3 className="text-cyan-300 font-semibold mb-4">
                Weekend vs Weekday Spending
              </h3>
              <div className="h-56">
                <ResponsiveContainer>
                  <BarChart data={weekendWeekday}>
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#00f5ff" radius={[10,10,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>

            {/* Cash Flow */}
            <GlassCard className="col-span-2">
              <h3 className="text-cyan-300 font-semibold mb-4">
                Cash Flow Analysis
              </h3>
              <div className="h-64">
                <ResponsiveContainer>
                  <LineChart data={cashFlow}>
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip />
                    <Line type="monotone" dataKey="income" stroke="#22c55e" strokeWidth={4}/>
                    <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={4}/>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>

            {/* Subscription Detection */}
            <GlassCard>
              <div className="flex items-center gap-2 text-cyan-300">
                <Bell />
                <h3 className="font-semibold">Subscription Detection</h3>
              </div>
              <p className="mt-4 text-slate-300">
                Netflix, Spotify & Adobe recurring charges detected.
              </p>
            </GlassCard>

          </div>
        </div>
      </div>
    </div>
  );
}

/* Glass Card Component */
function GlassCard({ children, className = "" }: any) {
  return (
    <div className={`rounded-2xl p-6 bg-white/5 border border-cyan-400/20 
      backdrop-blur-xl shadow-[0_0_40px_#00f5ff22] 
      hover:shadow-[0_0_80px_#00f5ff66] 
      transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}