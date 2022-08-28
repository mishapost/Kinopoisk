import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Colors} from "../../../Services/ColorService";
import {getFontFamily} from "../../../Services/FontService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface ILink {
    text: string;
    onNewPage?: boolean;
    url: string;
    isActive: boolean;
    icon?: IconProp;
}

export const LinkComponent = ({ text, url, onNewPage, isActive, icon }: ILink) => (
    <LinkStyle to={url} target={onNewPage ? '_blank' : ''} isActive={isActive.toString()}>
    <FontAwesomeIcon className='icon' icon={icon as IconProp} size={"sm"}/>
        {text}
    </LinkStyle>
);

const LinkStyle = styled(Link)<{ isActive?: string }>`
  text-decoration: none;
  font-family: ${getFontFamily()};
  color: ${({ isActive }) => `${isActive === 'true' ? Colors.PRIMARY : Colors.SECONDARY}`};

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  :hover {
    cursor: pointer;
    color: ${Colors.GRAY};
  }
  
  .icon {
    padding-right: 5px;
  }
`;
