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
  Grid,
} from '@mantine/core';
import classes from './page.module.css';
import { useRef, useState } from 'react';
import Link from 'next/link';
import ContactForm from '@/components/Contact/ContactForm';
import Script from 'next/script';
import ContactSurvey from '@/components/Contact/ContactSurvey';

export default function Page() {
  return (
    <>
      <BackgroundImage src="images/6.jpg" >
        <Box className={classes.box}>
          <div className={classes.wrapper}>
            <Grid gutter={30}>
              {/* <Grid.Col span={{ base: 12, sm: 6 }}>
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
              </Grid.Col> */}

              <Grid.Col>
                <div className={classes.textbox}> 

                <Text>Jak przygotować się do wizyty</Text>
                <Text>1. UMYJ STOPY</Text>  
                </div>
             </Grid.Col>

              <Grid.Col>
                <ContactSurvey />
              </Grid.Col>
            </Grid>
          </div>
        </Box>
      </BackgroundImage>
    </>
  );
}
