import { all } from 'redux-saga/effects';

import { watchBooksSaga } from '../Sagas/FilmSaga';

export function* rootSaga() {
    try {
        yield all([watchBooksSaga()]);
    } catch (e) {
        console.log({ e });
    }
}