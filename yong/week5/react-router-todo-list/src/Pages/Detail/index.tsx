import React, { useContext } from 'react';
import { useParams, useNavigate, Params } from 'react-router-dom';
import styled from 'styled-components';

import { ToDoListContext } from 'Contexts';
import { Button } from 'Components';

const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  align-items: center;
  flex-direction: column;
`;

const ToDo = styled.div`
  min-width: 350px;
  height: 350px;
  overflow-y: auto;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
  padding: 10px;
`;

export const Detail = () => {
  const navigate = useNavigate();
  const params: Readonly<Params<string>> = useParams();
  const id = Number.parseInt(params.id || '');
  const { toDoList, deleteToDo } = useContext(ToDoListContext);
  const toDo = toDoList[id];

  return (
    <Container>
      <ToDo>{toDo}</ToDo>
      <Button
        label="삭제"
        backgroundColor="#FF1744"
        hoverColor="#F01440"
        onClick={() => {
          deleteToDo(id);
          navigate(-1);
        }}
      />
    </Container>
  );
};
