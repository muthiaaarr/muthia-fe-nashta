const locationReducer = (state = '', action) => {
    switch(action.type) {
        case 'changeLocation' : 
            return action.payload
        default :
            return state
    }
}

export default locationReducer