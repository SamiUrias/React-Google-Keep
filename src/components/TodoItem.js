/**
 * Created by samuel on 26/09/16.
 */
import React, { PropTypes } from 'react'
import TodoList from './TodoList'

const TodoItem = ({ onClick, title, todoList }) => (
	<div>
		<h1 className="note-title">{title}</h1>
		<TodoList/>
	</div>
);

TodoItem.propTypes = {
	text: PropTypes.string.isRequired,
};

export default TodoItem