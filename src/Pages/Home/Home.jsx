import React, { useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import Phones from '../../Components/Phones/Phones';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  const [phones, setPhones] = useState(data);

  const handelSearch = (e, text) => {
    e.preventDefault();

    if (text === '') return setPhones(data);
    const searchedPhone = data.filter(
      phone =>
        phone.name.toLowerCase().split(' ').includes(text.toLowerCase()) ||
        phone.brand.toLowerCase().split(' ').includes(text.toLowerCase())
    );
    setPhones(searchedPhone);
  };

  return (
    <div className="my-16">
      <Hero handelSearch={handelSearch}></Hero>
      <Phones data={phones}></Phones>
    </div>
  );
};

export default Home;
