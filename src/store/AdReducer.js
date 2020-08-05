import {FETCH_AD,FETCH_AD_FAILURE,FETCH_AD_SUCCESS, fetchAdSuccessAction, fetchAdFailureAction} from './AdActions'
import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'


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

const fetchData = async () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get('adID');
    return await axios(
    'http://localhost:9000/api/ad/' + id
    )};

function* fetchAd(){
    try {

        const result = yield call(fetchData)
        console.log(result)
        yield put(fetchAdSuccessAction(result.data))
    } catch (error) {
        console.log(error)
        yield put(fetchAdFailureAction())
    }

    };

export default AdReducer;