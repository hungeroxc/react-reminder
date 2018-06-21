import React, {Component} from 'react'
import ReactDom from 'react-dom'
import App from '@comp/App/index.jsx'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'

import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware()
    )
)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.querySelector('#root')
)
