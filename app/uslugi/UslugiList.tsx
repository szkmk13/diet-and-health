'use client';

import type React from 'react';
import Image from 'next/image';
import { BadgePercent } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

type ServiceType = 'solo' | 'duo' | 'psycho' | 'pakiet';

interface Service {
  name: string;
  price: string;
  description: string | React.ReactNode;
  description2?: string;
  image: string;
  type: ServiceType;
}

interface SupabaseOffer {
  name: string;
  price?: string;
  description?: string;
  image?: string;
}

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
    description: 'Przed konsultacją otrzymasz link do spotkania na platformie Skype (nie trzeba posiadać konta)',
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
      <>
        Jadłospisy układam po szczegółowym wywiadzie dotyczącym dotychczasowego sposobu żywienia. Uwzględniam wszystkie
        dolegliwości, problemy zdrowotne, a także preferencje smakowe.
        <br />
        <br />
        <span className="italic">
          Jadłospis otrzymasz drogą mailową w ciągu 7 dni roboczych od konsultacji.
        </span>
      </>
    ),
    image: 'images/service6.jpg',
    type: 'solo',
  },
  {
    name: 'Dieta eliminacyjna Jadłospis 7/14 dniowy',
    price: '200/280',
    description: (
      <>
        W przypadku wielu eliminacji w diecie{' '}
        <span className="italic">(np. faza eliminacyjna diety low FODMAP przy SIBO)</span>
      </>
    ),
    image: 'images/service7.jpg',
    type: 'solo',
  },
  {
    name: 'Analiza składu ciała',
    price: '90',
    description: (
      <>
        Urządzenie umożliwia pomiar wszystkich najważniejszych komponentów m.in.: tkanka tłuszczowa, masa mięśniowa,
        zawartość wody w organizmie.
        <br />
        <br />
        Skład ciała jest obliczany za pomocą Analizy Bioimpedancji Elektrycznej (BIA). Bezpieczne sygnały elektryczne o
        niskim natężeniu są przesyłane przez ciało za pomocą elektrod znajdujących się na platformie pomiarowej.
        Ułatwia to przesyłanie sygnału przez płyny znajdujące się w mięśniach i innych tkankach, ale napotyka opór w
        tkance tłuszczowej, ponieważ zawiera ona niewiele płynów. Ten opór jest nazywany impedancją.
        <br />
        <br />
        <span className="italic font-medium">
          Przeciwwskazania do badania metodą bioimpedancji: wszczepiony defibrylator lub rozrusznik serca, wszczepione
          inne metalowe elementy, epilepsja, ciąża.
        </span>
      </>
    ),
    image: 'images/service5.jpg',
    type: 'solo',
  },
  {
    name: 'Pierwsza konsultacja dla dwóch osób',
    price: '280',
    description:
      'Wspólnie omawiamy stan zdrowia, nawyki żywieniowe oraz tryb życia pacjentów. Przeprowadzam szczegółowy wywiad medyczny i żywieniowy. Na podstawie analizy sposobu żywienia wskazuję błędy żywieniowe. Proponuję łatwe do zastosowania rozwiązania i zmiany. Tłumaczę w jaki sposób komponować posiłki. Wspólnie ustalamy wstępne założenia i cele diety.',
    image: 'images/service12.jpg',
    type: 'duo',
  },
  {
    name: 'Wizyta kontrolna dla dwóch osób/pary',
    price: '190',
    description:
      'Na każdej wizycie kontrolnej analizowane są wdrożone zmiany, postępy, a także pojawiające się trudności. Podsumowujemy zmiany w masie ciała, samopoczuciu oraz dolegliwościach zdrowotnych.',
    image: 'images/service3.jpg',
    type: 'duo',
  },
  {
    name: 'Jadłospis 7/14 dniowy dla dwóch osób',
    price: '250/350',
    description: (
      <>
        Potrawy w jadłospisach dla dwóch osób są identyczne - różnią się gramatury posiłków ustalone na podstawie
        zapotrzebowania kalorycznego pacjentów.
        <br />
        <br />
        W przypadku odmiennych preferencji żywieniowych i/lub jednostek chorobowych przygotowanie wspólnego jadłospisu
        jest niemożliwe.
      </>
    ),
    image: 'images/milkshake.jpg',
    type: 'duo',
  },
  {
    name: 'Konsultacja psychodietetyczna (pierwsza wizyta)',
    price: '250',
    description: (
      <>
        Podczas pierwszego spotkania przeprowadzam wywiad medyczno-żywieniowy. Wykonuję analizę składu i masy ciała,
        rozmawiamy o zdrowiu, o tym jak wygląda Twój plan dnia, analizujemy dotychczasowe nawyki żywieniowe, szukamy
        przyczyny problemów z jedzeniem. Wspólnie ustalamy plan działania.
        <br />
        <br />
        Zapraszam jeśli:
        <br />- chcesz zmienić swoje nawyki żywieniowe
        <br />- mimo znajomości zasad prawidłowego odżywiania nie potrafisz sobie poradzić z nadmierną masą ciała
        <br />- masz za sobą wiele prób redukcji masy ciała, które nie przyniosły oczekiwanego efektu
        <br />- masz problem z utratą kontroli nad jedzeniem
        <br />
        <br />
        Istnieje możliwość dokupienia <span className="font-semibold">planu żywieniowego</span>, który nauczy Cię jak
        komponować posiłki, aby dłużej odczuwać sytość i nie mieć spadków energii.
      </>
    ),
    image: 'images/service10.jpg',
    type: 'psycho',
  },
  {
    name: 'Konsultacja psychodietetyczna (kolejna wizyta)',
    price: '170',
    description:
      'Na kolejnych konsultacjach omawiamy miniony okres, pojawiające się trudności. Pracujemy na przyczynami problemów z jedzeniem. Uczę Cię jak jeść świadomie i uważnie. Na każdej konsultacji wykonywana jest analiza składu i masy ciała.',
    image: 'images/service11.jpg',
    type: 'psycho',
  },
  {
    name: 'Pakiet standard trzech spotkań + jadłospis 14 dniowy',
    price: '640/550',
    description: (
      <>
        W cenie:
        <br />- Pierwsza wizyta
        <br />- Dwie wizyty kontrolne
        <br />- Jadłospis 14-dniowy
        <br />- Analiza składu ciała przy każdej z wizyt
        <br />
        <br />
        <span className="italic">
          Uwaga: w przypadku niepotwierdzenia lub nieodwołania wizyty kontrolnej we wcześniejszym terminie - wizyta
          przepada. Wizyty kontrolne muszą odbyć się w ciągu 2 miesięcy od pierwszej konsultacji.
        </span>
      </>
    ),
    image: 'images/service4.jpg',
    type: 'pakiet',
  },
  {
    name: 'Pakiet dietetyczny kolejny',
    price: '510/400',
    description: (
      <>
        W cenie:
        <br />- Dwie wizyty kontrolne
        <br />- Jadłospis 14-dniowy
        <br />- Analiza składu ciała
        <br />
        <br />
        <span className="italic">W cenie pakietu nie ma pierwszej konsultacji.</span>
      </>
    ),
    image: 'images/service9.jpg',
    type: 'pakiet',
  },
];

