import React from 'react';
import { useLoaderData } from 'react-router';

const PhoneDetails = () => {
  const data = useLoaderData();
  console.log('hey');

  console.log(data);

  return (
    <div>
      <p>Phone Details</p>
    </div>
  );
};

export default PhoneDetails;
