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
import classes from './ContactForm.module.css';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { sendEmail } from './../../public/sendgrid';
import axios from 'axios';
interface Props {
  title: string;
}
export default function ContactForm() {
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
    axios.post('https://api.sendgrid.com/v3/', formData, {
      headers: {
        'Authorization': `Bearer: ${process.env.SENDGRID_API_KEY}`, // Set the headerA
      },
    })
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });    console.log('sent');
    // try {
    //   await sendEmail(email, 'Test Email', 'This is a test email from Next.js!');
    //   res.status(200).json({ message: 'Email sent successfully' });
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ message: 'Internal Server Error' });
    // }
  };
  return (
    <>
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
    </>
  );
}
