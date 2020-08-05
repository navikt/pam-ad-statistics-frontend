import {FETCH_AD,FETCH_AD_FAILURE,FETCH_AD_SUCCESS} from './AdActions'


const initState = {
    pageViews: 0,
    averageTimeOnPage: [0],
    referrals: [],
    viewsPerReferral: [],
    dates: [],
    viewsPerDate: [],
    isFetching: false
}

const AdReducer = (state = initState, action) => {
    switch(action.type){
        case FETCH_AD:
            return {...state, isFetching: true}
        case FETCH_AD_SUCCESS:
            return {...action.payload, isFetching: false}
        case FETCH_AD_FAILURE:
            return {...state, isFetching: false}
        default:
            return state
    }
}

export default AdReducer;