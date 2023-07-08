// unicamente config de la extension del browser//
import {applyMiddleware, compose} from "redux" 
import thunkMiddleWare from "redux-thunk"   
// -------------------------------------------------------------- //

import {createStore} from "redux"
import reducer from "./reducer"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  //config de la extension del browser//

const store = createStore(reducer,
 composeEnhancer(applyMiddleware(thunkMiddleWare))) //config de la extension del browser, segundo paramatro post reducer//

export default store;