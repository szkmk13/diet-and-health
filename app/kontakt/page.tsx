'use client';
import { Text, Title, Box, BackgroundImage, Center, Grid } from '@mantine/core';
import classes from './page.module.css';
import Link from 'next/link';
import ContactForm from '@/components/Contact/ContactForm';

export default function Page() {
  return (
    <>
      <BackgroundImage src="images/6.jpg">
        <Box className={classes.box}>
          <div className={classes.wrapper}>
            <Grid gutter={20}>
              <Grid.Col>
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
              </Grid.Col>

              <Grid.Col>
                <ContactForm />
              </Grid.Col>
            </Grid>
          </div>
        </Box>
      </BackgroundImage>
    </>
  );
}
