
export const FETCH_AD = 'FETCH_AD'
export const FETCH_AD_SUCCESS = 'FETCH_AD_SUCCESS'
export const FETCH_AD_FAILURE = 'FETCH_AD_FAILURE'


export const fetchAdAction = () => {
    return {type: FETCH_AD}
}

export const fetchAdSuccessAction = (payload) => {
    return {type: FETCH_AD_SUCCESS, payload}   
}

export const fetchAdFailureAction = () => {
    return {type: FETCH_AD_FAILURE}
}
