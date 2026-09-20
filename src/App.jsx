import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import TaskManager from './modules/productivity/TaskManager';
import Dashboard from './modules/dashboard/Dashboard'; // 1. Import Dashboard
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard setActiveTab={setActiveTab} />; // 2. Pass setActiveTab prop
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
        return (
          <section className="tab-content">
            <h1>Workspace Canvas</h1>
            <p>Visual planning board and creative space.</p>
          </section>
        );
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