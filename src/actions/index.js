let nextTodoId = 0;
let nextNoteId = 0;
let nextTodoListId = 0;
let nextTodoItem = 0;

/*This action is used to create an item for a todo list*/
export const addTodo = (text) => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	text
});

// /*This action is used to create a todo list*/
// export const addTodoList = (title, todoList) => ({
// 	type: 'ADD_TODO_LIST',
// 	todoList,
// 	id: nextTodoListId++
//
// });


/*This action is used to create a todo item*/
export const addTodoItem = (title, todoList) => ({
	type: 'ADD_TODO_ITEM',
	id: nextTodoItem++,
	title,
	todoList
});

/*This action is usted to remote a todo item from a todo list*/
export const remotveTodo = (id) =>({
	type: 'REMOVE_TODO',
	id
});


/*This action is used to create a note*/
export const addNote = (title, text) => ({
	type: 'ADD_NOTE',
	id: nextNoteId++,
	title,
	text
});

/*This action is used to set the visibility filter*/
export const setVisibilityFilter = (filter) => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
});


/*This action is used to toogle a todo item*/
export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id
});
