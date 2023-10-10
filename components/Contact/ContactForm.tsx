'use client';
import {
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  Center,
  Loader,
} from '@mantine/core';
import classes from './ContactForm.module.css';
import React, { useRef, useState } from 'react';
import Script from 'next/script';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const forma: any = useRef();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 4000)
    
    // const service:boolean = !!(process.env.SERVICE_ID && process.env.TEMPLATE_ID &&process.env.MAIL_JS_KEY)

    forma.current.reset(); 
    process.env.SERVICE_ID && process.env.TEMPLATE_ID &&process.env.MAIL_JS_KEY&& emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, forma.current, process.env.MAIL_JS_KEY).then(
      (response) => {
        setLoading(false)

        console.log('SUCCESS!', response.status, response.text);
        forma.current.reset(); 
      },
      (error) => {
        setLoading(false)

        console.error('FAILED...', error);
      }
    );
  };
  return (
    <>
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
            placeholder="Dzień dobry mam chorom curke kiedy pani mi zrobi diete za darmo"
            minRows={5}
            name="message"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

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
