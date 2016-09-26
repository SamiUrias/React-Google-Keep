import { combineReducers } from 'redux'
import todos from './reducer_todos'
import notes from './reducer_notes'
import todoItems from './reducer_todoItem'

import visibilityFilter from './reducer_visibilityFilter'

const todoApp = combineReducers({
	notes,
	todos,
	todoItems,
	visibilityFilter
});

export default todoApp
