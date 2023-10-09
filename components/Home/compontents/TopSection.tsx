import { BackgroundImage, Box, Center } from '@mantine/core';
import Script from 'next/script';

export default function TopSection() {




  return (
    <Box>
      {/* <Script src="znanylekarz.js" strategy="afterInteractive" /> */}
      {/* <ZlWidget /> */}
      {/* {htmldata} */}

      <BackgroundImage src="images/1.jpg" radius="lg">
        <Center p="md">
          <div style={{ paddingTop: 100, paddingBottom: 100 }}>
            <a
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
            </a>
          </div>
        </Center>
      </BackgroundImage>
    </Box>
  );
}