const Description = ({ content }: { content: string | React.ReactNode }) => {
  if (typeof content === 'string') return <p>{content}</p>;
  return <>{content}</>;
};

const ServiceItem = ({ service }: { service: Service }) => {
  const isPakiet = service.type === 'pakiet';
  const [oldPrice, newPrice] = isPakiet ? service.price.split('/') : [service.price, null];

  return (
    <div className="px-6 py-6 border-b last:border-b-0" style={{ borderColor: 'var(--trainer-secondary)' }}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
            <h3 className="text-base font-medium" style={{ color: 'var(--trainer-primary)' }}>
              {service.name}
            </h3>
            {isPakiet ? (
              <div className="flex items-center gap-2 text-sm">
                <span className="line-through" style={{ color: 'var(--trainer-text-light)' }}>
                  {oldPrice} zł
                </span>
                <span className="font-semibold" style={{ color: 'var(--trainer-accent)' }}>
                  {newPrice} zł
                </span>
              </div>
            ) : (
              <span className="text-sm font-semibold" style={{ color: 'var(--trainer-accent)' }}>
                {service.price} zł
              </span>
            )}
          </div>
          <div className="text-sm leading-relaxed" style={{ color: 'var(--trainer-text-light)' }}>
            <Description content={service.description} />
            {service.description2 && <p className="mt-4">{service.description2}</p>}
          </div>
        </div>
        <div className="hidden sm:block sm:w-40 lg:w-52 flex-shrink-0">
          <Image
            src={`/${service.image}`}
            alt={service.name}
            width={208}
            height={156}
            className="w-full rounded-xl object-cover"
            style={{ height: '156px' }}
          />
        </div>
      </div>
    </div>
  );
};

const sections = [
  { title: 'Oferta Indywidualna', type: 'solo' },
  { title: 'Oferta dla dwóch osób', type: 'duo' },
  { title: 'Psychodietetyka', type: 'psycho' },
  { title: 'Pakiety', type: 'pakiet' },
] as const;

export default function UslugiList({ offers }: { offers: SupabaseOffer[] | null }) {
  const services = defaultServicesData.map((service) => ({
    ...service,
    ...(offers?.find((item) => item.name === service.name) || {}),
  }));

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6" style={{ backgroundColor: 'var(--trainer-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-8 md:mb-12" style={{ color: 'var(--trainer-primary)' }}>
          Cennik
        </h2>

        <Tabs defaultValue={sections[0].title}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-transparent p-0 h-auto w-full mb-8">
            {sections.map((section) => (
              <TabsTrigger
                key={section.title}
                value={section.title}
                className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-sm font-medium bg-white shadow-sm border-2 border-transparent h-auto w-full transition-all duration-200 data-[state=active]:!bg-[var(--trainer-accent)] data-[state=active]:!text-white data-[state=active]:!border-[var(--trainer-accent)] data-[state=active]:shadow-md"
                style={{ color: 'var(--trainer-primary)' }}
              >
                {section.title}
                {section.title === 'Pakiety' && <BadgePercent size={16} />}
              </TabsTrigger>
            ))}
          </TabsList>

          {sections.map((section) => (
            <TabsContent key={section.title} value={section.title}>
              <div className="rounded-xl bg-white shadow-md overflow-hidden">
                {services
                  .filter((s) => s.type === section.type)
                  .map((service, index) => (
                    <ServiceItem key={`${service.type}-${index}`} service={service} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
