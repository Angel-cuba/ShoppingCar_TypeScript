import ItemInCart from '../CartItem/CartItem';
//styles
import { Wrapper } from './Cart.styles';
//Types
import { CartItem } from '../types/types';
import { Button } from '@material-ui/core';

type Props = {
  cartItems: CartItem[];
  addToCart: (clickedItem: CartItem) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const getTotalItems = (items: CartItem[]) =>
    items.reduce((acc: number, item) => acc + item.quantity, 0);
  const handleAddToCart = (clickedItem: CartItem) => addToCart(clickedItem);
  const handleRemoveFromCart = (id: number) => removeFromCart(id);
  const handleClearCart = () => {
    cartItems.forEach((item) => removeFromCart(item.id));
  };
  return (
    <Wrapper>
      <h1>Cart</h1>
      <h2>{cartItems.length === 0 ? <span>Your cart is empty</span> : null}</h2>
      <h2>{getTotalItems(cartItems)} items</h2>

      {cartItems.map((item) => (
        <ItemInCart
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <Button onClick={handleClearCart}>Clear Cart</Button>
    </Wrapper>
  );
};
export default Cart;
