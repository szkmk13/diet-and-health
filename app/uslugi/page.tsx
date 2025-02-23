'use client';
import { Text, Title, Image, Container, Accordion, Space, Divider } from '@mantine/core';
import classes from './page.module.css';
import supabase from '@/pages/api/supabase';

// Definicje typów
type ServiceType = 'solo' | 'duo' | 'psycho' | 'pakiet';

interface Service {
  name: string;
  price: string;
  description: string | React.ReactNode; // Pozwalamy na string lub React.ReactNode
  description2?: string;
  image: string;
  type: ServiceType;
}

// Komponent dla wyświetlania opisu
const Description = ({ content }: { content: string | React.ReactNode }) => {
  if (typeof content === 'string') {
    return (
      <Text fz="md" c="dimmed" className={classes.description}>
        {content}
      </Text>
    );
  }
  return <>{content}</>;
};

// Komponent dla pojedynczej usługi
const ServiceItem = ({ service }: { service: Service }) => {
  const isPakiet = service.type === 'pakiet';
  const [oldPrice, newPrice] = isPakiet ? service.price.split('/') : [service.price, null];

  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>
          {service.name}
          {isPakiet ? (
            <>
              {' '}
              <Text span td="line-through" inherit>
                {oldPrice} zł
              </Text>{' '}
              <Text inherit span c="red">
                {newPrice} zł
              </Text>
            </>
          ) : (
            ` ${service.price} zł`
          )}
        </Title>
        <Description content={service.description} />
        {service.description2 && (
          <Text fz="md" c="dimmed" className={classes.description}>
            {service.description2}
          </Text>
        )}
      </div>
      <Image src={service.image} className={classes.image} visibleFrom="sm" />
      <Divider my="sm" className={classes.divider} />
    </div>
  );
};

// Komponent dla sekcji usług
const ServiceSection = ({ title, services }: { title: string; services: Service[] }) => (
  <Accordion.Item value={title} className={classes.imageTitle}>
    <Accordion.Control className={classes.buttonCollapse}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Text className={classes.title2} fw={700}>
          {title}
        </Text>
        {title === 'Pakiety' && <Image h={50} fit="contain" src={'images/procent.png'} />}
      </div>
    </Accordion.Control>
    <Accordion.Panel>
      {services.map((service, index) => (
        <ServiceItem key={`${service.type}-${index}`} service={service} />
      ))}
    </Accordion.Panel>
  </Accordion.Item>
);

// Główny komponent strony
export default async function Page() {
  // Pobranie danych z Supabase
  const { data: supabaseData } = await supabase.from('offers').select();

  // Przygotowanie danych usług
  const servicesData = defaultServicesData.map((service) => ({
    ...service,
    ...(supabaseData?.find((item) => item.name === service.name) || {}),
  }));

  // Konfiguracja sekcji
  const sections = [
    { title: 'Oferta Indywidualna', type: 'solo' },
    { title: 'Oferta dla dwóch osób', type: 'duo' },
    { title: 'Psychodietetyka', type: 'psycho' },
    { title: 'Pakiety', type: 'pakiet' },
  ] as const;

  return (
    <Container size="xl">
      <Space h="lg" />
      <Accordion variant="separated">
        {sections.map((section) => (
          <ServiceSection
            key={section.title}
            title={section.title}
            services={servicesData.filter((service) => service.type === section.type)}
          />
        ))}
      </Accordion>
    </Container>
  );
}

