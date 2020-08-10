import React, { Component } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const CommentComponent = ({ comment, createdBy, like, _id }) => {
  return (
    <div className={styles.container}>
    <p>
        {createdBy}
    </p>
    <p>
        {comment}
    </p>
    <p>
        <span>Likes: {like}</span>
    </p>
    </div>
  )
}

export default CommentComponent