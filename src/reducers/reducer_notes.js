/**
 * Created by samuel on 25/09/16.
 */
import undoable, { distinctState } from 'redux-undo'

const note = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return ({
                id: action.id,
                title: action.title,
                text: action.text,
            });
        default:
            return state
    }
};

const notes = (state = [], action) => {
  switch (action.type){
      case 'ADD_NOTE':
          return [
              ...state,
              note(undefined, action)
          ];
      default:
          return state
  }
};

const undoableNotes = undoable(notes,{
    filter: distinctState()
});

export default undoableNotes