// Dane domyślne przeniesione do osobnego pliku
const defaultServicesData: Service[] = [
  {
    name: 'Konsultacja dietetyczna (pierwsza wizyta)',
    price: '190',
    description:
      'Podczas wizyty uważnie słucham potrzeb pacjenta. Wspólnie omawiamy stan zdrowia, nawyki żywieniowe oraz tryb życia pacjenta. Przeprowadzam szczegółowy wywiad medyczny i żywieniowy. Na podstawie analizy sposobu żywienia wskazuję błędy żywieniowe. Proponuję łatwe do zastosowania rozwiązania i zmiany. Tłumaczę w jaki sposób komponować posiłki. Wspólnie ustalamy wstępne założenia i cele diety.',
    image: 'images/service1.jpg',
    type: 'solo',
  },
  {
    name: 'Konsultacja online',
    price: '190',
    description:
      'Przed konsultacją otrzymasz link do spotkania na platformie Skype (nie trzeba posiadać konta)',
    image: 'images/service8.jpg',
    type: 'solo',
  },
  {
    name: 'Konsultacja dietetyczna kolejna wizyta (do 2 miesięcy)',
    price: '130',
    description:
      'Na każdej wizycie kontrolnej analizowane są wdrożone zmiany, postępy, a także pojawiające się trudności. Podsumowujemy zmiany w masie ciała, samopoczuciu oraz dolegliwościach zdrowotnych.',
    image: 'images/service2.jpg',
    type: 'solo',
  },
  {
    name: 'Jadłospis 7/14 dniowy',
    price: '170/250',
    description: (
      <Text fz="md" c="dimmed" className={classes.description}>
        Jadłospisy układam po szczegółowym wywiadzie dotyczącym dotychczasowego sposobu żywienia.
        Uwzględniam wszystkie dolegliwości, problemy zdrowotne, a także preferencje smakowe.
        <br />
        <br />
        <Text inherit span fs="italic" c="dimmed">
          Jadłospis otrzymasz drogą mailową w ciągu 7 dni roboczych od konsultacji.
        </Text>
      </Text>
    ),
    image: 'images/service6.jpg',
    type: 'solo',
  },
  {
    name: 'Dieta eliminacyjna Jadłospis 7/14 dniowy',
    price: '200/280',
    description: (
      <>
        {' '}
        <Text fz="md" c="dimmed" className={classes.description}>
          W przypadku wielu eliminacji w diecie{' '}
          <Text inherit span fs="italic" c="dimmed">
            (np. faza eliminacyjna diety low FODMAP przy SIBO)
          </Text>{' '}
        </Text>
      </>
    ),

    image: 'images/service7.jpg',
    type: 'solo',
  },
  {
    name: 'Analiza składu ciała',
    price: '90',
    description: (
      <Text fz="md" c="dimmed" className={classes.description}>
        Urządzenie umożliwia pomiar wszystkich najważniejszych komponentów m.in.: tkanka tłuszczowa,
        masa mięśniowa, zawartość wody w organizmie.
        <br />
        <br />
        Skład ciała jest obliczany za pomocą Analizy Bioimpedancji Elektrycznej (BIA). Bezpieczne
        sygnały elektryczne o niskim natężeniu są przesyłane przez ciało za pomocą elektrod
        znajdujących się na platformie pomiarowej. Ułatwia to przesyłanie sygnału przez płyny
        znajdujące się w mięśniach i innych tkankach, ale napotyka opór w tkance tłuszczowej,
        ponieważ zawiera ona niewiele płynów. Ten opór jest nazywany impedancją. Odczyty są następne
        wprowadzone do medycznie zbadanych formuł matematycznych, aby obliczyć skład ciała.
        <br />
        <br />
        <Text inherit span fs="italic" c="dimmed" fw={500}>
          Przeciwskazania do badania metodą bioimpedancji: wszczepiony defibrylator lub rozrusznik
          serca, wszczepione inne metalowe elementy, epilepsja, ciąża.
        </Text>
      </Text>
    ),
    image: 'images/service5.jpg',
    type: 'solo',
  },
  {
    name: 'Pierwsza konsultacja dla dwóch osób',
    price: '280 zł',
    description:
      'Wspólnie omawiamy stan zdrowia, nawyki żywieniowe oraz tryb życia pacjentów. Przeprowadzam szczegółowy wywiad medyczny i żywieniowy. Na podstawie analizy sposobu żywienia wskazuję błędy żywieniowe. Proponuję łatwe do zastosowania rozwiązania i zmiany. Tłumaczę w jaki sposób komponować posiłki. Wspólnie ustalamy wstępne założenia i cele diety.',
    image: 'images/service1.jpg',
    type: 'duo',
  },
  {
    name: 'Wizyta kontrolna dla dwóch osób/pary',
    price: '190 zł',
    description:
      'Na każdej wizycie kontrolnej analizowane są wdrożone zmiany, postępy, a także pojawiające się trudności. Podsumowujemy zmiany w masie ciała, samopoczuciu oraz dolegliwościach zdrowotnych.',
    image: 'images/service2.jpg',
    type: 'duo',
  },
  {
    name: 'Jadłospis 7/14 dniowy dla dwóch osób',
    price: '250/350',
    description:
      '- Potrawy w jadłospisach dla dwóch osób są identyczne. Różnią się gramatury posiłków ustalone na podstawie zapotrzebowania kalorycznego pacjentów.\n\n- W przypadku odmiennych preferencji żywieniowych i/lub jednostek chorobowych przygotowanie wspólnego jadłospisu jest niemożliwe.',
    image: 'images/service6.jpg',
    type: 'duo',
  },
  {
    name: 'Konsultacja psychodietetyczna (pierwsza wizyta)',
    price: '250',
    description: (
      <Text fz="md" c="dimmed" className={classes.description}>
        Podczas pierwszego spotkania przeprowadzam wywiad medyczno-żywieniowy. Wykonuję analizę
        składu i masy ciała, rozmawiamy o zdrowiu, o tym jak wygląda Twój plan dnia, analizujemy
        dotychczasowe nawyki żywieniowe, szukamy przyczyny problemów z jedzeniem. Wspólnie ustalamy
        plan działania.
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
        , który może pomóc Ci w zmianie nawyków żywieniowych. Nauczy Cię jakie porcje są odpowiednie
        dla Ciebie, jak komponować posiłki, aby dłużej odczuwać sytość i nie mieć spadków energii.
        Zawiera indywidualne zalecenia i wskazówki oraz informacje o zamiennikach poszczególnych
        produktów.
        <br />
        Plan przygotowuję na podstawie wywiadu zdrowotno-żywieniowego. Nauczę Cię jak go
        modyfikować. Pokażę Ci, że nie ma produktów „zakazanych”, a najbardziej skuteczna dieta to
        ta, którą jesteśmy w stanie utrzymać.
      </Text>
    ),
    image: 'images/service10.jpg',
    type: 'psycho',
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
    type: 'psycho',
  },
  {
    name: 'Pakiet standard trzech spotkań + jadłospis 14 dniowy',
    price: '640/550', // Cena jako string
    description: (
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
          <br />- W przypadku nie pojawienia się na wizycie kontrolnej, wizyta ta przepada (Dotyczy
          wizyt niepotwierdzonych przez pacjenta i/lub wizyt nieodwołanych we wcześniejszym
          terminie).
          <br />- Wizyty kontrolne muszą się odbyć w ciągu 2 miesięcy od pierwszej konsultacji.
        </Text>
      </Text>
    ),
    image: 'images/service4.jpg',
    type: 'pakiet',
  },
  {
    name: 'Pakiet dietetyczny kolejny',
    price: '510/400', // Cena jako string
    description: (
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
    ),
    image: 'images/service9.jpg',
    type: 'pakiet',
  },
];
