// import productsData from '../data/productsData.json';

export const selectedProduct = (data, product) => {
  if (product === 'all') {
    return data;
  }

  return data.filter(productItem => productItem.name === product);
};
