import {ADD_TODO,DEL_TODO} from './actionCreater';

const intialState = {
    todo:[],
    id:0
}
export default function rootReducer(state=intialState,action){

    switch(action.type){
        case "ADD_TODO":
        var newState={...state};
        newState.id++
        return{
            ...newState,
            todo:[...newState.todo, {task:action.task, id:newState.id}]
        };
        case "DEL_TODO":
        let todo = state.todo.filter(val => val.id !== action.id);  
        return{...state,todo};
        default:
        return  state;
    }
}