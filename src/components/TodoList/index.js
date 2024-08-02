import {Component} from 'react'

import ShowTodos from '../ShowTodos'

class TodoList extends Component {
  state = {description: '', status: ''}

  onSubmitForm = async event => {
    event.preventDefault()
    const {description, status} = this.state

    const todoItem = {
      description,
      status,
    }

    const url = 'https://claw-enterpises-backend-1.onrender.com/todos'
    const options = {
      method: 'POST',
      body: JSON.stringify(todoItem),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
      console.log('created')
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onchangeDescription = event => {
    this.setState({description: event.target.value})
  }

  onchangeStatus = event => {
    this.setState({status: event.target.value})
  }

  render() {
    const {description, status} = this.state
    return (
      <div className="todo-bg-container">
        <h1>Todo List</h1>
        <form className="form-contaienr" onSubmit={this.onSubmitForm}>
          <div className="input-container">
            <label className="label" htmlFor="description">
              Description
            </label>
            <input
              id="description"
              type="text"
              className="input-area"
              onChange={this.onchangeDescription}
              value={description}
            />
          </div>
          <div className="input-container">
            <label className="label" htmlFor="status">
              Status
            </label>
            <input
              id="status"
              type="text"
              className="input-area"
              onChange={this.onchangeStatus}
              value={status}
            />
          </div>
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
        <ShowTodos />
      </div>
    )
  }
}
export default TodoList
