import {createStore, combineReducers} from 'redux'
import AdReducer from './AdReducer'
import CandidateReducer from './CandidateReducer'


const AdStore = () => {
    return createStore(combineReducers({AdReducer, CandidateReducer}))
}

export default AdStore;