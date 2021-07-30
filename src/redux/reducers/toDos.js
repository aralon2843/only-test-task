import actions from '../actions/toDos'

const initialState = {
  toDos: [],
  doneToDos: [],
}

const toDos = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SET_TODO:
      return {
        ...state,
        toDos: [...state.toDos, payload],
      }
    case actions.SET_DONE_TODO:
      return {
        ...state,
        doneToDos: [...state.doneToDos, payload],
      }

    case actions.REMOVE_TODO_FROM_DONES:
      return {
        ...state,
        doneToDos: state.doneToDos.filter((toDo) => toDo !== payload),
      }
    case actions.DELETE_TODO:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== payload),
        doneToDos: state.doneToDos.filter((toDo) => toDo !== payload),
      }
    case actions.EDIT_TODO_TITLE:
      console.log(payload)
      return {
        ...state,
        toDos: state.toDos.map((toDo) =>
          toDo.id === payload.id
            ? { id: toDo.id, title: payload.newTitle }
            : toDo
        ),
      }
    default:
      return state
  }
}

export default toDos
