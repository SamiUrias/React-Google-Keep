import { combineReducers } from 'redux'
import todos from './todos'
import notes from './notes'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
	todos,
	notes,
	visibilityFilter
});

export default todoApp
