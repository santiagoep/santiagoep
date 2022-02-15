import { Card } from 'components/@ui/Card';
import { useServices } from 'hooks/useServices';
import { Service } from 'components/@ui/Service';
import React from 'react';

export const Services: React.FC = () => {
  const services = useServices();
  return (
    <>
      <div className="bg-blue-500 w-full h-28 pt-6" />
      <section className="c_general-container mt-[-88px]">
        <Card className="flex flex-col md:flex-row justify-between bg-white">
          {services.map(({ title, description, stack, icon }) => (
            <Service
              key={title}
              icon={icon}
              title={title}
              stack={stack}
              description={description}
              className="border-b-2 last-of-type:border-b-0 md:border-[var(--tw-shadow-color)] md:border-r-2 md:last-of-type:border-r-0"
            />
          ))}
        </Card>
      </section>
    </>
  );
};
