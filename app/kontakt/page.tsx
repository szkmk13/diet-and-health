'use client';
import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  Box,
  Image,
  BackgroundImage,
  Center,
  Paper,
} from '@mantine/core';
import classes from './page.module.css';
import { useRef, useState } from 'react';
import Link from 'next/link';
import ContactForm from '@/components/Contact/ContactForm';

export default function Page() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });


  return (
    <>
      <BackgroundImage src="images/6.jpg" style={{height:'80vh'}}>
        <Box className={classes.box}>
          <div className={classes.wrapper}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30}>
              <div>
                <Center>
                  <Link
                    href={'https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#'}
                    target="_blank"
                  >
                    <Center className={classes.container}>
                      <img
                        src={'images/monia_kontakt.jpeg'}
                        alt={'Monika Skibicka'}
                        className={classes.image}
                        style={{ cursor: 'pointer' }}
                      />
                      <div className={classes.overlay}>
                        <Text className={classes.category}>Monika Skibicka</Text>
                        <Title order={3} className={classes.title}>
                          kontakt@diet-and-health.pl
                        </Title>
                      </div>
                    </Center>
                  </Link>
                </Center>
              </div>
              <ContactForm/>
            </SimpleGrid>
          </div>
        </Box>{' '}
      </BackgroundImage>
    </>
  );
}
