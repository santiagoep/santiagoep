import React from 'react';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';

export const Footer: React.FC = () => (
  <footer className="c_top-section-margin bg-blue-500 text-white py-5 text-center">
    <div className="grid grid-flow-col-dense gap-3 w-fit mx-auto">
      <a
        href="https://www.linkedin.com/in/santiagoep/"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="w-9 h-9 p-2 rounded-full hover:bg-white hover:text-blue-500 cursor-pointer border-solid border-2 border-blue-200 hover:border-white transition-colors ease-in-out duration-300 flex justify-center items-center"
      >
        <RiLinkedinFill className="" />
      </a>
      <a
        href="https://github.com/santiagoep/"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="w-9 h-9 p-2 rounded-full hover:bg-white hover:text-blue-500 cursor-pointer border-solid border-2 border-blue-200 hover:border-white transition-colors ease-in-out duration-300 flex justify-center items-center"
      >
        <RiGithubFill className="" />
      </a>
    </div>
  </footer>
);
