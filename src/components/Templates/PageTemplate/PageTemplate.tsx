import {ReactNode} from "react";
import styled from "styled-components";
import {Colors} from "../../../Services/ColorService";
import {Footer} from "../../Footer/Footer";
import {getFontFamily} from "../../../Services/FontService";
import {Container} from "../../CommonComponents/Container/Container";
import {Menu} from "../../CommonComponents/Menu/Menu";
import {faHome, faBookmark, faSearch} from "@fortawesome/free-solid-svg-icons";


interface IPageTemplate {
    children: ReactNode;
    activeTabUrl: string;
}

const menuItems = [
    { title: 'Home', url: '/', icon: faHome},
    { title: 'Search', url: '/search', icon: faSearch },
    //{ title: 'Favorites', url: '/favorites', icon: faBookmark },
];

export const PageTemplate = ({ children, activeTabUrl }: IPageTemplate) => {
    return (
        <WrapperStyle>
            <DivStyle>
                <MenuStyle>
                    <TitleStyle>
                        <p>pix</p>
                        <p>ema</p>
                    </TitleStyle>
                    <Menu list={menuItems} activeTabUrl={activeTabUrl}></Menu>;
                </MenuStyle>
                <Container>
                    <ContentStyle>{children}</ContentStyle>
                </Container>
            </DivStyle>
            <Footer />
        </WrapperStyle>
    );
};

const WrapperStyle = styled.div`
  max-width: 100%;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 20px;
  margin: auto;
  position: relative;
  background: ${Colors.BLACK};
`;

const DivStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 0 0 0;
`;

const MenuStyle = styled.div`
  max-width: 600px;
  min-height: 100%;
  
`;

const TitleStyle = styled.div`
  color: ${Colors.GRAY};
  font-family: ${getFontFamily('bold')};
  font-size: 36px;
  display: flex;
  flex-direction: row;

  p:first-child {
    color: ${Colors.PRIMARY};
  }
`;

const ContentStyle = styled.div`
  max-width: 100%;
  min-height: calc(100vh - 80px);
  padding: 0;
`;