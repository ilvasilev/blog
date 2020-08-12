import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'


const ArticleCard = ({ title, imageUrl, content, author, _id }) => {
  const linkHref = `/article/${_id}`
  return (
    <div className={styles.container}>
      <img className={styles.cardImg} src={imageUrl}></img>      
      <h3 className={styles['article-name']} >      
        {title}
      </h3>
      <p>
        By <span>{author.username}</span>
      </p>
      <p>
        {content.substring(0, 100).concat('...')}
      </p>            
      <Link key={_id} to={linkHref} className={styles.links}>
        See more
      </Link>
    </div>
  )
}

export default ArticleCard