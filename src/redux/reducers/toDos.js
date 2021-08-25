import actions from '../actions/toDos'

const initialState = {
  toDos: [],
}

const toDos = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_TODO:
      return {
        toDos: [...state.toDos, payload],
      }
    case actions.TOGGLE_TODO:
      return {
        toDos: state.toDos.map((toDo) =>
          toDo.id === payload ? { ...toDo, completed: !toDo.completed } : toDo
        ),
      }
    case actions.DELETE_TODO:
      return {
        toDos: state.toDos.filter((toDo) => toDo.id !== payload),
      }
    case actions.EDIT_TODO:
      return {
        toDos: state.toDos.map((toDo) =>
          toDo.id === payload.id ? { ...toDo, title: payload.newTitle } : toDo
        ),
      }
    default:
      return state
  }
}

export default toDos
