const initialState={
    a:1,
    b:1
}
const Reducer = (state=initialState,action)=>{
    if(action.type === 'ClickA'){
        return{
            ...state,
            a:state.a + state.b
        }
    }
    if(action.type === 'ClickB'){
        return{
            ...state,
            b:state.a + state.b
        }
    }
    return state;
}

export default Reducer;