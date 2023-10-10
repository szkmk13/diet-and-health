'use client';
import { Card, Image, Text, Group, Center, rem, Container, Box } from '@mantine/core';
import classes from './About.module.css';

export default function About() {
  return (
    <Container fluid my={20}>
      <Group wrap="nowrap" gap={60}>
        <Image src="images/monia_sport.jpg" height={450} fit="contain" visibleFrom="md" mt={10}/>
        <div className={classes.body}>
          <Center>
            <Text className={classes.title} mt="xs" mb="md">
              mgr Monika Skibicka
            </Text>
          </Center>
          <Center>
            <Text className={classes.subtitle} size={rem(30)}  mb='sm'>
              Dietetyk kliniczny
            </Text>
          </Center>

          <Text size="lg">
            Jestem dietetykiem klinicznym i psychodietetykiem. Ukończyłam studia magisterskie na
            Gdańskim Uniwersytecie Medycznym na kierunku Dietetyka oraz studia podyplomowe z
            Psychodietetyki na Uniwersytecie WSB Merito. Do każdego pacjenta podchodzę
            indywidualnie. Jadłospisy układam po szczegółowym wywiadzie dotyczącym dotychczasowego
            sposobu żywienia. Uwzględniam wszystkie dolegliwości, problemy zdrowotne, a także
            preferencje smakowe. Chcę, aby zaproponowane przeze mnie posiłki były nie tylko zdrowe,
            ale przede wszystkim smaczne i łatwe do przygotowania. Najważniejsze dla mnie jest, aby
            dieta była łatwa do stosowania. 
          </Text>
          <Text size="lg" mt={10}>
            Komponując jadłospis wykorzystuje sezonowe warzywa i
            owoce oraz produkty, które są dostępne w każdym większym sklepie. Pomagam zbudować
            trwałe nawyki żywieniowe. Zależy mi przede wszystkim na znalezieniu przyczyny problemów
            z jedzeniem. Zaproponuję Ci rozwiązania, które pomogą Ci odzyskać równowagę i kontrolę.
            Zawsze staram się znaleźć najlepsze metody dopasowane do osób, którym pomagam. Nie
            jestem zwolenniczką systemu zero jedynkowego - najważniejsze jest dla mnie zadbanie o
            zdrową relację z jedzeniem. Najbardziej skuteczna dieta to ta, którą będziesz w stanie
            utrzymać.
          </Text>
        </div>
      </Group>
    </Container>
  );
}
