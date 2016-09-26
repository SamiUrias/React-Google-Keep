import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import AddNote from '../containers/AddNote'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleNoteList from '../containers/VisibleNoteList'
import UndoRedo from '../containers/UndoRedo'

const App = () => (
  <div>
    <AddTodo />
    <AddNote />
		<VisibleNoteList/>
    <VisibleTodoList />
    <Footer />
    <UndoRedo />
  </div>
);

export default App
