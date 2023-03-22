import React from 'react'

const Table = ({ data }) => {
  return (
    <div className='max-h-52 w-full max-w-xs sm:max-w-[40rem] overflow-auto'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs uppercase bg-[#0a3356] text-white'>
          <tr>
            {
              data.keys.map((key, index) => (
                <th scope='col' className='px-4 py-1' key={key}>
                  {key}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            data.values[0].length > 0
              ? (
                  data.ids.map(($, index) => (
                    <tr key={index} className='bg-white border-b'>
                      <td className='px-4 py-1 text-black'>
                        {data.ids.length - (index + 1)}
                      </td>
                      {
                      data.values.map((valuesData, indexValue) => (
                        <td className='px-4 py-1 w-full text-black' key={indexValue}>
                          {
                            valuesData[index]
                          }
                        </td>
                      ))
                    }
                    </tr>
                  ))
                )
              : (
                <tr className='bg-white border-b'>
                  <td colSpan={data.keys.length} className='px-6 py-1 text-black'>No se tienen datos para esa fecha</td>
                </tr>
                )
          }
        </tbody>
      </table>
    </div>

  )
}

export default Table
