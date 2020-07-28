import React, { Component } from 'react'
import Wrapper from '../../components/wrapper'
import Title from '../../components/title'

class ProfilePage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: null,
      posts: null
    }
  }

  componentDidMount() {
    this.getUser(this.props.match.params.userid)
  }

  getUser = async (id) => {
    const response = await fetch(`http://localhost:9999/api/user?id=${id}`)
    
    const user = await response.json()

    console.log(user)

    this.setState({
      username: user.username,
      posts: user.posts
    })
  }
    
  render() {
    const {
      username,
      posts
    } = this.state
    return (
          <Wrapper>
            <Title title={'Profile page'} />
            <div>
              <p>Username: {username}</p>
              </div>       
          </Wrapper>
      )
  }
}

export default ProfilePage