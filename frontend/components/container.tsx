import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
className?: string;
children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={cn('max-w-7xl mx-auto px-4', className)}>
        {children}
    </div>
  );
};