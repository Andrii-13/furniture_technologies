import React from 'react';
import { CardsList } from './Cards.styled';
import { Card } from 'components/Card/Card';

export const Cards = ({ data, selectedWork }) => {
  console.log(selectedWork);

  return (
    <CardsList>
      {data.map(card => (
        <Card key={card.id} card={card} selectedWork={selectedWork} />
      ))}
    </CardsList>
  );
};
