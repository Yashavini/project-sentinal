import React, { useState } from 'react';
import GisHeatmap from './components/GisHeatmap';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [alertStatus, setAlertStatus] = useState(null);

  const runSimulation = async () => {
    setAlertStatus('Analyzing transaction pathways...');
    // Mocking the API call to the FastAPI backend
    setTimeout(() => {
      setAlertStatus('Phase 1 High Risk Detected! Phase 2 predicted withdrawal at Area X (18:00-21:00). Alerts Dispatched.');
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-gray-800 p-5 flex flex-col">
        <h1 className="text-2xl font-bold text-blue-400 mb-8">Project Sentinel</h1>
        <nav className="flex flex-col gap-4">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`text-left p-3 rounded ${activeTab === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
            Intelligence Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('gis')}
            className={`text-left p-3 rounded ${activeTab === 'gis' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
            GIS Risk Heatmap
          </button>
          <button 
            onClick={() => setActiveTab('alerts')}
            className={`text-left p-3 rounded ${activeTab === 'alerts' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
            Law Enforcement Alerts
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activeTab === 'dashboard' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-semibold mb-6">Proactive Cybercrime Intervention</h2>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-gray-400 text-sm">Active Complaints (24h)</h3>
                <p className="text-4xl font-bold">8,102</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-gray-400 text-sm">High-Risk Mule Accounts</h3>
                <p className="text-4xl font-bold">142</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-gray-400 text-sm">Predicted Cash-Outs (Next 3h)</h3>
                <p className="text-4xl font-bold">17</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl mb-4">Simulation Control</h3>
              <button 
                onClick={runSimulation}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors">
                Trigger Synthetic Fraud Simulation
              </button>
              {alertStatus && (
                <div className="mt-4 p-4 bg-gray-700 border border-gray-600 rounded text-green-400">
                  {alertStatus}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'gis' && (
          <div className="h-full flex flex-col">
            <h2 className="text-3xl font-semibold mb-6">Phase 2: Geospatial Risk Modeling</h2>
            <div className="flex-1 bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <GisHeatmap />
            </div>
          </div>
        )}

        {activeTab === 'alerts' && (
          <div>
            <h2 className="text-3xl font-semibold mb-6">Secure Investigator Interface</h2>
            <div className="bg-gray-800 p-6 rounded-lg border border-red-900">
              <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                <span className="text-red-500 font-bold uppercase tracking-wider">High Risk Alert</span>
                <span className="text-gray-400">Target Window: 18:00 - 21:00</span>
              </div>
              <p className="mb-2 text-gray-300"><strong>Trigger:</strong> Phase 1 anomaly detected on Account C (rapid onward transfers).</p>
              <p className="mb-4 text-gray-300"><strong>Location:</strong> Zone X ATM Cluster (Lat: 28.6139, Lon: 77.2090)</p>
              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium">Dispatch LEA Team</button>
                <button className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded font-medium">Notify Local Bank Branch</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
