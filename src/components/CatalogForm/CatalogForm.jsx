import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'all', label: 'всі' },
  { value: 'external', label: 'зовнішні роботи' },
  { value: 'internal', label: 'внутрішні роботи' },
];

export const CatalogForm = () => {
  return (
    <div>
      <Select
        //defaultValue={color}
        // onChange={handleSelect}
        options={options}
        placeholder="Види робіт"
      />
    </div>
  );
};
