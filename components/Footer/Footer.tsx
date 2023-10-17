'use client';
import { Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandInstagram, IconBrandFacebook, IconBrandGoogleMaps } from '@tabler/icons-react';
import classes from './FooterCentered.module.css';
import Link from 'next/link';

export function FooterCentered() {
  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
      <Link href={'/'}></Link>
        <Group className={classes.group}>
          <ActionIcon
            size="xl"
            radius="xl"
            component="a"
            href="https://www.facebook.com/diet.and.health.dietetyk"
            target="_blank"
          >
            <IconBrandFacebook style={{ width: rem(40), height: rem(40) }} stroke={1.1} />
          </ActionIcon>
          <ActionIcon
            size="xl"
            radius="xl"
            color="teal"
            component="a"
            href="https://maps.app.goo.gl/mhi7sRzabVzfXxct5"
            target="_blank"
          >
            <IconBrandGoogleMaps style={{ width: rem(40), height: rem(40) }} stroke={1} />
          </ActionIcon>
          <ActionIcon
            size="xl"
            radius="xl"
            color="pink"
            component="a"
            href="https://www.instagram.com/diet.and.health_/"
            target="_blank"
          >
            <IconBrandInstagram style={{ width: rem(50), height: rem(50) }} stroke={2} />
          </ActionIcon>
        </Group>
        <Link href={'/politykaprywatnosci'} className={classes.politics}>Polityka Prywatności</Link>
      </div>{' '}
      
    </div>
  );
}
