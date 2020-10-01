import React from 'react';
import ErrorIndicator from '../ErrorIndicator';
import Loader from '../Loader';

const DropPownMatch = ({ data, load, error, renderItem, searchValue, selectValue }) => {    
  const hasData = (data && !load);
  let viewError = error ? <ErrorIndicator /> : null
  let viewLoader = load ? < Loader /> : null;
  let viewItem = hasData ? renderItem(data, selectValue, searchValue) : null;      
  return(
    <div className="blockMatch">
      { viewError }
      { viewLoader }
      { viewItem }
    </div>
  );  
}

export default DropPownMatch;