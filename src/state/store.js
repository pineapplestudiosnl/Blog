import { createStore, combineReducers } from 'redux'
import {blogReducer} from '../blog/BlogState'

const store = createStore(combineReducers({
  blog: blogReducer
}))

export default store
