import React from 'react';
import Image from 'next/image';
import { RiArrowRightSLine } from 'react-icons/ri';

import { Project } from 'hooks/useProjects';

export const ProjectCard: React.FC<Project> = ({ url, image, description }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer nofollow"
    className="mx-auto w-fit h-fit relative text-white text-lg text-center"
  >
    <Image
      src={image.url}
      alt={image.alt}
      className="rounded-xl"
      width={384}
      height={256}
      loading="lazy"
    />
    <div className="p-10 hover:bg-blue-500 flex flex-col justify-center items-center rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in absolute top-0 right-0 bottom-1.5 left-0">
      <p>{description}</p>
      <span className="flex items-center border-2 border-indigo-700 rounded-full py-2 px-4 mt-5 hover:bg-indigo-700">
        Visit website <RiArrowRightSLine className="mt-0.5" />
      </span>
    </div>
  </a>
);
