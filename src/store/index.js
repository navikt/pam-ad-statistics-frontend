import {createStore, combineReducers, applyMiddleware} from 'redux'
import AdReducer from './AdReducer'
import CandidateReducer from './CandidateReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import createReduxSaga from 'redux-saga'
import {all, spawn} from 'redux-saga/effects'
import {AdSaga} from './AdReducer'
import {CandidateSaga} from './CandidateReducer'


export const AdStore = () => {
    const saga = createReduxSaga()
    const AdStore = createStore(combineReducers({AdReducer, CandidateReducer}),composeWithDevTools(applyMiddleware(saga)))
    function* rootSaga () {
        yield all([spawn(AdSaga)])
    }
    saga.run(rootSaga)
    return AdStore
}

export const CandidateStore = () => {
    const saga = createReduxSaga()
    const CandidateStore = createStore(combineReducers({AdReducer, CandidateReducer}),composeWithDevTools(applyMiddleware(saga)))
    function* rootSaga () {
        yield all([spawn(CandidateSaga)])
    }
    saga.run(rootSaga)
    return CandidateStore
}

