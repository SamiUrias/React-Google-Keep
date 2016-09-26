/**
 * Created by samuel on 26/09/16.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions'

let AddNote = ({ dispatch }) => {
	let input;
	let note_title;

	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				dispatch(addNote(note_title.value, input.value));
				input.value = ''
				note_title.value = ''
			}}>
				<input ref={node => {
					note_title = node;
				}} />


				<input ref={node => {
					input = node;
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
