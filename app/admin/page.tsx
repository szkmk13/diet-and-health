'use client';

import { Stack, TextInput, Divider, Group, Button, Text, NumberInput, Center } from '@mantine/core';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import OfferCard from './offerInput';
import classes from './page.module.css';
import { notifications } from '@mantine/notifications';
import notificationclasses from 'components/Contact/Notifications.module.css';
interface Offer {
  id: number;
  type: 'solo' | 'duo' | 'psycho' | 'pakiet';
  name: string;
  price: string;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isClient, setIsClient] = useState<boolean>(false);
  const [soloOffers, setSoloOffers] = useState<Offer[]>([]);
  const [duoOffers, setDuoOffers] = useState<Offer[]>([]);
  const [psychoOffers, setPsychoOffers] = useState<Offer[]>([]);
  const [pakietOffers, setPakietOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [saveLoading, setSaveLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, isClient, router]);

  useEffect(() => {
    const fetchOffers = async () => {
      const { data, error } = await supabase.from('offers').select();
      if (error) {
        console.error('Error fetching offers:', error);
        return;
      }
      console.log(supabase);
      console.log(data);
      setSoloOffers(data.filter((offer: Offer) => offer.type === 'solo'));
      setDuoOffers(data.filter((offer: Offer) => offer.type === 'duo'));
      setPsychoOffers(data.filter((offer: Offer) => offer.type === 'psycho'));
      setPakietOffers(data.filter((offer: Offer) => offer.type === 'pakiet'));
      setLoading(false);
    };

    fetchOffers();
  }, []);

  if (!isClient || status === 'loading' || loading)
    return (
      <Center style={{ height: '40vh' }}>
        <Text fz="3rem" fw={500} c="gray.7">
          Ładowanie...
        </Text>
      </Center>
    );
  const handleInputChange = (
    id: number,
    value: string,
    type: 'solo' | 'duo' | 'psycho' | 'pakiet'
  ) => {
    console.log(id, value, type);
    if (type === 'solo') {
      setSoloOffers((prev) =>
        prev.map((offer) => (offer.id === id ? { ...offer, price: value } : offer))
      );
    }
    if (type === 'duo') {
      setDuoOffers((prev) =>
        prev.map((offer) => (offer.id === id ? { ...offer, price: value } : offer))
      );
    }
    if (type === 'psycho') {
      setPsychoOffers((prev) =>
        prev.map((offer) => (offer.id === id ? { ...offer, price: value } : offer))
      );
    }
    if (type === 'pakiet') {
      setPakietOffers((prev) =>
        prev.map((offer) => (offer.id === id ? { ...offer, price: value } : offer))
      );
    }
  };

  const saveChanges = async () => {
    setSaveLoading(true);
    const updatedOffers = [...soloOffers, ...duoOffers, ...psychoOffers, ...pakietOffers];

    for (const offer of updatedOffers) {
      const { error } = await supabase
        .from('offers')
        .update({ price: offer.price })
        .eq('id', offer.id);
      if (error) {
        console.error('Error updating offer:', error);
      }
    }
    notifications.show({
      color: 'green',
      title: 'Sukces',
      message: 'Ceny zostały zmienione.',
      classNames: notificationclasses,
    });
    setSaveLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: 'auto',
        marginTop: '10px',
        marginBottom: '10px',
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Text
        style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}
      >
        Zmiana cen
      </Text>

      <Stack>
        <div>
          <Text className={classes.offerText}>Oferta indywidualna</Text>
          <div className={classes.offerCards}>
            {soloOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} handleInputChange={handleInputChange} />
            ))}
          </div>
        </div>

        <div>
          <Text className={classes.offerText}>Oferta dla dwóch osób</Text>
          <div className={classes.offerCards}>
            {duoOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} handleInputChange={handleInputChange} />
            ))}
          </div>
        </div>

        <div>
          <Text className={classes.offerText}>Psychodietetyka</Text>
          <div className={classes.offerCards}>
            {psychoOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} handleInputChange={handleInputChange} />
            ))}
          </div>
        </div>

        <div>
          <Text className={classes.offerText}>Pakiety</Text>
          <div className={classes.offerCards}>
            {pakietOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} handleInputChange={handleInputChange} />
            ))}
          </div>
        </div>
        <Group justify="center" mt="xl">
          <Button
            onClick={saveChanges}
            loading={saveLoading}
            className="bg-primary-color hover:bg-teal-200 text-black px-8 py-3 rounded-md transition-colors duration-200 w-full"
          >
            Zapisz ceny
          </Button>
        </Group>
      </Stack>
    </div>
  );
}
