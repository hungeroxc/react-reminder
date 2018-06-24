import React, {Component} from 'react'
import ReactDom from 'react-dom'
import App from '@comp/App/index.jsx'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers/index'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(logger)
    )
)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.querySelector('#root')
)
