import React from 'react';

const InputSelect = ({ onValueSelect }) => {
  return(
    <React.Fragment>
      <select className = "inpSelect" onChange = { onValueSelect }>
        <option value = '10'>10</option>
        <option value = '20'>20</option>
        <option value = '50'>50</option>
      </select>
    </React.Fragment>
  );
};

export default InputSelect;