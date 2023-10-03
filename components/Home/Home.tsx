import { useState } from 'react';
import { Container, Group, Burger, Image,Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import TopSection from './compontents/TopSection';
import About from './compontents/About';
import Patients from './compontents/Patients';


export default function Home() {

  return (<>
  
      <TopSection/>
      <About/>
      <Patients/>
        <Text>HOME PAGE</Text>
  </>

  );
}