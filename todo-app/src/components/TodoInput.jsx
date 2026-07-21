import React, { useState } from 'react'
import './TodoInput.css'

function TodoInput({ onAddTodo }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('medium')
  const [category, setCategory] = useState('general')
  const [dueDate, setDueDate] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      onAddTodo({
        title: title.trim(),
        description: description.trim(),
        priority,
        category,
        dueDate
      })
      setTitle('')
      setDescription('')
      setPriority('medium')
      setCategory('general')
      setDueDate('')
      setIsExpanded(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && !isExpanded) {
      handleSubmit(e)
    }
  }

  return (
    <form className="todo-input-form" onSubmit={handleSubmit}>
      <div className="input-main">
        <span className="input-icon">✏️</span>
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsExpanded(true)}
          className="main-input"
        />
        {title.trim() && (
          <button type="submit" className="btn btn-primary btn-small">
            ✓ Add
          </button>
        )}
      </div>

      {isExpanded && (
        <div className="input-expanded fade-in">
          <textarea
            placeholder="Add a description (optional)..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="description-input"
            rows="3"
          />

          <div className="input-options">
            <div className="option-group">
              <label>Priority:</label>
              <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="low">🟢 Low</option>
                <option value="medium">🟡 Medium</option>
                <option value="high">🔴 High</option>
              </select>
            </div>

            <div className="option-group">
              <label>Category:</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="general">📌 General</option>
                <option value="work">💼 Work</option>
                <option value="personal">👤 Personal</option>
                <option value="shopping">🛒 Shopping</option>
                <option value="health">🏥 Health</option>
              </select>
            </div>

            <div className="option-group">
              <label>Due Date:</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
          </div>

          <div className="input-actions">
            <button type="submit" className="btn btn-primary" disabled={!title.trim()}>
              ✓ Add Task
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setIsExpanded(false)
                setTitle('')
                setDescription('')
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </form>
  )
}

export default TodoInput
