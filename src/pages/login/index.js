import React, { Component } from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/wrapper'
import Title from '../../components/title'
import Input from '../../components/input'
import SubmitButton from '../../components/button'
class LoginPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  onChange = (event, type) => {
    const newState = {}
    newState[type] = event.value

    this.setState(newState)
  }

  render() {
    const {email,
    password} = this.state
    
    return (
        <Wrapper>
          <div className={styles.container}>
          <Title title={'Login page'} />
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
          <SubmitButton title='Login' />
          </div>
        </Wrapper>
    )
  }
}

export default LoginPage