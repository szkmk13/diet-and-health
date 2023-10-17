'use client';
import { Text, Title, Image, Container, Accordion, Space } from '@mantine/core';
import classes from './page.module.css';
export default function Page() {
 

  return (
    <>
      <Container size={'xl'}>
        <Space h={'xl'}/>
<Text style={{whiteSpace: 'pre-wrap'}}>
<Text inherit span fw={700}>Polityka prywatności</Text>
<br/>
Ostatnia aktualizacja: 17.10.2023
<br/><br/>
Dziękujemy za skorzystanie z formularza kontaktowego na naszej stronie. Dbamy o Twoją prywatność i chcielibyśmy, abyś był świadomy tego, jakie dane zbieramy i w jaki sposób są one przetwarzane.
<br/><br/>
<Text inherit span fw={700}></Text>Jakie dane zbieramy?<br/>
W ramach formularza kontaktowego zbieramy następujące dane:<br/>
Adres e-mail<br/>
Imię<br/>
Nazwisko<br/>
Informacje dotyczące chorób<br/>
<Text inherit span fw={700}>Cel zbierania danych</Text><br/>
Dane, które zbieramy, są wykorzystywane w celu udzielenia odpowiedzi na Twoje zapytanie lub komunikację z Tobą w związku z naszymi usługami. Informacje dotyczące chorób są zbierane w celu dostosowania naszej odpowiedzi do Twoich potrzeb.
<br/><br/>
<Text inherit span fw={700}>Kto ma dostęp do Twoich danych?</Text><br/>
Twoje dane są przetwarzane przez Dietetyk Kliniczny Monika Skibicka i nie są udostępniane osobom trzecim bez Twojej zgody. Wyjątkiem może być sytuacja, gdy jest to wymagane przez przepisy prawa.
<br/><br/>
<Text inherit span fw={700}>Jak długo przechowujemy Twoje dane?</Text><br/>
Twoje dane są przechowywane przez okres niezbędny do realizacji celu, w jakim zostały zebrane, oraz w celu spełnienia wszelkich obowiązujących przepisów prawa.
<br/><br/>
<Text inherit span fw={700}>Twoje prawa</Text><br/>
Masz prawo do wglądu w Twoje dane, ich poprawiania, usuwania oraz ograniczania przetwarzania. Możesz także wycofać zgodę na przetwarzanie danych w dowolnym momencie.
<br/><br/>
<Text inherit span fw={700}>Kontakt</Text><br/>
Jeśli masz jakiekolwiek pytania dotyczące naszej polityki prywatności lub przetwarzania Twoich danych, skontaktuj się z nami pod adresem kontakt@diet-and-health.pl lub skorzystaj z formularza kontaktowego na naszej stronie.</Text><br/><br/>
      </Container>
    </>
  );
}
