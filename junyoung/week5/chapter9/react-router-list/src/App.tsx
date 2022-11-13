import React from 'react';
import Styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { PageHeader } from 'Components';

import { ToDoListProvider } from 'Contexts';
import { List , Add, Detail, NotFound} from 'Pages';

const Container = Styled.div`
  min-height: 100vh;
  background-color: #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


function App() { //v6 버전으로 작성 정 안되면 v5 버전으로 작성
  return (
    <ToDoListProvider>
      <Container>
        <PageHeader />
        <Routes>{/* V6: switch -> Routes로 바뀜 */}
            <Route path="/" element={<List />} />
            <Route path="/add" element={<Add />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route element={<NotFound />} />
        </Routes>{/* :id에서 id는 일종의 변수명이야 */}
      </Container>
    </ToDoListProvider>
  );
}

export default App;
