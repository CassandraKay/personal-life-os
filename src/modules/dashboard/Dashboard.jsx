import React, { useState, useEffect } from 'react';
import StatCard from '../../components/ui/StatCard';
import './Dashboard.css';

function Dashboard({ setActiveTab }) {
  const [taskStats, setTaskStats] = useState({ total: 0, pending: 0, completed: 0 });

  // Load live task stats from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('life_os_tasks');
    if (savedTasks) {
      try {
        const parsed = JSON.parse(savedTasks);
        const pending = parsed.filter((t) => !t.completed).length;
        const completed = parsed.filter((t) => t.completed).length;
        setTaskStats({ total: parsed.length, pending, completed });
      } catch (err) {
        console.error('Failed to parse tasks from localStorage', err);
      }
    }
  }, []);

  return (
    <div className="dashboard-module">
      <header className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <p className="dashboard-subtitle">Here is what your day looks like right now.</p>
      </header>

      {/* Responsive Grid System */}
      <div className="dashboard-grid">
        <StatCard
          title="Pending Tasks"
          value={taskStats.pending}
          subtitle={`${taskStats.completed} completed today`}
          icon="✅"
          accentColor="#6366f1"
        />

        <StatCard
          title="Total Focus Items"
          value={taskStats.total}
          subtitle="Tracked in Productivity"
          icon="🎯"
          accentColor="#3b82f6"
        />

        <StatCard
          title="System Status"
          value="Active"
          subtitle="All modules synced locally"
          icon="⚡"
          accentColor="#10b981"
        />
      </div>

      {/* Quick Navigation Action Cards */}
      <section className="quick-actions-section">
        <h3>Quick Navigation</h3>
        <div className="actions-grid">
          <button className="action-card" onClick={() => setActiveTab('tasks')}>
            <span className="action-icon">📋</span>
            <div className="action-text">
              <h4>Manage Tasks</h4>
              <p>Add, complete, or filter your daily action items</p>
            </div>
          </button>

          <button className="action-card" onClick={() => setActiveTab('notes')}>
            <span className="action-icon">📝</span>
            <div className="action-text">
              <h4>Open Notes</h4>
              <p>Jot down quick thoughts and ideas</p>
            </div>
          </button>

          <button className="action-card" onClick={() => setActiveTab('canvas')}>
            <span className="action-icon">🎨</span>
            <div className="action-text">
              <h4>Workspace Canvas</h4>
              <p>Visual brainboarding and planning</p>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;