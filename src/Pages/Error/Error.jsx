import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';

const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center items-center h-[100vh]">
        <p className="font-bold text-5xl">Page Not Found 🥲 </p>
      </div>
    </div>
  );
};

export default Error;
