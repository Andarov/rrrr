// rr
import { Outlet } from 'react-router-dom'

// components
import {Header, Footer} from '../components/index'

const MainLayout = () => {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default MainLayout