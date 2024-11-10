const ProductCard = ({product}) => {
  const { price, name, image } = product.fields;

  return (
    <li className="w-full" key={product.id}>
      <img className="w-full h-40 object-cover" src={image[0].url} alt="" />
      <h3 className="text-lg">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h3>
      <p>
        Price: <span className="text-cyan-700">{price}$</span>
      </p>
    </li>
  );
};

export default ProductCard;
