import React, { Component } from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/wrapper'
import Title from '../../components/title'
import Input from '../../components/input'
import SubmitButton from '../../components/button'
import authenticate from '../../utils/authenticate/authenticate'
import UserContext from '../../Context'
import getCookie from '../../utils/cookie'
import { withRouter } from "react-router"
import ErrorMessage from '../../components/error-message'

class EditArticle extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: '',
      imageUrl: ''
    }
  }
  
  static contextType = UserContext

  componentDidMount = async () => {
    const articleId = (window.location.href).split('/')[4]
    const promise = await fetch(`http://localhost:9999/api/origami/${articleId}`)
    const data = await promise.json()

    this.setState({
      title: data.author.username,
      content: data.content,
      title: data.title,
      imageUrl: data.imageUrl
    })
  }

  handleChange = (event, type) => {
    const newState = {}
    newState[type] = event.target.value

    this.setState(newState)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const articleId = (window.location.href).split('/')[4]
    const {title, content, imageUrl} = this.state

    if (title && content && imageUrl) {
      await fetch(`http://localhost:9999/api/origami/${articleId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content, imageUrl }),
        headers: { 'Content-Type': 'application/json', 'Authorization': getCookie('x-auth-token')}
      }).then(response => response.json())
      .then((data) => {      
        this.props.history.push(`/article/${articleId}`)
      })
    }

    this.setState ({errorMsg: 'One or more fields are missing'})

    return

  }

  openWidget = (e) => {
    e.preventDefault()

    const widget = window.cloudinary.createUploadWidget({
      cloudName: 'ivasilev',
      uploadPreset: 'softuniblogproject'
    }, (error, result) => {      
      if (result.event === 'success') {        
        this.setState({
          imageUrl: result.info.url          
        })
      }
    })
    widget.open()
  }

  render() {
    const {title, content, imageUrl} = this.state
    
    return (
        <Wrapper>
          <form className={styles.container} onSubmit={this.handleSubmit}>
          <Title title={'Update article'} />
          <Input
          value={title}
          onChange={(e) => this.handleChange(e, 'title')}
          label='Title'
          id='title'
          />
          <textarea 
          rows="15"
          cols="120"
          value={content}
          onChange={(e) => this.handleChange(e, 'content')}
          label='Content'
          id='content'
          ></textarea>  
          <p><img className={styles.imageurl} src={this.state.imageUrl}></img></p>
          <p><button onClick={this.openWidget}>Upload image</button></p>      
          <SubmitButton title='UpdateArticle' />
          </form>
        </Wrapper>
        
    )
  }
}

export default withRouter(EditArticle)