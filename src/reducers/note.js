const noteReducer = (state = '', action) => {
    switch(action.type) {
        case 'changeNote' : 
            return action.payload
        default :
            return state
    }
}

export default noteReducer