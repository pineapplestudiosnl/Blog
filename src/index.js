import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import Routes from './routes'
import registerServiceWorker from './registerServiceWorker'
import store from './state/store'

// load bootstrap & jQuery
require('bootstrap/dist/css/bootstrap.min.css')
window.jQuery = window.$ = require('jquery')
require('bootstrap/dist/js/bootstrap.min.js')

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>, document.getElementById('root')
)
registerServiceWorker()
