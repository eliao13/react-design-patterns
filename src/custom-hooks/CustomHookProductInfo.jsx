import useResource from "./useResource";

export default function CustomHookProductInfo({ productId }) {
  const product = useResource(`https://dummyjson.com/products/${productId}`);

  const { title, price, description, rating } = product || {};

  return product ? (
    <>
      <h3>{title}</h3>
      <p>${price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  ) : (
    <p>Loading...</p>
  );
}
