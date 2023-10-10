'use client';
import { useEffect, useState } from 'react';
import { Container, Group, Burger, Image, Text, Drawer, Button, Popover } from '@mantine/core';
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
  const [popoveropened, { close, open }] = useDisclosure(false);
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
      <Popover
        key={`popover_${link.label}`}
        position="bottom"
        withArrow
        shadow="md"
        opened={popoveropened}
      >
        <Popover.Target>
          <a
            onMouseEnter={open}
            onMouseLeave={close}
            key={link.label}
            href={'#'}
            className={classes.linkDisabled}
          >
            {link.label}
          </a>
        </Popover.Target>
        <Popover.Dropdown style={{ pointerEvents: 'none' }}>
          <Text size="sm">Dostępne wkrótce</Text>
        </Popover.Dropdown>
      </Popover>
    );
  });

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
        <Link href={'/'} className={classes.inner}>
          <Image
            src="images/Diet_and_Health_logo_bez_tla.png"
            radius="sm"
            className={classes.inner}
          />
        </Link>
        <Group gap={50} visibleFrom="xs">
          {items}
          {znanyLekarzLink}
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
