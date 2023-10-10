'use client';
import { Text, Title, Image, Box, Container } from '@mantine/core';
import classes from './page.module.css';
import ServicesToggles from '@/components/Services/ServicesToggles';

export default function Page() {
  const servicesData = [
    {
      title: 'Konsultacja dietetyczna (pierwsza wizyta)',
      price: '170 zł',
      description:
        'Pierwsze spotkanie trwa około 60 minut. Podczas wizyty uważnie słucham potrzeb pacjenta. Wspólnie omawiamy stan zdrowia, nawyki żywieniowe oraz tryb życia pacjenta. Przeprowadzam szczegółowy wywiad medyczny i żywieniowy. Na podstawie analizy sposobu żywienia wskazuję błędy żywieniowe. Proponuję łatwe do zastosowania rozwiązania i zmiany. Tłumaczę w jaki sposób komponować posiłki. Wspólnie ustalamy wstępne założenia i cele diety.',
      image: 'images/service1.jpg',
    },
    {
      title: 'Konsultacja online',
      price: '170 zł',
      description:
        'Przed konsultacją otrzymasz link do spotkania na platformie Skype (nie trzeba posiadać konta)',
      image: 'images/service1.jpg',
    },
    {
      title: 'Konsultacja dietetyczna kolejna wizyta (do 2 miesięcy)',
      price: '120 zł',
      description:
        'Na każdej wizycie kontrolnej analizowane są wdrożone zmiany, postępy, a także pojawiające się trudności. Podsumowujemy zmiany w masie ciała, samopoczuciu oraz dolegliwościach zdrowotnych.',
      image: 'images/service2.jpg',
    },
    {
      title: 'Jadłospis 14 dniowy',
      price: '220 zł',
      description: '',
      image: 'images/service3.jpg',
    },
    {
      title: 'Jadłospis 7 dniowy',
      price: '150 zł',
      description: '',
      image: 'images/service3.jpg',
    },
    {
      title: 'Dieta eliminacyjna Jadłospis 7 dniowy',
      price: '180 zł',
      description: '',
      image: 'images/service3.jpg',
    },
    {
      title: 'Dieta eliminacyjna Jadłospis 14 dniowy',
      price: '250 zł',
      description: '(np. faza eliminacyjna diety low FODMAP przy SIBO)',
      image: 'images/service3.jpg',
    },
    {
      title: 'Analiza składu ciała',
      price: '80 zł',
      description: '',
      image: 'images/service3.jpg',
    },
    // {
    //   title: 'Pierwsza konsultacja dla dwóch osób',
    //   price: '250 zł',
    //   description: 'Dla tych co lubią conieco razem z drugą połówką',
    //   image: 'images/service4.jpg',
    // },
    // {
    //   title: 'Diety eliminacyjne',
    //   price: 'xxx zł',
    //   description:
    //     'słodycze (ale nie przesadzaj ze słodyczami ,bo będziesz się źle czuł i będziesz gruby) ',
    //   image: 'images/service5.jpg',
    // },
    // {
    //   title: 'itd. ',
    //   price: '♾️ zł',
    //   description: 'iberyjski sekret',
    //   image: 'images/iberyjskisekret.jpg',
    // },
  ];

  const services = servicesData.map((service) => (
    <div key={service.title} className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>
          {service.title} - {service.price}
        </Title>
        <Text fz="md" c="dimmed">
          {service.description}
        </Text>
      </div>
      <Image src={service.image} className={classes.image} visibleFrom="sm" />
    </div>
  ));

  return (
    <>
      <Container size={'xl'}>
        <ServicesToggles/>
      </Container >
    </>
  );
}
