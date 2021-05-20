const participantsReducer = (state = '', action) => {
    switch(action.type) {
        case 'changeParticipants' : 
            return action.payload
        default :
            return state
    }
}

export default participantsReducer