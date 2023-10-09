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
    {
      title:
        'Osobom z dolegliwościami ze strony układu pokarmowego takimi jak: zaparcia, biegunki, wzdęcia, zgaga, nudności, wymioty',
      image: 'images/paper-bag.svg',
    },
  ];
  const cards = short.map((patient) => (
    <Card key={patient.title} radius="md" className={classes.card}>
      <Center>
        <Image src={patient.image}  className={classes.image}  />
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
    <>
      <div className={classes.wrapper}>
        <SectionHeader title="Komu pomagam" />
        <Group justify="center" gap={rem(40)} className={classes.group}>
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
        </Group>
      </div>
    </>
  );
}
