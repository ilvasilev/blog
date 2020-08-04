import React from 'react'
import styles from './index.module.css'

const Origam = ({ title, content, imageUrl, author, _id }) => {
  return (
    <div className={styles.container}>      
      <p >      
        {title}
      </p>
      <p >      
        {content}
      </p>
      <p >      
        {imageUrl}
      </p>
      <p >      
        {author.username}
      </p>
      <a href={`/publications/${_id}`}>See more</a>
    </div>
  )
}

export default Origam