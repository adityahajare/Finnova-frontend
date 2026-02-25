"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `block px-3 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-cyan-500/20 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.6)]"
        : "text-gray-400 hover:text-white hover:bg-white/5"
    }`;

  return (
    <html lang="en">
      <body className="bg-[#0a0f1c] text-white">
        <div className="flex min-h-screen">

          {/* SIDEBAR */}
          <div className="w-64 bg-[#0f172a] border-r border-slate-800 p-6">
            <h1 className="text-2xl font-bold mb-10 text-white">
              FinAI
            </h1>

            <nav className="space-y-3 text-sm">

              <Link href="/" className={linkClass("/")}>
                Home
              </Link>

              <Link href="/dashboard" className={linkClass("/dashboard")}>
                Dashboard
              </Link>

              <Link href="/spending" className={linkClass("/spending")}>
                Spending
              </Link>

              <Link href="/decision" className={linkClass("/decision")}>
                AI Decision
              </Link>

              <Link href="/goals" className={linkClass("/goals")}>
                Goals
              </Link>

              <Link href="/insights" className={linkClass("/insights")}>
                Insights
              </Link>

              <Link href="/assistant" className={linkClass("/assistant")}>
                AI Assistant
              </Link>

              {/* NEW MODULES */}
              <div className="pt-4 border-t border-slate-700 mt-4">

                <Link href="/report" className={linkClass("/report")}>
                  Report
                </Link>

                <Link
                  href="/expense-management"
                  className={linkClass("/expense-management")}
                >
                  Expense Management
                </Link>

              </div>

            </nav>
          </div>

          {/* PAGE CONTENT */}
          <div className="flex-1 p-10 overflow-auto">
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}