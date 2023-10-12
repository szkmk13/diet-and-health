'use client';
import {
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  ThemeIcon,
  Group,
  Center,
  Grid,
  rem,
  BackgroundImage,
  Box,
  Avatar,
  Paper,
  TypographyStylesProvider,
  Flex,
} from '@mantine/core';
import classes from './Opinions.module.css';
import { useHover } from '@mantine/hooks';
import { useState } from 'react';
import SectionHeader from '../SectionHeader';
import axios from 'axios';
export default function Opinions() {
  // axios.get("https://www.znanylekarz.pl/ajax/mobile/doctor-opinions/354112/1").then(response=>{
  //   const responseData = response.data;
  //   console.log(responseData)

  //   // Parse the JSON response
  //   const responseObj = JSON.parse(responseData);
  //   console.log(responseObj)

  //   // Extract the HTML string
  //   const htmlString = responseObj.html;
  //   console.log(htmlString)

  // })

  // console.log('start')
  // const url = 'https://www.znanylekarz.pl/ajax/mobile/doctor-opinions/354112'; // Replace with the URL you want to fetch
  // const cheerio = require('cheerio');
  // axios.get(url)
  //   .then((response) => {
  //     const htmlString = response.data;
  //     // Load the HTML response into Cheerio
  //     const $ = cheerio.load(htmlString);
  //     // Use $.html() to get the modified HTML without tabs and newlines
  //     const cleanedHTML = $.html();
  //     console.log(cleanedHTML);
  //   })
  //   .catch((error) => {
  //     console.error('Error fetching the URL:', error);
  //   });
  // console.log('end')

  const comments = [
    {
      opinion:
        'Wizyta przebiegła w miłej atmosferze. Pani Monika wszystko wyjaśniła, odpowiedziała na wszystkie pytania. Miła i sympatyczna osoba. Polecam.',
      name: 'Joanna.R.',
      date: '28 września 2023'
    },
    {
      opinion:
        'Spotkanie w przyjaznej i luźnej atmosferze. Kompetencja i wyrozumiałość Pani dietetyk.',
      name: 'Jakub',
      date: '19 września 2023'
    },
    {
      opinion:
        'Bardzo pozytywna energia i widać że Pani zna się na rzeczy. Dostałam odpowiedź na wszystko co chciałam w przyjemnej atmosferze. Jeśli ktoś ma problem w znalezieniu dietetyka to Pani Monika to najlepszy wybór.',
      name: 'Patrycja Wiechowska',
      date: '17 sierpnia 2023'
    },
    {
      opinion:
        'Pani Moniką Skibicka wykazała się empatią i zaangażowaniem. Posiada wiedzę z którą potrafi się podzielić. Dietę którą proponuje jest dostosowana do pacjenta i jego stylu życia. Na wizycie motywuje do działania i najlepszego rozwiązania problemu pacjenta. Szczerze polecam.',
      name: 'E.S',
      date: '10 lipca 2023'
    },
    {
      opinion:
        'Jestem bardzo zadowolony z wizyty u Pani Moniki. Podczas konsultacji został zebrany pełen wywiad, dzięki któremu zostały dobrane rozwiązania do mojego problemu. Na wszystkie moje pytania otrzymałem wyczerpujące odpowiedzi. Szczerze polecam każdemu, kto potrzebuje pomocy!',
      name: 'Sebastian',
      date: '5 czerwca 2023'
    },
    {
      opinion:
        'Wizyty (na razie 2) bardzo udane!\nPani Monika jest zaangażowana, świetnie tłumaczy, ma dobrą energię. Naprawdę wysłuchała moich potrzeb i stworzyła świetny jadłospis szyty na miarę! Byłam pozytywnie zaskoczona, a teraz w dodatku okazało się, że TO DZIAŁA! organizacyjnie: wszystko sprawnie, miło, estetycznie - polecam!',
      name: 'Alicja',
      date: '27 kwietnia 2023'
    },
  ];

  return (
    <>
      <Center py={20}>
        <Text fw={700} className={classes.title2}>
          Opinie klientów
        </Text>
      </Center>
      <div className={classes.bgimage}>
        <Container fluid py={20} my={20}>
          <Grid gutter={20}>
            {comments.map((comment, index) => (
              <Grid.Col span={{ lg: 4, sm: 6 }} key={index}>
                <Card radius="xs" h={320} >
                  <Flex
                    mih={50}
                    gap="lg"
                    justify="flex-start"
                    align="center"
                    direction="row"
                    wrap="wrap"
                  >
                    <Avatar color='#ff41ff' radius="xl" size='lg'>{comment.name.charAt(0)}</Avatar>
                    <Center>
                      <Text fw={700} size="lg" >
                       {comment.name}
                      </Text>
                    </Center>

                  </Flex>

                  <div className={`${classes.centeredCard} `}>
                    <Text fw={400} lineClamp={8}fs='italic'>
                      "{comment.opinion}"
                    </Text>
                  </div>
                  <Text
                    fw={700}
                    size="xs"
                    style={{
                      position: 'absolute',
                      bottom: 20,
                      right: 20
                    }}
                  >
                    {comment.date}
                  </Text>
                </Card>

              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}
