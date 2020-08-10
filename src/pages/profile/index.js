import React, { Component } from 'react'
import Wrapper from '../../components/wrapper'
import ArticleCard  from '../../components/article-card'

class ProfilePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      posts: null,
      postPerUser: []
    }
  }

  componentDidMount() {
    this.getUser(this.props.match.params.userid)
  }

  getUser = async (id) => {
    const response = await fetch(`http://localhost:9999/api/user?id=${id}`)   
    if(!response.ok) {
      this.props.history.push('/error')
    }

    const user = await response.json()
    
    this.setState({
      username: user.username,
      posts: user.posts && user.posts.length,
      postPerUser: user.posts
    })
  }

  renderPosts() {
    const { postPerUser } = this.state
    console.log (postPerUser)
    return postPerUser.map((posts, index) => {
      return (
        <ArticleCard key={posts._id} index={index} {...posts} />
      )
    })
     
  }

  render() {
    const {
      username,
      posts
    } = this.state



    if(!username) {
      return (
        <Wrapper>
          <div>Loading....</div>
        </Wrapper>
      )
    }

    

    return (
      <Wrapper>
        <div>
          <p>User: {username}</p>
          <p>Posts: {posts}</p>
        </div>
        {this.renderPosts()}
      </Wrapper>
    )
  }
}

export default ProfilePage