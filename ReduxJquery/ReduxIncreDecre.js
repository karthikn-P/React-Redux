var initialState = {        //intial state....
    count:0
}
function rootReducer(state=initialState,action){        //reducer function...
    switch (action.type) {
        case "INCREMENT":
            var newState = Object.assign({},state);
            newState.count++;
            return newState;
        case "DECREMENT":
            var newState = {...state};
            newState.count--;
            return newState;
        default:
            return initialState
    }   
}

var store = Redux.createStore(rootReducer);     //create store...

$(document).ready(function(){
    let currentState = store.getState();        //get current store data ...
    $('#container').text(currentState.count);

    //increment button...
    $('#increment').on('click', function () {  
        store.dispatch({                        //dispatch the actions...
            type:"INCREMENT"
        })
    let currentState = store.getState();
    $('#container').text(currentState.count);
    });

    //decrement button...
    $('#decrement').on('click', function () {
        store.dispatch({
            type:"DECREMENT"
        })
    let currentState = store.getState();
    $('#container').text(currentState.count);
    });
})
