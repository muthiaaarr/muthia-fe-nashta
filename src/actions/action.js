export const changeTitle = (title) => {
    return{
        type: 'changeTitle',
        payload: title,
    }
}

export const changeLocation = (location) => {
    return{
        type: 'changeLocation',
        payload: location,
    }
}

export const changeParticipants = (participants) => {
    return{
        type: 'changeParticipants',
        payload: participants
    }
}

export const changeDate = (date) => {
    return{
        type: 'changeDate',
        payload: date,
    }
}

export const changeNote = (note) => {
    return{
        type: 'changeNote',
        payload: note,
    }
}

export const changeFile = (file) => {
    return{
        type: 'changeFile',
        payload: file,
    }
}