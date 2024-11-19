import React from 'react';

const OrdersTable = () => {
  return (
    <div className="orders-table">
      <h4>Órdenes con fecha límite en esta semana</h4>
      <div style={{ overflowX: 'auto' }}> {/* Contenedor con desplazamiento horizontal */}
        <table>
          <thead>
            <tr>
              <th>Orden</th>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Asignado a</th>
              <th>Modelo</th>
              <th>Status</th>
              <th>Prioridad</th>
              <th>Fecha compromiso</th>
              <th>Fecha Entregado</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#001</td>
              <td>10/11/2024</td>
              <td>Juan Pérez</td>
              <td>Asignado</td>
              <td>Modelo X</td>
              <td>En Proceso</td>
              <td>Alta</td>
              <td>12/11/2024</td>
              <td>-</td>
              <td>$150</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
