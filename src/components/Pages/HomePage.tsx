import {PageTemplate} from "../Templates/PageTemplate/PageTemplate";
import styled from "styled-components";
import {Colors} from "../../Services/ColorService";
import {getFontFamily} from "../../Services/FontService";

export const HomePage = () => {
    return (
        <PageTemplate activeTabUrl="/">
            <ParentDivStyle>
                <FloatDivStyle></FloatDivStyle>
                <ChildDivStyle>
                    На данном сайте Вы сможете осуществлять мгновенный поиск фильмов по базе данных сервиса omdbapi.com,
                    что позволит Вам всегда быть в курсе, что и когда смотреть.
                </ChildDivStyle>
            </ParentDivStyle>
            <ImgStyle src='https://gornovosti.ru/media/filer_public/cc/f2/ccf2982b-dfc9-4e99-b28b-18a9b42824b3/kino1.jpg'/>
        </PageTemplate>);
};


const ParentDivStyle = styled.div`
  height: 180px;
`;

const FloatDivStyle = styled.div`
  float: left;
  height: 50%;
  width: 100%;
  margin-bottom: -50px;
`;

const ChildDivStyle = styled.div`
  clear: both;
  height: 80px;

  color: ${Colors.PRIMARY2};
  font-family: ${getFontFamily('regular')};
  font-size: 32px;
  gap: 20px;
`;

const ImgStyle = styled.img`
  display: flex;
  justify-content: center;
  align-content: center;
  max-width:100%;
  max-height:500px;
  width: auto;
  height: auto;
  margin-left: 20%;
`;