import React, { PropTypes } from 'react'

//Debug inline style
const dev_style_remove_todo_1 = {
  display: 'inline-block',
  paddingRight: '20px'
};
const dev_style_remove_todo = {
  display: 'inline-block'
};

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <div>
      <div style={dev_style_remove_todo_1}>{text}</div>
      <div style={dev_style_remove_todo}><a href="">x</a></div>
    </div>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
