// rr
import { useLoaderData } from "react-router-dom"

// util
import { requestInstance } from "../util/request"

// components
import {ProductCard} from "../components/index"

// loaderFunc
export const getData = async ()=>{
  const req = await requestInstance("/javascript-store-products")
  return req.data
}

const Home = () => {
  const products = useLoaderData();
  
  return (
    <>
      <section className="py-10">
        <div className="container">
          <h2 className="text-xl font-semibold mb-5">Products</h2>

          <ul className="grid grid-cols-3 gap-10">
            {
              products.map((product)=>{
                return(
                  <ProductCard key={product.id} product={product}/>
                )
              })
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default Home