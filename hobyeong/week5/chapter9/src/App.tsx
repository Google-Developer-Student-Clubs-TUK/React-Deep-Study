import React from 'react';
import Styled from 'styled-components';

import { ToDoListProvider } from 'Contexts';
import { PageHeader } from 'Components';
import { Routes, Route } from 'react-router-dom';
import { List, Add, Detail, NotFound } from 'Pages';

const Container = Styled.div`
  min-height: 100vh;
  background-color: #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Contents = Styled.div`
  display: flex;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

function App() {
  return (
    <ToDoListProvider>
      <Container>
        <PageHeader />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route element={<NotFound />} />
        </Routes>
      </Container>
    </ToDoListProvider>
  );
}

export default App;
