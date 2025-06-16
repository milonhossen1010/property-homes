'use client';
import { FiAlertCircle, FiRefreshCcw } from 'react-icons/fi';

export default function ConnectionError({ message }) {

  return (
    <div className="w-full fixed top-0 left-0 h-screen p-6 bg-red-100 text-red-800 rounded-lg text-center flex flex-col items-center justify-center">
      <FiAlertCircle className="text-3xl mb-2" />
      <p className="mb-4 text-lg">
        {message || 'Failed to load data. Please check your connection.'}
      </p>
      
        <button
          onClick={() => window.location.reload()}
          className="flex cursor-pointer items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          <FiRefreshCcw />
          Retry
        </button>
 
    </div>
  );
};

 
