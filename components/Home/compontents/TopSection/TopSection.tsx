import { Center, Grid, Text, Image, Paper, Flex, Loader } from '@mantine/core';
import Link from 'next/link';

import classes from './TopSection.module.css';
import React from 'react';
import { IconStarFilled, IconDiscountCheckFilled, IconVideo } from '@tabler/icons-react';

import { useQuery } from 'react-query';

export default function TopSection() {
  const fetchData = async () => {
    const response = await fetch('/api/znanylekarz');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const { data, error, isLoading } = useQuery('opinionsNumber', fetchData);

  return (
    <div className={classes.bgimage}>
      <Center p="md">
        <Paper radius="sm" p="md" w={'300px'} key={'widget'}>
          <Grid grow>
            <Grid.Col span={3}>
              <Image radius="sm" w={80} h={80} src={'images/monia_kontakt.jpeg'} />
            </Grid.Col>
            <Grid.Col span={7} className={classes.cardtext}>
              <Text size="md">
                mgr Monika Skibicka{' '}
                <IconDiscountCheckFilled size={20} className={classes.moniacard} />⁠
              </Text>
              <Text c="dimmed" size="sm">
                Dietetyk
              </Text>

              <Text>
                {Array.from({ length: 5 }).map((_, index) => (
                  <IconStarFilled key={index} size={14} className={classes.moniacard} />
                ))}
                <Text span inherit ml={4}>
                  {isLoading ? <Loader size={14} /> : error ? 87 : data.opinionsCount} Opinii
                </Text>
              </Text>
            </Grid.Col>
            <Grid.Col>
              <Flex mb={10}>
                <IconVideo stroke={0.5} className={classes.moniacard} />
                <Text ml={5}>Oferuje konsultacje online</Text>
              </Flex>
              <Link
                href={'https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#'}
                target="_blank"
                className={classes.buttoncolor}
              >
                {'Umów wizytę'}
              </Link>
            </Grid.Col>
          </Grid>
        </Paper>
      </Center>
    </div>
  );
}
