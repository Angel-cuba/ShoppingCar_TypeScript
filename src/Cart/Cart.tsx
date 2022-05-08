import ItemInCart from '../CartItem/CartItem';
//styles
import { Wrapper } from './Cart.styles';
//Types
import { CartItem } from '../types/types';

type Props = {
  cartItems: CartItem[];
  addToCart: (clickedItem: CartItem) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  //Calculate cart total
  const calculateTotal = (items: CartItem[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);
  return (
    <Wrapper>
      <h1>Shopping Cart</h1>
      <h2>{cartItems.length === 0 ? <span>Your cart is empty</span> : null}</h2>

      {cartItems.map((item) => (
        <ItemInCart
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: £{calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};
export default Cart;
