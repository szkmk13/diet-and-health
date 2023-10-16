'use client';
import { useEffect, useState } from 'react';
import { Container, Group, Burger, Image, Text, Drawer, HoverCard } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { link: '/', label: 'Strona Główna', active: true },
  { link: '/uslugi', label: 'Usługi', active: true },
  { link: '/kontakt', label: 'Kontakt', active: true },
  { link: '/treningi', label: 'Treningi', active: false },
];

export default function StickyNavbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const items = links.map((link) => {
    return link.active ? (
      <Link
        key={link.label}
        href={link.link}
        className={`${classes.link} ${link.link === pathname ? classes.currentPage : ''}`}
        onClick={() => {
          opened ? toggle() : null;
        }}
      >
        {link.label}
      </Link>
    ) : (
      <HoverCard position="bottom" withArrow key={`hover_${link.label}`}>
        <HoverCard.Target>
          <a key={link.label} href={'#'} className={classes.linkDisabled}>
            {link.label}
          </a>
        </HoverCard.Target>
        <HoverCard.Dropdown style={{ pointerEvents: 'none' }}>
          <Text size="sm">Dostępne wkrótce</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    );
  });

  const znanyLekarzLink = (
    <Link
      key={'Umów wizytę'}
      href={'https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#'}
      className={classes.linkZnanyLekarz}
      target="_blank"
    >
      {'Umów wizytę'}
    </Link>
  );
  return (
    <header className={`${classes.header} ${isSticky ? classes.sticky : ''}`}>
      <Container size="lg" className={classes.inner}>
        <Link href={'/'} className={classes.inner}>
          <Image
            src="images/Diet_and_Health_logo_bez_tla.png"
            radius="sm"
            className={classes.inner}
          />
        </Link>
        <Group gap={20} visibleFrom="sm" >
          {items}
          {znanyLekarzLink}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Container>
      <Drawer position="left" size="sm" opened={opened} onClose={toggle}>
        {items}
        {znanyLekarzLink}
      </Drawer>
    </header>
  );
}
