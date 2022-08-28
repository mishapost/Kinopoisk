import {BaseService} from './BaseService';

class OMDB_APIService extends BaseService {
    public async getSearchFilms(
        searchText: string,
        searchType: string,
        searchYear: number,
        page: number,
    ) {
        const typeStr = searchType ? `&type=${searchType}` : '';
        const yearStr = searchYear ? `&y=${searchYear}` : '';
        const path = `&s=${searchText}&page=${page}${typeStr}${yearStr}`;
        return await this.get(path);
    }

    public async getFilmById(imdbID: string) {
        return this.get(`&i=${imdbID}&plot=full`);
    }
}

export const OMDBService = new OMDB_APIService();