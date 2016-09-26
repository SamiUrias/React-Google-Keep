let nextTodoId = 0;
let nextNoteId = 0;

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});


export const addNote = (text) => ({
    type: 'ADD_NOTE',
    id: nextNoteId++,
    text
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});
