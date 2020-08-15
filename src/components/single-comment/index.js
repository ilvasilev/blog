import React, { Component } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import SubmitButton from '../../components/button'
import getCookie from '../../utils/cookie'
import thumbs from '../../images/thumbs.svg'
class CommentComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      likes: this.props.like
    }
    
  } 

  handleClick = async (event) => {
    event.preventDefault()    
    const commentId = this.props._id
    
    
   const response = await fetch('http://localhost:9999/api/comment', {
      method: 'PUT',
      body: JSON.stringify({ commentId }),
      headers: { 'Content-Type': 'application/json', 'Authorization': getCookie('x-auth-token')}
    })

    const data = await response.json()
    
    this.setState({
      likes: data.like
    })
  }  

  render() {
    return (
      <div className={styles.container}>
    <p>
        {this.props.createdBy}
    </p>
    <p>
        {this.props.comment}
    </p>
    <p>
        <span>Likes: {this.state.likes}</span>
    </p>
    <p>
    <button type='submit' onClick={this.handleClick}><img src={thumbs} className={styles.thumb}></img></button>
    </p>
    </div>
    )
  }
  
}

export default CommentComponent