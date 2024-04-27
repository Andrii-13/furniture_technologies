import React from 'react';

export const Card = ({ card }) => {
  const { name } = card;

  return (
    <li>
      <img
        src="../../data/images/product/00001.jpg"
        alt={name}
        width="264"
        height="260"
      />
    </li>
  );
};
