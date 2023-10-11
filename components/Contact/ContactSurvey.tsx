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
    const [value, setValue] = useState<Date |null >(null);
    const currentDate = new Date();

    // Calculate the date in GMT+1 timezone
    const gmtPlus1Date = new Date(currentDate.getTime() - 3600 * 1000);
  
    const [selectedDate, setSelectedDate] = useState(gmtPlus1Date);

    const forma: any = useRef();
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        // setLoading(true)
        // setTimeout(() => {
        //   setLoading(false);
        // }, 4000)
        console.log(forma.current)
        const formElement = forma.current;

        // // Access and update the form element's values
        // const inputValue = formElement.elements['date'].value; // Replace 'inputName' with your input's name or ID
        // console.log('Current input value:', inputValue);
        
        // const options = { year: 'numeric', month: 'long', day: '2-digit' };
        // const formattedDate = inputValue.toLocaleDateString('en-US', options);
        // console.log(formattedDate);


        // // Modify the input value
        // formElement.elements['date'].value = formattedDate; 
        // console.log(formElement.elements['date'].value)

      

        const service:boolean = !!(process.env.SERVICE_ID && process.env.TEMPLATE_ID &&process.env.MAIL_JS_KEY)

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
            <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
            <div className={classes.form}>
                <Center>
                    <Text className={classes.title}>Jesteś umówiony na konsultację? Wypełnij wstępną ankietę:</Text>
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
                        maxDate={new Date()}
                        minDate={dayjs(new Date()).subtract(1, 'month').toDate()}
                        value={selectedDate}
                        onChange={(newDate:Date) => setSelectedDate(newDate)}
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
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <TextInput
                        label="Leki"
                        placeholder="Proszę wymienić przyjmowane leki."
                        required
                        name="drugs"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    /> <TextInput
                        label="Suplementy diety"
                        placeholder="Proszę wymienić przyjmowane suplementy diety."
                        required
                        name="supplements"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    /><TextInput
                        label="Nietolerancje"
                        placeholder="Czy ma Pani/ Pan stwierdzone alergie lub nietolerancje pokarmowe?"
                        required
                        name="intolerances"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    /><Textarea
                        label="Dolegliwości"
                        placeholder="Czy ma Pani/ Pan dolegliwości ze strony układu pokarmowego? (np. bóle brzucha, wzdęcia,
        biegunki, zaparcia, zgaga, nudności)"
                        required
                        name="ailments"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    /><TextInput
                        label="Płyny"
                        placeholder="Jakie płyny Pani/ Pan wypija w ciągu dnia i w jakich ilościach?"
                        required
                        name="liquids"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    /><Textarea
                        required
                        label="Obecna dieta"
                        placeholder="Proszę opisać jak najdokładniej jak obecnie wygląda Pani/ Pana dieta."
                        minRows={10}

                        name="diet"
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
