import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import createLogger from 'redux-logger'

//TODO 使いしたい・・・
const logger = createLogger({
  // ログレベルを指定
  level: 'log',
  // 一連の処理にかかった時間を表示するか
  duration: true
})

const middlewares = []
middlewares.push(logger)

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer, // reducerで定義した関数
    //initialState,
    //applyMiddleware(logger),
  )
  return store
}