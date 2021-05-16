import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format, addSeconds, startOfDay } from 'date-fns';

function Stopwatch() {
  const [value, setValue] = useState(startOfDay(new Date()));
  const [isRun, setIsRun] = useState(false);

  useEffect(() => {
    if (isRun) {
      const v = setTimeout(() => {
        setValue(addSeconds(value, 1));
      }, 1000);
      return () => {
        clearTimeout(v);
      };
    }
  }, [isRun, value]);

  return (
    <>
      <h1>{format(value, 'HH:mm:ss')}</h1>
      <button
        onClick={() => {
          setIsRun(!isRun);
        }}
      >
        {isRun ? 'stop' : 'start'}
      </button>
      <button
        onClick={() => {
          setValue(startOfDay(new Date()));
        }}
      >
        reset
      </button>
    </>
  );
}

export default Stopwatch;
