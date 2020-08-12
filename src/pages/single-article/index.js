import React, { Component } from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/wrapper'
import Title from '../../components/title'
import Article from '../../components/article'
import Input from '../../components/input'
import SubmitButton from '../../components/button'
import authenticate from '../../utils/authenticate/authenticate'
import UserContext from '../../Context'
import getCookie from '../../utils/cookie'
import CommentComponent from '../../components/single-comment'

class SingleArticle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      singleArticle: {},
      author: '',
      comment: '',
      articleId: '',
      comments: [],
      authorId: ''
    }
  }

  static contextType = UserContext

  componentDidMount = async () => {      
    const articleId = this.props.match.params.articleid    
    
    const promise = await fetch(`http://localhost:9999/api/origami/${articleId}`)

    const commentPromise = await fetch(`http://localhost:9999/api/origami/${articleId}/comments`)

    const singleArticle = await promise.json()    

    const allComments = await commentPromise.json()   
    
    this.setState ({
      singleArticle: singleArticle,
      author: singleArticle.author.username,
      articleId,
      comments: allComments.comments,
      authorId: singleArticle.author._id
    })    
  }

  handleChange = (event, type) => {
    const newState = {}
    newState[type] = event.target.value

    this.setState(newState)
  }  

  handleSubmit = async (event) => {
    event.preventDefault()    
    const {comment, articleId} = this.state
    
    await fetch('http://localhost:9999/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        comment,
        articleId      
      }),
      headers: { 'Content-Type': 'application/json', 'Authorization': getCookie('x-auth-token')}
    }).then((data) => {
      this.componentDidMount()      
    })
  }

  renderComments() {
    const { comments } = this.state

    return comments.map((comment, index) => {      
      return (
        <CommentComponent key={comment._id} index={index} {...comment} />
      )
    })    
  }  

  render() {
    const {comment} = this.state
    return (
      <Wrapper>
        <img className={styles.banner} src={this.state.singleArticle.imageUrl}></img>
        <div className={styles.container}>          
        <Title title={this.state.singleArticle.title} />
        <Article        
        content={this.state.singleArticle.content}
        imageUrl={this.state.singleArticle.imageUrl}
        author={this.state.author}
        authorId={this.state.authorId}
        />        
        <form onSubmit={this.handleSubmit}>          
          <Input
          value={comment}
          onChange={(e) => this.handleChange(e, 'comment')}
          label='Comment'
          id='Comment'
          />          
          <SubmitButton title='Share' />
          </form>
          {this.renderComments()}
        </div>        
      </Wrapper> 
    )
  }
}

export default SingleArticle