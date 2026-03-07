"use client"
import Image from 'next/image';
import { Dumbbell, Calendar, Instagram } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <section className="relative py-2 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text (order-2 on mobile, order-1 on desktop) */}
            <div className="space-y-6 order-2 md:order-1">
              <div>
                <h1 
                  className="text-5xl mb-4"
                  style={{ color: 'var(--trainer-primary)' }}
                >
                  Krzysiek
                </h1>
                <div 
                  className="h-1 w-20 mb-6"
                  style={{ backgroundColor: 'var(--trainer-accent)' }}
                />
                <p 
                  className="text-xl mb-4"
                  style={{ color: 'var(--trainer-text)' }}
                >
                  Trener Personalny z Humorem
                </p>
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: 'var(--trainer-text-light)' }}
                >
                  Wierzę, że trening to nie tylko ciężka praca, ale też dobra zabawa! 
                  Pomogę Ci osiągnąć cele treningowe z uśmiechem na twarzy. 
                  Bez nudy, bez wymówek - tylko efekty i dobra energia! 💪
                </p>
              </div>

              <div className="flex justify-center md:justify-start ">
                <a
                  href="https://www.instagram.com/k_skibicki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105"
                  style={{
                    backgroundColor: 'var(--trainer-accent)',
                    color: '#ffffff',
                  }}
                >
                  <Instagram size={20} />
                  <span>Śledź mnie na Instagramie</span>
                </a>
              </div>
            </div>

            {/* Right side - Image (order-1 on mobile, order-2 on desktop) */}
<div className="relative order-1 md:order-2">
  <div
    className="relative rounded-2xl overflow-hidden shadow-2xl"
    style={{ aspectRatio: "3 / 4" }}
  >
    {/* Sharp base image */}
    <Image
      src="/images/krzychu.jpg"
      alt="Krzysiek - Trener Personalny"
      fill
      priority
      className="object-cover"
    />

    {/* Blurred edges with vertical ellipse */}
    <Image
      src="/images/krzychu.jpg"
      alt=""
      fill
      className="object-cover blur-xl scale-105"
      style={{
        maskImage:
          "radial-gradient(ellipse 35% 55% at center, transparent 50%, black 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 30% 55% at center, transparent 60%, black 70%)",
      }}
    />
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--trainer-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl text-center mb-12"
            style={{ color: 'var(--trainer-primary)' }}
          >
            Moja Oferta
          </h2>
          
          <div className="space-y-16">
            {/* Service 1 - Kafelek po lewej, tekst po prawej */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center ">
              <div 
                className="p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ 
                  backgroundColor: '#ffffff',
                  border: '2px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--trainer-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                    style={{ backgroundColor: 'var(--trainer-accent)' }}
                  >
                    <Dumbbell className="w-6 h-6 md:w-8 md:h-8" color="#ffffff" />
                  </div>
                  <h3 
                    className="text-xl md:text-2xl group-hover:text-(--trainer-accent) transition-colors duration-300"
                    style={{ color: 'var(--trainer-primary)' }}
                  >
                    Trening Personalny na Miejscu
                  </h3>
                </div>
                <p 
                  className="text-base md:text-lg leading-relaxed md:hidden"
                  style={{ color: 'var(--trainer-text-light)' }}
                >
                  Indywidualne sesje treningowe dostosowane do Twoich celów i możliwości. 
                  Trenujesz ze mną na siłowni - motywacja, korekta techniki i maksymalne zaangażowanie 
                  gwarantowane! Każdy trening to krok bliżej do Twojej wymarzonej sylwetki.
                </p>
              </div>
              
              <div className="hidden md:block">
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: 'var(--trainer-text-light)' }}
                >
                  Indywidualne sesje treningowe dostosowane do Twoich celów i możliwości. 
                  Trenujesz ze mną na siłowni - motywacja, korekta techniki i maksymalne zaangażowanie 
                  gwarantowane! Każdy trening to krok bliżej do Twojej wymarzonej sylwetki.
                </p>
              </div>
            </div>

            {/* Service 2 - Tekst po lewej, kafelek po prawej */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="hidden md:block">
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: 'var(--trainer-text-light)' }}
                >
                  Spersonalizowane plany treningowe stworzone specjalnie dla Ciebie. 
                  Możesz trenować samodzielnie, ale z moim profesjonalnym planem w kieszeni. 
                  Regularnie aktualizowane, dopasowane do Twoich postępów i gotowe do działania!
                </p>
              </div>
              
              <div 
                className="p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ 
                  backgroundColor: '#ffffff',
                  border: '2px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--trainer-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                    style={{ backgroundColor: 'var(--trainer-accent)' }}
                  >
                    <Calendar className="w-6 h-6 md:w-8 md:h-8" color="#ffffff" />
                  </div>
                  <h3 
                    className="text-xl md:text-2xl group-hover:text-[var(--trainer-accent)] transition-colors duration-300"
                    style={{ color: 'var(--trainer-primary)' }}
                  >
                    Rozpiski Treningowe
                  </h3>
                </div>
                <p 
                  className="text-base md:text-lg leading-relaxed md:hidden"
                  style={{ color: 'var(--trainer-text-light)' }}
                >
                  Spersonalizowane plany treningowe stworzone specjalnie dla Ciebie. 
                  Możesz trenować samodzielnie, ale z moim profesjonalnym planem w kieszeni. 
                  Regularnie aktualizowane, dopasowane do Twoich postępów i gotowe do działania!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Plan Preview Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="space-y-6 flex flex-col justify-center">
              <h2 
                className="text-3xl md:text-4xl"
                style={{ color: 'var(--trainer-primary)' }}
              >
                Przykładowy Plan Treningowy
              </h2>
              <p 
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--trainer-text-light)' }}
              >
                Przeglądaj interaktywny plan treningowy
              </p>
            </div>
            
            {/* Right side - Iframe */}
            <div 
              className="overflow-hidden shadow-2xl" 
              style={{ 
                backgroundColor: '#ffffff',
                border: '2px solid #000000',
                borderRadius: '16px',
                zIndex: 1,
                position: 'relative'
              }}
            >
              <iframe 
               src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQX4XBRFZolnt9xTncu3TKu5RfkmG24VUZC8-WVYFs5dhJZZgooyog8jzoYg9kXBC7S3GdVqhLt_-iP/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
                className="w-full h-[400px] md:h-[600px]"
                style={{ border: 'none' }}
                title="Plan Treningowy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer
      <footer 
        className="py-12 px-6"
        style={{ backgroundColor: 'var(--trainer-primary)' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Dumbbell size={28} color="#ffffff" />
            <h3 className="text-2xl" style={{ color: '#ffffff' }}>
              Krzysiek - Trener Personalny
            </h3>
          </div>
          <p className="text-lg mb-6" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Razem osiągniemy Twoje cele! 💪
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            style={{ color: '#ffffff' }}
          >
            <Instagram size={24} />
            <span>@krzysiek_trening</span>
          </a>
        </div>
      </footer> */}
    </div>
  );
}