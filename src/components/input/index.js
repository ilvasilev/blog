import React from 'react'
import styles from './index.module.css'

const Input = ({label, id, value, onChange, type}) => {

  return (
    <div className={styles['center-input']}>
      <label htmlFor={id}>
        <p className={styles['label-span']}>{label}</p>
        <input className={styles['area-input']} type={type || 'text'} id={id} value={value} onChange={onChange} />
      </label>
    </div>
  )

}

export default Input