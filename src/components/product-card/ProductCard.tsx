import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CategoryItem } from "../../store/categories/category.type";
import Button, { Button_type_classes } from "../button/Button";
import {
  Footer,
  Name,
  Price,
  ProductCartContainer,
} from "./product-card.styles";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addItemHandler = () => {
    dispatch(addItemsToCart(cartItems, product));
  };
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price} </Price>
      </Footer>
      <Button
        buttonType={Button_type_classes.inverted}
        onClick={addItemHandler}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
