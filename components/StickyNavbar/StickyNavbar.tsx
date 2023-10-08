'use client';
import { useEffect, useState } from 'react';
import { Container, Group, Burger, Image, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import Link from 'next/link';

const links = [
  { link: '/', label: 'Home' },
  { link: '/uslugi', label: 'Usługi' },
  { link: '/kontakt', label: 'Kontakt' },
];

export default function StickyNavbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));
  return (
    <header className={`${classes.header} ${isSticky ? classes.sticky : ''}`}>
      <Container size="md" className={classes.inner}>
        <Image
          src="images/Diet_and_Health_logo_bez_tla.png"
          radius="sm"
          className={classes.inner}
        />

        <Group gap={50} visibleFrom="xs">
          {items}
          <Link
            key={'Umów wizytę'}
            href={'https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#'}
            className={classes.link}
            target="_blank"
          >
            {'Umów wizytę'}
          </Link>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
