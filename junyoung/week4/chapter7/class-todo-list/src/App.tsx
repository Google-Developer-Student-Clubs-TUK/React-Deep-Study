import React, { Component } from 'react';
import type { IScriptSnapshot } from 'typescript';
import Styled from 'styled-components';

import { Button, Input, ToDoItem } from 'Components';

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
const ToDoListContainer = Styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #BDBDBD;
  margin-bottom: 20px;
`;
const InputContainer = Styled.div`
  display: flex;
`;

interface Props {}

interface State { //클래스컴포넌트는 state를 한번에설정
  readonly toDo: string;
  readonly toDoList: string[];
  readonly error: boolean;
}

class App extends Component<Props, State> {
  constructor(props: Props) {//생성자 빈걸로초기화
    super(props);//부모클래스의 생성자 함수 호출위해 사용 + 전달받은 props를
    //부모클래스에 전달한다

    this.state = {//클래스 컴포넌트 사용위해선 초기화 해야함
      toDo: '',
      toDoList: [],
      error: false,
    };
  }
  //클래스 함수로 정의 private or public중 하나로
  private addToDo = (): void => {
    const { toDo, toDoList } = this.state;
    if (toDo) {
      this.setState({//this.setState라는 함수명 사용하기 = setState
        toDo: '',
        toDoList: [...toDoList, toDo],
      });
    }
  };

  private deleteToDo = (index: number): void => {
    let list = [...this.state.toDoList];
    list.splice(index, 1);
    this.setState({
      toDoList: list,
    });
  };

  render() {//화면에 보여주는걸 담당
    const { toDo, toDoList, error } = this.state;

    return (
      <Container>
        {!error && (
          <Contents>
            <ToDoListContainer data-testid="toDoList">
              {toDoList.map((item, index) => (
                <ToDoItem key={item} label={item} onDelete={() => this.deleteToDo(index)} />
              ))}
            </ToDoListContainer>
            <InputContainer>
              <Input
                placeholder="할 일을 입력해 주세요"
                value={toDo}
                onChange={(text) => this.setState({ toDo: text })}
              />
              <Button label="추가" onClick={this.addToDo} />
            </InputContainer>
          </Contents>
        )}
      </Container>
    );
  }

  // static getDerivedStateFromProps(nextProps: Props, prevState: State) {
  //   console.log('getDerivedStateFromProps');

  //   return null;
  // }

  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

  // getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
  //   console.log('getSnapshotBeforeUpdate');

  //   return {
  //     testData: true,
  //   };
  // }

  // componentDidUpdate(prevProps: Props, prevState: State, snapshot: IScriptSnapshot) {
  //   console.log('componentDidUpdate');
  // }

  // shouldComponentUpdate(nextProps: Props, nextState: State) {
  //   console.log('shouldComponentUpdate');
  //   return true;
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  // componentDidCatch(error: Error, info: React.ErrorInfo) {
  //   this.setState({
  //     error: true,
  //   });
  // }
}
export default App;