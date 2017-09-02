import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/App.jsx'
import configureStore from './store/configureStore'

const store = configureStore({})

render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('app')
)
