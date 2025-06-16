'use client';
import React from 'react';
import { FiLoader } from 'react-icons/fi';

export default function FullScreenLoader({ message = 'Loading...' }) {
  return (
    <div className="fixed inset-0 z-20 bg-slate-900 bg-opacity-60 flex flex-col items-center justify-center text-white">
      <FiLoader className="animate-spin text-5xl mb-4" />
      <p className="text-lg">{message}</p>
    </div>
  );
};

 
