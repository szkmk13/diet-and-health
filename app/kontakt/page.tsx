'use client';
import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  Box,
  Image,
  BackgroundImage,
  Center,
  Paper,
} from '@mantine/core';
import classes from './page.module.css';
import { useRef, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <BackgroundImage src="images/6.jpg" style={{height:'80vh'}}>
        <Box className={classes.box}>
          <div className={classes.wrapper}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30}>
              <div>
                <Center>
                  <Link
                    href={'https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#'}
                    target="_blank"
                  >
                    <Center className={classes.container}>
                      <img
                        src={'images/monia_kontakt.jpeg'}
                        alt={'Monika Skibicka'}
                        className={classes.image}
                        style={{ cursor: 'pointer' }}
                      />
                      <div className={classes.overlay}>
                        <Text className={classes.category}>Monika Skibicka</Text>
                        <Title order={3} className={classes.title}>
                          kontakt@diet-and-health.pl
                        </Title>
                      </div>
                    </Center>
                  </Link>
                </Center>
              </div>
              <div className={classes.form}>
                <form onSubmit={handleSubmit}>
                  <TextInput
                    label="Email"
                    placeholder="twoj_email@email.com"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    classNames={{ input: classes.input, label: classes.inputLabel }}
                  />
                  <TextInput
                    label="Imię"
                    placeholder="Jan Kowalski"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    classNames={{ input: classes.input, label: classes.inputLabel }}
                  />
                  <Textarea
                    required
                    label="Wiadomość"
                    placeholder="Dzień dobry mam chorom curke kiedy pani mi zrobi diete za darmo"
                    minRows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    classNames={{ input: classes.input, label: classes.inputLabel }}
                  />

                  <Group justify="flex-end" mt="md">
                    <Button className={classes.control} type="submit">
                      Send message
                    </Button>
                  </Group>
                </form>
              </div>
            </SimpleGrid>
          </div>
        </Box>{' '}
      </BackgroundImage>
    </>
  );
}
