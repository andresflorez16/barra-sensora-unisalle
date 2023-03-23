import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  registerables
} from 'chart.js'
import { Chart as Canvas } from 'react-chartjs-2'

ChartJS.register(
  ...registerables,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = (title) => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          title: {
            display: false
          },
          font: {
            size: 12
          }
        },
        align: 'start'
      },
      title: {
        display: true,
        text: `Datos de la ${title}`
      },
      decimation: { enabled: true }
    },
    scales: {
      x: {
        ticks: {
          font: { size: 10 },
          padding: 0,
          display: false
        },
        title: {
          display: true,
          text: 'Datos através del tiempo'
        }
      }
    }
  }
}

const colors = ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)', 'rgb(294, 203, 109)']

export const dataChart = ({ data }) => {
  // console.log(data)
  const variables = data.keys.slice(2)
  const labels = data.values[0].slice(0, 240).reverse()
  return {
    labels,
    datasets: variables.map((variable, index) => {
      const values = data.values[index + 1].slice(0, 240).reverse()
      return {
        label: variable,
        data: values,
        borderColor: '#0a3356',
        backgroundColor: colors[index],
        tension: 0.1,
        borderWidth: 1
      }
    })
  }
}

function Chart ({ barra, data }) {
  return (
    <div className='backdrop-blur-md sm:h-64 sm:w-full w-[90%]'>
      <Canvas type='line' className='bg-[#f2f2f2ff] min-h-[20rem] sm:min-h-0 rounded-md lg:min-w-[35rem]' options={options(barra)} data={dataChart({ data })} />
    </div>
  )
}

export default Chart
