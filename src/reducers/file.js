const fileReducer = (state = '', action) => {
    switch(action.type) {
        case 'changeFile' : 
            return action.payload
        default :
            return state
    }
}

export default fileReducer