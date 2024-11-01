'use client';
import List from './components/list/List';
import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '@/context/TodoContext';

const Home: React.FC = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/toDos');
        const data = await response.text();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., set an error state or display an error message

        setData('Error fetching data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center alignt-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>{data ? data : 'Loading...'}</h1>
      <ul className="w-full h-full flex flex-col">
        <List arrayListItems={todos} />
      </ul>
    </div>
  );
};

export default Home;
