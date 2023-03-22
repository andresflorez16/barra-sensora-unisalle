import React from 'react'
import Salle from './logos/Salle'

import { useUser } from '../store/store'

const Header = () => {
  const user = useUser(state => state.user)
  const signOut = useUser(state => state.signOut)

  return (
    <div className='w-full fixed top-0 z-10 backdrop-blur-md'>
      <header className='block sm:flex justify-between items-center p-2'>
        <Salle />
        <nav className='flex justify-between sm:justify-center items-center gap-4 mt-3'>
          <h1 className='font-bold'>Bienvenido, {user?.name || 'Admin'}</h1>
          <button onClick={signOut} className='bg-red-600 text-white p-2 rounded-md hover:shadow-xl hover:bg-red-900 focus:shadow-xl transition-all duration-300'>Salir</button>
        </nav>
      </header>
    </div>
  )
}

export default Header
