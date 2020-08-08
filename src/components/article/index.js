import React from 'react'
import styles from './index.module.css'

const Article = ({ title, content, imageUrl, author, _id }) => {
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
        {author}
      </p>
      <a href={`/article/${_id}`}>See more</a>
    </div>
  )
}

export default Article