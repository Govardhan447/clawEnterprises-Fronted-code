import './index.css'

const ShowTodos = props => {
  const {todoListDetails} = props
  const {description, status} = todoListDetails

  return (
    <li className="todoList-container">
      <div className="item-container">
        <h1 className="heading">Description</h1>
        <p className="todo-paragraph">{description}</p>
      </div>
      <div className="item-container">
        <h1 className="heading">Description</h1>
        <p className="todo-paragraph">{status}</p>
      </div>
      <div className="btn-container">
        <button type="button" className="edit-btn">
          Edit
        </button>
        <button type="button" className="edit-btn">
          Delete
        </button>
      </div>
    </li>
  )
}
export default ShowTodos
