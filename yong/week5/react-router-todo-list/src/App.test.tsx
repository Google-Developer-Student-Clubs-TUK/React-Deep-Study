import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import 'jest-styled-components';

describe('<App />', () => {
  it('renders component correctly', () => {
    const history = createMemoryHistory();
    history.push('/');

    const { container } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    const header = screen.getByText('할 일 목록');
    expect(header).toBeInTheDocument();

    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(toDoList.firstChild).toBeNull();

    const label = screen.getByText('+');
    expect(label).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  // it('adds and deletes ToDo items', () => {
  //   render(<App />);

  //   const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
  //   const button = screen.getByText('추가');
  //   fireEvent.change(input, { target: { value: 'study react 1' } });
  //   fireEvent.click(button);

  //   const todoItem = screen.getByText('study react 1');
  //   expect(todoItem).toBeInTheDocument();

  //   const deleteButton = screen.getByText('삭제');
  //   expect(deleteButton).toBeInTheDocument();

  //   const toDoList = screen.getByTestId('toDoList');
  //   // eslint-disable-next-line testing-library/no-node-access
  //   expect(toDoList.childElementCount).toBe(1);

  //   fireEvent.change(input, { target: { value: 'study react 2' } });
  //   fireEvent.click(button);

  //   const todoItem2 = screen.getByText('study react 2');
  //   expect(todoItem2).toBeInTheDocument();
  //   // eslint-disable-next-line testing-library/no-node-access
  //   expect(toDoList.childElementCount).toBe(2);

  //   const deleteButtons = screen.getAllByText('삭제');
  //   fireEvent.click(deleteButtons[0]);

  //   expect(todoItem).not.toBeInTheDocument();
  //   // eslint-disable-next-line testing-library/no-node-access
  //   expect(toDoList.childElementCount).toBe(1);
  // });

  // it('does not add empty ToDo', () => {
  //   render(<App />);

  //   const toDoList = screen.getByTestId('toDoList');
  //   // eslint-disable-next-line testing-library/no-node-access
  //   const length = toDoList.childElementCount;

  //   const button = screen.getByText('추가');
  //   fireEvent.click(button);
  //   // eslint-disable-next-line testing-library/no-node-access
  //   expect(toDoList.childElementCount).toBe(length);
  // });

  // it('loads localStorage data', () => {
  //   localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');
  //   render(<App />);

  //   expect(screen.getByText('ToDo 1')).toBeInTheDocument();
  //   expect(screen.getByText('ToDo 2')).toBeInTheDocument();
  //   expect(screen.getByText('ToDo 3')).toBeInTheDocument();
  //   expect(screen.getAllByText('삭제').length).toBe(3);
  // });

  it('goes to Add page and goBack to List page', () => {
    const history = createMemoryHistory();
    history.push('/');

    const { container, rerender } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    const addButton = screen.getByText('+');
    fireEvent.click(addButton);

    rerender(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    const header = screen.getByText('할 일 추가');
    expect(header).toBeInTheDocument();
    const goBack = screen.getByText('돌아가기');
    expect(goBack).toBeInTheDocument();
    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    expect(input).toBeInTheDocument();
    const button = screen.getByText('추가');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();

    fireEvent.click(goBack);

    rerender(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    expect(header.textContent).toBe('할 일 목록');
    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
  });

  it('goes to Detail page and go back to List page', () => {
    localStorage.setItem('ToDoList', '["ToDo 1"]');

    const history = createMemoryHistory();
    history.push('/');

    const { container, rerender } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    const toDoItem = screen.getByText('ToDo 1');
    expect(toDoItem).toBeInTheDocument();
    fireEvent.click(toDoItem);

    rerender(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    const header = screen.getByText('할 일 상세');
    expect(header).toBeInTheDocument();
    const goBack = screen.getByText('돌아가기');
    expect(goBack).toBeInTheDocument();
    const toDo = screen.getByText('ToDo 1');
    expect(toDo).toBeInTheDocument();
    const button = screen.getByText('삭제');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();

    fireEvent.click(goBack);

    rerender(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    expect(header.textContent).toBe('할 일 목록');
    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
  });

  it('shows Not Found page if the user enters the wrong URL, and go back to List page', () => {
    const history = createMemoryHistory();
    history.push('/foo');

    const { container, rerender } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    const header = screen.getByText('에러');
    expect(header).toBeInTheDocument();
    const goBack = screen.getByText('돌아가기');
    expect(goBack).toBeInTheDocument();
    const notFoundMessage = screen.getByText('Not Found 😿');
    expect(notFoundMessage).toBeInTheDocument();

    expect(container).toMatchSnapshot();

    fireEvent.click(goBack);

    rerender(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    expect(header.textContent).toBe('할 일 목록');
    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
  });

  it('adds a new ToDo', () => {
    const history = createMemoryHistory();
    history.push('/');

    const { rerender } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    const addButton = screen.getByText('+');
    fireEvent.click(addButton);

    rerender(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    const button = screen.getByText('추가');
    fireEvent.change(input, { target: { value: 'New ToDo' } });
    fireEvent.click(button);

    rerender(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    const header = screen.getByText('할 일 목록');
    expect(header).toBeInTheDocument();
    const newToDo = screen.getByText('New ToDo');
    expect(newToDo).toBeInTheDocument();
  });

  it('deletes ToDo from ToDo List page', () => {
    localStorage.setItem('ToDoList', '["ToDo 1"]');

    const history = createMemoryHistory();
    history.push('/');

    const { rerender } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    const toDoItem = screen.getByText('ToDo 1');
    const deleteButton = screen.getByText('삭제');
    expect(toDoItem).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);

    rerender(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    expect(toDoItem).not.toBeInTheDocument();
    expect(deleteButton).not.toBeInTheDocument();
    expect(localStorage.getItem('ToDoList')).toBe('[]');
  });

  it('deletes ToDo from the detail page', () => {
    localStorage.setItem('ToDoList', '["ToDo 1"]');

    const history = createMemoryHistory();
    history.push('/');

    const { rerender } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    const toDoItem = screen.getByText('ToDo 1');
    expect(toDoItem).toBeInTheDocument();

    fireEvent.click(toDoItem);

    rerender(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    const header = screen.getByText('할 일 상세');
    expect(header).toBeInTheDocument();

    const deleteButton = screen.getByText('삭제');
    fireEvent.click(deleteButton);

    rerender(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    expect(header.textContent).toBe('할 일 목록');
    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(toDoList.firstChild).toBeNull();
    expect(localStorage.getItem('ToDoList')).toBe('[]');
  });
});
