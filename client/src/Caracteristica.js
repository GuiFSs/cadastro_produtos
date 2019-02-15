import React from 'react';

const Caracteristica = props => {
  return (
    <div>
      <label>
        Caracteristica:
        <input
          type="text"
          value={props.caracteristica}
          onChange={props.handleCaracteristicaChange}
          required
        />
        Valor:
        <input
          type="text"
          value={props.valor}
          onChange={props.handleValorChange}
          required
        />
      </label>
    </div>
  );
};

export default Caracteristica;
