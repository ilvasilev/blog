import React from 'react'
import Link from '../link'
import styles from './index.module.css'


const ArticleCard = ({ title, imageUrl, author, _id }) => {
  const linkHref = `/article/${_id}`
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
      <Link 
      key='single-article'
      href={linkHref}
      title='See more...'
      />
    </div>
  )
}

export default ArticleCard