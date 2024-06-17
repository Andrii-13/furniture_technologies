import { Container } from 'components/App/App.styled';
import { Cards } from 'components/Cards/Cards';
import React, { useEffect, useState } from 'react';
import { CatalogForm } from 'components/CatalogForm/CatalogForm';
import { Title } from 'components/Title/Title';
import { useSearchParams } from 'react-router-dom';
import { BtnUpDown } from 'components/BtnUpDown/BtnUpDown';
import { selectedProduct, selectedWork } from 'helpers/catalogSelected';

export const Catalog = () => {
  const [data, setData] = useState([]);
  const [params, setParams] = useSearchParams();

  const work = params.get('work') ?? 'all';
  const product = params.get('product') ?? 'all';

  //  -----------------     function for MuiSelect -------------

  const handleChangeWorksMui = e => {
    params.set('work', e.target.value);
    setParams(params);
  };

  // -----------------------------------------------------------------

  //  -----------------     functions for ReactSelect -------------
  const handleChangeWorks = e => {
    params.set('work', e.value);
    setParams(params);
  };

  const handleChangeProduct = e => {
    params.set('product', e.value);
    setParams(params);
  };
  // -----------------------------------------------------------------
  useEffect(() => {
    const typeWork = selectedWork(work);
    const typeProduct = selectedProduct(typeWork, product);
    setData(typeProduct);
  }, [work, product]);

  return (
    <Container>
      <Title>Наша продукція</Title>
      <CatalogForm
        handleChangeWorks={handleChangeWorks}
        handleChangeProduct={handleChangeProduct}
        handleChangeWorksMui={handleChangeWorksMui}
      />
      <BtnUpDown />
      {(data.length > 0 && <Cards data={data} />) || (
        <Title color="green" $margintop="150px">
          Немає даних за вашим запитом!!!
        </Title>
      )}
    </Container>
  );
};
