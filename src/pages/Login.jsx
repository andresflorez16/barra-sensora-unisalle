import React, { useState } from 'react'
import Salle from '../components/logos/Salle'
import { useUser } from '../store/store'
import { signIn } from '../firebase/auth'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'

const Login = () => {
  const user = useUser(state => state.user)
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = Object.fromEntries(new FormData(e.target))

    if (email.length === 0 || password.length === 0) {
      setErrorMsg('Por favor, ingrese su correo y contraseña')
    } else {
      const response = await signIn({ email, password })
      if (response.error) setErrorMsg(response.message)
      else navigate('/')
    }
  }

  return (
    <div className='bg-login h-screen w-full grid place-items-center'>
      <div className='max-w-xl w-full backdrop-blur-xl shadow-xl p-4 flex flex-col h-auto gap-10 rounded-md'>
        <header className='flex items-center justify-between'>
          <Salle />
          <h1 className='text-lg sm:text-2xl md:text-3xl font-bold'>Iniciar sesión</h1>
        </header>
        {
          user === undefined
            ? (
              <>
                <span className='text-black text-xl'>Cargando datos de usuario...</span>
                <Loader />
              </>
              )
            : (
              <form onSubmit={handleSubmit} className='flex flex-col w-full justify-center items-center text-xl gap-4 font-bold'>
                <label>Correo electrónico</label>
                <input required type='text' placeholder='Email' name='email' className='border-none font-normal outline-none p-2 rounded-md w-full hover:shadow-xl focus:shadow-xl transition-shadow duration-500' />
                <label className='mt-5'>Contraseña</label>
                <input required type='password' name='password' placeholder='Contraseña' className='border-none font-normal outline-none p-2 rounded-md w-full hover:shadow-xl focus:shadow-xl transition-shadow duration-500' />
                {
                  errorMsg.length > 0 && <span className='text-red-300'>{errorMsg}</span>
                }
                <button type='submit' className='bg-[#0a3356] mt-5 text-white px-8 py-3 rounded-md hover:shadow-xl hover:bg-[#0e497c] focus:shadow-xl transition-all duration-300'>Ingresar</button>
              </form>
              )
        }
      </div>
    </div>
  )
}

export default Login
