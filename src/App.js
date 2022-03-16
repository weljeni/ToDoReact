import React, { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import EditModal from './components/EditModal/EditModal';

function App() {
  const [todos, setTodos] = useState([]);
  let [modal, setModal] = useState(false);
  let [editTodo, setEditTodo] = useState({});

  function handleTask(newObj) {
    let newTodos = [...todos];
    newTodos.push(newObj)
    setTodos(newTodos)
  }

  function changeStatus(id) {
    const newTodos = todos.map(item => {
      if (item.id === id) {
        item.status = !item.status
      }
      return item
    })

    setTodos(newTodos)
  }
  function handleDelete(id) {
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
  }


  function handleEdit(index) {
    setModal(true)
    setEditTodo(todos[index])

  }

  function handleSaveTask(newTask) {
    const newTodos = todos.map(item => {
      if (item.id === newTask.id) {
        return newTask
      }
      return item
    })

    setTodos(newTodos)
    handleCloseModal()

  }
  function handleCloseModal() {
    setModal(false)

  }



  return (
    <div className="App">
      <AddTodo
        handleTask={handleTask}
      />
      <TodoList
        todos={todos}
        changeStatus={changeStatus}
        handleDelete={handleDelete}
        handleEdit={handleEdit}

      />
      {modal ?
        <EditModal editTodo={editTodo}
          handleSaveTask={handleSaveTask}
          handleCloseModal={handleCloseModal}



        /> : null}

    </div>
  )
}

export default App;
