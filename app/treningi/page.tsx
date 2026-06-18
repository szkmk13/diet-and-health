import Image from 'next/image';
import { Dumbbell, Calendar, Instagram } from 'lucide-react';

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
            className="text-xl md:text-2xl group-hover:text-[var(--trainer-accent)] transition-colors duration-300"
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
      <section className="relative py-10 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <div>
                <h1 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--trainer-primary)' }}>
                  Krzysiek
                </h1>
                <div className="h-1 w-20 mb-6" style={{ backgroundColor: 'var(--trainer-accent)' }} />
                <p className="text-lg md:text-xl mb-4" style={{ color: 'var(--trainer-text)' }}>
                  Trener Personalny z Humorem
                </p>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--trainer-text-light)' }}>
                  Wierzę, że trening to nie tylko ciężka praca, ale też dobra zabawa!
                  Pomogę Ci osiągnąć cele treningowe z uśmiechem na twarzy.
                  Bez nudy, bez wymówek - tylko efekty i dobra energia! 💪
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/k_skibicki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105 text-white"
                  style={{ backgroundColor: 'var(--trainer-accent)' }}
                >
                  <Instagram size={20} />
                  <span>Śledź mnie na Instagramie</span>
                </a>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '3 / 4' }}>
                <Image
                  src="/images/krzychu.jpg"
                  alt="Krzysiek - Trener Personalny"
                  fill
                  priority
                  className="object-cover"
                />
                <Image
                  src="/images/krzychu.jpg"
                  alt=""
                  fill
                  className="object-cover blur-xl scale-105"
                  style={{
                    maskImage: 'radial-gradient(ellipse 35% 55% at center, transparent 50%, black 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 30% 55% at center, transparent 60%, black 70%)',
                  }}
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
              icon={<Dumbbell className="w-6 h-6 md:w-8 md:h-8" color="#ffffff" />}
              title="Trening Personalny na Miejscu"
              description="Indywidualne sesje treningowe dostosowane do Twoich celów i możliwości. Trenujesz ze mną na siłowni - motywacja, korekta techniki i maksymalne zaangażowanie gwarantowane! Każdy trening to krok bliżej do Twojej wymarzonej sylwetki."
            />
            <ServiceCard
              icon={<Calendar className="w-6 h-6 md:w-8 md:h-8" color="#ffffff" />}
              title="Rozpiski Treningowe"
              description="Spersonalizowane plany treningowe stworzone specjalnie dla Ciebie. Możesz trenować samodzielnie, ale z moim profesjonalnym planem w kieszeni. Regularnie aktualizowane, dopasowane do Twoich postępów i gotowe do działania!"
              reverse
            />
          </div>
        </div>
      </section>

      {/* Training Plan Preview Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 flex flex-col justify-center">
              <h2 className="text-2xl md:text-4xl" style={{ color: 'var(--trainer-primary)' }}>
                Przykładowy Plan Treningowy
              </h2>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--trainer-text-light)' }}>
                Przeglądaj interaktywny plan treningowy
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-black shadow-2xl bg-white relative">
              <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQX4XBRFZolnt9xTncu3TKu5RfkmG24VUZC8-WVYFs5dhJZZgooyog8jzoYg9kXBC7S3GdVqhLt_-iP/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
                className="w-full h-[300px] md:h-[600px]"
                style={{ border: 'none' }}
                title="Plan Treningowy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
