/**
 * Created by samuel on 26/09/16.
 */
import undoable, { distinctState } from 'redux-undo';
const todoItem = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO_ITEM':
			return({
				id: action.id,
				title: action.title,
				todoList: action.todoList
			});

		default:
			return state
	}
};

const todoItems = (state=[], action) => {
	switch (action.type){
		case 'ADD_TODO_ITEM':
			return [
				...state,todoItem(undefined, action)
			]
		default:
			return state
	}
};


const undoableTodoItems = undoable(todoItems, {
	filter: distinctState()
});

export default undoableTodoItems
