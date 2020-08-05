
export const FETCH_CANDIDATE = 'FETCH_CANDIDATE'
export const FETCH_CANDIDATE_SUCCESS = 'FETCH_CANDIDATE_SUCCESS'
export const FETCH_CANDIDATE_FAILURE = 'FETCH_CANDIDATE_FAILURE'


export const fetchCandidateAction = () => {
    return {type: FETCH_CANDIDATE}
}

export const fetchCandidateSuccessAction = (payload) => {
    return {type: FETCH_CANDIDATE_SUCCESS, payload}   
}

export const fetchCandidateFailureAction = () => {
    return {type: FETCH_CANDIDATE_FAILURE}
}