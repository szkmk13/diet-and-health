import { useState } from 'react';
import { Container, Group, Burger, Image, Text, Center, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './SectionHeader.module.css';

interface Props {
    title: string
  }
export default function SectionHeader({title}:Props) {
  return (
    <>
        <Center pt={30} pb={30}>
          <Paper withBorder radius="md" shadow="sm"  w="fit-content" className={classes.textBackground}>
            <Text fw={700} className={classes.title}>
              {title}
            </Text>
          </Paper>
        </Center>
    </>
  );
}
