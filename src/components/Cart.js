export default function Cart(props) {
  const { quantity = 0, handleBasketShow = Function.prototype} = props;
  return (
    <div
      className="cart  pink lighten-3  white-text"
      onClick={handleBasketShow}
    >
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span className="card-quantity"> {quantity} </span> : null}
    </div>
  );
}
