import React, { Component } from 'react'
import Wrapper from '../../components/wrapper'
import Posts from '../../components/posts'
import Title from '../../components/title'
import UserContext from '../../Context'

class HomePage extends Component {
  static contextType = UserContext
  
  render () {
    console.log(this.context)
    return (
        <Wrapper>
          <Title title={'Home page'} />
          <Posts />  
        </Wrapper>
    )
  }
}

export default HomePage