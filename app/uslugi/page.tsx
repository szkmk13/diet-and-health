'use client';

import type React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Loader2 } from 'lucide-react';
import { BadgePercent } from 'lucide-react';

// Type definitions
type ServiceType = 'solo' | 'duo' | 'psycho' | 'pakiet';

interface Service {
  name: string;
  price: string;
  description: string | React.ReactNode;
  description2?: string;
  image: string;
  type: ServiceType;
}

// Component for displaying description
const Description = ({ content }: { content: string | React.ReactNode }) => {
  if (typeof content === 'string') {
    return <p className="text-base text-gray-600 dark:text-gray-400">{content}</p>;
  }
  return <>{content}</>;
};

// Component for individual service
const ServiceItem = ({ service }: { service: Service }) => {
  const isPakiet = service.type === 'pakiet';
  const [oldPrice, newPrice] = isPakiet ? service.price.split('/') : [service.price, null];

  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="flex-1">
          <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
            {service.name}
            {isPakiet ? (
              <>
                {' '}
                <span className="line-through">{oldPrice} zł</span>{' '}
                <span className="text-red-600 dark:text-red-400">{newPrice} zł</span>
              </>
            ) : (
              ` ${service.price} zł`
            )}
          </h3>

          {/* Description */}
          <Description content={service.description} />

          {/* Additional description if exists */}
          {service.description2 && (
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">{service.description2}</p>
          )}
        </div>

        {/* Image - visible from sm breakpoint */}
        <div className="hidden sm:block sm:w-48 lg:w-64">
          <Image
            src={`/${service.image}`}
            alt={service.name}
            width={256}
            height={192}
            className="h-48 w-full rounded-lg object-cover"
            priority
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-6 border-gray-200 dark:border-gray-700" />
    </div>
  );
};

// Component for service sections
const ServiceSection = ({ title, services }: { title: string; services: Service[] }) => (
  <AccordionItem
    value={title}
    className="border last:border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden "
  >
    <AccordionTrigger className="px-6 py-8 md:py-12 text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
      <div className="flex items-center gap-4">
        <h1 className=" text-gray-800 dark:text-gray-100 font-bold text-2xl">{title}</h1>
        {title === 'Pakiety' && <BadgePercent size={24} color="#5cbdc0" />}
      </div>
    </AccordionTrigger>
    <AccordionContent className="px-6 pb-6 pt-2">
      {services.map((service, index) => (
        <ServiceItem key={`${service.type}-${index}`} service={service} />
      ))}
    </AccordionContent>
  </AccordionItem>
);

