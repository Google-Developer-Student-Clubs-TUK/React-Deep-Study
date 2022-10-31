import React from 'react';
import Styled from 'styled-components';

interface ContainerProps {
    //container에 props를 보낼때 지켜야할 타입스크립트 규칙!
    readonly backgroundColor: string;
    readonly hoverColor: string;
}

const Container = Styled.div<ContainerProps>`
    text-align: center;
    background-color: ${(props) => props.backgroundColor};
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
    background-color: ${(props) => props.hoverColor};
    }
    &:active {
        box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
    }
`;

const Label = Styled.div`
    olor: #FFFFFF;
    font-size: 16px;
`;

interface Props { //뒤에 ?는 필요할때만 전달, ?없는건 필수!!
    readonly label: string;//이건 필수야
    readonly backgroundColor?: string;
    readonly hoverColor?: string;
    readonly onClick?: () => void;
}//반환값이 없는 void 타입함수

export const Button = ({//App.tsx에서 {Button} 으로 가져올수있는이유
    label,
    backgroundColor = '#304FFE',
    hoverColor = '#1E40FF',
    onClick,
}: Props) => {
    return (
    <Container 
    backgroundColor={backgroundColor} 
    hoverColor={hoverColor} 
    onClick={onClick}>
        <Label>{label}</Label>
    </Container>
    );
};