import React, { Component } from 'react'
import styles from './index.module.css'
import ArticleCard from '../article-card'

class Articles extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  getArticles = async () => {    
    const { length } = this.props
    const promise = await fetch(`http://localhost:9999/api/origami`)
    const articles = await promise.json()
       
    this.setState({
      articles
    })
  }

  renderArticles() {
    const { articles } = this.state
    console.log(articles) 
    return articles.map((article, index) => {
      console.log('aA', article)
      return (
        <ArticleCard key={article._id} index={index} {...article} />
      )
    })
  }

  componentDidMount() {
    this.getArticles()
  }

  render() {
    return (
      <div >
        {this.renderArticles()}
      </div>
    )
  }
}

export default Articles