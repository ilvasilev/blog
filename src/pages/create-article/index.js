import React, { Component } from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/wrapper'
import Title from '../../components/title'
import Input from '../../components/input'
import SubmitButton from '../../components/button'
import authenticate from '../../utils/authenticate/authenticate'
import UserContext from '../../Context'
import getCookie from '../../utils/cookie'
import ErrorMessage from '../../components/error-message'

class CreateArticle extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: '',
      imageUrl: '',
      errorMsg: ''       
    }
  }

  static contextType = UserContext

  handleChange = (event, type) => {
    const newState = {}
    newState[type] = event.target.value

    this.setState(newState)
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const {title, content, imageUrl} = this.state

    if (title && content && imageUrl) {
      await fetch('http://localhost:9999/api/origami', {
        method: 'POST',
        body: JSON.stringify({ title, content, imageUrl }),
        headers: { 'Content-Type': 'application/json', 'Authorization': getCookie('x-auth-token')}
      }).then(response => response.json())
      .then((data) => {      
        this.props.history.push(`/article/${data._id}`)
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
        console.log(result)
        this.setState({
          imageUrl: result.info.url,
          imageThumb: result.info.thumbnail_url
        })
      }
    })
    widget.open()
  }

  render() {
    const {title, content, imageUrl} = this.state
    
    return (
        <Wrapper>
          <ErrorMessage message={this.state.errorMsg} />
          <form className={styles.container} onSubmit={this.handleSubmit}>
          <Title title={'create'} />
          <Input
          value={title}
          onChange={(e) => this.handleChange(e, 'title')}
          label='Title'
          id='title'
          />          
          <Input
          value={content}
          onChange={(e) => this.handleChange(e, 'content')}
          label='Content'
          id='content'
          /> 
          <p><img className={styles.imageurl} src={this.state.imageUrl}></img></p>
          <p><button onClick={this.openWidget}>Upload image</button></p>
          <SubmitButton title='Share' />
          </form>
        </Wrapper>
        
    )
  }
}

export default CreateArticle