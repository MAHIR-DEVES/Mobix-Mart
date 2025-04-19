import React, { useState } from 'react';
import bannerImage from '../../assets/banner.png';
import { FaSearch } from 'react-icons/fa';
import Button from '../ui/Button.jsx/Button';

const Hero = ({ handelSearch }) => {
  const [searchText, setSearchText] = useState('');
  // console.log(searchText);

  return (
    <div>
      <img className="md:w-5xl mx-auto my-10 mt-25" src={bannerImage} alt="" />
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-7xl font-thin text-gray-900">
          Browse, Search, View, Buy
        </h1>
        <p className="text-2xl text-gray-500">
          Best place to browse, search, view details and purchase <br /> of top
          flagship phones of the current time - FlagshipFaceOff
        </p>
        <form
          onSubmit={e => {
            handelSearch(e, searchText);
            setSearchText('');
          }}
          className="flex flex-col md:flex-row justify-center items-center  md:mb-0 md:px-24"
        >
          <input
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            type="text"
            placeholder="Search Phone By Name"
            className="w-2/3 bg-white border border-gray-300 rounded shadow-md h-12 p-4  focus:outline-none focus:shadow-outline md:mr-3"
          />

          <Button label="Search"></Button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
