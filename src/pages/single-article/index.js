import React, { Component } from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/wrapper'
import Title from '../../components/title'
import Article from '../../components/article'
import Input from '../../components/input'
import Button from '../../components/button'

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
        <Title title={this.state.singleArticle.title} />
        <div className={styles.container}>
        <Article        
        content={this.state.singleArticle.content}
        imageUrl={this.state.singleArticle.imageUrl}
        author={this.state.author}
        />        
        <Input label={this.state.author} />
        <Button title='Reply to this article' />
        </div>        
      </Wrapper> 
    )
  }
}

export default SingleArticle