import { createAction, createSlice } from '@reduxjs/toolkit';
import {IFilm} from "../Types/IFilm";
import {actions} from "../Actions";


interface IFilmState {
    film: IFilm | null;
}

const initialState: IFilmState = {
    film: null,
};

export const getFilmAction = createAction<{ imdbID: string }>(actions.GET_FILMBYID);

export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        setFilm: (state, action) => {
            state.film = action.payload;
        },
    },
});

export const { setFilm } = filmSlice.actions;

export const getFilm = (state: { FilmSlice: IFilmState }) => state.FilmSlice.film;

export default filmSlice.reducer;