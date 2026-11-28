import type React from 'react';
import Image from 'next/image';

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
    image: 'images/service1.webp',
    type: 'solo',
  },
  {
    name: 'Konsultacja online',
    price: '190',
    description: 'Przed konsultacją otrzymasz link do spotkania na platformie Skype (nie trzeba posiadać konta)',
    image: 'images/service8.webp',
    type: 'solo',
  },
  {
    name: 'Konsultacja dietetyczna kolejna wizyta (do 2 miesięcy)',
    price: '130',
    description:
      'Na każdej wizycie kontrolnej analizowane są wdrożone zmiany, postępy, a także pojawiające się trudności. Podsumowujemy zmiany w masie ciała, samopoczuciu oraz dolegliwościach zdrowotnych.',
    image: 'images/service2.webp',
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
    image: 'images/service6.webp',
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
    image: 'images/service7.webp',
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
    image: 'images/jedzenie/miska-warzyw-tofu.webp',
    type: 'solo',
  },
  {
    name: 'Pierwsza konsultacja dla dwóch osób',
    price: '280',
    description:
      'Wspólnie omawiamy stan zdrowia, nawyki żywieniowe oraz tryb życia pacjentów. Przeprowadzam szczegółowy wywiad medyczny i żywieniowy. Na podstawie analizy sposobu żywienia wskazuję błędy żywieniowe. Proponuję łatwe do zastosowania rozwiązania i zmiany. Tłumaczę w jaki sposób komponować posiłki. Wspólnie ustalamy wstępne założenia i cele diety.',
    image: 'images/jedzenie/salatka-grecka.webp',
    type: 'duo',
  },
  {
    name: 'Wizyta kontrolna dla dwóch osób/pary',
    price: '190',
    description:
      'Na każdej wizycie kontrolnej analizowane są wdrożone zmiany, postępy, a także pojawiające się trudności. Podsumowujemy zmiany w masie ciała, samopoczuciu oraz dolegliwościach zdrowotnych.',
    image: 'images/jedzenie/gnocchi-ze-szpinakiem.webp',
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
    image: 'images/jedzenie/salatka-z-grzankami.webp',
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
    image: 'images/service10.webp',
    type: 'psycho',
  },
  {
    name: 'Konsultacja psychodietetyczna (kolejna wizyta)',
    price: '170',
    description:
      'Na kolejnych konsultacjach omawiamy miniony okres, pojawiające się trudności. Pracujemy na przyczynami problemów z jedzeniem. Uczę Cię jak jeść świadomie i uważnie. Na każdej konsultacji wykonywana jest analiza składu i masy ciała.',
    image: 'images/jedzenie/babeczki-z-owocami.webp',
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
    image: 'images/jedzenie/makaron-azjatycki.webp',
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
    image: 'images/jedzenie/zupa-krem-z-chlebem.webp',
    type: 'pakiet',
  },
];

const Description = ({ content }: { content: string | React.ReactNode }) => {
  if (typeof content === 'string') return <p>{content}</p>;
  return <>{content}</>;
};

const Price = ({ service, size }: { service: Service; size: 'sm' | 'lg' }) => {
  if (service.type === 'pakiet') {
    const [oldPrice, newPrice] = service.price.split('/');
    return (
      <span className="whitespace-nowrap">
        <span className={`line-through text-[#6b7591] ${size === 'lg' ? 'text-lg' : ''}`}>
          {oldPrice}
          {size === 'lg' ? ' zł' : ''}
        </span>{' '}
        <strong className="font-semibold text-[var(--dh-teal-text)]">{newPrice} zł</strong>
      </span>
    );
  }
  return <strong className="whitespace-nowrap font-semibold text-[var(--dh-teal-text)]">{service.price} zł</strong>;
};

const sections = [
  { title: 'Oferta Indywidualna', type: 'solo' },
  { title: 'Oferta dla dwóch osób', type: 'duo' },
  { title: 'Psychodietetyka', type: 'psycho' },
  { title: 'Pakiety', type: 'pakiet' },
] as const;

type ServiceWithId = Service & { id: string };

const ServiceDetails = ({ service }: { service: ServiceWithId }) => (
  <article
    id={service.id}
    className="mt-8 flex scroll-mt-24 flex-col gap-6 border-t border-[var(--dh-ink)]/15 pt-8 md:mt-10 md:flex-row md:items-start md:gap-14 md:pt-10"
  >
    <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden rounded-2xl md:aspect-[4/3] md:w-[38%] md:max-w-[440px]">
      <Image
        src={`/${service.image}`}
        alt={service.name}
        fill
        sizes="(min-width: 768px) 440px, 100vw"
        className="object-cover"
      />
    </div>
    <div className="min-w-0 flex-1">
      <h3 className="text-2xl font-semibold leading-snug md:text-[1.625rem]">{service.name}</h3>
      <p className="mt-2.5 text-2xl">
        <Price service={service} size="lg" />
      </p>
      <div className="mt-4 max-w-[66ch] space-y-3 text-[1.0625rem] leading-relaxed text-[var(--dh-body)]">
        <Description content={service.description} />
        {service.description2 && <p>{service.description2}</p>}
      </div>
    </div>
  </article>
);

export default function UslugiList({ offers }: { offers: SupabaseOffer[] | null }) {
  const services: ServiceWithId[] = defaultServicesData.map((service, index) => ({
    ...service,
    ...(offers?.find((item) => item.name === service.name) || {}),
    id: `usluga-${index}`,
  }));

  const grouped = sections.map((section) => ({
    ...section,
    items: services.filter((s) => s.type === section.type),
  }));

  return (
    <>
      {/* Przegląd cen - wszystkie usługi w jednym miejscu, każda linkuje do opisu */}
      <section className="bg-[var(--dh-mist)]">
        <div className="mx-auto max-w-[1240px] px-4 pb-20 sm:px-6">
          <h2 className="font-display text-4xl leading-tight text-[var(--dh-indigo)] md:text-[2.75rem]">Cennik</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {grouped.map((section) => (
              <div key={section.type} className="rounded-2xl bg-white px-6 pb-3 pt-6">
                <h3 className="mb-2 text-lg font-bold text-[var(--dh-teal-text)]">{section.title}</h3>
                <ul>
                  {section.items.map((service) => (
                    <li key={service.id} className="border-t border-[var(--dh-ink)]/12">
                      <a
                        href={`#${service.id}`}
                        className="flex min-h-11 items-baseline justify-between gap-3 py-3 text-[0.95rem] leading-snug text-[var(--dh-ink)] hover:text-[var(--dh-indigo)]"
                      >
                        <span>{service.name}</span>
                        <Price service={service} size="sm" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pełne opisy usług */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-4 pb-28 pt-2 sm:px-6">
          {grouped.map((section) => (
            <div key={section.type}>
              <h2 className="font-display mt-14 text-4xl leading-tight md:mt-20 text-[var(--dh-indigo)] md:text-[2.5rem]">
                {section.title}
              </h2>
              {section.items.map((service) => (
                <ServiceDetails key={service.id} service={service} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
