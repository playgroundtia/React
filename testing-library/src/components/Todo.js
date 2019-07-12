import React from 'react'

function Todo() {

  const [task, setTask] = React.useState('')
  const [tasks, setTasks] = React.useState([])

  function handlerInputChange(e) {
    setTask(e.target.value)
  }

  function handlerClick(e) {
    e.preventDefault()
    if (task.trim()) {
      setTasks([...tasks, {id: tasks.length, name: task}])
      setTask('')
    }
  }

  return(
   <>
    <form onSubmit={handlerClick}>
      <input data-testid="form-field" value={task} onChange={handlerInputChange} type="text"/>
      <button data-testid="form-btn" type="submit">Add new task</button>
    </form>
    <table data-testid="table">
      <thead>
        <tr>
         <th>Tasks{tasks.length ? `(${(tasks.length)})` : ''}</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(item => <tr key={item.id}><td>{item.name}</td></tr>)}
      </tbody>
    </table>
   </>
  )
}

export default Todo