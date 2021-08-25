import actions from '../actions/toDos'

interface IToDo {
  id: number
  title: string
  completed: boolean
}

interface IToDos {
  toDos: Array<IToDo>
}

const initialState: IToDos = {
  toDos: [],
}

const toDos = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case actions.ADD_TODO:
      return {
        toDos: [...state.toDos, payload],
      }
    case actions.TOGGLE_TODO:
      return {
        toDos: state.toDos.map((toDo: { id: number; completed: boolean }) =>
          toDo.id === payload ? { ...toDo, completed: !toDo.completed } : toDo
        ),
      }
    case actions.DELETE_TODO:
      return {
        toDos: state.toDos.filter(
          (toDo: { id: number }) => toDo.id !== payload
        ),
      }
    case actions.EDIT_TODO:
      return {
        toDos: state.toDos.map((toDo: { id: number }) =>
          toDo.id === payload.id ? { ...toDo, title: payload.newTitle } : toDo
        ),
      }
    default:
      return state
  }
}

export default toDos
