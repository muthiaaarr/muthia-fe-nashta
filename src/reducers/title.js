const titleReducer = (state = '', action) => {
    switch(action.type) {
        case 'changeTitle' : 
            return action.payload
        default :
            return state
    }
}

export default titleReducer