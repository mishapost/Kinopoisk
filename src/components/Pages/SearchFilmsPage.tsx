import styled from "styled-components";
import {PageTemplate} from "../Templates/PageTemplate/PageTemplate";
import {Input, ETypeInput} from "../CommonComponents/Input/Input";
import {ComboBox} from "../CommonComponents/ComboBox/ComboBox";
import {ChangeEvent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getSearchText, setSearchText, getSearchType, setSearchType,
    getSearchYear, setSearchYear, getFilms, getSearchFilmsAction, setPage
} from "../../Redux/Slices/SearchFilmsSlice";
import {FilmCard} from "../CommonComponents/FilmCard/FilmCard";
import {getFontFamily} from "../../Services/FontService";
import {Colors} from "../../Services/ColorService";
import {Button} from "../CommonComponents/Button/Button";

export const SearchFilmsPage = () => {
    const filmsStore = useSelector(getFilms);
    const searchText = useSelector(getSearchText);
    const searchType = useSelector(getSearchType);
    const searchYear = useSelector(getSearchYear);

    const nameInput = {
        value: searchText,
        type: ETypeInput.text,
        error: '',
        labelText: 'Название фильма:',
        placeholder: 'Введите название',
        disabled: false,
    };

    const typeCombobox = {
        defaultValue: searchType,
        data: ['movie', 'series', 'episode'],
        error: '',
        labelText: 'Жанр фильма:',
        placeholder: 'Выберите жанр',
        disabled: false,
    };

    const yearInput = {
        value: searchYear,
        type: ETypeInput.number,
        error: '',
        labelText: 'Год выпуска:',
        placeholder: 'Search By Year',
        disabled: false,
    };
    const dispatch = useDispatch();
    const onSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchText(event.target.value));
    };

    const onSearchTypeChange = (value: any) => {
        dispatch(setSearchType(value));
    };

    const onSearchYearChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchYear(event.target.value));
    };

    useEffect(() => {
        const page = filmsStore?.page;
        dispatch(getSearchFilmsAction({ searchText, searchType, searchYear, page }) as any);
    }, [dispatch, searchText, searchType, searchYear, filmsStore?.page]);

    return (
        <PageTemplate activeTabUrl="/search">
            <SearchDivStyle>
                <InputDivStyle>
                    <Input  {...nameInput} onChange={(e)=>{onSearchTextChange(e)}} onBlur={()=>{}}/>
                </InputDivStyle>
                <InputDivStyle>
                    <ComboBox {...typeCombobox} onChange={(val) => onSearchTypeChange(val)} />
                </InputDivStyle>
                <InputDivStyle>
                    <Input {...yearInput} onChange={(e)=>{onSearchYearChange(e)}} onBlur={()=>{}} />
                </InputDivStyle>
            </SearchDivStyle>
            <MainListStyle>
                {filmsStore?.films?.map((film) => (
                    <FilmCardStyle key={film.imdbID}>
                        <FilmCard film={film} />
                    </FilmCardStyle>
                ))}
            </MainListStyle>
            <ButtonDivStyle>
                <Button
                    text={'Show more'}
                    disabled={
                        filmsStore?.showItemsCount && filmsStore?.totalResults
                            ? filmsStore?.showItemsCount >= filmsStore?.totalResults
                            : true
                    }
                    onClick={() => {
                        dispatch(setPage(filmsStore.page + 1));
                    }}
                />
                <div>
                    {filmsStore?.showItemsCount} from{' '}
                    {filmsStore?.totalResults ? filmsStore?.totalResults : 0}
                </div>
            </ButtonDivStyle>
        </PageTemplate>);
};

const SearchDivStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 35px 0px 0px 20px;
  gap: 20px;
`;

const InputDivStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const MainListStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-content: start;
  flex-wrap: wrap;
  gap: 40px;
`;

const FilmCardStyle = styled.div`
  padding: 0;
`;

const ButtonDivStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;

  color: ${Colors.SECONDARY};

  font-family: ${getFontFamily()};
  gap: 20px;
`;
