import React, { Component } from 'react'
import Wrapper from '../../components/wrapper'
import Articles from '../../components/articles'
import Title from '../../components/title'
import UserContext from '../../Context'

class HomePage extends Component {
  static contextType = UserContext
  
  render () {    
    return (
        <Wrapper>
          <Title title='Home page' />
          <Articles length='3' />  
        </Wrapper>
    )
  }
}

export default HomePage