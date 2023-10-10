import { BackgroundImage, Box, Button, Center, Text } from '@mantine/core';
import Link from 'next/link';
import Script from 'next/script';
import classes from './SectionHeader.module.css';

export default function TopSection() {
  return (
    <Box>
      {/* <Script src="znanylekarz.js" strategy="afterInteractive" /> */}
      {/* <ZlWidget /> */}
      {/* {htmldata} */}

      <BackgroundImage src="images/1.jpg" radius="lg">
        <Center p="md">
          <div style={{ paddingTop: 100, paddingBottom: 100 }}>
            <Link
              href="https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia"
              target='_blank'
              className={classes.link}
            >
              <Text className={classes.link}>Monika Skibicka - ZnanyLekarz.pl</Text>
              <Center>
                <Text className={classes.link}>Umów wizytę</Text>
              </Center>
            </Link>
            {/* <a
              id="zl-url"
              className="zl-url"
              href="https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia"
              rel="nofollow"
              data-zlw-doctor="monika-skibicka"
              data-zlw-type="big"
              data-zlw-opinion="false"
              data-zlw-hide-branding="true"
              data-zlw-saas-only="false"
            >
              Monika Skibicka - ZnanyLekarz.pl
            </a> */}
          </div>
        </Center>
      </BackgroundImage>
    </Box>
  );
}
