'use client';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import Toast from './components/toast/Toast';
import List from './components/list/List';
import { useContext } from 'react';
import { TodoContext } from '@/context/TodoContext';

const Home: React.FC = () => {
  const { todos, setTodos } = useContext(TodoContext);

  return (
    <div className="w-full h-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center alignt-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ul className="w-full h-full flex flex-col">
        <List arrayListItems={todos} />
      </ul>
    </div>
  );
};

export default Home;
