import { Container } from 'components/App/App.styled';
import { Cards } from 'components/Cards/Cards';
import React, { useEffect, useState } from 'react';
import productsData from '../../data/productsData.json';
import { CatalogForm } from 'components/CatalogForm/CatalogForm';
import { Title } from 'components/Title/Title';

export const Catalog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(productsData);
  }, []);

  return (
    <Container>
      <Title>Наша продукція</Title>
      <CatalogForm />
      {data.length > 0 && <Cards data={data} />}
    </Container>
  );
};
