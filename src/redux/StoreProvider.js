import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk));

const StoreProvider = (props) => {

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default StoreProvider