import styled from "styled-components";
import {Colors} from "../../../Services/ColorService";
import {getFontFamily} from "../../../Services/FontService";
import Combobox from 'react-widgets/Combobox';
import 'react-widgets/styles.css';

interface IComboBox {
    defaultValue: string;
    data: string[];
    error: string;
    labelText: string;
    placeholder: string;
    disabled: boolean;
    onChange: (value: any) => void;
}

export const ComboBox = ({defaultValue,data,error,labelText,placeholder,disabled,onChange}: IComboBox) => {
    return (
        <DivStyle>
            <LabelStyle>{labelText}</LabelStyle>
            <ComboBoxStyle
                defaultValue={defaultValue}
                data={data}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
            />
            {error && <TextErrorStyle>{error}</TextErrorStyle>}
        </DivStyle>
    );
};

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

const ComboBoxStyle = styled(Combobox)`
  border: ${Colors.GRAY};
  font-size: 16px;
  line-height: 16px;
  outline: none;
  margin: 8px 0 0;
  text-align: left;
  padding: 0;
  
  .rw-widget-picker {
    border-radius: 5px;
    background-color: ${Colors.GRAY};
    min-height: 33px;
  }

  .rw-state-focus .rw-widget {
    border-color: ${Colors.PRIMARY};
    box-shadow: 0 0 0 2px ${Colors.PRIMARY};
    transition: box-shadow 0.15s ease-in-out;
  }
  
  .rw-state-focus .rw-widget-picker .rw-widget-container {
    box-shadow: 0 0 0 3px ${Colors.GRAY};
  }

  .rw-popup {
    border-radius: 5px;
  }

  ::placeholder,
  ::-webkit-input-placeholder,
  :-ms-input-placeholder {
    color: ${Colors.GRAY};
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
  line-height: 16px;
  display: block;
  margin: 16px 0 0;
`;