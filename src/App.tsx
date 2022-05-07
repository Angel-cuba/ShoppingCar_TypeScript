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
import Item from './Item/Item';

const getProducts = async (): Promise<CartItem[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { data, isLoading, error } = useQuery<CartItem[]>('products', getProducts);
  console.log('data', data);

  const getTotalItems = () => null;
  const handleAddToCart = (clickedItem: CartItem) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Error</div>;
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
      <Drawer
        anchor="bottom"
        open={true}
        variant="permanent"
        classes={{
          paper: 'drawer',
        }}
      ></Drawer>
    </Wrapper>
  );
};

export default App;
