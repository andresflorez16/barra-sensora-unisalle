import React from 'react'
import Dashboard from '../components/Dashboard'

const Home = () => {
  return (
    <div className='w-full mt-28 lg:mt-20'>
      <section className='min-h-screen'>
        <Dashboard barra='Barra 1' />
        <Dashboard barra='Barra 2' />
        <Dashboard barra='Barra 3' />
      </section>
      <section>
        <footer className='w-full h-20 backdrop-blur-md text-white flex flex-col justify-center items-center'>
          <p className='text-xs'>© {new Date().getFullYear()} Barra Sensora. Todos los derechos reservados.</p>
          {/* <p className='static md:absolute right-0 text-xs mr-2'>Developed by Andrés Florez</p> */}
        </footer>
      </section>
    </div>
  )
}

export default Home
