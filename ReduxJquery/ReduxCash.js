var initialState = {
    cash:2000,
    text:""
}
function rootReducer(state = initialState,action){
    switch(action.type){
        case "DEPOSIT":
        var newState = {...state}
        newState.cash += action.cash;
        newState.text = `Your balance is ${newState.cash}`;
        return newState;
        case "WITHDRAWAL":
        var newState = {...state}
        if(newState.cash<action.cash){
            newState.text = `insufficient balance`;
            return newState;
        }else{
            newState.cash -= action.cash;
            newState.text = `Your balance is ${newState.cash}`;
            return newState;
        }
        default: return state;   
    }
}
var store = Redux.createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

$(document).ready(function(){

    $('#deposit').on("click",function(){
        let cash = $('#cash').val();
        store.dispatch({
            type:'DEPOSIT',
            cash:Number(cash)
        })  
        let currentState = store.getState();
        $("#container").text(currentState.text)
    });
    $('#withdrawal').on("click",function(){
        let cash = $('#cash').val();
        store.dispatch({
            type:'WITHDRAWAL',
            cash:Number(cash)
        })
        let currentState = store.getState();
        $("#container").text(currentState.text) 
    });

});