import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', onClick, ...props }) => {
  return (
    <button className={`shared-btn shared-btn-${variant}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
