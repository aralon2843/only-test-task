import { combineReducers, createStore } from 'redux'
import toDos from './reducers/toDos'

const reducers = combineReducers({
  toDos,
})

const store = createStore(reducers)

export default store
