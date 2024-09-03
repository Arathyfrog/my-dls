import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick, variant = 'primary' }) => (
  <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;