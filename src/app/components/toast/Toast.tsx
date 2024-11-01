'use client';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast() {
  return (
    <div>
      <ToastContainer
        position="top-center" // Set the position here
        autoClose={3000} // Auto-close after 3 seconds (adjust as needed)
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // Or "dark"
      />
    </div>
  );
}

export default Toast;
