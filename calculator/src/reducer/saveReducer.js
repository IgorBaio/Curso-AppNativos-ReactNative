const initialState = {
    marked:false,
    markedLabel:''
}

const saveReducer = (state = initialState, action) => {
    switch(action.type){
        case 'marked':
            console.log(action.marked)
            console.log(action.markedLabel)
            state.marked = action.marked;
            state.markedLabel = action.markedLabel;
            return state;
        default:
            return state;
    }
}

export default saveReducer;