// rr
import { Link } from 'react-router-dom'
// rt
import { useSelector } from 'react-redux'

const Header = () => {
  const cartProducts = useSelector((state)=> state.cart.value)

  return (
    <header className='py-8 bg-cyan-500'>
      <div className='flex justify-between items-center container'>
        <Link className='text-2xl font-semibold text-red-700' to='/'>Something</Link>

        <nav>
          <ul className='flex items-center gap-10'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </nav>

        <Link>Cart: {cartProducts.length}</Link>
      </div>
    </header>
  )
}

export default Header