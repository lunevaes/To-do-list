import React from 'react';
import ToDoList from './ToDo/ToDoList';
import AddToDo from './ToDo/AddToDo';
import Context from './context';

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Купить хлеб'},
    {id: 2, completed: false, title: 'Купить масло'},
    {id: 3, completed: false, title: 'Купить молоко'}
  ])

  function toggleToDo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed =! todo.completed;
        }

        return todo;
      })
    )
  }

  function removeToDo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addToDo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{removeToDo}}>
      <div className='wrapper'>
        <h1>To Do List</h1>
        {todos.length ? <ToDoList todos={todos} onToggle={toggleToDo}/> : <p>Нет задач!</p>}
        <AddToDo onCreate={addToDo}/>
      </div>
    </Context.Provider>
  );
}

export default App;
