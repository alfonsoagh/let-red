import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout(){
  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column'}}>
      <Navbar />
      <main style={{flex:1}}>
        <div className='container'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}