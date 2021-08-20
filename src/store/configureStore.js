import rootReducer from '../reducers'
import { createStore } from 'redux'

const configureStore = preloadedState => {
    const store = createStore(
        rootReducer,
        preloadedState, 
    )

    return store
}

export default configureStore