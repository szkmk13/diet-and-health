'use client';
import { Text, TextInput, Textarea, Button, Group, Center, Loader } from '@mantine/core';
import classes from './ContactForm.module.css';
import notificationclasses from './Notifications.module.css';

import React, { useRef, useState } from 'react';
import Script from 'next/script';
import emailjs from '@emailjs/browser';
import { notifications } from '@mantine/notifications';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const forma: any = useRef();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    process.env.NEXT_PUBLIC_SERVICE_ID &&
      process.env.NEXT_PUBLIC_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_MAIL_JS_KEY &&
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          forma.current,
          process.env.NEXT_PUBLIC_MAIL_JS_KEY
        )
        .then(
          (response) => {
            notifications.show({
              color: 'green',
              title: 'Wysłano',
              message: 'Monika wkrótce odpowie na maila.',
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
      {/* <Script src="https://www.google.com/recaptcha/api.js" async defer/> */}

      <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
      <div className={classes.form}>
        <Center>
          <Text className={classes.title}>Masz pytanie ?</Text>
        </Center>
        <form ref={forma} onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            placeholder="twoj_email@email.com"
            required
            name="email"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Imię"
            placeholder="Jan Kowalski"
            required
            name="name"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Wiadomość"
            placeholder="Dzień dobry, czy na konsultację potrzebne są wyniki badań?"
            minRows={5}
            name="message"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          {/* <div className="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY} data-size="compact"></div> */}

          <Group justify="flex-end" mt="md">
            <Button className={classes.control} type="submit" disabled={loading}>
              {loading ? (
                <Loader className={classes.loader} size="sm" />
              ) : (
                // <Loader className={classes.loader} size="sm" />
                'Wyślij'
              )}
            </Button>
          </Group>
        </form>
      </div>
    </>
  );
}
