import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ShieldAlert, Activity, Crosshair } from 'lucide-react';

const riskData = [
  { time: '10:00', volume: 1200, riskScore: 45 },
  { time: '12:00', volume: 3100, riskScore: 52 },
  { time: '14:00', volume: 8000, riskScore: 88 },
  { time: '16:00', volume: 7200, riskScore: 94 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center border-b border-slate-700 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-white">I4C Command Center</h2>
          <p className="text-slate-400 text-sm">Real-time Phase 1 & Phase 2 Intelligence</p>
        </div>
        <div className="bg-slate-800 px-4 py-2 rounded border border-slate-600 flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-emerald-400">System Nominal</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 p-5 rounded-lg border-t-4 border-blue-500 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">NCRP Complaints (24h)</p>
              <h3 className="text-3xl font-bold text-white mt-2">8,102</h3>
            </div>
            <Activity className="text-blue-500 w-6 h-6" />
          </div>
        </div>
        <div className="bg-slate-800 p-5 rounded-lg border-t-4 border-amber-500 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Anomalous Pathways (Phase 1)</p>
              <h3 className="text-3xl font-bold text-white mt-2">142</h3>
            </div>
            <ShieldAlert className="text-amber-500 w-6 h-6" />
          </div>
        </div>
        <div className="bg-slate-800 p-5 rounded-lg border-t-4 border-red-500 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Predicted Cash-Outs (Phase 2)</p>
              <h3 className="text-3xl font-bold text-white mt-2">17</h3>
            </div>
            <Crosshair className="text-red-500 w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
        <h3 className="text-lg font-medium text-white mb-6">Network Risk Velocity</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={riskData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }} />
              <Line type="monotone" dataKey="riskScore" stroke="#ef4444" strokeWidth={3} name="Risk Score" />
              <Line type="monotone" dataKey="volume" stroke="#38bdf8" strokeWidth={2} name="Tx Volume" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
