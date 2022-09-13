import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer'
const composeEnhancer = composeWithDevTools()
const store = createStore(rootReducer, composeEnhancer); 

console.log("rootReducer", rootReducer)
console.log('Default:', store.getState());
export default store