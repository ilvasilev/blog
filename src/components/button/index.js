import React from 'react'
import styles from './index.module.css'

const SubmitButton = ({ title }) => {
  return (
    <button className={styles.submit} type="submit">{title}</button>
  )
}

export default SubmitButton