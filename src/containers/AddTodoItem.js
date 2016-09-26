/**
 * Created by samuel on 26/09/16.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addTodoItem } from '../actions'

let AddTodo = ({ dispatch }) => {
	let input;
	let todo_title;

	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				dispatch(addTodo(input.value))
				input.value = ''
			}}>
				<div>
					<div>
						<span>Titulo: </span>
						<input ref={node => {
							todo_title = node
						}} />
					</div>
					<div>
						<span>Todo:</span>
						<input ref={node => {
							input = node
						}} />
					</div>
				</div>


				<button type="submit">
					Add todo item
				</button>
			</form>
		</div>
	)
}
AddTodo = connect()(AddTodo)

export default AddTodo
