'use client';
import { Text, Title, Image, Container, Accordion, Space } from '@mantine/core';
import classes from './page.module.css';
export default function Page() {
  const soloServicesData = [
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
      image: 'images/service10.jpg',
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
      image: 'images/service4.jpg',
    },
    {
      title: 'Jadłospis 7 dniowy',
      price: '150 zł',
      description: '',
      image: 'images/service5.jpg',
    },
    {
      title: 'Dieta eliminacyjna Jadłospis 7 dniowy',
      price: '180 zł',
      description: '',
      image: 'images/service6.jpg',
    },
    {
      title: 'Dieta eliminacyjna Jadłospis 14 dniowy',
      price: '250 zł',
      description: '(np. faza eliminacyjna diety low FODMAP przy SIBO)',
      image: 'images/service7.jpg',
    },
    {
      title: 'Analiza składu ciała',
      price: '80 zł',
      description: '',
      image: 'images/service8.jpg',
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
  const duoServicesData = [
    {
      title: 'Pierwsza konsultacja dla dwóch osób',
      price: '250 zł',
      description: '',
      image: 'images/service9.jpg',
    },
    {
      title: 'Jadłospis 7 dniowy dla dwóch osób',
      price: '230 zł',
      description:
        'WAŻNE\nPotrawy w jadłospisach dla dwóch osób są identyczne. Różnią się gramatury posiłków\nustalone na podstawie zapotrzebowania kalorycznego pacjentów.',

      image: 'images/service10.jpg',
    },
    {
      title: 'Jadłospis 14 dniowy dla dwóch osób',
      price: '320 zł',
      description:
        'WAŻNE\nPotrawy w jadłospisach dla dwóch osób są identyczne. Różnią się gramatury posiłków\nustalone na podstawie zapotrzebowania kalorycznego pacjentów.',

      image: 'images/service11.jpg',
    },
    {
      title: 'Wizyta kontrolna dla dwóch osób/pary',
      price: '170 zł',
      description: '',
      image: 'images/service7.jpg',
    },
  ];
  const psychoServicesData = [
    {
      title: 'Konsultacja psychodietetyczna (pierwsza wizyta)',
      price: '230 zł',
      description:
        'Podczas pierwszego spotkania przeprowadzam wywiad medyczno-żywieniowy. Wykonuję analizę składu i masy ciała, rozmawiamy o zdrowiu, o tym jak wygląda Twój plan dnia, analizujemy dotychczasowe nawyki żywieniowe, szukamy przyczyny problemów z jedzeniem. Wspólnie ustalamy plan działania.\n\nZapraszam jeśli:\n- chcesz zmienić swoje nawyki żywieniowe\n- mimo znajomości zasad prawidłowego odżywiania nie potrafisz sobie poradzić z nadmierną masą ciała\n- masz za sobą wiele prób redukcji masy ciała, które nie przyniosły oczekiwanego efektu\n- masz problem z utratą kontroli nad jedzeniem\n\nIstnieje możliwość dokupienia planu żywieniowego, który może pomóc Ci w zmianie nawyków żywieniowych. Nauczy Cię jakie porcje są odpowiednie dla Ciebie, jak komponować posiłki aby dłużej odczuwać sytość i nie mieć spadków energii. Zawiera indywidualne zalecenia i wskazówki oraz informacje o zamiennikach poszczególnych produktów.\nPlan przygotowuję na podstawie wywiadu zdrowotno-żywieniowego. Nauczę Cię jak go modyfikować. Pokażę Ci, że nie ma produktów „zakazanych”, a najbardziej skuteczna dieta to ta, którą jesteśmy w stanie utrzymać.',
      image: 'images/service4.jpg',
    },
    {
      title: 'Konsultacja psychodietetyczna (kolejna wizyta)',
      price: '160 zł',
      description:
        'Na kolejnych konsultacjach omawiamy miniony okres, pojawiające się trudności. Pracujemy na przyczynami problemów z jedzeniem. Uczę Cię jak jeść świadomie i uważnie. Na każdej konsultacji wykonywana jest analiza składu i masy ciała.',
      image: 'images/service1.jpg',
    },
  ];
  const pakietServiceData = [
    {
      title: (
        <Text className={classes.title} span>
          Pakiet Standard trzech spotkań + jadłospis 14 dniowy -{' '}
        </Text>
      ),
      price: (
        <>
          <Text className={classes.title} span>
            <Text span td="line-through" inherit>
              630zł
            </Text>{' '}
            <Text inherit span c="red">
              500 zł{' '}
            </Text>
          </Text>
        </>
      ),

      description:
        'W cenie: Pierwsza wizyta, dwie wizyty kontrolne, jadłospis 14dniowy, analiza składu ciała przy każdej z wizyt. \n Uwaga! \n- W przypadku nie pojawienia się na wizycie kontrolnej, wizyta ta przepada (Dotyczy wizyt niepotwierdzonych przez pacjenta i/lub wizyt nieodwołanych we wcześniejszym terminie).\n- Wizyty kontrolne muszą się odbyć w ciągu 2 miesięcy od pierwszej konsultacji.',
      image: 'images/service6.jpg',
    },
    {
      title: (
        <Text className={classes.title} span>
          Pakiet dietetyczny kolejny -{' '}
        </Text>
      ),
      price: (
        <>
          <Text className={classes.title} span>
            <Text span td="line-through" inherit>
              460zł
            </Text>{' '}
            <Text inherit span c="red">
              360 zł
            </Text>{' '}
            {/* 360 zł */}
          </Text>
        </>
      ),
      description:
        'W cenie:\nDwie kontrolne wizyty+ jadłospis 14 dniowy + analiza składu ciała.\nW cenie pakietu nie ma pierwszej konsultacji',
      image: 'images/service5.jpg',
    },
  ];
  const soloServices = soloServicesData.map((service) => (
    <div key={service.title} className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>
          {service.title} - {service.price}
        </Title>
        <Text fz="md" c="dimmed" className={classes.description}>
          {service.description}
        </Text>
      </div>
      <Image src={service.image} className={classes.image} visibleFrom="sm" />
    </div>
  ));
  const duoServices = duoServicesData.map((service) => (
    <div key={service.title} className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>
          {service.title} - {service.price}
        </Title>
        <Text fz="md" c="dimmed" className={classes.description}>
          {service.description}
        </Text>
      </div>
      <Image src={service.image} className={classes.image} visibleFrom="sm" />
    </div>
  ));
  const psychoServices = psychoServicesData.map((service) => (
    <div key={service.title} className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>
          {service.title} - {service.price}
        </Title>
        <Text fz="md" c="dimmed" className={classes.description}>
          {service.description}
        </Text>
      </div>
      <Image src={service.image} className={classes.image} visibleFrom="sm" />
    </div>
  ));
  const pakietServices = pakietServiceData.map((service) => (
    <div key={service.image} className={classes.wrapper}>
      <div className={classes.body}>
        {service.title}
        {service.price}
        <Text fz="md" c="dimmed" className={classes.description}>
          {service.description}
        </Text>
      </div>
      <Image src={service.image} className={classes.image} visibleFrom="sm" />
    </div>
  ));

  const servicesData = [
    { name: 'Oferta Indywidualna', list: soloServices },
    { name: 'Oferta dla par/dwóch osób', list: duoServices },
    { name: 'Psychodietetyka', list: psychoServices },
    { name: 'Pakiety', list: pakietServices },
  ];

  const items = servicesData.map((item) => (
    <Accordion.Item key={item.name} value={item.name} className={classes.imageTitle}>
      <Accordion.Control className={classes.buttonCollapse}>
        {item.name === 'Pakiety' ? (
          <div style={{ display: 'flex' }}>
            {item.name}
            <Image h={50} fit="contain" src={'images/procent.png'} />
          </div>
        ) : (
          item.name
        )}
      </Accordion.Control>
      <Accordion.Panel>{item.list}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <>
      <Container size={'xl'}>
        <Space h="lg" />
        <Accordion
          // defaultValue="Oferta Indywidualna"
          variant="separated"
        >
          {items}
        </Accordion>
      </Container>
    </>
  );
}
