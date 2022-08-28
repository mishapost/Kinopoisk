import styled from 'styled-components';
import {Colors} from "../../../Services/ColorService";
import {getFontFamily} from "../../../Services/FontService";

interface IBtn {
    text: string;
    disabled?: boolean;
    onClick: () => void;
}

export const Button = ({ text, disabled, onClick }: IBtn) => {
    return (
        <BtnStyle onClick={onClick} disabled={disabled}>
            <TextSt>{text}</TextSt>
        </BtnStyle>
    );
};

const BtnStyle = styled.button`
  padding: 16px 32px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  border: 0px;
  background: ${Colors.SECONDARY};
  color: ${Colors.GRAY};
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.05em;
  font-family: ${getFontFamily()};
  gap: 10px;

  :disabled {
    background: ${Colors.SECONDARY};
    pointer-events: none;
  }

  :hover {
    background: ${Colors.PRIMARY2};
    cursor: pointer;
  }
`;

const TextSt = styled.div`
  user-select: none;
`;
