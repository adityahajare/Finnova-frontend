"use client";

import { LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const lineData = [
  { day: "Mon", balance: 4200 },
  { day: "Tue", balance: 3800 },
  { day: "Wed", balance: 4500 },
  { day: "Thu", balance: 4100 },
  { day: "Fri", balance: 4700 },
];

const pieData = [
  { name: "Food", value: 400 },
  { name: "Rent", value: 1200 },
  { name: "Shopping", value: 300 },
  { name: "Bills", value: 200 },
];

const COLORS = ["#16a34a", "#22c55e", "#86efac", "#15803d"];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Top Header */}
      <div className="bg-green-600 text-white px-8 py-6 shadow-lg">
        <h1 className="text-2xl font-bold">FinPredict Dashboard</h1>
        <p className="text-sm opacity-80">Smart Financial Overview</p>
      </div>

      <div className="p-8 space-y-8 max-w-7xl mx-auto">

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card title="Total Balance" value="₹ 45,700" />
          <Card title="Total Expenses" value="₹ 12,400" />
          <Card title="Total Savings" value="₹ 8,200" />
          <Card title="Health Score" value="78 / 100" />
        </div>

        {/* Prediction Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="30 Days Forecast" value="₹ 42,300" />
          <Card title="60 Days Forecast" value="₹ 38,900" />
          <Card title="90 Days Forecast" value="₹ 34,200" />
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Line Chart */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="font-semibold mb-4">Spending Trend</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="balance" stroke="#16a34a" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="font-semibold mb-4">Expense Distribution</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={90}>
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* Low Balance Alert */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <h3 className="font-semibold text-red-700">⚠ Predictive Low Balance Alert</h3>
          <p className="text-sm text-red-600 mt-1">
            Your balance may drop below ₹30,000 within 45 days.
          </p>
        </div>

      </div>
    </div>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-2 text-gray-800">{value}</p>
    </div>
  );
}