import React, { Component } from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/wrapper'
import Title from '../../components/title'
import ArticleCard  from '../../components/article-card'
import UserContext from '../../Context'
import getCookie from '../../utils/cookie'

class ProfilePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      posts: null,
      postPerUser: []
    }
  }

  static contextType = UserContext

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
    console.log(postPerUser)
    
    return postPerUser.map((posts, index) => {
      return (
        <ArticleCard key={posts._id} index={index}  {...posts} />
      )
    })
     
  }

  logOut = () => {
    this.context.logOut()
    this.props.history.push('/')
  }

  users() {
    const { posts } = this.state

    const { user } = this.context

    const loggedIn = user && user.loggedIn

    const authorId = (window.location.href).split('/')[4]    
    
    if(loggedIn && user.id === authorId) {      
      return(
        <p key='posts'>Posts: {posts}<br></br><button onClick={this.logOut}>Logout</button> </p>
      )
    }
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
        <Title title={this.state.username} />
        <div className={styles.container}>
          {this.users()}        
        </div>
        <div className={styles.container}>          
        {this.renderPosts()}
        </div>
      </Wrapper>
    )
  }
}

export default ProfilePage