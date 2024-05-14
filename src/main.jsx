// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './redux/store.js'
import { Tooltip } from 'react-tooltip'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <App />
    <Tooltip id="my-tooltip" />
  </Provider>,
)
