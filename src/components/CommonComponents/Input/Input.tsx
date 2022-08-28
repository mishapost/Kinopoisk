import styled from "styled-components";
import {ChangeEvent} from "react";
import {Colors} from "../../../Services/ColorService";
import { getFontFamily } from '../../../Services/FontService';

export enum ETypeInput {
    password = 'password',
    text = 'text',
    number = 'number',
}

interface IInput {
    value: string | number;
    type: ETypeInput;
    error: string;
    labelText: string;
    placeholder: string;
    disabled: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
}

export const Input = ({value, type, error, labelText, placeholder, disabled, onChange, onBlur}: IInput) => (
    <DivStyle>
        <LabelStyle>{labelText}</LabelStyle>
        <InputStyle
            value={value}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
            hasError={Boolean(error?.length)}
            onBlur={onBlur}
        />
        {error && <TextErrorStyle>{error}</TextErrorStyle>}
    </DivStyle>
);
const DivStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const LabelStyle = styled.label`
  color: ${Colors.GRAY};
  font-family: ${getFontFamily('semiBold')};
  font-size: 16px;
  padding: 5px 5px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputStyle = styled.input<{ hasError: boolean }>`
  display: inline-block;
  width: calc(100% - 10px);
  padding: 5px 0 5px 10px;
  background: ${Colors.GRAY};
  border: ${({ hasError }) => `2px solid ${hasError ? Colors.RED : Colors.SECONDARY}`};
  font-size: 16px;
  line-height: 16px;
  outline: none;
  margin: 8px 0 0;
  border-radius: 5px;

  ::placeholder,
  ::-webkit-input-placeholder,
  :-ms-input-placeholder {
    color: ${Colors.GRAY};
  }

  :focus {
    border: 2px solid ${Colors.PRIMARY};
  }

  :disabled {
    background: ${Colors.SECONDARY};
    border: 2px solid ${Colors.GRAY};
  }
`;

const TextErrorStyle = styled.span`
  color: ${Colors.RED};
  font-family: ${getFontFamily()};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px 0px 10px;
`;