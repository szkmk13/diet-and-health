import { BackgroundImage, Button, Center } from '@mantine/core';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Center>
      <div>
        <Button>
          <Link href="/">Powrót</Link>
        </Button>
      </div>
    </Center>
  );
}
