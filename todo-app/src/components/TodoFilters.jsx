import React from 'react'
import './TodoFilters.css'

function TodoFilters({ 
  filter, 
  setFilter, 
  searchTerm, 
  setSearchTerm, 
  sortBy, 
  setSortBy,
  completedCount,
  onClearCompleted 
}) {
  return (
    <div className="todo-filters">
      <div className="filters-top">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="sort-box">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="date">📅 Sort by Date</option>
            <option value="priority">⭐ Sort by Priority</option>
            <option value="duedate">📍 Sort by Due Date</option>
            <option value="alphabetical">🔤 Sort Alphabetically</option>
          </select>
        </div>
      </div>

      <div className="filters-bottom">
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            📋 All
          </button>
          <button
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            ⏳ Active
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            ✅ Completed
          </button>
          <button
            className={`filter-btn ${filter === 'high' ? 'active' : ''}`}
            onClick={() => setFilter('high')}
          >
            🔴 High
          </button>
          <button
            className={`filter-btn ${filter === 'medium' ? 'active' : ''}`}
            onClick={() => setFilter('medium')}
          >
            🟡 Medium
          </button>
          <button
            className={`filter-btn ${filter === 'low' ? 'active' : ''}`}
            onClick={() => setFilter('low')}
          >
            🟢 Low
          </button>
        </div>

        {completedCount > 0 && (
          <button 
            className="btn btn-danger btn-small"
            onClick={onClearCompleted}
            title="Delete all completed tasks"
          >
            🗑️ Clear Completed ({completedCount})
          </button>
        )}
      </div>
    </div>
  )
}

export default TodoFilters
