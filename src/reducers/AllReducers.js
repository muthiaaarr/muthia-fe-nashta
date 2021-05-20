import { combineReducers } from "redux"
import titleReducers from './title'
import locationReducers from './location'
import participantsReducers from './participants'
import dateReducers from './date'
import noteReducers from './note'
import fileReducers from './file'

const AllReducers = combineReducers({
    title: titleReducers,
    location: locationReducers,
    participants: participantsReducers,
    date: dateReducers,
    note: noteReducers,
    file: fileReducers,
})

export default AllReducers