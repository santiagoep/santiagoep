import { FC } from 'react';

export const Service: FC<ServiceProps> = ({
  title,
  description,
  stack,
  className,
  icon: Icon,
}) => (
  <div
    className={`grid grid-rows-3 text-center w-full py-10 px-6 ${className}`}
  >
    <header>
      <div className="w-12 h-12 mx-auto">
        <Icon className="w-12 h-12 text-blue-500" />
      </div>
      <p className="font-heading font-bold text-xl mt-3">{title}</p>
    </header>
    <p className="mt-1 md:text-lg">{description}</p>
    <footer>
      <ul className="flex flex-wrap justify-center mt-1">
        {stack.map(stackItem => (
          <li className="c_pill" key={stackItem}>
            {stackItem}
          </li>
        ))}
      </ul>
    </footer>
  </div>
);

export interface ServiceProps {
  title: string;
  description: string;
  stack: string[];
  icon: FC<{ className?: string }>;
  className?: string;
}
