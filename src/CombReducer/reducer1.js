const initialState={
    a:1
}
const reducer1 = (state=initialState,action)=>{
    if(action.type === 'ClickA'){
        return{
            ...state,
            a:state.a + action.b
        }
    }
    
    return state;
}

export default reducer1;