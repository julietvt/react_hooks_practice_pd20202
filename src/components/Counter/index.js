import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Counter(prop) {
  // step - это props (пропсы) которые пришли в компонент
  const { step } = prop;
  // состояние value, где setValue - функция которая будет заниматься изменением состояния
  // 10 - начальное значение
  // useState - это ключок react hook для изменения состояния
  const [value, setValue] = useState(10);
  function functionDec() {
    setValue(value - step);
  }
  function functionInc() {
    setValue(value + step);
  }
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={functionDec}>-</button>
      <button onClick={functionInc}>+</button>
    </div>
  );
}

Counter.propTypes = {
  step: PropTypes.number,
};
Counter.defaultProps = {
  step: 1,
};

export default Counter;
