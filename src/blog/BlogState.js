import BlogPosts from './BlogPosts'
import Topics from './Topics'

const initialState = {
  selectedTopic: Topics.spiders,
  posts: BlogPosts
}

const SELECT_TOPIC = 'SELECT_TOPIC'
const ADD_BLOG_POST = 'ADD_BLOG_POST'

export const selectTopic = (id) => ({
  type: SELECT_TOPIC,
  id
})

export const addBlogPost = (newBlogPost) => ({
  type: ADD_BLOG_POST,
  newBlogPost
})

export function blogReducer(state = initialState, action) {
  switch(action.type) {
  case ADD_BLOG_POST:
    const newPosts = [...state.posts, action.newBlogPost]
    return Object.assign({}, state, {posts: newPosts})
  case SELECT_TOPIC:
    return Object.assign({}, state, {topic: action.id})
  default:
    return state
  }
}
