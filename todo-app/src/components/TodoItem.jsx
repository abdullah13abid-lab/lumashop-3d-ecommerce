import React, { useState } from 'react'
import './TodoItem.css'

function TodoItem({ todo, onToggle, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.title)
  const [editDescription, setEditDescription] = useState(todo.description)
  const [editPriority, setEditPriority] = useState(todo.priority)
  const [editDueDate, setEditDueDate] = useState(todo.dueDate)

  const handleSaveEdit = () => {
    if (editTitle.trim()) {
      onUpdate(todo.id, {
        title: editTitle.trim(),
        description: editDescription.trim(),
        priority: editPriority,
        dueDate: editDueDate
      })
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditTitle(todo.title)
    setEditDescription(todo.description)
    setEditPriority(todo.priority)
    setEditDueDate(todo.dueDate)
    setIsEditing(false)
  }

  const getPriorityEmoji = (priority) => {
    const emojis = { high: '🔴', medium: '🟡', low: '🟢' }
    return emojis[priority] || '⚪'
  }

  const getCategoryEmoji = (category) => {
    const emojis = {
      general: '📌',
      work: '💼',
      personal: '👤',
      shopping: '🛒',
      health: '🏥'
    }
    return emojis[category] || '📌'
  }

  const formatDate = (dateString) => {
    if (!dateString) return null
    const date = new Date(dateString)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    if (date.toDateString() === today.toDateString()) {
      return 'Today'
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow'
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }
  }

  const isOverdue = todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed

  if (isEditing) {
    return (
      <div className="todo-item editing">
        <div className="edit-form">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="edit-title"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="edit-description"
            rows="2"
          />
          <div className="edit-options">
            <select value={editPriority} onChange={(e) => setEditPriority(e.target.value)}>
              <option value="low">🟢 Low</option>
              <option value="medium">🟡 Medium</option>
              <option value="high">🔴 High</option>
            </select>
            <input
              type="date"
              value={editDueDate}
              onChange={(e) => setEditDueDate(e.target.value)}
            />
          </div>
          <div className="edit-actions">
            <button className="btn btn-primary btn-small" onClick={handleSaveEdit}>
              ✓ Save
            </button>
            <button className="btn btn-secondary btn-small" onClick={handleCancel}>
              ✕ Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} ${isOverdue ? 'overdue' : ''}`}>
      <div className="todo-checkbox-wrapper">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />
      </div>
      
      <div className="todo-content">
        <div className="todo-header">
          <h3 className="todo-title">{todo.title}</h3>
          {isOverdue && <span className="overdue-badge">⏰ Overdue</span>}
        </div>
        
        {todo.description && (
          <p className="todo-description">{todo.description}</p>
        )}
        
        <div className="todo-meta">
          <span className="meta-item">{getPriorityEmoji(todo.priority)} {todo.priority}</span>
          <span className="meta-item">{getCategoryEmoji(todo.category)} {todo.category}</span>
          {todo.dueDate && (
            <span className={`meta-item ${isOverdue ? 'meta-overdue' : ''}`}>
              📅 {formatDate(todo.dueDate)}
            </span>
          )}
          <span className="meta-item">📝 {new Date(todo.createdAt).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="todo-actions">
        <button
          className="btn-icon btn-action"
          onClick={() => setIsEditing(true)}
          title="Edit task"
        >
          ✏️
        </button>
        <button
          className="btn-icon btn-danger"
          onClick={() => onDelete(todo.id)}
          title="Delete task"
        >
          🗑️
        </button>
      </div>
    </div>
  )
}

export default TodoItem
