"use client";

import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Settings } from "lucide-react";

export default function SpendingPage() {
  const [toggleSpending, setToggleSpending] = useState(true);

  // Spending goals with new neon theme
  const spendingGoals = [
    { name: "Monthly Bills", amount: "$1,200", progress: 80, color: "#a855f7" },   // purple
    { name: "Entertainment", amount: "$450", progress: 40, color: "#4ade80" },     // green-teal
    { name: "Groceries", amount: "$600", progress: 70, color: "#38bdf8" },         // light blue
  ];

  const spendingTrend = [200, 300, 250, 400, 350, 450, 500]; // weekly spending trend

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-[#0b0c17] to-[#131529] text-white">
      <h1 className="text-4xl font-bold text-purple-300 mb-10 text-center">
        Spending Insights
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Spending Planner */}
        <div className="glass-card floating">
          <h2 className="text-xl text-purple-300 font-semibold mb-4">Spending Planner</h2>
          <div className="grid grid-cols-3 gap-6">
            {spendingGoals.map((goal) => (
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

        {/* Spending Progress Visualization */}
        <div className="glass-card floating">
          <h2 className="text-xl text-purple-300 font-semibold mb-4">Spending Progress</h2>
          <div className="h-40 flex items-end gap-2">
            {spendingGoals.map((goal) => (
              <div 
                key={goal.name} 
                className="flex-1 rounded-t-lg transition-all"
                style={{
                  height: `${goal.progress}%`,
                  backgroundColor: goal.color,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Emergency Fund Tracker */}
        <div className="glass-card floating">
          <h2 className="text-xl text-purple-300 font-semibold mb-4">Emergency Fund Tracker</h2>
          <div className="w-32 h-32 mx-auto mb-2">
            <CircularProgressbar 
              value={75} 
              text={"75%"} 
              styles={buildStyles({
                pathColor: "#a855f7",
                textColor: "#fff",
                trailColor: "rgba(255,255,255,0.1)",
              })}
            />
          </div>
          <div className="text-center text-white font-semibold mb-2">$11,290 Saved</div>
          <div className="h-20 bg-white/10 rounded mb-2 relative">
            <div className="absolute bottom-0 left-0 w-1/2 h-full rounded-t transition-all bg-purple-400/50"></div>
          </div>
          <p className="text-gray-400 text-sm text-center">Trend</p>
        </div>

        {/* Automatic Spending Tracker */}
        <div className="glass-card floating">
          <h2 className="text-xl text-purple-300 font-semibold mb-4">Automatic Spending Tracker</h2>
          <div className="mb-2">Monthly Transfer: <span className="font-semibold">$500</span></div>
          <div className="mb-2">Next Transfer: <span className="font-semibold">5 days</span></div>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={toggleSpending} onChange={() => setToggleSpending(!toggleSpending)} className="toggle" />
            Auto Spending Enabled
          </label>
        </div>

        {/* AI-Based Smart Budget */}
        <div className="glass-card floating">
          <h2 className="text-xl text-purple-300 font-semibold mb-4">AI-Based Smart Budget</h2>
          <button className="btn-primary flex items-center justify-center gap-2">
            <Settings size={20}/> Generate Budget
          </button>
          <p className="text-gray-400 text-sm mt-2">Based on recent spending patterns</p>
        </div>

        {/* Spending Trend Graph */}
        <div className="glass-card floating">
          <h2 className="text-xl text-purple-300 font-semibold mb-4">Spending Trend</h2>
          <div className="h-32 relative bg-white/5 rounded">
            {spendingTrend.map((val, idx) => (
              <div key={idx} className="absolute bottom-0 w-1/6 rounded-t transition-all"
                   style={{
                     height: `${val / 10}%`,
                     left: `${(idx * 100)/spendingTrend.length}%`,
                     backgroundColor: "#a855f7"
                   }}
              ></div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-2 text-center">Daily / Weekly / Monthly</p>
        </div>

      </div>
    </div>
  );
}