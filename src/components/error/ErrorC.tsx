import React from 'react';
import cl from "./ErrorC.module.scss";

const ErrorC = () => {
    return (
        <div className={cl.error}>
            Произошла ошибка. Обновите страницу
        </div>
    );
};

export default ErrorC;
