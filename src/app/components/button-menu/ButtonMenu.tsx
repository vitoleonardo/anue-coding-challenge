import React from 'react';
import { handleRemoveLSItem, handleSetLSItem } from '../../../utils/ls';
import Button from '../button/Button';
import { Todo } from '@/context/TodoContext';

interface MyButtonProps {
  data: Todo;
}
const newTodo: Todo = {
  itemName: 'Go for a run',
  status: 'pending',
  createdAt: new Date().toISOString(),
  id: crypto.randomUUID(),
};

const MyButton: React.FC<MyButtonProps> = ({ data }) => {
  const handleSetItem = (action: string) => {
    const valueToStore = JSON.stringify(data);

    if (action === 'set') {
      handleSetLSItem('toDos', data);
    } else if (action === 'delete') {
      handleRemoveLSItem('toDos', data.id);
    }
  };

  return (
    <div>
      <Button
        onClickHandler={() => handleSetItem('set')}
        innerHtml="Store Value"
      />
      <Button
        onClickHandler={() => handleSetItem('delete')}
        innerHtml="Delete Value"
      />
    </div>
  );
};

export default MyButton;
