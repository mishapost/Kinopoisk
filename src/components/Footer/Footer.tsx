import React from 'react';
import styled from "styled-components";
import {Colors} from "../../Services/ColorService";
import {getFontFamily} from "../../Services/FontService";

export const Footer = () => (
    <FooterStyle>
        <FooterTextStyle>©2022 Mikhail Tanana</FooterTextStyle>
        <FooterTextStyle>All rights reserved</FooterTextStyle>
    </FooterStyle>
);

const FooterStyle = styled.footer`
  width: 100%;
  display: flex;
  padding: 10px 0 10px 0;
  justify-content: space-between;
  border-top: 1px solid ${Colors.SECONDARY};
`;

const FooterTextStyle = styled.p`
  font-family: ${getFontFamily()};
  font-size: 16px;
  color: ${Colors.SECONDARY};
`;