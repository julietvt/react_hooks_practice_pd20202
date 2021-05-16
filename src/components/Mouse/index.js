import React from 'react';
import { useMouse } from './useMouse';

export default function Mouse(props) {
  const [x, y] = useMouse();
  return (
    <img src="https://cdnimg.rg.ru/img/content/209/39/28/h_54702730_d_850.jpg" />
  );
}
