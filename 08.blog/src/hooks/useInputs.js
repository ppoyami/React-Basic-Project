import { useState } from 'react';

function useInputs(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    const name = e.target.name;
    const changeValue = e.target.value;
    setValue({ ...value, [name]: changeValue });
  };

  return [value, onChange];
}

export default useInputs;
