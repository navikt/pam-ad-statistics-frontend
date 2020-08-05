import {FETCH_AD,FETCH_AD_FAILURE,FETCH_AD_SUCCESS} from './AdActions'
import { takeLatest, takeEvery } from 'redux-saga/effects'


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

export function* AdSaga() {
    yield takeEvery(FETCH_AD, fetchAd)
}

function* fetchAd(){
    const pathList = ('nav.no/stillinger/stilling/d1508053-0982-401d-985d-e9660d2a0cbc').split("/")
    const id = pathList.pop()
    var type = 'ad'
    const fetchData = async () => {
        const result = await axios(
        'http://localhost:9000/'+ type + '/' + id,
        )
}

export default AdReducer;