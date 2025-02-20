import { TextInput, Text } from '@mantine/core';
import React from 'react';

interface Offer {
  id: number;
  type: 'solo' | 'duo' | 'psycho' | 'pakiet';
  name: string;
  price: string;
}
interface OfferCardProps {
  offer: Offer;
  handleInputChange: (
    id: number,
    value: string,
    type: 'solo' | 'duo' | 'psycho' | 'pakiet'
  ) => void;
}
const OfferCard: React.FC<OfferCardProps> = ({ offer, handleInputChange }) => {
  return (
    <div
      key={offer.id}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #ccc',
        padding: '8px',
        minWidth: '250px',
        borderRadius: '8px',
      }}
    >
      <Text style={{ flex: 1, textAlign: 'left' }}>{offer.name}</Text>
      <TextInput
        value={offer.price}
        onChange={(e) => handleInputChange(offer.id, e.target.value, offer.type)}
        style={{ width: '100px', textAlign: 'right' }}
      />
    </div>
  );
};

export default OfferCard;
