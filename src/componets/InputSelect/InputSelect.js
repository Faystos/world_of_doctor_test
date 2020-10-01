import React from 'react';

const InputSelect = ({onValueSelect}) => {
  return(
    <React.Fragment>
      <select className = "inpSelect" onChange = { onValueSelect }>
        <option value = '10'>10</option>
        <option value = '50'>50</option>
        <option value = '100'>100</option>
      </select>
    </React.Fragment>
  );
};

export default InputSelect;