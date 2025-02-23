'use client';
import { Text, Title, Image, Container, Accordion, Space, Divider } from '@mantine/core';
import classes from './page.module.css';
import { useEffect, useState } from 'react';
import supabase from '@/pages/api/supabase';

interface Offer {
  id: number;
  type: 'solo' | 'duo' | 'psycho' | 'pakiet';
  name: string;
  price: string;
}

export default async function Page() {
  const defaultServicesData = [
    {
      name: 'Konsultacja dietetyczna (pierwsza wizyta)',
      price: '190',
      description:
        'Podczas wizyty uważnie słucham potrzeb pacjenta. Wspólnie omawiamy stan zdrowia, nawyki żywieniowe oraz tryb życia pacjenta. Przeprowadzam szczegółowy wywiad medyczny i żywieniowy. Na podstawie analizy sposobu żywienia wskazuję błędy żywieniowe. Proponuję łatwe do zastosowania rozwiązania i zmiany. Tłumaczę w jaki sposób komponować posiłki. Wspólnie ustalamy wstępne założenia i cele diety.',
      image: 'images/service1.jpg',
    },
    {
      name: 'Konsultacja online',
      price: '190',
      description:
        'Przed konsultacją otrzymasz link do spotkania na platformie Skype (nie trzeba posiadać konta)',
      image: 'images/service8.jpg',
    },
    {
      name: 'Konsultacja dietetyczna kolejna wizyta (do 2 miesięcy)',
      price: '130',
      description:
        'Na każdej wizycie kontrolnej analizowane są wdrożone zmiany, postępy, a także pojawiające się trudności. Podsumowujemy zmiany w masie ciała, samopoczuciu oraz dolegliwościach zdrowotnych.',
      image: 'images/service2.jpg',
    },
    {
      name: 'Jadłospis 7/14 dniowy',
      price: '170/250',
      description:
        'Jadłospisy układam po szczegółowym wywiadzie dotyczącym dotychczasowego sposobu żywienia. Uwzględniam wszystkie dolegliwości, problemy zdrowotne, a także preferencje smakowe.\n\n',
      description2: 'Jadłospis otrzymasz drogą mailową w ciągu 7 dni roboczych od konsultacji.',
      image: 'images/service6.jpg',
    },
    {
      name: 'Dieta eliminacyjna Jadłospis 7/14 dniowy',
      price: '200/280',
      description: 'W przypadku wielu eliminacji w diecie ',
      description2: '(np. faza eliminacyjna diety low FODMAP przy SIBO)',
      image: 'images/service7.jpg',
    },
    {
      name: 'Analiza składu ciała',
      price: '90',
      description:
        'Urządzenie umożliwia pomiar wszystkich najważniejszych komponentów m.in.: tkanka tłuszczowa, masa mięśniowa, zawartość wody w organizmie.\n\nSkład ciała jest obliczany za pomocą Analizy Bioimpedancji Elektrycznej (BIA). Bezpieczne sygnały elektryczne o niskim natężeniu są przesyłane przez ciało za pomocą elektrod znajdujących się na platformie pomiarowej. Ułatwia to przesyłanie sygnału przez płyny znajdujące się w mięśniach i innych tkankach, ale napotyka opór w tkance tłuszczowej, ponieważ zawiera ona niewiele płynów. Ten opór jest nazywany impedancją. Odczyty są następne wprowadzone do medycznie zbadanych formuł matematycznych, aby obliczyć skład ciała.\n\n',
      disclaimer:
        'Przeciwskazania do badania metodą bioimpedancji: wszczepiony defibrylator lub rozrusznik serca, wszczepione inne metalowe elementy, epilepsja, ciąża.',
      image: 'images/service5.jpg',
    },
    {
      name: 'Pierwsza konsultacja dla dwóch osób',
      price: '280 zł',
      description:
        'Wspólnie omawiamy stan zdrowia, nawyki żywieniowe oraz tryb życia pacjentów. Przeprowadzam szczegółowy wywiad medyczny i żywieniowy. Na podstawie analizy sposobu żywienia wskazuję błędy żywieniowe. Proponuję łatwe do zastosowania rozwiązania i zmiany. Tłumaczę w jaki sposób komponować posiłki. Wspólnie ustalamy wstępne założenia i cele diety.',
      image: 'images/service1.jpg',
    },
    {
      name: 'Wizyta kontrolna dla dwóch osób/pary',
      price: '190 zł',
      description:
        'Na każdej wizycie kontrolnej analizowane są wdrożone zmiany, postępy, a także pojawiające się trudności. Podsumowujemy zmiany w masie ciała, samopoczuciu oraz dolegliwościach zdrowotnych.',
      image: 'images/service2.jpg',
    },
    {
      name: 'Jadłospis 7/14 dniowy dla dwóch osób',
      price: '250/350',
      description:
        '- Potrawy w jadłospisach dla dwóch osób są identyczne. Różnią się gramatury posiłków ustalone na podstawie zapotrzebowania kalorycznego pacjentów.\n\n- W przypadku odmiennych preferencji żywieniowych i/lub jednostek chorobowych przygotowanie wspólnego jadłospisu jest niemożliwe.',
      image: 'images/service10.jpg',
    },
    {
      name: 'Konsultacja psychodietetyczna (pierwsza wizyta)',
      price: '250',
      description: (
        <Text fz="md" c="dimmed" className={classes.description}>
          Podczas pierwszego spotkania przeprowadzam wywiad medyczno-żywieniowy. Wykonuję analizę
          składu i masy ciała, rozmawiamy o zdrowiu, o tym jak wygląda Twój plan dnia, analizujemy
          dotychczasowe nawyki żywieniowe, szukamy przyczyny problemów z jedzeniem. Wspólnie
          ustalamy plan działania.
          <br />
          <br />
          Zapraszam jeśli:
          <br />- chcesz zmienić swoje nawyki żywieniowe
          <br />- mimo znajomości zasad prawidłowego odżywiania nie potrafisz sobie poradzić z
          nadmierną masą ciała
          <br />- masz za sobą wiele prób redukcji masy ciała, które nie przyniosły oczekiwanego
          efektu
          <br />- masz problem z utratą kontroli nad jedzeniem
          <br />
          <br />
          Istnieje możliwość dokupienia{' '}
          <Text inherit span fw={700}>
            planu żywieniowego
          </Text>
          , który może pomóc Ci w zmianie nawyków żywieniowych. Nauczy Cię jakie porcje są
          odpowiednie dla Ciebie, jak komponować posiłki, aby dłużej odczuwać sytość i nie mieć
          spadków energii. Zawiera indywidualne zalecenia i wskazówki oraz informacje o zamiennikach
          poszczególnych produktów.
          <br />
          Plan przygotowuję na podstawie wywiadu zdrowotno-żywieniowego. Nauczę Cię jak go
          modyfikować. Pokażę Ci, że nie ma produktów „zakazanych”, a najbardziej skuteczna dieta to
          ta, którą jesteśmy w stanie utrzymać.
        </Text>
      ),
      image: 'images/service10.jpg',
    },
    {
      name: 'Konsultacja psychodietetyczna (kolejna wizyta)',
      price: '170',
      description: (
        <Text fz="md" c="dimmed" className={classes.description}>
          Na kolejnych konsultacjach omawiamy miniony okres, pojawiające się trudności. Pracujemy na
          przyczynami problemów z jedzeniem. Uczę Cię jak jeść świadomie i uważnie. Na każdej
          konsultacji wykonywana jest analiza składu i masy ciała.
        </Text>
      ),
      image: 'images/service11.jpg',
    },
    {
      name: 'Pakiet standard trzech spotkań + jadłospis 14 dniowy',
      price: '640/550', // Cena jako string
      description: (
        <>
          W cenie:
          <br />
          Pierwsza wizyta
          <br />
          Dwie wizyty kontrolne
          <br />
          Jadłospis 14dniowy
          <br />
          Analiza składu ciała przy każdej z wizyt.
          <br />
          <br />
          <Text inherit span fs="italic">
            Uwaga!
            <br />- W przypadku nie pojawienia się na wizycie kontrolnej, wizyta ta przepada
            (Dotyczy wizyt niepotwierdzonych przez pacjenta i/lub wizyt nieodwołanych we
            wcześniejszym terminie).
            <br />- Wizyty kontrolne muszą się odbyć w ciągu 2 miesięcy od pierwszej konsultacji.
          </Text>
        </>
      ),
      image: 'images/service4.jpg',
    },
    {
      name: 'Pakiet dietetyczny kolejny',
      price: '510/400', // Cena jako string
      description: (
        <>
          W cenie:
          <br />
          Dwie wizyty kontrolne
          <br />
          Jadłospis 14dniowy
          <br />
          Analiza składu ciała
          <br />
          <br />
          <Text inherit span fs="italic">
            Uwaga!
            <br />W cenie pakietu nie ma pierwszej konsultacji
          </Text>
        </>
      ),
      image: 'images/service9.jpg',
    },
  ];
  const { data, error } = await supabase.from('offers').select();
  // Nadpisz domyślne wartości, jeśli dane istnieją
  const updatedServicesData = defaultServicesData.map((defaultService) => {
    // Znajdź odpowiadający wpis z Supabase na podstawie nazwy
    const matchingService = data?.find((service) => service.name === defaultService.name);
    // Jeśli znajdziesz dopasowanie, nadpisz dane z Supabase
    return {
      ...defaultService, // Domyślne wartości
      ...(matchingService || {}), // Nadpisz wartości, jeśli istnieją w Supabase
    };
  });

  const soloServices = updatedServicesData
    .filter((service) => service.type === 'solo')
    .map((service) => (
      <>
        <div key={service.name} className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}>
              {service.name} {service.price} zł
            </Title>
            <Text fz="md" c="dimmed" className={classes.description}>
              {service.description}
            </Text>
          </div>
          <Image src={service.image} className={classes.image} visibleFrom="sm" />
        </div>
        <Divider my="sm" className={classes.divider} />
      </>
    ));
  const duoServices = updatedServicesData
    .filter((service) => service.type === 'duo')
    .map((service) => (
      <>
        <div key={service.name} className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}>
              {service.name} {service.price} zł
            </Title>
            <Text fz="md" c="dimmed" className={classes.description}>
              {service.description}
            </Text>
          </div>
          <Image src={service.image} className={classes.image} visibleFrom="sm" />
        </div>
        <Divider my="sm" className={classes.divider} />
      </>
    ));
  const psychoServices = updatedServicesData
    .filter((service) => service.type === 'psycho')
    .map((service, index) => (
      <div key={`psychoservice-${index}`} className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>
            {service.name} - {service.price} zł
          </Title>
          {service.description}
        </div>
        <Image src={service.image} className={classes.image} visibleFrom="sm" />
        <Divider my="sm" className={classes.divider} />
      </div>
    ));
  const pakietServices = updatedServicesData
    .filter((service) => service.type === 'pakiet')
    .map((service, index) => {
      // Rozdzielamy cenę na część przed i po ukośniku
      const [oldPrice, newPrice] = service.price.split('/');

      return (
        <div key={index} className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}>
              {service.name} {/* Wyświetlamy przekreśloną cenę i nową cenę */}
              <Text span td="line-through" inherit>
                {oldPrice} zł
              </Text>{' '}
              <Text inherit span c="red">
                {newPrice} zł
              </Text>
            </Title>
            <Text fz="md" c="dimmed" className={classes.description}>
              {service.description}
            </Text>
          </div>
          <Image src={service.image} className={classes.image} visibleFrom="sm" />
          <Divider my="sm" className={classes.divider} />
        </div>
      );
    });
  const servicesData = [
    { name: 'Oferta Indywidualna', list: soloServices },
    { name: 'Oferta dla dwóch osób', list: duoServices },
    { name: 'Psychodietetyka', list: psychoServices },
    { name: 'Pakiety', list: pakietServices },
  ];

  const items = servicesData.map((item) => (
    <Accordion.Item key={item.name} value={item.name} className={classes.imageTitle}>
      <Accordion.Control className={classes.buttonCollapse}>
        {item.name === 'Pakiety' ? (
          <div style={{ display: 'flex' }}>
            <Text className={classes.title2} fw={700}>
              {item.name}
            </Text>
            <Image h={50} fit="contain" src={'images/procent.png'} />
          </div>
        ) : (
          <Text className={classes.title2} fw={700}>
            {item.name}
          </Text>
        )}
      </Accordion.Control>
      <Accordion.Panel>{item.list}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <>
      <Container size={'xl'}>
        <Space h="lg" />
        <Accordion variant="separated">{items}</Accordion>
      </Container>
    </>
  );
}
