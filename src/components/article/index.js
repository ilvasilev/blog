import React, { Component } from 'react'
import styles from './index.module.css'
import UserContext from '../../Context'
import SubmitButton from '../button'
import getCookie from '../../utils/cookie'
import { withRouter } from "react-router"
import starImg from '../../images/star.svg'
import { Link } from 'react-router-dom'

class Article extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rating: this.props.rating
    }
  }

  static contextType = UserContext
  
  editArticle = async (e) => {
    e.preventDefault()
    const articleId = (window.location.href).split('/')[4]

    this.props.history.push(`/editarticle/${articleId}`)
  }

  deleteArticle = async (e) => {
    
    e.preventDefault()

    const articleId = (window.location.href).split('/')[4]
    
    const promise = await fetch(`http://localhost:9999/api/origami/${articleId}`,{
      method: 'DELETE',
      body: JSON.stringify({ articleId }),
      headers: { 'Content-Type': 'application/json', 'Authorization': getCookie('x-auth-token')}
    })

    const data = await promise.json()
    .then(data => {      
      this.props.history.push('/')
    })
    
  }
  
  users() {
    const { user } = this.context
    const loggedIn = user && user.loggedIn    
    
    if(loggedIn && this.props.authorId === user.id) {      
      return([
      <SubmitButton clicked={this.editArticle} key='submit' title='Edit article' />,
      <SubmitButton clicked={this.deleteArticle} key='delete' title='Delete article' />
      ])
    }
  }

  handleClick = async (value) => {   
  const articleId = (window.location.href).split('/')[4] 

  await fetch(`http://localhost:9999/api/origami/rating/${articleId}`, {
      method: 'PUT',
      body: JSON.stringify({ value }),
      headers: { 'Content-Type': 'application/json', 'Authorization': getCookie('x-auth-token')}
    }).then(response => response.json())
    .then((data) => {      
      this.setState({
        rating: data.rating
      })
    })
    
    
  } 



  render() {
    return(
      <div className={styles.container}>              
      <p>           
        By {this.props.author}
      </p>      
      <p >      
        {this.props.content}
      </p>      
      {this.users()}
      <p>      
      <Link onClick={() => this.handleClick(1)}><img src={starImg} className={styles.star}></img></Link>
      <Link onClick={() => this.handleClick(2)}><img src={starImg} className={styles.star}></img></Link>
      <Link onClick={() => this.handleClick(3)}><img src={starImg} className={styles.star}></img></Link>
      <Link onClick={() => this.handleClick(4)}><img src={starImg} className={styles.star}></img></Link>
      <Link onClick={() => this.handleClick(5)}><img src={starImg} className={styles.star}></img></Link>
      </p>
      <p>
    Rating: <span>{this.state.rating}</span> out of 5 stars
      </p>
    </div>
    )
  }
}

export default withRouter(Article)