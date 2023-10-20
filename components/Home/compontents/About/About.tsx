'use client';
import { Image, Text, Group, Center, rem, Container } from '@mantine/core';
import classes from './About.module.css';

export default function About() {
  return (
    <Container fluid my={20}>
      <Group wrap="nowrap" gap={60}>
        <Image src="images/monia_sport.jpg" height={450} fit="contain" visibleFrom="md" mt={10} />
        <div className={classes.body}>
          <Center>
            <Text className={classes.title} mt="xs" mb="md">
              mgr Monika Skibicka
            </Text>
          </Center>
          <Center>
            <Text className={classes.subtitle} size={rem(30)} mb="sm">
              Dietetyk kliniczny
            </Text>
          </Center>

          <Text size="md">
            Jestem{' '}
            <Text span inherit fw={700}>
              dietetykiem klinicznym i psychodietetykiem.
            </Text>{' '}
            Ukończyłam studia magisterskie na Gdańskim Uniwersytecie Medycznym na kierunku Dietetyka
            oraz studia podyplomowe z Psychodietetyki na Uniwersytecie WSB Merito. Do każdego
            pacjenta podchodzę{' '}
            <Text span inherit fw={700} td="underline">
              indywidualnie.
            </Text>{' '}
            Jadłospisy układam po szczegółowym wywiadzie dotyczącym dotychczasowego sposobu
            żywienia. Uwzględniam wszystkie dolegliwości, problemy zdrowotne, a także preferencje
            smakowe. Chcę, aby zaproponowane przeze mnie posiłki były nie tylko zdrowe, ale przede
            wszystkim smaczne i łatwe do przygotowania. Najważniejsze dla mnie jest, aby dieta była
            łatwa do stosowania.
          </Text>
          <Text size="md" mt={10}>
            Komponując jadłospis wykorzystuje sezonowe warzywa i owoce oraz produkty, które są
            dostępne w każdym większym sklepie. Pomagam zbudować trwałe nawyki żywieniowe.{' '}
            <Text span inherit fw={700}>
              Zależy mi przede wszystkim na znalezieniu przyczyny problemów z jedzeniem.{' '}
            </Text>
            Zaproponuję Ci rozwiązania, które pomogą Ci odzyskać równowagę i kontrolę. Zawsze staram
            się znaleźć najlepsze metody dopasowane do osób, którym pomagam. Nie jestem zwolenniczką
            systemu zero jedynkowego -{' '}
            <Text span inherit fw={700}>
              najważniejsze jest dla mnie zadbanie o zdrową relację z jedzeniem.{' '}
            </Text>
            Najbardziej skuteczna dieta to ta,{' '}
            <Text span inherit td="underline">
              którą będziesz w stanie utrzymać.
            </Text>
          </Text>
        </div>
      </Group>
    </Container>
  );
}
