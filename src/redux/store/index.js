import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from '../reducers/index';

export const middlewares=[ReduxThunk];

export const createStoreWithMidddleware=applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMidddleware(RootReducer)