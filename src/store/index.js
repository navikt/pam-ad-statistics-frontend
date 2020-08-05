import {createStore, combineReducers, applyMiddleware} from 'redux'
import AdReducer from './AdReducer'
import CandidateReducer from './CandidateReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import createReduxSaga from 'redux-saga'
import {all, spawn} from 'redux-saga/effects'
import {AdSaga} from './AdReducer'
import {CandidateSaga} from './CandidateReducer'


export const Store = () => {
    const saga = createReduxSaga();

    const store = createStore(
        combineReducers({
            AdReducer,
            CandidateReducer
        }),
        composeWithDevTools(applyMiddleware(saga))
    );

    function* rootSaga () {
        yield all([
            spawn(AdSaga),
            spawn(CandidateSaga)
        ])
    }

    saga.run(rootSaga);

    return store
};

