"use client";

import { Download, FileText, Printer } from "lucide-react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function ReportPage() {

  // Chart Data
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Revenue",
        data: [3000, 5000, 4500, 6000, 5200],
        borderColor: "#00f0ff",
        backgroundColor: "rgba(0,240,255,0.2)",
        tension: 0.4,
      },
      {
        label: "Emergency Trend",
        data: [2000, 4500, 3400, 5000, 3800],
        borderColor: "red",
        backgroundColor: "rgba(255,0,0,0.2)",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Expenses",
        data: [800, 1000, 650, 1200],
        backgroundColor: "#00f0ff",
      },
    ],
  };

  const pieData = {
    labels: ["Income", "Expenses", "Savings"],
    datasets: [
      {
        data: [50, 25, 25],
        backgroundColor: ["#00f0ff", "#ff004f", "#00ff9f"],
      },
    ],
  };

  return (
    <div className="min-h-screen text-white p-10">
      <h1 className="text-4xl font-semibold text-center tracking-widest mb-12 text-cyan-300">
        REPORTS MODULE
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT COLUMN */}
        <div className="space-y-8">

          {/* Custom Report Builder */}
          <div className="glass-card floating">
            <h2 className="text-xl text-cyan-300 mb-4">Custom Report Builder</h2>
            <div className="text-3xl font-semibold mb-1">$2,500.75</div>
            <p className="text-gray-400 text-sm mb-6">Available Funds</p>

            <div className="space-y-3 text-sm text-gray-300">
              {["Expense History", "Income Streams", "Investment Performance", "Net Worth Over Time"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked={item === "Expense History"} />
                  {item}
                </label>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <input type="text" placeholder="Filter by Category..." className="input-style" />
              <div className="flex gap-3">
                <input type="date" className="input-style" />
                <input type="date" className="input-style" />
              </div>
              <button className="btn-primary">Generate Report</button>
            </div>
          </div>

          {/* Scheduled Reports */}
          <div className="glass-card floating">
            <h2 className="text-xl text-cyan-300 mb-4">Scheduled Reports</h2>
            <div className="space-y-5 text-gray-300 text-sm">
              {[
                { title: "Monthly Financial Summary", next: "Next: 15/03/24", checked: true },
                { title: "Quarterly Tax Prep" },
                { title: "Annual Portfolio Review" },
              ].map((r) => (
                <div key={r.title} className="flex justify-between items-center">
                  <div>
                    <p>{r.title}</p>
                    {r.next && <p className="text-gray-500 text-xs">{r.next}</p>}
                  </div>
                  <input type="checkbox" className="toggle" defaultChecked={r.checked} />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">

          {/* Visual Data Export */}
          <div className="glass-card floating">
            <h2 className="text-xl text-cyan-300 mb-6">Visual Data Export</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="h-40 bg-cyan-400/10 rounded-lg border border-cyan-400/30">
                <Line data={lineData} />
              </div>
              <div className="h-40 bg-cyan-400/10 rounded-lg border border-cyan-400/30">
                <Bar data={barData} />
              </div>
            </div>

            <div className="flex gap-4 text-sm mb-6">
              <button className="export-btn"><Download size={16}/> Download</button>
              <button className="export-btn"><FileText size={16}/> PDF</button>
              <button className="export-btn">Export CSV</button>
              <button className="export-btn"><Printer size={16}/> Print</button>
            </div>

            <div>
              <h3 className="text-lg text-cyan-200 mb-3">Emergency Trend</h3>
              <div className="h-32 bg-cyan-400/10 rounded-lg border border-cyan-400/30">
                <Line data={lineData} />
              </div>
            </div>
          </div>

          {/* Report History */}
          <div className="glass-card floating">
            <h2 className="text-xl text-cyan-300 mb-4">Report History</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex justify-between">
                <span>Feb 2024 Expense Report</span>
                <span>$5,024</span>
              </li>
              <li className="flex justify-between">
                <span>Annual Summary Report</span>
                <span>30/01/24</span>
              </li>
              <li className="flex justify-between">
                <span>Q4 2023 Investment Update</span>
                <span>11/01/25</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}