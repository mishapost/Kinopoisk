import { call, takeEvery, put } from 'redux-saga/effects';
import {IFilm, IFilmsInfo} from "../Types/IFilm";
import {OMDBService} from '../../Services/API/OMDB_APIService';
import {setSearchFilms} from '../Slices/SearchFilmsSlice';
import {actions} from "../Actions";
import {setFilm} from "../Slices/DetailsFilmSlice";


function* getSearchFilmsSaga({ payload }: any) {
    try {
        const res: { data: IFilmsInfo } = yield call(() =>
            OMDBService.getSearchFilms(
                payload.searchText,
                payload.searchType,
                payload.searchYear,
                payload.page,
            ),
        );
        const films = res?.data as IFilmsInfo;
        yield put(setSearchFilms(films));
    } catch (e) {
        console.log(e);
    }
}

function* getFilmyIdSaga({ payload }: any) {
    try {
        const res: { data: IFilm } = yield call(() => OMDBService.getFilmById(payload.imdbID));
        const film = res?.data as IFilm;

        yield put(setFilm(film));
    } catch (e) {
        console.log(e);
    }
}

export function* watchBooksSaga() {
    yield takeEvery(actions.GET_SEARCHFILMS, getSearchFilmsSaga);
    yield takeEvery(actions.GET_FILMBYID, getFilmyIdSaga);
}
