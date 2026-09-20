import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import TaskManager from './modules/productivity/TaskManager'; // 1. Import module
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <section className="tab-content">
            <h1>Dashboard Overview</h1>
            <p>Welcome to your Personal Life OS. Here is your daily summary.</p>
          </section>
        );
      case 'tasks':
        return <TaskManager />; // 2. Render interactive component!
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