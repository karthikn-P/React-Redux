var initialState = {
    todo:[],
    id:0
}

function rootReducer(state=initialState,action){
    switch(action.type){
        case "ADD_TODO":
        newState={...state}
        newState.id++
        return{
            ...newState,
            todo:[...newState.todo,{todo:action.task,id:newState.id}]
        };
        case "DEL_TODO":
 
        let filterTodo = state.todo.filter(val =>val.id !== +action.id);
        return {...state, todo:filterTodo }
        default:
        return state;
    }
}
var store = Redux.createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

$(document).ready(function () {
    $("form").on("submit",function(event){
        event.preventDefault();
        let newTask = $("#task").val();
        store.dispatch({
            type:"ADD_TODO",
            task:newTask
        })
        let currentState = store.getState();
        let liId=$("<button>",{
            text:"X",
            id:currentState.id
        })
        $("#todos").append($("<li>",{ text:newTask}).append(liId));
    
    $("ul").on("click","button",function(event){
 
        store.dispatch({
            type:"DEL_TODO",
            id:$(event.target).attr("id")
        })
        $(event.target).parent().remove();
    })
        $("form").trigger("reset");
    })
});