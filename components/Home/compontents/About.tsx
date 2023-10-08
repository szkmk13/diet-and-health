'use client';
import { Card, Image, Text, Group, Center, rem } from '@mantine/core';
import classes from './About.module.css';

export default function About() {
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group wrap="nowrap" gap={60}>
        <Image src="images/monia-sport.jpg" height={450} fit="contain" visibleFrom="md" />
        <div className={classes.body}>
          <Center>
            <Text className={classes.title} mt="xs" mb="md">
              mgr Monika Skibicka
            </Text>
          </Center>
          <Center>
            <Text tt="uppercase" c="dimmed" fw={700} size={rem(30)} mb="md">
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
            dieta była łatwa do stosowania. Komponując jadłospis wykorzystuje sezonowe warzywa i
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
    </Card>
  );
}
