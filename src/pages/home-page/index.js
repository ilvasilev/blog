import React, { Component } from 'react'
import Wrapper from '../../components/wrapper'
import Origamis from '../../components/origamis'
import Title from '../../components/title'
import UserContext from '../../Context'

class HomePage extends Component {
  static contextType = UserContext
  
  render () {    
    return (
        <Wrapper>
          <Title title={'Home page'} />
          <Origamis />  
        </Wrapper>
    )
  }
}

export default HomePage