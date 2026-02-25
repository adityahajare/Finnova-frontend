"use client";

import { TrendingUp, DollarSign, BarChart2, FileText } from "lucide-react";
import { useState } from "react";

export default function FinanceInsights() {
  const [selectedMetric, setSelectedMetric] = useState("Revenue");

  const metrics = [
    { name: "Revenue", value: "$125,400", change: "+12%" },
    { name: "Expenses", value: "$52,800", change: "-5%" },
    { name: "Investments", value: "$78,200", change: "+8%" },
    { name: "Savings", value: "$45,600", change: "+15%" },
  ];

  const aiInsights = [
    "Revenue is growing steadily, forecast suggests +10% next quarter.",
    "Expenses are optimized; consider investing surplus in short-term bonds.",
    "Investment portfolio performing well; diversify into tech stocks.",
    "Savings rate is increasing; maintain trend to achieve annual goal.",
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-cyan-300">
        AI Finance Insights
      </h1>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {metrics.map((m) => (
          <div key={m.name} className="glass-card floating text-center">
            <div className="flex justify-center mb-2">
              {m.name === "Revenue" && <DollarSign className="w-6 h-6 text-cyan-400" />}
              {m.name === "Expenses" && <TrendingUp className="w-6 h-6 text-red-400" />}
              {m.name === "Investments" && <BarChart2 className="w-6 h-6 text-green-400" />}
              {m.name === "Savings" && <FileText className="w-6 h-6 text-yellow-400" />}
            </div>
            <div className="text-2xl font-bold">{m.value}</div>
            <div className={`text-sm ${m.change.startsWith('+') ? "text-green-400" : "text-red-400"}`}>{m.change}</div>
            <div className="mt-2 text-gray-400">{m.name}</div>
          </div>
        ))}
      </div>

      {/* AI Insights Section */}
      <div className="glass-card floating p-6 space-y-4">
        <h2 className="text-xl text-cyan-300 font-semibold mb-4">AI Generated Insights</h2>
        <ul className="space-y-2 text-gray-300">
          {aiInsights.map((insight, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">•</span>
              <p>{insight}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Interactive Report Builder */}
      <div className="glass-card floating p-6 mt-8">
        <h2 className="text-xl text-cyan-300 font-semibold mb-4">Custom AI Report</h2>
        <div className="flex gap-4 mb-4">
          {metrics.map((m) => (
            <button
              key={m.name}
              className={`px-3 py-1 rounded-md text-sm ${
                selectedMetric === m.name
                  ? "bg-cyan-400 text-black shadow-neon"
                  : "bg-white/10 hover:bg-cyan-400/20"
              }`}
              onClick={() => setSelectedMetric(m.name)}
            >
              {m.name}
            </button>
          ))}
        </div>
        <p className="text-gray-300">
          Generating insights for <span className="text-cyan-300 font-semibold">{selectedMetric}</span>...
        </p>
        <button className="btn-primary mt-4">Generate AI Report</button>
      </div>
    </div>
  );
}