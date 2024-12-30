'use client';
import { Container } from '@/components/container';
import { Heading } from '@/components/heading';
import { Description, Title } from '@/data/about-us';
import { cn } from '@/lib/utils';
import React from 'react';
import { Element } from 'react-scroll';

interface Props {
className?: string;
}

export const AboutUs: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn('py-16', className)}>
        <Element name='about'>
        <Container className='flex flex-col gap-7'>
            <Heading as='h2'>{Title}</Heading>
            <p>{Description}</p>
        </Container>
        </Element>
    </section>
  );
};