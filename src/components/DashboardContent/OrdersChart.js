import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar los elementos de Chart.js necesarios
ChartJS.register(ArcElement, Tooltip, Legend);

const OrdersChart = () => {
  const data = {
    labels: ['Por Asignar', 'En Proceso', 'Por Entregar'],
    datasets: [
      {
        label: 'Órdenes',
        data: [5, 2, 3], // Datos de prueba (puedes cambiarlo por datos reales)
        backgroundColor: [ '#F95454' ,'#77CDFF', '#0D92F4'], // Colores del gráfico
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default OrdersChart;
