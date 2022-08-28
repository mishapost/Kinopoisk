import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {PageTemplate} from "../Templates/PageTemplate/PageTemplate";
import {useEffect} from "react";
import {getFilm, getFilmAction} from "../../Redux/Slices/DetailsFilmSlice";
import styled from "styled-components";
import {getFontFamily} from "../../Services/FontService";
import {Colors} from "../../Services/ColorService";
import {ReactComponent as HomeIcon} from "../../assets/icon/ArrowLeftIcon.svg";
import {TitleFilm} from "../CommonComponents/TitleFilm/TitleFilm";

export const FilmPage = () => {
    const params = useParams();
    const navigate = useNavigate();

    const filmStore = useSelector(getFilm);
    const dispatch = useDispatch();

    useEffect(() => {
        const imdbID = params?.filmID;
        if (imdbID) {
            dispatch(getFilmAction({ imdbID }) as any);
        }
    }, [dispatch, params?.filmID]);

    return (
        <PageTemplate activeTabUrl={''}>
            <HomeStyle onClick={() => navigate(-1)}>
                <HomeIconStyle />
            </HomeStyle>
            <TitleFilm text={filmStore?.Title} />
            <FilmStyle>
                <ImgStyle src={filmStore?.Poster} />
                <BlockTextStyle>
                    <YearStyle>{filmStore?.Year}</YearStyle>
                    <InfoStrStyle>
                        <Info1Style>Actors</Info1Style>
                        <Info2Style>{filmStore?.Actors}</Info2Style>
                    </InfoStrStyle>
                    <InfoStrStyle>
                        <Info1Style>Director</Info1Style>
                        <Info2Style>{filmStore?.Director}</Info2Style>
                    </InfoStrStyle>
                    <InfoStrStyle>
                        <Info1Style>Language</Info1Style>
                        <Info2Style>{filmStore?.Language}</Info2Style>
                    </InfoStrStyle>
                    <EmptyDivStyle />
                    <InfoStrStyle>
                        <Info1Style>Genre</Info1Style>
                        <Info2Style>{filmStore?.Genre}</Info2Style>
                    </InfoStrStyle>
                    <EmptyDivStyle />
                    <InfoStrStyle>
                        <Info1Style>Awards</Info1Style>
                        <Info2Style>{filmStore?.Awards}</Info2Style>
                    </InfoStrStyle>
                </BlockTextStyle>
            </FilmStyle>
            <PlotStyle>{filmStore?.Plot}</PlotStyle>
        </PageTemplate>
    );
};

const HomeStyle = styled.div`
  width: 100%;
  display: flex;
  padding-top: 55px;
  padding-left: 10px;

  svg path {
    fill: ${Colors.GRAY};
  }

  :hover {
    svg path {
      fill: ${Colors.PRIMARY};
    }
  }
`;

const HomeIconStyle = styled(HomeIcon)`
  :hover {
    cursor: pointer;
  }
`;

const FilmStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  gap: 20px;
`;

const ImgStyle = styled.img`
  max-width: 300px;
  min-width: 300px;
  max-height: 450px;
  min-height: 450px;
  object-fit: cover;
  margin: 2px;
  border: 2px solid ${Colors.PRIMARY};
`;

const BlockTextStyle = styled.div`
  width: 100%;
`;

const YearStyle = styled.div`
  width: 100%;
  height: 32px;
  color: ${Colors.PRIMARY};
  text-align: left;

  font-family: ${getFontFamily()};
  font-size: 30px;
  font-weight: 700;

  padding: 0 0 40px 0;
`;

const InfoStrStyle = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Info1Style = styled.div`
  width: 200px;

  color: ${Colors.SECONDARY};
  text-align: left;

  font-family: ${getFontFamily()};
  font-size: 20px;
  font-weight: 400;
`;

const Info2Style = styled.div`
  width: 100%;
  height: auto;
  white-space: pre-wrap;

  color: ${Colors.GRAY};
  text-align: left;

  font-family: ${getFontFamily()};
  font-size: 20px;
  font-weight: 400;
`;

const PlotStyle = styled.div`
  width: 100%;
  height: auto;
  white-space: pre-wrap;

  color: ${Colors.GRAY};
  text-align: justify;

  font-family: ${getFontFamily()};
  font-size: 12px;
  font-weight: 400;
`;

const EmptyDivStyle = styled.div`
  padding-top: 10px;
`;
