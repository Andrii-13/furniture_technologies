import React from 'react';

export const Card = ({ card }) => {
  const { img, name } = card;

  console.log(img);
  return (
    <li>
      <img src={img} alt={name} width="264" height="260" />
    </li>
  );
};
