import React from 'react';
import errorImg from '../../img/error.png';

const ErrorIndicator = () => {
  return(
    <div className = "blockError">
      <img className = "errorImg" src = {errorImg} alt='error'/>
      <p className = "errorMsg">Произошла не предвиденная ошибка, попробуйте повторить запрос позже.</p>
    </div>
  );
};

export default ErrorIndicator;