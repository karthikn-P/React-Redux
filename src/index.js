import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
//import rootReducer from './Practice/rootReducers';
//import reduxReducer from './ReduxReact/reduxReducer';
import Reducer from './CombReducer/Reducer';

// import reduce1 from './CombReducer/reducer1';
// import reduce2 from './CombReducer/reducer2';

// const combReducer=combineReducers({
//     R1:reduce1,
//     R2:reduce2
// })
// const store = createStore(combReducer);

const store = createStore(Reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
