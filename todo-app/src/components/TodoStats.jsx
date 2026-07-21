import React from 'react'
import './TodoStats.css'

function TodoStats({ stats }) {
  const completionPercentage = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0

  return (
    <div className="todo-stats">
      <div className="stat-item">
        <div className="stat-icon">📊</div>
        <div className="stat-content">
          <p className="stat-label">Total Tasks</p>
          <p className="stat-value">{stats.total}</p>
        </div>
      </div>
      
      <div className="stat-item">
        <div className="stat-icon">✅</div>
        <div className="stat-content">
          <p className="stat-label">Completed</p>
          <p className="stat-value">{stats.completed}</p>
        </div>
      </div>
      
      <div className="stat-item">
        <div className="stat-icon">⏳</div>
        <div className="stat-content">
          <p className="stat-label">Active</p>
          <p className="stat-value">{stats.active}</p>
        </div>
      </div>
      
      <div className="stat-item">
        <div className="stat-icon">🔴</div>
        <div className="stat-content">
          <p className="stat-label">High Priority</p>
          <p className="stat-value">{stats.highPriority}</p>
        </div>
      </div>
      
      <div className="stat-item">
        <div className="stat-icon">📈</div>
        <div className="stat-content">
          <p className="stat-label">Completion</p>
          <p className="stat-value">{completionPercentage}%</p>
        </div>
      </div>
    </div>
  )
}

export default TodoStats
