import React from 'react';
import ListItem from '../list-item/ListItem';
import { Todo } from '@/context/TodoContext';

interface ListProps {
  arrayListItems: Todo[];
}

const List: React.FC<ListProps> = ({ arrayListItems }) => {
  return (
    <>
      {arrayListItems.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </>
  );
};

export default List;
