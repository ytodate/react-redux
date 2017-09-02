import { combineReducers } from 'redux'

const initialState = {
  count: 0,
}

let add = (state = initialState, action) => {
  console.log("reducer action", action)
  switch (action.type) {
    case 'INC':
      return Object.assign(
        {},
        state, {
          count: state.count + 1,
          text: action.payload.text
        }
      )
    case 'DEC':
      return Object.assign(
        {},
        state, {
          count: state.count - 1,
          text: action.payload.text
        }
      )
    case 'PLUS2':
      return Object.assign(
        {},
        state, {
          count: state.count + 2,
          text: action.payload.text
        }
      )
    case 'PLUS3':
      return Object.assign(
        {},
        state, {
          count: state.count + 3,
          text: action.payload.text
        }
      )
    default:
      return state
  }
}

const rootReducer = combineReducers({
  add
})

export default rootReducer