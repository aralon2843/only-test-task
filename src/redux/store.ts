import { combineReducers, createStore } from 'redux'
import toDos from './reducers/toDos'

const rootReducer = combineReducers({
  toDos,
})

export type RootState = ReturnType<typeof rootReducer>

export default createStore(rootReducer)
