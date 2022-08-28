import styled from "styled-components";
import {LinkComponent} from "../Link/Link";
import {Colors} from "../../../Services/ColorService";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface ITab {
    title: string;
    url: string;
    icon?: IconProp;
}

interface ITabs {
    list: ITab[];
    activeTabUrl: string;
}

export const Menu = ({ list, activeTabUrl }: ITabs) => (
    <MenuStyle>
        <ListStyle>
            {list.map(({ title, url, icon }) => (
                <LiStyle key={url}>
                    <LinkStyle>
                        <LinkComponent url={url} text={title} isActive={(activeTabUrl === url) as boolean} icon={icon as IconProp}/>
                    </LinkStyle>
                </LiStyle>
            ))}
        </ListStyle>
    </MenuStyle>
);

const MenuStyle = styled.div`
  width: 100%;
`;

const ListStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: flex-start;
  gap: 15px;
  padding: 0;
`;

const LiStyle = styled.li``;

const LinkStyle = styled.div`
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: baseline;
  color: ${Colors.WHITE};
`;