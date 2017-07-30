import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { get, negate, overSome } from 'lodash/fp'
import { composeWithDevTools } from 'redux-devtools-extension'
import fieldReducer from 'redux-field'

export default function initStore() {
  // Before react is init decide what state it should start with.
  const initState = {}

  const reducers = combineReducers({
    form: fieldReducer,
  })

  return createStore(reducers, initState, composeWithDevTools(applyMiddleware(thunk)))
}
