import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    setValue(e.taget.value);
  };

  return [value, onChange, setValue];
}

export default useInput;
