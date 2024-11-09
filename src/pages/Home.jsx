// rr
import { useLoaderData } from "react-router-dom"

// util
import { requestInstance } from "../util/request"

// loaderFunc
export const getData = async ()=>{
  const req = await requestInstance("/javascript-store-products")
  return req.data
}

const Home = () => {
  const products = useLoaderData();
  
  return (
    <div>Home</div>
  )
}

export default Home