import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import TaskManager from './modules/productivity/TaskManager';
import Dashboard from './modules/dashboard/Dashboard';
import SpatialCanvas from './modules/canvas/SpatialCanvas'; // Import Canvas Module
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard setActiveTab={setActiveTab} />;
      case 'tasks':
        return <TaskManager />;
      case 'notes':
        return (
          <section className="tab-content">
            <h1>Personal Notes</h1>
            <p>Capture thoughts, journal entries, and quick ideas.</p>
          </section>
        );
      case 'canvas':
        return <SpatialCanvas />; // Render Spatial Canvas Module
      default:
        return <div>Select a view</div>;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;