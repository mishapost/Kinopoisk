import {createAction, createSlice} from '@reduxjs/toolkit';
import {IFilm, IFilmsInfo} from "../Types/IFilm";
import {actions} from "../Actions";

interface ISearchFilmsState {
    filmsInfo: IFilmsInfo | null;
    showItemsCount?: number;
    prevPage: number;
    page: number;
    searchText: string;
    searchType: string;
    searchYear: number;
}

const initialState: ISearchFilmsState = {
    filmsInfo: null,
    showItemsCount: 0,
    prevPage: 0,
    page: 1,
    searchText: 'Matrix',
    searchType: '',
    searchYear: 2004,
};

export const searchFilmsSlice = createSlice({
    name: 'searchFilms',
    initialState,
    reducers: {
        setSearchFilms: (state, action) => {
            if (action && action.payload && action.payload.Search) {
                const films = action.payload.Search.map((film: IFilm) => ({ ...film }));
                if (state.page === 1) {
                    state.filmsInfo = { ...action.payload, Search: films };
                }
                if (state.page !== 1 && state.page !== state.prevPage) {
                    let addFilms: IFilm[] = [];
                    if (state.filmsInfo?.Search)
                        addFilms = state.filmsInfo?.Search.map((film: IFilm) => ({ ...film }));
                    addFilms = [...addFilms, ...films];
                    state.filmsInfo = { ...action.payload, Search: addFilms };
                    state.prevPage = state.page;
                }
                state.showItemsCount = state.filmsInfo?.Search.length;
            } else {
                state.filmsInfo = null;
                state.showItemsCount = 0;
                state.page = 1;
            }
        },
        setSearchText: (state, action) => {
            state.page = 1;
            state.searchText = action.payload;
        },
        setSearchType: (state, action) => {
            state.page = 1;
            state.searchType = action.payload;
        },
        setSearchYear: (state, action) => {
            state.page = 1;
            state.searchYear = action.payload;
        },
        setPage: (state, action) => {
            if (
                action.payload > 0 &&
                state.showItemsCount &&
                state.filmsInfo?.totalResults &&
                state.showItemsCount < state.filmsInfo?.totalResults
            ) {
                state.page = action.payload;
            }
        },
    }
});

export const getFilms = (state: { SearchFilmsSlice: ISearchFilmsState }) => ({
    films: state.SearchFilmsSlice.filmsInfo?.Search,
    totalResults: state.SearchFilmsSlice.filmsInfo?.totalResults,
    showItemsCount: state.SearchFilmsSlice.showItemsCount,
    page: state.SearchFilmsSlice.page,
});

export const getSearchText = (state: { SearchFilmsSlice: ISearchFilmsState }) => state.SearchFilmsSlice.searchText;
export const getSearchType = (state: { SearchFilmsSlice: ISearchFilmsState }) => state.SearchFilmsSlice.searchType;
export const getSearchYear = (state: { SearchFilmsSlice: ISearchFilmsState }) => state.SearchFilmsSlice.searchYear;
export const {setSearchFilms,setSearchText,setSearchType,setSearchYear,setPage} = searchFilmsSlice.actions;

export const getSearchFilmsAction = createAction<{
    searchText: string;
    searchType: string;
    searchYear?: number;
    page: number;
}>(actions.GET_SEARCHFILMS);

export default searchFilmsSlice.reducer;