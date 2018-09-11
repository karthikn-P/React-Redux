const intialState = {
    Addr:[]
}
export default function rootReducer(state=intialState,action){

    switch(action.type){
        case "ADD_ADDR":
        var newState={...state};
        return{
            ...newState,
            Addr:[...newState.Addr, {name:action.name, id:action.id,city:action.city}]
        };
        case "DEL_ADDR":
        let Addr = state.Addr.filter(val => val.id !== action.id);  
        return{...state,Addr};
        default:
        return  state;
    }
}