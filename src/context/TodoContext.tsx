'use client';
import React, { createContext, useState } from 'react';
import { mockTodoListData } from '../mockData/mockData';

interface Todo {
  id: any;
  itemName: string;
  status: 'pending' | 'completed';
  createdAt: string;
}

interface TodoContextType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const initialTodos: Todo[] = mockTodoListData;

const TodoContext = createContext<TodoContextType>({
  todos: initialTodos,
  setTodos: () => {},
});

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Explicitly type 'children'
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export type { Todo }; // Use 'export type' to re-export the Todo interface
export { TodoContext, TodoProvider };
