'use client';
import { Text, Title, Image, Container, Accordion, Space, Divider } from '@mantine/core';
import classes from './page.module.css';
export default function Page() {
  const test = <strong>test</strong>;
  const soloServicesData = [
    {
      title: 'Konsultacja dietetyczna (pierwsza wizyta) -',
      price: '170 zł',
      description:
        'Pierwsze spotkanie trwa około 60 minut. Podczas wizyty uważnie słucham potrzeb pacjenta. Wspólnie omawiamy stan zdrowia, nawyki żywieniowe oraz tryb życia pacjenta. Przeprowadzam szczegółowy wywiad medyczny i żywieniowy. Na podstawie analizy sposobu żywienia wskazuję błędy żywieniowe. Proponuję łatwe do zastosowania rozwiązania i zmiany. Tłumaczę w jaki sposób komponować posiłki. Wspólnie ustalamy wstępne założenia i cele diety.',
      image: 'images/service1.jpg',
    },
    {
      title: 'Konsultacja online -',
      price: '170 zł',
      description:
        'Przed konsultacją otrzymasz link do spotkania na platformie Skype (nie trzeba posiadać konta)',
      image: 'images/service8.jpg',
    },
    {
      title: 'Konsultacja dietetyczna kolejna wizyta (do 2 miesięcy) -',
      price: '120 zł',
      description:
        'Na każdej wizycie kontrolnej analizowane są wdrożone zmiany, postępy, a także pojawiające się trudności. Podsumowujemy zmiany w masie ciała, samopoczuciu oraz dolegliwościach zdrowotnych.',
      image: 'images/service2.jpg',
    },
    {
      title: 'Jadłospis 7 dniowy - 150 zł\nJadłospis 14 dniowy - 220 zł',
      price: '',
      description:
        'Jadłospisy układam po szczegółowym wywiadzie dotyczącym dotychczasowego sposobu żywienia. Uwzględniam wszystkie dolegliwości, problemy zdrowotne, a także preferencje smakowe.\n\n',
      description2: 'Jadłospis otrzymasz drogą mailową w ciągu 7 dni roboczych od konsultacji.',
      image: 'images/service6.jpg',
    },
    {
      title:
        'Dieta eliminacyjna Jadłospis 7 dniowy - 180 zł\nDieta eliminacyjna Jadłospis 14 dniowy - 250 zł',
      price: '',
      description: 'W przypadku wielu eliminacji w diecie ',
      description2: '(np. faza eliminacyjna diety low FODMAP przy SIBO)',
      image: 'images/service7.jpg',
    },
    {
      title: 'Analiza składu ciała',
      price: '80 zł',
      description:
        'Urządzenie umożliwia pomiar wszystkich najważniejszych komponentów m.in.: tkanka tłuszczowa, masa mięśniowa, zawartość wody w organizmie.\n\nSkład ciała jest obliczany za pomocą Analizy Bioimpedancji Elektrycznej (BIA). Bezpieczne sygnały elektryczne o niskim natężeniu są przesyłane przez ciało za pomocą elektrod znajdujących się na platformie pomiarowej. Ułatwia to przesyłanie sygnału przez płyny znajdujące się w mięśniach i innych tkankach, ale napotyka opór w tkance tłuszczowej, ponieważ zawiera ona niewiele płynów. Ten opór jest nazywany impedancją. Odczyty są następne wprowadzone do medycznie zbadanych formuł matematycznych, aby obliczyć skład ciała.\n\n',
      disclaimer:
        'Przeciwskazania do badania metodą bioimpedancji: wszczepiony defibrylator lub rozrusznik serca, wszczepione inne metalowe elementy, epilepsja, ciąża.',
      image: 'images/service5.jpg',
    },
  ];
  const duoServicesData = [
    {
      title: 'Pierwsza konsultacja dla dwóch osób -',
      price: '250 zł',
      description:
        'Pierwsze spotkanie trwa około 90 minut. Wspólnie omawiamy stan zdrowia, nawyki żywieniowe oraz tryb życia pacjentów. Przeprowadzam szczegółowy wywiad medyczny i żywieniowy. Na podstawie analizy sposobu żywienia wskazuję błędy żywieniowe. Proponuję łatwe do zastosowania rozwiązania i zmiany. Tłumaczę w jaki sposób komponować posiłki. Wspólnie ustalamy wstępne założenia i cele diety.',
      image: 'images/service1.jpg',
    },

    {
      title: 'Wizyta kontrolna dla dwóch osób/pary -',
      price: '170 zł',
      description:
        'Na każdej wizycie kontrolnej analizowane są wdrożone zmiany, postępy, a także pojawiające się trudności. Podsumowujemy zmiany w masie ciała, samopoczuciu oraz dolegliwościach zdrowotnych.',
      image: 'images/service2.jpg',
    },
    {
      title:
        'Jadłospis 7 dniowy dla dwóch osób - 230zł \nJadłospis 14 dniowy dla dwóch osób - 320 zł',
      price: '',
      description:
        '- Potrawy w jadłospisach dla dwóch osób są identyczne. Różnią się gramatury posiłków ustalone na podstawie zapotrzebowania kalorycznego pacjentów.\n\n- W przypadku odmiennych preferencji żywieniowych i/lub jednostek chorobowych przygotowanie wspólnego jadłospisu jest niemożliwe.',
      image: 'images/service6.jpg',
    },
  ];
  const soloServices = soloServicesData.map((service) => (
    <>
      <div key={service.title} className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>
            {service.title} {service.price}
          </Title>
          <Text fz="md" c="dimmed" className={classes.description}>
            {service.description}
            {service.description2 ? (
              <Text inherit span fs="italic" c="dimmed">
                {service.description2}
              </Text>
            ) : null}
          </Text>
          {service.disclaimer ? (
            <Text inherit span fs="italic" c="dimmed" fw={500}>
              {service.disclaimer}
            </Text>
          ) : null}
        </div>
        <Image src={service.image} className={classes.image} visibleFrom="sm" />
      </div>
      <Divider my="sm" className={classes.divider} />
    </>
  ));
  const duoServices = duoServicesData.map((service) => (
    <>
        <div key={service.title} className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>
          {service.title} {service.price}
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
  const psychoServices = (
    <>
      <div key="psychoservice1" className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>
            Konsultacja psychodietetyczna (pierwsza wizyta) - 230zł
          </Title>
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
            odpowiednie dla Ciebie, jak komponować posiłki aby dłużej odczuwać sytość i nie mieć
            spadków energii. Zawiera indywidualne zalecenia i wskazówki oraz informacje o
            zamiennikach poszczególnych produktów.
            <br />
            Plan przygotowuję na podstawie wywiadu zdrowotno-żywieniowego. Nauczę Cię jak go
            modyfikować. Pokażę Ci, że nie ma produktów „zakazanych”, a najbardziej skuteczna dieta
            to ta, którą jesteśmy w stanie utrzymać.
          </Text>
        </div>
        <Image src="images/service10.jpg" className={classes.image} visibleFrom="sm" />
      </div>
      <Divider my="sm" className={classes.divider} />
      <div key="psychoservice2" className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>
            Konsultacja psychodietetyczna (kolejna wizyta) - 160 zł
          </Title>
          <Text fz="md" c="dimmed" className={classes.description}>
            Na kolejnych konsultacjach omawiamy miniony okres, pojawiające się trudności. Pracujemy
            na przyczynami problemów z jedzeniem. Uczę Cię jak jeść świadomie i uważnie. Na każdej
            konsultacji wykonywana jest analiza składu i masy ciała.
          </Text>
        </div>
        <Image src="images/service11.jpg" className={classes.image} visibleFrom="sm" />
      </div>
    </>
  );
  const pakietServices = (
    <>
      <div key="pakiet1" className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>
            Pakiet Standard trzech spotkań + jadłospis 14 dniowy -{' '}
            <Text span td="line-through" inherit>
              630zł
            </Text>{' '}
            <Text inherit span c="red">
              500 zł{' '}
            </Text>
          </Title>

          <Text fz="md" c="dimmed" className={classes.description}>
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
          </Text>
        </div>
        <Image src="images/service4.jpg" className={classes.image} visibleFrom="sm" />
      </div>
      <Divider my="sm" className={classes.divider} />
      <div key="pakiet2" className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>
            Pakiet dietetyczny{' '}
            <Text inherit span td="underline">
              kolejny
            </Text>{' '}
            <Text span td="line-through" inherit>
              460 zł
            </Text>{' '}
            <Text inherit span c="red">
              360 zł{' '}
            </Text>
          </Title>

          <Text fz="md" c="dimmed" className={classes.description}>
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
          </Text>
        </div>
        <Image src="images/service9.jpg" className={classes.image} visibleFrom="sm" />
      </div>
    </>
  );

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
