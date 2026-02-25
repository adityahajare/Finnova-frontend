"use client";

export default function AIAssistantModule() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-10">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')",
        }}
      />

      {/* Main Glass Panel */}
      <div className="relative z-10 w-full max-w-6xl backdrop-blur-xl bg-white/5 border border-cyan-400/40 rounded-3xl p-10 shadow-[0_0_40px_rgba(34,211,238,0.4)]">

        <h1 className="text-3xl text-cyan-300 mb-8 tracking-widest">
          AI ASSISTANT MODULE
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE — CHAT */}
          <div className="space-y-6">

            <h2 className="text-cyan-200 text-lg">
              Chat with your AI Assistant
            </h2>

            {/* Chat Bubble */}
            <div className="bg-cyan-400/10 border border-cyan-400/30 p-6 rounded-xl text-gray-300 text-sm">
              <p className="mb-3">
                <strong className="text-white">User:</strong> Analyse my spending for the last month.
              </p>
              <p>
                <strong className="text-cyan-300">AI:</strong> Sure, analyzing your July spending...
                You spent $2,100 primarily on groceries (30%), rent (40%), and utilities (15%).
                Compared to June, your subscriptions increased by $9.99.
              </p>
            </div>

            {/* Input */}
            <div className="flex items-center border border-cyan-400/30 rounded-xl bg-white/5 px-4 py-3">
              <input
                type="text"
                placeholder="Type your message..."
                className="bg-transparent outline-none flex-1 text-gray-200"
              />
              <span className="text-cyan-300 cursor-pointer">🎤</span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            {/* Proactive Insights */}
            <div>
              <h2 className="text-cyan-200 text-lg mb-4">
                Proactive Insights
              </h2>

              <div className="space-y-4">
                <div className="bg-cyan-400/10 border border-cyan-400/30 p-4 rounded-xl text-sm text-gray-300">
                  ⚠ ALERT: High-interest credit debt detected. Suggestion: Consolidate debt.
                </div>

                <div className="bg-cyan-400/10 border border-cyan-400/30 p-4 rounded-xl text-sm text-gray-300">
                  TIP: You have surplus in the budget. Consider increasing emergency fund contribution.
                </div>
              </div>
            </div>

            {/* Personalized Actions */}
            <div>
              <h2 className="text-cyan-200 text-lg mb-4">
                Personalized Actions
              </h2>

              <div className="flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border-4 border-cyan-400 flex items-center justify-center text-cyan-300">
                  Transfer Funds
                </div>
              </div>
            </div>

            {/* Voice Commands */}
            <div>
              <h2 className="text-cyan-200 text-lg mb-4">
                Voice Commands
              </h2>

              <div className="flex justify-between text-cyan-300 text-sm">
                <span>Schedule EMI</span>
                <span>Check Balance</span>
                <span>Generate Report</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}