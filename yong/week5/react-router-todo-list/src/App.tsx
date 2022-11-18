import React from 'react';
import Styled from 'styled-components';

import { ToDoListProvider } from 'Contexts';

import { Routes, Route } from 'react-router-dom';

import { PageHeader } from 'Components';

import { Add, List, Detail, NotFound } from 'Pages';

const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </ToDoListProvider>
  );
}

export default App;
