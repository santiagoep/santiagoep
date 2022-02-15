import { FC } from 'react';

export const Card: FC<CardProps> = ({ children, className }) => (
  <article className={`shadow-md rounded-xl ${className}`}>{children}</article>
);

export interface CardProps {
  className?: string;
}
