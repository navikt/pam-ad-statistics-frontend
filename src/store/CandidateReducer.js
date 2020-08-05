import { FETCH_CANDIDATE, FETCH_CANDIDATE_SUCCESS, FETCH_CANDIDATE_FAILURE } from "./CandidateActions"


const initState = {
    pageViews: 0
}

const CandidateReducer = (state = initState, action) => {
    switch(action.type){
        case FETCH_CANDIDATE:
            return {...state, isFetching: true}
        case FETCH_CANDIDATE_SUCCESS:
            return {...action.payload, isFetching: false}
        case FETCH_CANDIDATE_FAILURE:
            return {...state, isFetching: false}
        default:
            return state
    }
}

export default CandidateReducer;