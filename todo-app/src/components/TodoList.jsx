import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList({ todos, onToggle, onUpdate, onDelete, emptyMessage }) {
  if (todos.length === 0) {
    return (
      <div className="todo-list-empty">
        <div className="empty-icon">📭</div>
        <p>{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TodoList
