/**
 * Created by samuel on 26/09/16.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions'

let AddNote = ({ dispatch }) => {
	let input;

	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				dispatch(addNote(input.value));
				input.value = ''
			}}>
				<input ref={node => {
					input = node //Change for text
				}} />
				<button type="submit">
					Add Note
				</button>
			</form>
		</div>
	)
};


AddNote = connect()(AddNote)

export default AddNote
