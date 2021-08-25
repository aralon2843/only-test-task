import { combineReducers, createStore } from 'redux'
import toDos from './reducers/toDos'

const reducers = combineReducers({
  toDos,
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

window.store = store