'use client';
import React from 'react';
import ButtonMenu from '../button-menu/ButtonMenu';
import { Todo } from '@/context/TodoContext';

interface ListItemProps {
  item: Todo;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <li className="flex flex-row items-center justify-between gap-4 py-2 shadow-custom">
      {item.itemName}
      <ButtonMenu />
    </li>
  );
};

export default ListItem;
