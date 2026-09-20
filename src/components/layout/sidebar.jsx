import React from 'react';

function Sidebar({ activeTab, setActiveTab }) {
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: '📊' },
        { id: 'tasks', label: 'Productivity', icon: '✅' },
        { id: 'notes', label: 'Personal Notes', icon: '📝' },
        { id: 'canvas', label: 'Workspace', icon: '🎨' },
    ];

    return (
        <aside className='sidebar'>
            <div className='sidebar-brand'>
                <h2>Life OS</h2>
            </div>
            <nav className='sidebar-nav'>
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`nav-button ${activeTab === item.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(item.id)}
                    >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;