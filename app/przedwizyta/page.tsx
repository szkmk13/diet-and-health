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

                <Text fw={600} size='xl'>Jak przygotować się do wizyty:</Text>
                <Text>1. Na pierwszą konsultację zarezerwuj sobie około 60 minut. </Text>  
                <Text>2. Zabierz ze sobą ostatnio wykonywane wyniki badań (jeśli takie posiadasz).</Text>  
                <Text>3. Na konsultacji wykonuję analizę składu ciała. Bezpośrednio przed badaniem składu ciała nie zaleca się wykonywać intensywnego treningu, korzystać z sauny. Dobrze wykonać badanie 2-3 godziny po posiłku i po wcześniejszym opróżnieniu pęcherza.</Text>
                <Text>4. Na analizator składu ciała wchodzi się gołymi stopami, dlatego wygodniej ubrać skarpety zamiast rajstop.</Text>  
                <Text>5. Przez 3 dni na bieżąco opisuj spożywane posiłki. Uwzględnij godzinę, miejsce spożycia posiłku, wielkość porcji. Możesz dodatkowo opisać swoje samopoczucie po posiłku (np. senność, ból brzucha, wzdęcia, biegunka).</Text>  
                <Text>6. Zachęcam do wypełnienia wstępnej ankiety, która znajduje się poniżej 😊</Text>  
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
