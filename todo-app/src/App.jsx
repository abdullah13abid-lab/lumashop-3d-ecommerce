import React, { useState, useEffect } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoFilters from './components/TodoFilters'
import TodoList from './components/TodoList'
import TodoStats from './components/TodoStats'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('date')
  const [history, setHistory] = useState([])

  // Load todos from local storage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos))
      } catch (error) {
        console.error('Error loading todos:', error)
      }
    }
  }, [])

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todoData) => {
    const newTodo = {
      id: Date.now(),
      title: todoData.title,
      description: todoData.description,
      completed: false,
      priority: todoData.priority || 'medium',
      category: todoData.category || 'general',
      dueDate: todoData.dueDate || null,
      createdAt: new Date().toISOString(),
      subtasks: []
    }
    setHistory([todos])
    setTodos([newTodo, ...todos])
  }

  const updateTodo = (id, updates) => {
    setHistory([todos])
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, ...updates } : todo
    ))
  }

  const deleteTodo = (id) => {
    setHistory([todos])
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    updateTodo(id, { completed: !todos.find(t => t.id === id).completed })
  }

  const clearCompleted = () => {
    setHistory([todos])
    setTodos(todos.filter(todo => !todo.completed))
  }

  const undo = () => {
    if (history.length > 0) {
      const previousTodos = history[history.length - 1]
      setTodos(previousTodos)
      setHistory(history.slice(0, -1))
    }
  }

  const exportTodos = () => {
    const dataStr = JSON.stringify(todos, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `todos-${new Date().toISOString().split('T')[0]}.json`
    link.click()
  }

  // Filter and search todos
  const filteredTodos = todos.filter(todo => {
    const matchesSearch = todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = 
      filter === 'all' ||
      (filter === 'active' && !todo.completed) ||
      (filter === 'completed' && todo.completed) ||
      (filter === 'high' && todo.priority === 'high') ||
      (filter === 'medium' && todo.priority === 'medium') ||
      (filter === 'low' && todo.priority === 'low')
    return matchesSearch && matchesFilter
  })

  // Sort todos
  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sortBy === 'priority') {
      const priorityOrder = { high: 1, medium: 2, low: 3 }
      return priorityOrder[a.priority] - priorityOrder[b.priority]
    } else if (sortBy === 'date') {
      return new Date(b.createdAt) - new Date(a.createdAt)
    } else if (sortBy === 'duedate') {
      if (!a.dueDate) return 1
      if (!b.dueDate) return -1
      return new Date(a.dueDate) - new Date(b.dueDate)
    } else if (sortBy === 'alphabetical') {
      return a.title.localeCompare(b.title)
    }
    return 0
  })

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    active: todos.filter(t => !t.completed).length,
    highPriority: todos.filter(t => t.priority === 'high' && !t.completed).length
  }

  return (
    <div className="app">
      <div className="container">
        <TodoHeader 
          onUndo={undo} 
          canUndo={history.length > 0}
          onExport={exportTodos}
        />
        
        <TodoStats stats={stats} />
        
        <TodoInput onAddTodo={addTodo} />
        
        <TodoFilters 
          filter={filter}
          setFilter={setFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
          completedCount={stats.completed}
          onClearCompleted={clearCompleted}
        />
        
        <TodoList 
          todos={sortedTodos}
          onToggle={toggleTodo}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
          emptyMessage={filter === 'all' && !searchTerm ? 'No tasks yet. Add one to get started!' : 'No matching tasks found.'}
        />
      </div>
    </div>
  )
}

export default App
