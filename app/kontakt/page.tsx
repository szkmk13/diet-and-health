'use client'
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


export default function Page() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Box className={classes.box}>
        <BackgroundImage src="images/4.jpg" radius="lg">
          <div className={classes.wrapper}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30}>
              <div>
                <Center>
                  <Image src={'images/monia_kontakt.jpeg'} className={classes.image} />
                </Center>
                <Center>
                  <Paper withBorder radius="md" shadow="sm" w="fit-content" mt={3}>
                    <Title className={classes.title}>Monika Skibicka</Title>
                  </Paper>
                </Center>
                <Center>
                  <Paper withBorder radius="md" shadow="sm" w="fit-content" mt={3}>
                    <Text className={classes.description}>kontakt@diet-and-health.pl</Text>
                  </Paper>
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
          <Button className={classes.control} type="submit">Send message</Button>
        </Group>
      </form>

              </div>
            </SimpleGrid>
          </div>
        </BackgroundImage>
      </Box>
    </>
  );
}
