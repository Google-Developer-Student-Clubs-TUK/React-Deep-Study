import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { ToDoListProvider } from 'Contexts';
import { ToDoList } from './index';

describe('<ToDoList />', () => {
  it('renders component correctly', () => {
    const { container } = render(
      <ToDoListProvider>
        <ToDoList />
      </ToDoListProvider>,
    );

    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(toDoList.firstChild).toBeNull();

    expect(container).toMatchSnapshot();
  });

  it('deletes toDo item', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    render(
      <ToDoListProvider>
        <ToDoList />
      </ToDoListProvider>,
    );

    const toDoItem = screen.getByText('ToDo 2');
    expect(toDoItem).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    fireEvent.click(toDoItem.nextElementSibling as HTMLElement);
    expect(toDoItem).not.toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('ToDoList') as string)).not.toContain('ToDo 2');
  });
});
