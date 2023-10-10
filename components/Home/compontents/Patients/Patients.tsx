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
} from '@mantine/core';
import classes from './Patients.module.css';
import { useHover } from '@mantine/hooks';
import { useState } from 'react';
import SectionHeader from '../SectionHeader';
import { IconApple, IconBabyCarriage, IconBarbell, IconCookie, IconFriends, IconLeaf, IconPaperBag, IconScaleOutline } from '@tabler/icons-react';

export default function Patients() {
  const cardsData = [
    {
      title: 'Osobom z nadwagą oraz niedowagą',
      description: '',
      image: <IconScaleOutline color="var(--mantine-color-blue-filled)" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    },
    {
      title: 'Kobietom w ciąży',
      description: '',
      image: <IconBabyCarriage color="var(--mantine-color-blue-filled)" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    },
    {
      title: 'Dzieciom',
      description: '',
      image: <IconFriends color="var(--mantine-color-blue-filled)" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    },
    {
      title: 'Sportowcom',
      description: '',
      image: <IconBarbell color="var(--mantine-color-blue-filled)" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    },
    {
      title: 'Osobom na diecie roślinnej',
      description: '',
      image: <IconLeaf color="var(--mantine-color-blue-filled)" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    },
    {
      title: 'Osobom, które chcą trwale zmienić swoje nawyki żywieniowe',
      description: '',
      image: <IconApple color="var(--mantine-color-blue-filled)" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    },
    {
      title: 'Osobom, które mają problem z utratą kontroli nad jedzeniem',
      description: '',
      image: <IconCookie color="var(--mantine-color-blue-filled)" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    },
    {
      title:
        'Osobom z dolegliwościami ze strony układu pokarmowego takimi jak: zaparcia, biegunki, wzdęcia, zgaga, nudności, wymioty',
        description: '',
        image: <IconPaperBag color="var(--mantine-color-blue-filled)" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    },
  ];
 
  // const cards = short.map((patient) => (
  //   <Card key={patient.title} radius="md" className={classes.card}>
  //     <Center>
  //       <Image src={patient.image}  className={classes.image}  />
  //     </Center>
  //     <Center>
  //       <Text className={classes.title} pt={5}>
  //         {patient.title}
  //       </Text>
  //     </Center>
  //   </Card>
  // ));
  // const longCards = long.map((patient) => (
  //   <Card key={patient.title} radius="md" className={classes.longcard}>
  //     <Center>
  //       <Image src={patient.image} style={{ height: '125px' }} />
  //     </Center>
  //     <Center>
  //       <Text className={classes.title} pt={5}>
  //         {patient.title}
  //       </Text>
  //     </Center>
  //   </Card>
  // ));

  return (
    <>
   
      <Center pt={20}>
        <Text fw={700} className={classes.title2}>
          Komu pomagam?
        </Text>
      </Center>
      {/* <div className={classes.wrapper}> */}
        {/* <Group justify="center" gap={rem(40)} className={classes.group}>
          {cards}
          {longCards}
          <Card key={'jednostki chorobowe'} radius="md" className={classes.longestCard} withBorder>
            <Center>
              <Image src={'images/search.svg'} style={{ height: '125px' }} />
            </Center>
            <Center>
              <Text className={classes.title} pt={5}>
                Osobom z cukrzycą, insulinoopornością, refluksem żołądkowo-przełykowym, celiakią,
                SIBO, zespołem jelita drażliwego, niedoczynnością tarczycy, nadczynnością tarczycy,
                Hashimoto, anemią, wrzodziejącym zapaleniem jelita grubego, chorobą
                Leśniowskiego-Crohna, dną moczanowa i innymi chorobami/dolegliwościami.
              </Text>
            </Center>
          </Card>
        </Group> */}
        <Container fluid py={20} my={20} bg={'#e1f1f2'}>
          <Grid gutter={20}>
            {cardsData.map((patient, index) => (
              <Grid.Col span={3} key={index}>
                <Card className={classes.centeredCard} radius="xs" h={280}>
                  <Center>
                    {patient.image}
                  </Center>
                  <Center>
                    <Text className={classes.title} pt={15} fw={400}>
                      {patient.title}
                    </Text>
                  </Center>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
        
      {/* </div> */}
     
    </>
  );
}
