import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { CatalogFormStyle } from './CatalogForm.styled';
import { useSearchParams } from 'react-router-dom';

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

export const CatalogForm = () => {
  const [work, setWork] = useSearchParams();

  const handleChangeWorks = e => {
    setWork(e.value);
  };
  useEffect(() => {
    const filmQuery = work.get('film');
    console.log(filmQuery);
  }, [work]);

  return (
    <CatalogFormStyle>
      <Select
        options={optionsWorks}
        placeholder="Види робіт"
        onChange={handleChangeWorks}
      />
      <Select options={optionsProduct} placeholder="Види продукту" />
    </CatalogFormStyle>
  );
};
