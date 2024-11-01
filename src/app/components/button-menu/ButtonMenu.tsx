'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify'; // Import only ToastContainer
import { handleRemoveLSItem, handleSetLSItem } from '../../../utils/ls';
import Button from '../button/Button';

const MyButton: React.FC = () => {
  const handleSetItem = (action: string) => {
    const valueToStore = 'your value here';

    if (action === 'set') {
      handleSetLSItem('myKey', valueToStore);
    } else if (action === 'delete') {
      handleRemoveLSItem('myKey');
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
