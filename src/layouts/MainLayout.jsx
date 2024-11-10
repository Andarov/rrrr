// rr
import { Outlet } from 'react-router-dom'

// components
import {Header, Footer} from '../components/index'

const MainLayout = () => {
  return (
    <div className='flex flex-col w-full min-h-screen'>
        <Header/>
        <main className='grow'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout