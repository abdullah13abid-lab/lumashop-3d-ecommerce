import React from 'react'
import './TodoHeader.css'

function TodoHeader({ onUndo, canUndo, onExport }) {
  return (
    <header className="todo-header">
      <div className="header-content">
        <h1 className="header-title">📋 TaskMaster</h1>
        <p className="header-subtitle">Your personal task management system</p>
      </div>
      <div className="header-actions">
        <button 
          className="btn btn-small"
          onClick={onUndo}
          disabled={!canUndo}
          title="Undo last action"
        >
          ↶ Undo
        </button>
        <button 
          className="btn btn-small btn-primary"
          onClick={onExport}
          title="Export tasks as JSON"
        >
          ⬇️ Export
        </button>
      </div>
    </header>
  )
}

export default TodoHeader
