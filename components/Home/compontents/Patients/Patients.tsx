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
  Popover,
  HoverCard,
} from '@mantine/core';
import classes from './Patients.module.css';
import { useDisclosure, useHover } from '@mantine/hooks';
import { useState } from 'react';
import SectionHeader from '../SectionHeader';
import { IconApple, IconBabyCarriage, IconBarbell, IconCookie, IconFriends, IconLeaf, IconPaperBag, IconScaleOutline, IconPill } from '@tabler/icons-react';

export default function Patients() {
  const [popoveropened, { close, open }] = useDisclosure(false);

  const cardsData = [
    {
      title: 'Osobom z nadwagą oraz niedowagą',
      description: '',
      image: <IconScaleOutline color="#4261AA" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    },
    {
      title: 'Kobietom w ciąży oraz dzieciom',
      description: '',
      image: <IconBabyCarriage color="#4261AA" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    },
    // {
    //   title: 'Dzieciom',
    //   description: '',
    //   image: <IconFriends color="#4261AA" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    // },
    {
      title: 'Sportowcom',
      description: '',
      image: <IconBarbell color="#4261AA" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    },
    {
      title: 'Osobom na diecie roślinnej',
      description: '',
      image: <IconLeaf color="#4261AA" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    },
    {
      title: 'Osobom, które chcą trwale zmienić swoje nawyki żywieniowe',
      description: '',
      image: <IconApple color="#4261AA" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    },
    {
      title: 'Osobom, które mają problem z utratą kontroli nad jedzeniem',
      description: '',
      image: <IconCookie color="#4261AA" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    },
    {
      title: "Osobom z różnymi\ndolegliwościami *",
      description:
        'Osobom z dolegliwościami ze strony układu pokarmowego takimi jak:\n zaparcia, biegunki, wzdęcia, zgaga, nudności,\n wymioty, refluksem żołądkowo-przełykowym.',
      // description: '',
      image: <IconPaperBag color="#4261AA" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    }, {
      title: "Osobom z różnymi jednostkami chorobowymi *",
      description:
        'Osobom z cukrzycą, insulinoopornością, celiakią, SIBO, \nzespołem jelita drażliwego, niedoczynnością tarczycy,\n nadczynnością tarczycy, Hashimoto, anemią,\n wrzodziejącym zapaleniem jelita grubego, chorobą Leśniowskiego-Crohna,\n dną moczanowa i innymi chorobami/ dolegliwościami.',
      // description: '',
      image: <IconPill color="#4261AA" stroke={0.5} style={{ width: rem(80), height: rem(80) }} />,
    },
  ];

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
      {/* <Popover
        key={`popover_${link.label}`}
        position="bottom"
        withArrow
        shadow="md"
        opened={popoveropened}
      >
        <Popover.Target>
          <a
            onMouseEnter={open}
            onMouseLeave={close}
            key={link.label}
            href={'#'}
            className={classes.linkDisabled}
          >
            {link.label}
          </a>
        </Popover.Target>
        <Popover.Dropdown style={{ pointerEvents: 'none' }}>
          <Text size="sm">Dostępne wkrótce</Text>
        </Popover.Dropdown>
      </Popover> */}
      <Container fluid py={20} my={20} className={classes.gridBackground}>
        <Grid gutter={20}>

          {cardsData.map((patient, index) => (
            patient.description ? (
              <Grid.Col span={{ lg: 3, sm: 6 }} key={index}>
                <HoverCard
                  key={`popover_${patient.title}`}
                  position="bottom"
                  withArrow
                  shadow="md"
                  opened={popoveropened}
                >

                  <Card className={classes.centeredCard} radius="xs" h={280} onMouseEnter={open}
                    onMouseLeave={close}>
                    <Center>
                      {patient.image}
                    </Center>
                    <Center>
                      <HoverCard.Target>
                        <Text className={classes.title} pt={15} fw={400}>
                          {patient.title}
                        </Text>
                      </HoverCard.Target>
                    </Center>
                  </Card>

                  <HoverCard.Dropdown style={{ pointerEvents: 'none' }}>
                    <Text size='xs' className={classes.title}>
                      {patient.description}
                    </Text>
                  </HoverCard.Dropdown>
                </HoverCard>

              </Grid.Col>





            ) : (<Grid.Col span={{ lg: 3, sm: 6 }} key={index}>
              <Card className={classes.centeredCard} radius="xs" h={280}>
                <Center>
                  {patient.image}
                </Center>
                <Center>
                  <Text className={classes.title} pt={15} fw={400}>
                    {patient.title}{/* {patient.description?patient.description:''}*/}
                  </Text>
                </Center>
              </Card>
            </Grid.Col>
            )

          ))}

        </Grid>
      </Container>
    </>
  );
}
