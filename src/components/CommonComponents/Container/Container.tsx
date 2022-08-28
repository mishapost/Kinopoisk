import { ReactNode } from 'react';
import styled from 'styled-components';

interface IContainer {
    children: ReactNode;
}

export const Container = ({ children }: IContainer) => {
    return (
        <ContainerStyle>{children}</ContainerStyle>
    )};

const ContainerStyle = styled.div`
  width: 100%;
  box-sizing: border-box;
`;