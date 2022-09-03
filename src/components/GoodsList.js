import { GoodsListItem } from "./GoodsListItem";

function GoodsList(props) {
  const { goods = [],addToBasket } = props;

  if (!goods.length) {
    return <h3>Nothing found</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsListItem key={item.id} {...item} addToBasket = {addToBasket} />
      ))}
    </div>
  );
}
export { GoodsList };
