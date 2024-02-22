
import React from 'react';
import styles from './Button.module.scss'

interface ButtonProps {
  backgroundColor?: string;
  textColor?: string;
  onClick?: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ backgroundColor, textColor, onClick, label }) => {

  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    border: `1px solid ${textColor}`
  };

  return (
    <button style={buttonStyle} className={styles.btn} onClick={onClick}>
      {label}
    </button> 
  )
}

export default Button;