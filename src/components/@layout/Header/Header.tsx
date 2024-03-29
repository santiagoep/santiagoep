import React from 'react';

import { useContactInfo } from 'hooks/useContactInfo';

export const Header: React.FC = () => {
  const { findMe } = useContactInfo();

  return (
    <header className="c_general-container flex justify-between items-center py-4 md:py-5">
      <p className="text-base md:text-lg font-bold text-blue-500 font-heading cursor-default">
        @SantiagoEP
      </p>
      <a
        href={findMe?.url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="text-sm md:text-base border-2 border-blue-500 py-1 md:py-2 px-3 md:px-4 rounded-full text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white active:scale-105"
      >
        Find me
      </a>
    </header>
  );
};
