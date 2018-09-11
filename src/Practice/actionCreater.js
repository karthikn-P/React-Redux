export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";

export function addtodo(task){
    return{
        type:ADD_TODO,
        task 
    }
}
export function deltodo(id){
    return{
        type:DEL_TODO,
        id
    }
}