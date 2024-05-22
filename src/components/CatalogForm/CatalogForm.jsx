import React from 'react';
import Select from 'react-select';
import { CatalogFormStyle } from './CatalogForm.styled';
import { optionsProduct, optionsWorks } from 'helpers/catalogFormOption';
import { useQueryLocation } from 'helpers/queryLocation';
import BasicSelect from 'components/SelectMui/SelectMui';

export const CatalogForm = ({ handleChangeWorks, handleChangeProduct }) => {
  const queryUrlLocation = useQueryLocation();
  const selectedWorkValue = queryUrlLocation.get('work');
  const selectedProductValue = queryUrlLocation.get('product');

  // Знаходимо відповідні об'єкти для react-select
  const defaultWorkValue = optionsWorks.find(
    option => option.value === selectedWorkValue
  );
  const defaultProductValue = optionsProduct.find(
    option => option.value === selectedProductValue
  );

  return (
    <CatalogFormStyle>
      <BasicSelect />
      <Select
        options={optionsWorks}
        defaultValue={defaultWorkValue}
        placeholder="Види робіт"
        onChange={handleChangeWorks}
      />
      <Select
        options={optionsProduct}
        defaultValue={defaultProductValue}
        placeholder="Види продукту"
        onChange={handleChangeProduct}
      />
    </CatalogFormStyle>
  );
};
