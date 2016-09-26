/**
 * Created by samuel on 26/09/16.
 */
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import NoteList from '../components/NoteList'

const getVisibleTodos = (notes, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return notes
		case 'SHOW_COMPLETED':
			return notes.filter(t => t.completed)
		case 'SHOW_ACTIVE':
			return notes.filter(t => !t.completed)
		default:
			throw new Error('Unknown filter: ' + filter)
	}
}

const mapStateToProps = (state) => ({
	notes: getVisibleTodos(state.notes.present, state.visibilityFilter)
});

// const mapDispatchToProps = ({
// 	onTodoClick: toggleTodo
// })

const VisibleNoteList = connect(
	mapStateToProps,
	// mapDispatchToProps
)(NoteList);

export default VisibleNoteList
