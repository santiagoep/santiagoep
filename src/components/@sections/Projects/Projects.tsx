import React from 'react';

import { useProjects } from 'hooks/useProjects';
import { ProjectCard } from 'components/ProjectCard';
import { RiGithubFill } from 'react-icons/ri';

export const Projects: React.FC = () => {
  const projects = useProjects();

  return (
    <section className="c_general-container c_top-section-margin">
      <h2 className="c_sub-title">My Recent Work</h2>
      <p className="c_sub-text mt-5 text-center">
        Here are a few projects I&apos;ve worked on recently.
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map(({ url, image, description }) => (
          <ProjectCard
            key={description}
            url={url}
            image={image}
            description={description}
          />
        ))}
      </div>

      <a
        href="https://www.linkedin.com/in/santiagoep/"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="border-2 border-solid border-blue-500 py-2 px-10 mx-auto flex w-fit rounded-full items-center text-blue-500 hover:bg-blue-500 hover:text-white mt-16 text-xl"
      >
        <RiGithubFill className="mr-2" /> See more on LinkedIn
      </a>
    </section>
  );
};
