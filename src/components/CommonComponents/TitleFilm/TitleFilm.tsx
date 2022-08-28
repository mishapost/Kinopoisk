import styled from 'styled-components';
import {Colors} from "../../../Services/ColorService";
import {getFontFamily} from "../../../Services/FontService";

interface ITitle {
    text?: string;
}

export const TitleFilm = ({ text }: ITitle) => <TitleStyle>{text}</TitleStyle>;

const TitleStyle = styled.div`
  width: 100%;
  padding: 10px 0 40px 0;
  display: flex;
  align-content: flex-start;
  font-family: ${getFontFamily('bold')};
  font-size: 48px;
`;