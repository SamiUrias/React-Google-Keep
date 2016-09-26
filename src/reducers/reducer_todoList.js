/**
 * Created by samuel on 26/09/16.
 */
import undoable, { distinctState } from 'redux-undo'

const todo_List = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO_LIST':
			return ({
				id: action.id,
				title: action.title,
				todo_list: action.todo_list,
			});
		default:
			return state
	}
};

const todo_Lists = (state = [], action) => {
	switch (action.type){
		case 'ADD_TODO_LIST':
			return [
				...state,
				todo_List(undefined, action)
			];
		default:
			return state
	}
};

const undoableTodoList = undoable(todo_List(),{
	filter: distinctState()
});

export default undoableTodoList