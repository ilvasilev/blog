import React, { Component } from 'react'
import styles from './index.module.css'
import UserContext from '../../Context'
import SubmitButton from '../button'
import getCookie from '../../utils/cookie'
import { withRouter } from "react-router"


class Article extends Component {
  constructor(props) {
    super(props)
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

  render() {
    return(
      <div className={styles.container}>        
      <p >      
        {this.props.title}
      </p>
      <p>      
        {this.props.author}
      </p>      
      <p >      
        {this.props.content}
      </p>      
      {this.users()}
    </div>
    )
  }
}

export default withRouter(Article)