const dateReducer = (state = new Date(), action) => {
    switch(action.type) {
        case 'changeDate' : 
            return action.payload
        default :
            return state
    }
}

export default dateReducer