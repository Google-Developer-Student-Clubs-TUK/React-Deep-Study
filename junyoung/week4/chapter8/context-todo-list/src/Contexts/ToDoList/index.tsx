import React, { createContext, useState, useEffect } from 'react';

interface Context {
  readonly toDoList: string[];
  readonly addToDo: (toDo: string) => void;
  readonly deleteToDo: (index: number) => void;
}

const ToDoListContext = createContext<Context>({
  toDoList: [],//타입스크립트로 지정한 타입들의 초기값 지정해줘야함
  addToDo: (): void => {},
  deleteToDo: (): void => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ToDoListProvider = ({ children }: Props): JSX.Element => {//최상위 공통부모컴포넌트인 App에 제공
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addToDo = (toDo: string): void => {
    if (toDo) {
      const newList = [...toDoList, toDo];
      localStorage.setItem('ToDoList', JSON.stringify(newList));
      setToDoList(newList);
    }
  };

  const deleteToDo = (index: number): void => {
    let list = [...toDoList];
    list.splice(index, 1);
    localStorage.setItem('ToDoList', JSON.stringify(list));//로컬: 문자열만 저장가능
    setToDoList(list);
  };

  useEffect(() => {
    const list = localStorage.getItem('ToDoList');
    if (list) {
      setToDoList(JSON.parse(list));//문자열->배열 데이터로 변경하기 위해 사용한다
    }
  }, []);//첫번째 매개변수: 실행 내용 담긴 콜백함수 , 두번째 매개변수: 의존하는 변수 -> 배열형식 선언

  return (
    <ToDoListContext.Provider
      value={{
        toDoList,
        addToDo,
        deleteToDo,
      }}>
      {children}
    </ToDoListContext.Provider>
  );
};

export { ToDoListContext, ToDoListProvider };
