'use client';
import { Text, Title, Image, Box } from '@mantine/core';
import classes from './page.module.css';

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
      title: 'Konsultacja dietetyczna (kolejna wizyta)',
      price: '120 zł',
      description:
        'Na każdej wizycie kontrolnej analizowane są wdrożone zmiany, postępy, a także pojawiające się trudności. Podsumowujemy zmiany w masie ciała, samopoczuciu oraz dolegliwościach zdrowotnych.',
      image: 'images/service2.jpg',
    },
    {
      title: 'Indywidualny jadłospis 7/14 dni',
      price: '150/220 zł',
      description:
        'Po przeprowadzeniu szczegółowego wywiadu medyczno-żywieniowego układam indywidualny plan żywieniowy. Układając jadłospis uwzględniam wszystkie dolegliwości i wymagania pacjenta. Oprócz tego biorę pod uwagę: preferencje smakowe, ilość czasu na gotowanie, umiejętności kulinarne. Proponowane przeze mnie posiłki są szybkie, łatwe do przygotowania, smaczne i urozmaicone.',
      image: 'images/service3.jpg',
    },
    // {
    //   title: 'Wizyta dla par',
    //   price: '69 zł',
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
      <Box className={classes.box}>
        {services}
        <Text>
          Po przeprowadzeniu szczegółowego wywiadu medyczno-żywieniowego układam indywidualny plan
          żywieniowy. Układając jadłospis uwzględniam wszystkie dolegliwości i wymagania pacjenta.
          Oprócz tego biorę pod uwagę: preferencje smakowe, ilość czasu na gotowanie, umiejętności
          kulinarne. Proponowane przeze mnie posiłki są szybkie, łatwe do przygotowania, smaczne i
          urozmaicone. Czas oczekiwania na jadłospis to 7 dni roboczych od konsultacji.
        </Text>
      </Box>
    </>
  );
}
