import React, { useEffect, useState } from 'react'
import Salle from './logos/Salle'
import { CSVLink } from 'react-csv'
import { useUser } from '../store/store'
import DownloadIcon from './logos/Download'
import { getDataStore } from '../firebase/database'

const Header = () => {
  const user = useUser(state => state.user)
  const signOut = useUser(state => state.signOut)
  const [data, setData] = useState(null)

  useEffect(() => {
    getDataStore((res) => {
      setData(res)
    })
  }, [])

  return (
    <div className='w-full fixed top-0 z-10 backdrop-blur-md'>
      <header className='block sm:flex justify-between items-center p-2'>
        <Salle />
        <nav className='flex justify-between sm:justify-center items-center gap-4 mt-3'>
          <h1 className='font-bold'>Bienvenido, {user?.name || 'Admin'}</h1>
          <div className='flex justify-center items-center gap-2'>
            {
              data &&
                <CSVLink filename='barra-sensora-data.csv' data={data} className='bg-[#0a3356] rounded-md'>
                  <DownloadIcon />
                </CSVLink>
            }
            <button onClick={signOut} className='bg-red-600 text-white p-2 rounded-md hover:shadow-xl hover:bg-red-900 focus:shadow-xl transition-all duration-300'>Salir</button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
