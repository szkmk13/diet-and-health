'use client';
import { Text, Container, Space } from '@mantine/core';
export default function Page() {
  return (
    <>
      <Container size={'xl'}>
        <Space h={'xl'} />
        <p></p>
        <Text style={{ whiteSpace: 'pre-wrap' }}>
          <Text inherit span fw={700}>
            Polityka prywatności
          </Text>
          <br />
          Ostatnia aktualizacja: 17.10.2023
          <br />
          <br />
          Zgodnie z ogólnym rozporządzeniem o ochronie danych osobowych (RODO) informuję, że:
          <br />
          <Text inherit span fw={700}></Text>1. Administratorem Pani/Pana danych osobowych jest
          DIETETYK KLINICZNY MONIKA SKIBICKA z siedzibą w Gdańsku przy ul. Chłopskiej 34a/ 6 80-368,
          adres e-mail: dietetyk@diet-and-health.pl, www.diet-and-health.pl (dalej: Administrator).
          <br />
          <br />
          2. Pani/Pana dane osobowe przetwarzane będą w celu:
          <br />
          {'  '}a) realizowania Umowy o świadczenie usługi dietetycznej;
          <br />
          {'  '}b) kontaktu z Pacjentem;
          <br />
          {'  '}c) analizy stanu zdrowia w celu dopasowania indywidualnych zaleceń dietetycznych;
          <br />
          <br />
          3. Odbiorcą Pani/Pana danych osobowych będą podmioty zewnętrzne przetwarzające dane w
          imieniu Administratora na podstawie umów powierzenia, które wdrożyły u siebie zasady
          przetwarzania danych osobowych.
          <br />
          <br />
          4. Pani/Pana dane osobowe będą przechowywane przez okres realizacji usług świadczonych
          przez Administratora oraz przez okres wynikający z przedawnienia roszczeń, prowadzenia
          księgowości czy innych uprawnień w tym zakresie (przepisy o archiwizacji). W przypadku
          przetwarzania na podstawie zgody do momentu cofnięcia przez Panią/Pana zgody.
          <br />
          <br />
          5. W związku z przetwarzaniem Pani/Pana danych osobowych przez Administratora, przysługują
          Pani/Panu prawo do:
          <br />
          {'  '}a) informacji, jakie dane osobowe dotyczące Pani/Pana przetwarzane są przez
          Administratora oraz do otrzymania kopii tych danych (tzw. prawo dostępu). Wydanie
          pierwszej kopii danych jest darmowe, za kolejne Administrator może naliczyć opłatę;
          <br />
          {'  '}b) jeżeli przetwarzane dane staną się nieaktualne lub niekompletne (lub w inny
          sposób niepoprawne) ma Pani/Pan prawo zażądać ich sprostowania;
          <br />
          {'  '}c) w pewnych sytuacjach może Pani/Pan zwrócić się do Administratora o usunięcie
          swoich danych osobowych, tj. kiedy dane przestaną być potrzebne Administratorowi do celów,
          o których Panią/Pana informował; kiedy cofnie Pani/Pan zgodę na przetwarzanie danych (o
          ile Administrator nie ma prawa przetwarzać danych na innej podstawie prawnej); jeżeli do
          przetwarzania doszłoby niezgodnie z prawem, albo jeśli konieczność usunięcia danych wynika
          z obowiązku prawnego Administratora;
          <br />
          {'  '}d) w przypadku, gdy Pani/Pana dane osobowe przetwarzane są przez Administratora na
          podstawie udzielonej zgody na przetwarzanie albo w celu wykonania umowy zawartej z
          Administratorem, ma Pani/Pan prawo przenieść swoje dane do innego administratora.
          <br />
          <br />
          6. Jeśli uzna Pani/Pan, że przetwarzane dane osobowe są nieprawidłowe, przetwarzanie jest
          niezgodne z prawem lub Administrator nie potrzebuje już określonych danych albo kiedy
          wniesie Pani/Pan sprzeciw wobec przetwarzania, może Pani/Pan także zażądać, aby przez
          określony, potrzebny czas (np. sprawdzenia poprawności danych lub dochodzenia roszczeń)
          Administrator nie dokonywał na danych żadnych operacji, a jedynie je przechowywał.
          <br />
          <br />
          7. Administrator nie ma zamiaru przekazywać danych osobowych do państwa trzeciego lub
          organizacji międzynarodowej.
          <br />
          <br />
          8. Ma Pani/Pan prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, gdy
          uzna Pani/Pan, iż przetwarzanie danych osobowych narusza przepisy prawa o ochronie danych.
          <br />
          <br />W przypadku pytań lub wątpliwości zachęcamy do kontaktu mailowego:{' '}
          <a href="mailto:dietetyk@diet-and-health.pl">dietetyk@diet-and-health.pl</a>
          <br />
        </Text>
        <Space h="xl" />
      </Container>
    </>
  );
}
