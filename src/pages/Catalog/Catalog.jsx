import { Container } from 'components/App/App.styled';
import { Cards } from 'components/Cards/Cards';
import React, { useEffect, useState } from 'react';
import productsData from '../../data/productsData.json';
import { CatalogForm } from 'components/CatalogForm/CatalogForm';
import { Title } from 'components/Title/Title';

export const Catalog = () => {
  const [data, setData] = useState([]);
  const [work, setWork] = useState(null);

  const handleChangeWorks = e => {
    setWork(e.value);
  };

  useEffect(() => {
    setData(productsData);
  }, []);

  return (
    <Container>
      <Title>Наша продукція</Title>
      <CatalogForm handleChangeWorks={handleChangeWorks} />
      {data.length > 0 && <Cards data={data} selectedWork={work} />}
    </Container>
  );
};
