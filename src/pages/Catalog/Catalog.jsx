import { Container } from 'components/App/App.styled';
import { Title } from 'components/App/Title/Title';
import { Cards } from 'components/Cards/Cards';
import React, { useEffect, useState } from 'react';
import allData from '../../data/data.json';

export const Catalog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(allData);
  }, []);

  return (
    <Container>
      <Title>Наша продукція</Title>
      {data.length > 0 && <Cards data={data} />}
    </Container>
  );
};
