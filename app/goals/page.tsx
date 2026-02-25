"use client";

import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Settings } from "lucide-react";

export default function GoalsSavingsModule() {
  const [monthlyTransfer, setMonthlyTransfer] = useState(500);
  const [toggleSavings, setToggleSavings] = useState(true);

  const goals = [
    { name: "Travel Fund", amount: "$5,000", progress: 65, color: "#00ff9f" },
    { name: "New Car ($20,000)", amount: "$6,500", progress: 30, color: "#a855f7" },
    { name: "Emergency Savings", amount: "$11,290", progress: 75, color: "#00f0ff" },
  ];

  const savingsTrend = [500, 600, 550, 700, 650, 800, 750]; // Daily/weekly dummy

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white p-10">
      <h1 className="text-4xl font-bold text-cyan-300 mb-10 text-center">Goals & Savings Module</h1>

      {/* Grid of Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Goal-Based Savings Planner */}
        <div className="glass-card floating">
          <h2 className="text-xl text-cyan-300 font-semibold mb-4">Goal-Based Savings Planner</h2>
          <div className="grid grid-cols-3 gap-6">
            {goals.map((goal) => (
              <div key={goal.name} className="text-center">
                <div className="w-24 h-24 mx-auto mb-2">
                  <CircularProgressbar 
                    value={goal.progress} 
                    text={`${goal.progress}%`} 
                    styles={buildStyles({
                      pathColor: goal.color,
                      textColor: "#fff",
                      trailColor: "rgba(255,255,255,0.1)",
                    })}
                  />
                </div>
                <div className="text-sm text-gray-400">{goal.name}</div>
                <div className="text-white font-semibold">{goal.amount}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Goal Progress Visualization (Bar Chart Simulated) */}
        <div className="glass-card floating">
          <h2 className="text-xl text-cyan-300 font-semibold mb-4">Goal Progress Visualization</h2>
          <div className="h-40 flex items-end gap-2">
            {goals.map((goal) => (
              <div 
                key={goal.name} 
                className="flex-1 bg-cyan-400 rounded-t-lg transition-all"
                style={{ height: `${goal.progress}%` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Emergency Fund Tracker */}
        <div className="glass-card floating">
          <h2 className="text-xl text-cyan-300 font-semibold mb-4">Emergency Fund Tracker</h2>
          <div className="w-32 h-32 mx-auto mb-2">
            <CircularProgressbar 
              value={75} 
              text={"75%"} 
              styles={buildStyles({
                pathColor: "#00f0ff",
                textColor: "#fff",
                trailColor: "rgba(255,255,255,0.1)",
              })}
            />
          </div>
          <div className="text-center text-white font-semibold mb-2">$11,290 Saved</div>
          <div className="h-20 bg-white/10 rounded mb-2 relative">
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-cyan-400/50 rounded-t transition-all"></div>
          </div>
          <p className="text-gray-400 text-sm text-center">Growth Trend</p>
        </div>

        {/* Automatic Savings Tracker */}
        <div className="glass-card floating">
          <h2 className="text-xl text-cyan-300 font-semibold mb-4">Automatic Savings Tracker</h2>
          <div className="mb-2">Monthly Transfer: <span className="font-semibold">${monthlyTransfer}</span></div>
          <div className="mb-2">Next Transfer: <span className="font-semibold">5 days</span></div>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={toggleSavings} onChange={() => setToggleSavings(!toggleSavings)} className="toggle" />
            Auto Savings Enabled
          </label>
        </div>

        {/* AI-Based Smart Budget Creation */}
        <div className="glass-card floating">
          <h2 className="text-xl text-cyan-300 font-semibold mb-4">AI-Based Smart Budget</h2>
          <button className="btn-primary flex items-center justify-center gap-2">
            <Settings size={20}/> Generate Budget
          </button>
          <p className="text-gray-400 text-sm mt-2">Based on spending patterns from last few days</p>
        </div>

        {/* Savings Trend Graph */}
        <div className="glass-card floating">
          <h2 className="text-xl text-cyan-300 font-semibold mb-4">Savings Trend</h2>
          <div className="h-32 relative bg-white/5 rounded">
            {savingsTrend.map((val, idx) => (
              <div key={idx} className="absolute bottom-0 w-1/6 bg-cyan-400 rounded-t transition-all"
                   style={{ height: `${val / 10}%`, left: `${(idx * 100)/savingsTrend.length}%` }}></div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-2 text-center">Daily / Weekly / Monthly</p>
        </div>

      </div>
    </div>
  );
}