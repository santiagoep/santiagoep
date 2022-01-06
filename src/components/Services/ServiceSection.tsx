import { Service, ServiceProps } from 'components/ui/Service';
import { FC } from 'react';

export const ServiceSection: FC<ServiceProps> = ({
  title,
  description,
  icon,
  stack,
}) => (
  <Service
    icon={icon}
    title={title}
    stack={stack}
    description={description}
    className="border-[var(--tw-shadow-color)] border-r-2 last-of-type:border-r-0"
  />
);
