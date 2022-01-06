import { FC } from 'react';

export const Card: FC<CardProps> = ({ children, className }) => (
  <div className={`shadow-md rounded-xl ${className}`}>{children}</div>
);

export interface CardProps {
  className?: string;
}
