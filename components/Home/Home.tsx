import { useState } from 'react';
import { Container, Group, Burger, Image, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import TopSection from './compontents/TopSection';
import About from './compontents/About/About';
import Patients from './compontents/Patients/Patients';
import Opinions from './compontents/Opinions/Opinions';

export default function Home() {
  return (
    <>
      <TopSection />
      <About />
      <Patients />
      <Opinions />
    </>
  );
}
