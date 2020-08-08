import React from 'react'
import styles from './index.module.css'

const ArticleCard = ({ title, imageUrl, author, _id }) => {
  return (
    <div className={styles.container}>      
      <p >      
        <span>Author: {author.username}</span>
      </p>
      <p >      
        <span>Title: {title}</span>
      </p>      
      <p >      
      <span>Image: {imageUrl}</span>
      </p>
      <a href={`/article/${_id}`}>See more</a>
    </div>
  )
}

export default ArticleCard