import actions from '../actions/toDos'

export const addToDo = (payload: {
  id: number
  title: string
  completed: boolean
}) => ({
  type: actions.ADD_TODO,
  payload,
})

export const toggleToDo = (payload: number) => ({
  type: actions.TOGGLE_TODO,
  payload,
})

export const deleteToDo = (payload: number) => ({
  type: actions.DELETE_TODO,
  payload,
})

export const editToDo = ({
  id,
  newTitle,
}: {
  id: number
  newTitle: string
}) => ({
  type: actions.EDIT_TODO,
  payload: {
    id,
    newTitle,
  },
})
