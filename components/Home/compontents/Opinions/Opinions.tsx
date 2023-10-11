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
const newopinions = ''

  const comments = [
    {
      opinion:
        'Pani Monika jest cudownym dietetykiem. Pomogła mi w pokonaniu znacznej nadwagi. Poprzednie moje próby walki z nadwagą kończyły się fiaskiem, a dzięki poradom p. Moniki, krok po kroku udało mi się wyglądać i czuć się jakbym miała 10 lat mniej. Oprócz tego, że p. Monika jest świetnym fachowcem, jest miła, empatyczna, ma świetny kontakt z pacjentem. W trakcie naszych rozmów udzieliła mi też wskazówek, jak żywić moją nastoletnią córkę, która wyczynowo uprawia sport. Polecam p. Monikę z całego serca.',
      name: 'Gosia',
      date: '10.10.2023'
    },
    {
      opinion:
        'Serdecznie polecam Panią Monikę. Kompetentna, profesjonalna i empatyczna. Wszystko dokładnie wyjaśnia i tłumaczy. Wiem, że trafiłem pod opiekę wspaniałej specjalistki.',
      name: 'Jakub',
      date: '10.10.2023'
    },
    {
      opinion:
        'Pani Monika pomogła mi zrzucić zbędne kilogramy po drugiej ciąży. Po przeprowadzonym na wizycie dokładnym wywiadzie i ustaleniu preferencji żywieniowych przygotowała fajny jadłospis, który nie wymagał wielogodzinnych zakupów czy przygotowań. Polecam 🙂',
      name: 'Natalia',
      date: '10.10.2023'
    },
    {
      opinion:
        'Pani Monika jest doskonałą specjalistką, ma ogromną wiedzę i potrafi ją w zrozumiały sposób przekazać. Kontrolowała moją dietę podczas ciąży oraz wcześniej, gdy intensywnie trenowałam. Ponadto Pani Monika jest życzliwa, uważna, dokładna i profesjonalna. Polecam serdecznie.',
      name: 'Beata',
      date: '10.10.2023'
    },
    {
      opinion:
        'Jako sportowiec wiem, jak duży wpływ ma odpowiednie odżywianie się, Pani Monika układając jadłospis bierze pod uwagę każdy najmniejszy szczegół (niechęć do gotowania przez połowę dnia również!). Przed treningiem energii sporo, następnie regeneracja wraz z ożywieniem i na koniec umilenie wieczoru z żoną - wszystko za sprawą jedzenia. Jeszcze raz dziękuję i oczywiście polecam każdemu. Sympatyczna uśmiechnięta dziewczyna',
      name: 'Wojciech',
      date: '10.10.2023'
    },
    {
      opinion:
        'P. Monika pomogła mi uporać się z moją insulinoopornością. Pokazała mi jak zdrowo i przede wszystkim smacznie się odżywać. Waga spadła i cukry się unormowały. Od zawsze walczyłam z nadwagą i myślałam, że już nigdy nie uda mi się schudnąć przez moją niedoczynność tarczycy, aż w końcu trafiłam na Panią Monikę. Serdecznie polecam p. Monikę tym, którzy walczą o swoje zdrowie i szczupłą sylwetkę!',
      name: 'Anna',
      date: '10.10.2023'
    },
  ];

  // const cards = short.map((patient) => (
  //   <Paper key={patient.name} withBorder radius="xl" shadow="sm" className={classes.comment} style={{ maxWidth: 500 }}>
  //     <Group>
  //       {/* <Avatar
  //         src=""
  //         alt=""
  //         radius="xl"
  //       /> */}
  //       <div>
  //         <Text fz="sm" fw={700} size="xl">
  //           {patient.name}
  //         </Text>
  //         {/* <Text fz="xs" c="dimmed">
  //           date
  //         </Text> */}
  //       </div>
  //     </Group>
  //     <TypographyStylesProvider className={classes.body}>
  //       <div className={classes.content}>{patient.opinion}</div>
  //     </TypographyStylesProvider>
  //   </Paper>
  // ));

  return (
    <>
      <Center py={20}>
        <Text fw={700} className={classes.title2}>
          Opinie pacjentów
        </Text>
      </Center>
      <div className={classes.bgimage}>
        <Container fluid py={20} my={20}>
          <Grid gutter={20}>
            {comments.map((comment, index) => (
              <Grid.Col span={{lg:4,sm:6}} key={index}>
                <Card radius="xs" h={320} >
                  <Text fw={700} size="lg">
                    {comment.name}
                  </Text>
                  <div className={classes.centeredCard}>
                    <Text fw={400} lineClamp={8}>
                      {comment.opinion}
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