// Main page component
export default function Page() {
  const [servicesData, setServicesData] = useState<Service[]>(defaultServicesData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/offers');
        if (!res.ok) {
          console.log('Error fetching offers from API:', res.statusText);
          setServicesData(defaultServicesData);
          return;
        }

        const data = await res.json();

        // Merge default services with fetched data
        const updatedServices = defaultServicesData.map((service) => ({
          ...service,
          ...(data?.find((item: any) => item.name === service.name) || {}),
        }));

        setServicesData(updatedServices);
        console.log(updatedServices);
      } catch (error) {
        console.error('Error fetching services:', error);
        setServicesData(defaultServicesData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Section configuration
  const sections = [
    { title: 'Oferta Indywidualna', type: 'solo' },
    { title: 'Oferta dla dwóch osób', type: 'duo' },
    { title: 'Psychodietetyka', type: 'psycho' },
    { title: 'Pakiety', type: 'pakiet' },
  ] as const;

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-4 sm:mb-8" />
      <Accordion type="multiple" className="sm:space-y-8 space-y-4">
        {sections.map((section) => (
          <ServiceSection
            key={section.title}
            title={section.title}
            services={servicesData.filter((service) => service.type === section.type)}
          />
        ))}
      </Accordion>
    </div>
  );
}

// Default services data
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
      <div className="text-base text-gray-600 dark:text-gray-400">
        Jadłospisy układam po szczegółowym wywiadzie dotyczącym dotychczasowego sposobu żywienia. Uwzględniam wszystkie
        dolegliwości, problemy zdrowotne, a także preferencje smakowe.
        <br />
        <br />
        <span className="italic text-gray-500 dark:text-gray-500">
          Jadłospis otrzymasz drogą mailową w ciągu 7 dni roboczych od konsultacji.
        </span>
      </div>
    ),
    image: 'images/service6.jpg',
    type: 'solo',
  },
  {
    name: 'Dieta eliminacyjna Jadłospis 7/14 dniowy',
    price: '200/280',
    description: (
      <div className="text-base text-gray-600 dark:text-gray-400">
        W przypadku wielu eliminacji w diecie{' '}
        <span className="italic text-gray-500 dark:text-gray-500">
          (np. faza eliminacyjna diety low FODMAP przy SIBO)
        </span>
      </div>
    ),
    image: 'images/service7.jpg',
    type: 'solo',
  },
  {
    name: 'Analiza składu ciała',
    price: '90',
    description: (
      <div className="text-base text-gray-600 dark:text-gray-400">
        Urządzenie umożliwia pomiar wszystkich najważniejszych komponentów m.in.: tkanka tłuszczowa, masa mięśniowa,
        zawartość wody w organizmie.
        <br />
        <br />
        Skład ciała jest obliczany za pomocą Analizy Bioimpedancji Elektrycznej (BIA). Bezpieczne sygnały elektryczne o
        niskim natężeniu są przesyłane przez ciało za pomocą elektrod znajdujących się na platformie pomiarowej. Ułatwia
        to przesyłanie sygnału przez płyny znajdujące się w mięśniach i innych tkankach, ale napotyka opór w tkance
        tłuszczowej, ponieważ zawiera ona niewiele płynów. Ten opór jest nazywany impedancją. Odczyty są następne
        wprowadzone do medycznie zbadanych formuł matematycznych, aby obliczyć skład ciała.
        <br />
        <br />
        <span className="font-medium italic text-gray-500 dark:text-gray-500">
          Przeciwskazania do badania metodą bioimpedancji: wszczepiony defibrylator lub rozrusznik serca, wszczepione
          inne metalowe elementy, epilepsja, ciąża.
        </span>
      </div>
    ),
    image: 'images/service5.jpg',
    type: 'solo',
  },
  {
    name: 'Pierwsza konsultacja dla dwóch osób',
    price: '280',
    description:
      'Wspólnie omawiamy stan zdrowia, nawyki żywieniowe oraz tryb życia pacjentów. Przeprowadzam szczegółowy wywiad medyczny i żywieniowy. Na podstawie analizy sposobu żywienia wskazuję błędy żywieniowe. Proponuję łatwe do zastosowania rozwiązania i zmiany. Tłumaczę w jaki sposób komponować posiłki. Wspólnie ustalamy wstępne założenia i cele diety.',
    image: 'images/service1.jpg',
    type: 'duo',
  },
  {
    name: 'Wizyta kontrolna dla dwóch osób/pary',
    price: '190',
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
      <div className="text-base text-gray-600 dark:text-gray-400">
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
        Istnieje możliwość dokupienia <span className="font-bold">planu żywieniowego</span>, który może pomóc Ci w
        zmianie nawyków żywieniowych. Nauczy Cię jakie porcje są odpowiednie dla Ciebie, jak komponować posiłki, aby
        dłużej odczuwać sytość i nie mieć spadków energii. Zawiera indywidualne zalecenia i wskazówki oraz informacje o
        zamiennikach poszczególnych produktów.
        <br />
        Plan przygotowuję na podstawie wywiadu zdrowotno-żywieniowego. Nauczę Cię jak go modyfikować. Pokażę Ci, że nie
        ma produktów „zakazanych", a najbardziej skuteczna dieta to ta, którą jesteśmy w stanie utrzymać.
      </div>
    ),
    image: 'images/service10.jpg',
    type: 'psycho',
  },
  {
    name: 'Konsultacja psychodietetyczna (kolejna wizyta)',
    price: '170',
    description: (
      <div className="text-base text-gray-600 dark:text-gray-400">
        Na kolejnych konsultacjach omawiamy miniony okres, pojawiające się trudności. Pracujemy na przyczynami problemów
        z jedzeniem. Uczę Cię jak jeść świadomie i uważnie. Na każdej konsultacji wykonywana jest analiza składu i masy
        ciała.
      </div>
    ),
    image: 'images/service11.jpg',
    type: 'psycho',
  },
  {
    name: 'Pakiet standard trzech spotkań + jadłospis 14 dniowy',
    price: '640/550',
    description: (
      <div className="text-base text-gray-600 dark:text-gray-400">
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
        <span className="italic">
          Uwaga!
          <br />- W przypadku nie pojawienia się na wizycie kontrolnej, wizyta ta przepada (Dotyczy wizyt
          niepotwierdzonych przez pacjenta i/lub wizyt nieodwołanych we wcześniejszym terminie).
          <br />- Wizyty kontrolne muszą się odbyć w ciągu 2 miesięcy od pierwszej konsultacji.
        </span>
      </div>
    ),
    image: 'images/service4.jpg',
    type: 'pakiet',
  },
  {
    name: 'Pakiet dietetyczny kolejny',
    price: '510/400',
    description: (
      <div className="text-base text-gray-600 dark:text-gray-400">
        W cenie:
        <br />
        Dwie wizyty kontrolne
        <br />
        Jadłospis 14dniowy
        <br />
        Analiza składu ciała
        <br />
        <br />
        <span className="italic">
          Uwaga!
          <br />W cenie pakietu nie ma pierwszej konsultacji
        </span>
      </div>
    ),
    image: 'images/service9.jpg',
    type: 'pakiet',
  },
];
