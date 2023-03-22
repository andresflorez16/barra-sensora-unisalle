import React, { useEffect, useState, useRef } from 'react'
import Loader from './Loader'
import Table from './Table'

import { getData } from '../firebase/database'
import Chart from './Chart'

const Dashboard = ({ barra }) => {
  const barraClean = barra.replace(/\s/g, '')

  const [data, setData] = useState([])
  const [empty, setEmpty] = useState(false)
  const [date, setDate] = useState('')
  const [queryData, setQueryData] = useState('')
  const queryDate = useRef(null)

  useEffect(() => {
    getData(barraClean, (res) => {
      if (!res) setEmpty(true)
      else {
        setEmpty(false)
        setData(res)
        setQueryData(res)
      }
    })
  }, [])

  const handleChangeDate = e => {
    const newDate = e.target.value.split('-').join('/')
    setDate(newDate)
    const datesSplitted = data.values[0].map(dataDate => dataDate.split(' ')[0])
    const filteredIndexes = datesSplitted.map((dateData, index) => {
      if (dateData === newDate) return index
      else return null
    }).filter(index => index !== null)
    if (filteredIndexes.length === 0) setQueryData({ ...data, values: [], ids: [] })

    let filteredData = []
    data.values.forEach((values) => {
      const filteredValues = values.filter((value, indexValue) => {
        return filteredIndexes.includes(indexValue)
      })
      filteredData.push(filteredValues)
    })
    filteredData.length > 0 && setQueryData({ ...data, values: filteredData, ids: Array(filteredIndexes.length).fill(0) })
  }

  const handleRealtime = () => {
    getData(barraClean, (res) => {
      if (!res) setEmpty(true)
      else {
        setEmpty(false)
        setData(res)
        setQueryData(res)
      }
    })
    setDate('')
    queryDate.current.value = ''
  }

  return (
    <div id={barraClean} className='w-full grid place-items-center my-5'>
      {
        empty && <h1 className='text-xl sm:text-3xl font-bold'>No se tienen datos de la {barra}</h1>
      }
      {
        !empty && data.length === 0 && <Loader />
      }
      {
        !empty && data.length > 0 && (
          <div className='w-full sm:w-4/5 text-center'>
            <div className='flex justify-center items-center gap-3 backdrop-blur-md flex-col xl:flex-row'>
              <div className='flex flex-col gap-3 '>
                <span className='font-bold text-sm'>Búsqueda por fecha:</span>
                <input type='date' ref={queryDate} onChange={handleChangeDate} className='p-0.5 rounded-md' />
                {
                  date.length > 0 && (
                    <button onClick={handleRealtime} className='bg-[#0a3356] text-white p-2 rounded-md hover:shadow-xl hover:bg-[#0e497c] focus:shadow-xl transition-all duration-300'>Realtime</button>
                  )
                }
              </div>
              <div>
                <h1 className='font-bold text-2xl'>{barra}</h1>
                <Table data={queryData} />
              </div>
              <Chart barra={barra} data={queryData} />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Dashboard
