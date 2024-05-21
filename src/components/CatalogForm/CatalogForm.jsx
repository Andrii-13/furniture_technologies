import React from 'react';
import Select from 'react-select';
import { CatalogFormStyle } from './CatalogForm.styled';

const optionsWorks = [
  { value: 'all', label: 'всі' },
  { value: 'external', label: 'зовнішні роботи' },
  { value: 'internal', label: 'внутрішні роботи' },
];

const optionsProduct = [
  { value: 'all', label: 'всі' },
  { value: 'angle', label: 'кут' },
  { value: 'profile', label: 'профіль' },
  { value: 'lighthouse', label: 'маяк' },
];

export const CatalogForm = ({ handleChangeWorks, handleChangeProduct }) => {
  return (
    <CatalogFormStyle>
      <Select
        options={optionsWorks}
        placeholder="Види робіт"
        onChange={handleChangeWorks}
      />
      <Select
        options={optionsProduct}
        placeholder="Види продукту"
        onChange={handleChangeProduct}
      />
    </CatalogFormStyle>
  );
};
