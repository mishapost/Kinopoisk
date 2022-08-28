import { configureStore } from '@reduxjs/toolkit';
import searchFilmsSlice from "./Slices/SearchFilmsSlice";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./Sagas/Saga";
import filmSlice from "./Slices/DetailsFilmSlice";


let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
    reducer: {
        SearchFilmsSlice: searchFilmsSlice,
        FilmSlice: filmSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);
