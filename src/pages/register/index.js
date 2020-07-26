import React, { Component } from 'react'
import Wrapper from '../../components/wrapper'
import Title from '../../components/title'
import Input from '../../components/input'

class LoginPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      rePassword: ''
    }
  }

  onChange = (event, type) => {
    const newState = {}
    newState[type] = event.value

    this.setState(newState)
  }

  render() {
    const {email, password, rePassword} = this.state
    
    return (
        <Wrapper>
          <Title title={'Register page'} />
          <Input
          value={email}
          onChange={(e) => this.onChange(e, 'email')}
          label='E-mail'
          id='email'
          />
          <Input
          value={password}
          onChange={(e) => this.onChange(e, 'password')}
          label='Password'
          id='password'
          />
          <Input
          value={rePassword}
          onChange={(e) => this.onChange(e, 'rePassword')}
          label='Re Password'
          id='re-password'
          />
        </Wrapper>
    )
  }
}

export default LoginPage