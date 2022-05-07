import { useState } from 'react';
import { useQuery } from 'react-query';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCarIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

//Styles
import { Wrapper } from './styles/styles';
import { CartItem } from './types/types';

const getProducts = async (): Promise<CartItem[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItem[]>('products', getProducts);
  console.log('data', data);
  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
};

export default App;
