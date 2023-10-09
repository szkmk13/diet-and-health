'use client';
import { useEffect, useState } from 'react';
import { Container, Group, Burger, Image, Text, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import Link from 'next/link';

const links = [
  { link: '/', label: 'Home' },
  { link: '/uslugi', label: 'Usługi' },
  { link: '/kontakt', label: 'Kontakt' },
  // { link: '/treningi', label: 'Treningi u Krzychulca' },
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
      onClick={() => {
        setActive(link.link);
        opened ? toggle() : null;
      }}
      
    >
      {link.label}
    </Link>
  ));
  const znanyLekarzLink = (
    <Link
      key={'Umów wizytę'}
      href={'https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#'}
      className={classes.link}
      target="_blank"
    >
      {'Umów wizytę'}
    </Link>
  );
  return (
    <header className={`${classes.header} ${isSticky ? classes.sticky : ''}`}>
      <Container size="md" className={classes.inner}>
        <Link href={'/'}className={classes.inner}>
        <Image
          src="images/Diet_and_Health_logo_bez_tla.png"
          radius="sm"
          className={classes.inner}
        />
        </Link>
        
        <Group gap={50} visibleFrom="xs">
          {items}
          {znanyLekarzLink}
              {/* <Link
      key={'Treningi u Krzychulca'}
      href={'https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#'}
      className={classes.disabled}
      target="_blank"
    >
      {'Treningi u Krzychulca'}
    </Link> */}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
      <Drawer position="left" size="sm" opened={opened} onClose={toggle}>
        {items}
        {znanyLekarzLink}
      </Drawer>
    </header>
  );
}
