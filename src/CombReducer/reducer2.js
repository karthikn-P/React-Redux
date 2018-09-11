const initialState={
    b:1
}
const reducer2 = (state=initialState,action)=>{
    if(action.type === 'ClickB'){
        return{
            ...state,
            b:action.a + state.b
        }
    }
    return state;
}

export default reducer2;