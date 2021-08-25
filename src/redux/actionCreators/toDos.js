import actions from '../actions/toDos'

export const addToDo = (payload) => ({
  type: actions.ADD_TODO,
  payload,
})

export const toggleToDo = (payload) => ({
  type: actions.TOGGLE_TODO,
  payload
})

export const deleteToDo = (payload) => ({
  type: actions.DELETE_TODO,
  payload,
})

export const editToDo = ({ id, newTitle }) => ({
  type: actions.EDIT_TODO,
  payload: {
    id,
    newTitle,
  },
})