import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {Colors} from "../../../Services/ColorService";
import {getFontFamily} from "../../../Services/FontService";
import {IFilm} from "../../../Redux/Types/IFilm";

interface IFilmCard {
    film: IFilm;
}

export const FilmCard = (film: IFilmCard) => {
    const navigate = useNavigate();
    return (
        <FilmCardStyle
            onClick={() => {navigate(`/films/${film.film?.imdbID}`, { replace: true });}}>
            <DivImgStyle>
                <ImgStyle src={film.film?.Poster} />
            </DivImgStyle>
            <TitleStyle>{film.film?.Title}</TitleStyle>
            <TextStyle>{film.film?.Year}</TextStyle>
        </FilmCardStyle>
    );
};

const FilmCardStyle = styled.div`
  width: 330px;
  height: 550px;
  display: inline-block;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
  padding: 10px;

  :hover {
    border: 2px solid ${Colors.PRIMARY};
    cursor: pointer;
  }
`;

const DivImgStyle = styled.div`
  width: 100%;
  height: 450px;
  margin-bottom: 10px;
`;

const TitleStyle = styled.div`
  width: 100%;
  max-height: 54px;
  min-height: 54px;
  text-align: left;
  color: ${Colors.GRAY};

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre-wrap;

  font-weight: 700;
  font-size: 18px;

  padding: 0;
`;

const TextStyle = styled.div`
  width: 100%;
  height: 18px;
  color: ${Colors.PRIMARY};
  text-align: right;

  font-family: ${getFontFamily()};
  font-size: 15px;
`;

const ImgStyle = styled.img`
  max-width: 300px;
  min-width: 300px;
  max-height: 450px;
  min-height: 450px;
  object-fit: cover;
`;
