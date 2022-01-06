import { FC } from 'react';

export const Service: FC<ServiceProps> = ({
  title,
  description,
  stack,
  className,
  icon: Icon,
}) => {
  const renderedStack = stack.map(stackItem => (
    <li className="custom-pill" key={stackItem}>
      {stackItem}
    </li>
  ));

  return (
    <div
      className={`flex flex-col items-center text-center w-full py-10 px-6 ${className}`}
    >
      <Icon className="w-12 h-12 text-blue-500" />
      <p className="font-heading font-bold text-xl mt-3">{title}</p>
      <p className="mt-4">{description}</p>
      <ul className="flex flex-wrap justify-center mt-5">{renderedStack}</ul>
    </div>
  );
};

export interface ServiceProps {
  title: string;
  description: string;
  stack: string[];
  icon: FC<{ className?: string }>;
  className?: string;
}
