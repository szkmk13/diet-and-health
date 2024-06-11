'use client';
import { Text, Box, BackgroundImage, Grid } from '@mantine/core';
import classes from './page.module.css';
import ContactSurvey from '@/components/Contact/ContactSurvey';

export default function Page() {
  return (
    <>
      <BackgroundImage src="images/6.jpg">
        <Box className={classes.box}>
          <div className={classes.wrapper}>
            <Grid gutter={30}>
              <Grid.Col>
                <div className={classes.textbox}>
                  <Text fw={600} size="xl">
                    Jak przygotować się do wizyty:
                  </Text>
                  <Text>
                    1. Zabierz ze sobą ostatnio wykonywane wyniki badań (jeśli takie posiadasz).
                  </Text>
                  <Text>
                    2. Na konsultacji wykonuję analizę składu ciała. Bezpośrednio przed badaniem
                    składu ciała nie zaleca się wykonywać intensywnego treningu, korzystać z sauny.
                    Dobrze wykonać badanie 2-3 godziny po posiłku i po wcześniejszym opróżnieniu
                    pęcherza.
                  </Text>
                  <Text>
                    3. Na analizator składu ciała wchodzi się gołymi stopami, dlatego wygodniej
                    ubrać skarpety zamiast rajstop.
                  </Text>
                  <Text>
                    4. Możesz przygotować dzienniczek żywieniowy i zabrać go ze sobą na konsultację.
                    Przez 3 dni na bieżąco opisuj spożywane posiłki. Uwzględnij godzinę, miejsce
                    spożycia posiłku, wielkość porcji, wypijane płyny. Możesz dodatkowo opisać swoje
                    samopoczucie po posiłku (np. senność, ból brzucha, wzdęcia, biegunka).
                  </Text>
                  <Text>
                    5. Zachęcam do wypełnienia wstępnej ankiety, która znajduje się poniżej 😊
                  </Text>
                </div>
              </Grid.Col>
              <Grid.Col>
                <ContactSurvey />
              </Grid.Col>
            </Grid>
          </div>
        </Box>
      </BackgroundImage>
    </>
  );
}
