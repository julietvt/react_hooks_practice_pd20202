import { useState, useEffect } from 'react';
const useMouse = () => {
  const [mouse, setMouse] = useState([0, 0]);
  useEffect(() => {
    const handleMove = ({ clientX, clientY }) => setMouse([clientX, clientY]);
    document.body.addEventListener('mousemove', handleMove);
    return () => {
      document.body.removeEventListener('mousemove', handleMove);
    };
  }, []);
  return mouse;
};
export default useMouse;
