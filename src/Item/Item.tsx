import Button from '@material-ui/core/Button';
import { AddShoppingCart } from '@material-ui/icons';

//Types
import { CartItem } from '../types/types';

//styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItem;
  handleAddToCart: (clickedItem: CartItem) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <h3>£ {item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>
      <AddShoppingCart />
    </Button>
  </Wrapper>
);

export default Item;
