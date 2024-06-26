'use client';
import { Text, TextInput, Textarea, Button, Group, Center, Loader } from '@mantine/core';
import classes from './ContactSurvey.module.css';
import notificationclasses from './Notifications.module.css';

import React, { useRef, useState } from 'react';
import Script from 'next/script';
import emailjs from '@emailjs/browser';
import { notifications } from '@mantine/notifications';
import { DateInput } from '@mantine/dates';
import dayjs from 'dayjs';

export default function ContactSurvey() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<Date | null>(null);
  const currentDate = new Date();
  // Calculate the date in GMT+1 timezone
  const gmtPlus1Date = new Date(currentDate.getTime() - 3600 * 1000);
  const [selectedDate, setSelectedDate] = useState(gmtPlus1Date);
  const forma: any = useRef();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formElement = forma.current;
    const monthNames = [
      'Styczeń',
      'Luty',
      'Marzec',
      'Kwiecień',
      'Maj',
      'Czerwiec',
      'Lipiec',
      'Sierpień',
      'Wrzesień',
      'Październik',
      'Listopad',
      'Grudzień',
    ];
    const day = selectedDate.getDate(); 
    const month = monthNames[selectedDate.getMonth()];
    const year = selectedDate.getFullYear();
    const formattedDate2 = `${day.toString().padStart(2, '0')} ${month} ${year}`;
    formElement.elements['date'].value = formattedDate2;

    setLoading(true);
    process.env.NEXT_PUBLIC_SERVICE_ID &&
      process.env.NEXT_PUBLIC_TEMPLATE_SURVEY_ID &&
      process.env.NEXT_PUBLIC_MAIL_JS_KEY &&
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_SURVEY_ID,
          forma.current,
          process.env.NEXT_PUBLIC_MAIL_JS_KEY
        )
        .then(
          (response) => {
            notifications.show({
              color: 'green',
              title: 'Wysłano',
              message: 'Dziękuję za wypełnienie ankiety, do zobaczenia na konsultacji.',
              classNames: notificationclasses,
            });
            forma.current.reset();
            setLoading(false);
          },
          (error) => {
            notifications.show({
              color: 'red',
              title: 'Coś poszło nie tak.',
              message: 'Proszę o kontakt z administratorem.',
              classNames: notificationclasses,
            });
            console.error('FAILED...', error);
            setLoading(false);
          }
        );
  };
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
      <div className={classes.form}>
        <Center>
          <Text className={classes.title}>
            Jesteś umówiony na konsultację? Wypełnij wstępną ankietę:
          </Text>
        </Center>
        <form ref={forma} onSubmit={handleSubmit}>
          <TextInput
            label="Imię i nazwisko"
            placeholder="Jan Kowalski"
            required
            name="name"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Email"
            placeholder="twoj_email@email.com"
            required
            name="email"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <DateInput
            label="Data konsultacji"
            placeholder="Data konsultacji"
            valueFormat="YYYY MMM DD"
            minDate={new Date()}
            maxDate={dayjs(new Date()).add(2, 'month').toDate()}
            // value={selectedDate}
            onChange={(newDate: Date) => setSelectedDate(newDate)}
            required
            name="date"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Cel porady"
            placeholder="Jaki jest powód/ cel porady dietetycznej?"
            required
            name="purpose"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Problemy"
            placeholder="Proszę wypisać problemy zdrowotne/ choroby (np. cukrzyca, insulinooporność, nadciśnienie
                tętnicze, zespół jelita drażliwego, anemia)"
            minRows={5}
            name="problems"
            classNames={{ input: classes.mediuminput, label: classes.inputLabel }}
          />
          <TextInput
            label="Leki"
            placeholder="Proszę wymienić przyjmowane leki."
            required
            name="drugs"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />{' '}
          <TextInput
            label="Suplementy diety"
            placeholder="Proszę wymienić przyjmowane suplementy diety."
            required
            name="supplements"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Nietolerancje"
            placeholder="Czy ma Pani/ Pan stwierdzone alergie lub nietolerancje pokarmowe?"
            required
            name="intolerances"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            label="Dolegliwości"
            placeholder="Czy ma Pani/ Pan dolegliwości ze strony układu pokarmowego? (np. bóle brzucha, wzdęcia, biegunki, zaparcia, zgaga, nudności)"
            required
            name="ailments"
            classNames={{ input: classes.mediuminput, label: classes.inputLabel }}
          />
          <TextInput
            label="Płyny"
            placeholder="Jakie płyny Pani/ Pan wypija w ciągu dnia i w jakich ilościach?"
            required
            name="liquids"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Obecna dieta"
            placeholder="Opisz jak do tej pory wyglądały Twoje posiłki. Wypisz kilka przykładowych śniadań, drugich śniadań, obiadów itd."
            name="diet"
            classNames={{ input: classes.mediuminput, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Produkty lub dania których nie lubisz"
            placeholder="Jarmuż ..."
            name="not_liked"
            classNames={{ input: classes.mediuminput, label: classes.inputLabel }}
          />
          <Group justify="flex-end" mt="md">
            <Button className={classes.control} type="submit" disabled={loading}>
              {loading ? (
                <Loader className={classes.loader} size="sm" />
              ) : (
                'Wyślij'
              )}
            </Button>
          </Group>
        </form>
      </div>
    </>
  );
}
