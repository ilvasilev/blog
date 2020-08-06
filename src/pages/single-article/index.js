import React, { Component } from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/wrapper'
import Title from '../../components/title'
import Article from '../../components/article'

class SingleArticle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      singleArticle: {},
      author: ''
    }
  }

  componentDidMount = async () => {      
    const articleId = this.props.match.params.articleid    
    
    const promise = await fetch(`http://localhost:9999/api/origami/${articleId}`)
    const singleArticle = await promise.json()
    
    this.setState ({
      singleArticle: singleArticle,
      author: singleArticle.author.username
    })
    
    console.log(this.state.author)
  }



  render() {
    return (
      <Wrapper>      
      <p>{this.state.singleArticle.title}</p>
      <p>{this.state.singleArticle.content}</p>
      <p>{this.state.singleArticle.imageUrl}</p>
      <p>{this.state.author}</p>
      
      </Wrapper> 
    )
  }
}

export default SingleArticle