import Image from 'next/image';
import { Dumbbell, Calendar, Trophy } from 'lucide-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import { TrainingWeek } from '@/components/TrainingWeek';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  reverse?: boolean;
}

function ServiceCard({ icon, title, description, reverse = false }: ServiceCardProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div
        className={`p-6 md:p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-2 border-transparent hover:border-[var(--trainer-accent)]${reverse ? ' md:order-last' : ''}`}
      >
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
            style={{ backgroundColor: 'var(--trainer-accent)' }}
          >
            {icon}
          </div>
          <h3
            className="text-xl md:text-2xl group-hover:text-[var(--trainer-accent-strong)] transition-colors duration-300"
            style={{ color: 'var(--trainer-primary)' }}
          >
            {title}
          </h3>
        </div>
      </div>
      <p
        className={`text-base md:text-lg leading-relaxed${reverse ? ' md:order-first' : ''}`}
        style={{ color: 'var(--trainer-text-light)' }}
      >
        {description}
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <div>
                <h1>
                  <span className="block text-3xl md:text-5xl mb-4" style={{ color: 'var(--trainer-primary)' }}>
                    Krzysiek
                  </span>{' '}
                  <span aria-hidden="true" className="block h-1 w-20 mb-6" style={{ backgroundColor: 'var(--trainer-accent)' }} />{' '}
                  <span className="block text-lg md:text-xl mb-4" style={{ color: 'var(--trainer-text)' }}>
                    Certyfikowany Trener HYROX · CrossFit · Trener Personalny z Humorem
                  </span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--trainer-text-light)' }}>
                  Wierzę, że trening to nie tylko ciężka praca, ale też dobra zabawa!
                  Pomogę Ci osiągnąć cele treningowe z uśmiechem na twarzy.
                  Bez nudy, bez wymówek - tylko efekty i dobra energia! 💪
                  Specjalizuję się w przygotowaniu do zawodów HYROX, a na co dzień łączę
                  trening siłowy z elementami CrossFit.
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/k_skibicki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105"
                  style={{ backgroundColor: 'var(--trainer-accent)', color: 'var(--trainer-primary)' }}
                >
                  <IconBrandInstagram size={20} />
                  <span>Śledź mnie na Instagramie</span>
                </a>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4 / 3' }}>
                <Image
                  src="/images/krzychu_solo.webp"
                  alt="Krzysztof Skibicki - certyfikowany trener HYROX i trener personalny"
                  fill
                  preload
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: '50% 40%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 px-6" style={{ backgroundColor: 'var(--trainer-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-8 md:mb-12" style={{ color: 'var(--trainer-primary)' }}>
            Moja Oferta
          </h2>
          <div className="space-y-16">
            <ServiceCard
              icon={<Trophy className="w-6 h-6 md:w-8 md:h-8" color="#ffffff" />}
              title="Przygotowanie do HYROX"
              description="Jako certyfikowany trener HYROX przygotuję Cię do startu - od pierwszych zawodów po walkę o lepszy czas. Bieg, SkiErg, sled push i pull, burpee broad jumps, wall balls - pracujemy nad każdą stacją, wytrzymałością i strategią na dzień startu."
            />
            <ServiceCard
              icon={<Dumbbell className="w-6 h-6 md:w-8 md:h-8" color="#ffffff" />}
              title="Trening Personalny i CrossFit"
              description="Indywidualne sesje treningowe dostosowane do Twoich celów i możliwości, z elementami CrossFit: siła, kondycja i sprawność w jednym. Trenujesz ze mną na siłowni - motywacja, korekta techniki i maksymalne zaangażowanie gwarantowane!"
              reverse
            />
            <ServiceCard
              icon={<Calendar className="w-6 h-6 md:w-8 md:h-8" color="#ffffff" />}
              title="Plany Treningowe"
              description="Spersonalizowane plany treningowe stworzone specjalnie dla Ciebie, także pod HYROX. Możesz trenować samodzielnie, ale z moim profesjonalnym planem w kieszeni. Regularnie aktualizowane, dopasowane do Twoich postępów i gotowe do działania!"
            />
          </div>
        </div>
      </section>

      {/* Training Plan Preview Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl text-center mb-10" style={{ color: 'var(--trainer-primary)' }}>
            Przykładowy Plan Treningowy
          </h2>
          <TrainingWeek />
        </div>
      </section>
    </div>
  );
}
