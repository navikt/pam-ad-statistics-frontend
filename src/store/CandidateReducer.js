import { FETCH_CANDIDATE, FETCH_CANDIDATE_SUCCESS, FETCH_CANDIDATE_FAILURE, fetchCandidateSuccessAction, fetchCandidateFailureAction } from "./CandidateActions"
import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

const initState = {
    pageViews: 0
};

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
};

export function* CandidateSaga() {
    yield takeEvery(FETCH_CANDIDATE, fetchCandidate)
}

const fetchData = async () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get('candidateID');
    return await axios(`http://localhost:9000/api/candidate?candidateID=${id}`);
};

function* fetchCandidate(){
    try {
        const result = yield call(fetchData);
        yield put(fetchCandidateSuccessAction(result.data))
    } catch (error) {
        console.log(error);
        yield put(fetchCandidateFailureAction())
    }
}

export default CandidateReducer;
