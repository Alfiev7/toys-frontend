import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js'
import { PolarArea } from 'react-chartjs-2'

// Services
import { toyService } from '../services/toy.service.js'

// Store
import { loadToys } from '../store/actions/toy.action.js'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export function ToyChart() {
  const toys = useSelector((storeState) => storeState.toyModule.toys)

  useEffect(() => {
    loadToys()
  }, [])

  const toysLabels = toyService.getLabels()
  const dataLabels = toysLabels.map((label) => {
    return toys.reduce((acc, toy) => {
      if (toy.labels && toy.labels.includes(label)) acc++
      return acc
    }, 0)
  })

  const data = {
    labels: toysLabels,
    datasets: [
      {
        label: 'Number of Toys per Label',
        data: dataLabels,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
      },
    ],
  }

  return (
    <div className='toy-chart'>
      <PolarArea data={data} />
    </div>
  )
}