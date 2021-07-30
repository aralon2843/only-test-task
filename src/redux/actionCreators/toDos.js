import actions from '../actions/toDos'

export const setToDo = (payload) => ({
  type: actions.SET_TODO,
  payload,
})

export const setDoneToDo = (payload) => ({
  type: actions.SET_DONE_TODO,
  payload,
})

export const removeToDoFromDones = (payload) => ({
  type: actions.REMOVE_TODO_FROM_DONES,
  payload,
})

export const deleteToDo = (payload) => ({
  type: actions.DELETE_TODO,
  payload,
})

export const editToDoTitle = ({ id, newTitle }) => ({
  type: actions.EDIT_TODO_TITLE,
  payload: {
    id,
    newTitle,
  },
})
