import React, { useState, useContext } from 'react';
import Styled from 'styled-components';

import { Button } from 'Components/Button';
import { Input } from 'Components/Input';

import { ToDoListContext } from 'Contexts';

const Container = Styled.div`
  display: flex;
`;

export const InputContainer = () => {
  const [toDo, setToDo] = useState('');
  const { addToDo } = useContext(ToDoListContext);
  return (
    <Container>
      <Input placeholder="할 일을 입력해 주세요" value={toDo} onChange={setToDo} />
      <Button
        label="추가"
        onClick={() => {
          addToDo(toDo);
          setToDo('');
        }}
      />
    </Container>
  );
};
