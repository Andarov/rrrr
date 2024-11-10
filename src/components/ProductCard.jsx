// rr
import { useDispatch } from "react-redux";

// rt
import { addProduct } from "../redux/slices/cartSlice";

const ProductCard = ({product}) => {
  const dispatch = useDispatch();

  const addToCard = ()=>{
    dispatch(addProduct(product)) 
  }

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
      <div className="flex justify-end">
        <button onClick={addToCard} className="bg-cyan-500 px-5 py-1 rounded-lg mt-2">Card</button>
      </div>
    </li>
  );
};

export default ProductCard;
