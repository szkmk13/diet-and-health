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

export default function Patients() {
  const short = [
    {
      title: 'Osobom z nadwagą',
      image: 'images/arrow-up.svg',
    },
    {
      title: 'Osobom z niedowagą',
      image: 'images/arrow-down.svg',
    },
    {
      title: 'Kobietom w ciąży',
      image: 'images/woman.svg',
    },
    {
      title: 'Dzieciom',
      image: 'images/mood-kid.svg',
    },
    {
      title: 'Sportowcom',
      image: 'images/bike.svg',
    },
    {
      title: 'Osobom na diecie roślinnej',
      image: 'images/leaf.svg',
    },
  ];
  const long = [
    {
      title: 'Osobom, które chcą trwale zmienić swoje nawyki żywieniowe',
      image: 'images/arrow-back-up.svg',
    },
    {
      title: 'Osobom, które mają problem z utratą kontroli nad jedzeniem',
      image: 'images/brand-speedtest.svg',
    },
  ];
  const cards = short.map((patient) => (
    <Card key={patient.title} radius="md" className={classes.card}>
      <Center>
        <Image src={patient.image} style={{height: '125px' }} />
      </Center>
      <Center>
        <Text className={classes.title} pt={5}>
          {patient.title}
        </Text>
      </Center>
    </Card>
  ));
  const longCards = long.map((patient) => (
    <Card key={patient.title} radius="md" className={classes.longcard}>
      <Center>
        <Image src={patient.image} style={{ height: '125px' }} />
      </Center>
      <Center>
        <Text className={classes.title} pt={5}>
          {patient.title}
        </Text>
      </Center>
    </Card>
  ));

  return (
    <Group justify="center" gap={rem(40)} style={{ height: 300 }} p={50} mb={350}>
      {cards}
      {longCards}
      <Card key={'jednostki chorobowe'} radius="md" className={classes.longest}>
        <Center>
          <Image src={'images/search.svg'} style={{ height: '125px' }} />
        </Center>
        <Center>
          <Text className={classes.title} pt={5}>
            Osobom z jednostkami chorobowymi takimi jak: Cukrzyca, insulinooporność, zaburzenia
            lipidowe, refluks pokarmowy, choroba wrzodowa, zaparcia, biegunki, nietolerancje
            pokarmowe, niedoczynność tarczycy, nadczynność tarczycy, Hashimoto, anemia, wrzodziejące
            zapalenie jelita grubego, choroba Leśniowskiego-Crohna, dna moczanowa i inne.'
          </Text>
        </Center>
      </Card>
    </Group>
  );
}
