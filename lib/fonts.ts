import { Figtree, Young_Serif } from 'next/font/google';

/** Fonty nowego wyglądu (strona główna, usługi). Klasę `fontVariables` daj na korzeń strony razem z `dh-page`. */
const display = Young_Serif({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  variable: '--font-display',
});

const body = Figtree({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
});

export const fontVariables = `${display.variable} ${body.variable}`;
