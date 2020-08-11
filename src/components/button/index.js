import React from 'react'
import styles from './index.module.css'

const SubmitButton = ({ title, clicked }) => {
  return (
    <button className={styles.submit} onClick={clicked} type="submit">{title}</button>
  )
}

export default SubmitButton