
export function addAddr(task){
    return{
        type:"ADD_ADDR",
        name:task.name,
        id:task.id,
        city:task.city
    }
}
export function delAddr(id){
    return{
        type:"DEL_ADDR",
        id
    }
}