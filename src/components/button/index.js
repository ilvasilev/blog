import React from 'react'
import styles from './index.module.css'

const SubmitButton = ({ title }) => {
  return (
    <button type="submit" className={styles.button} type="submit">{title}</button>
  )
}

export default SubmitButton