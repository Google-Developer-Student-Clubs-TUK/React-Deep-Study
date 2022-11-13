import React from 'react';
import Styled from 'styled-components';

const InputBox = Styled.input`
    flex: 1; //화면비율에따라 유연하게 늘거나 줄어들수있다
    font-size: 16px;
    padding: 10px 10px;
    border-radius: 8px;
    border: 1px solid #BDBDBD;
    outline: none;
`;

interface Props {
    readonly placeholder?: string;
    readonly value?: string;
    readonly onChange?: (text: string) => void;
}

export const Input = ({ placeholder, value, onChange }: Props) => {
    return (
        <InputBox
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
        if (typeof onChange === 'function') {
            onChange(event.target.value);
            }
        }}
        />
    );
};