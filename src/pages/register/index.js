import React, { Component } from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/wrapper'
import Title from '../../components/title'
import Input from '../../components/input'
import SubmitButton from '../../components/button'
import authenticate from '../../utils/authenticate/authenticate'

class RegisterPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      rePassword: ''
    }
  }

  handleChange = (event, type) => {
    const newState = {}
    newState[type] = event.target.value

    this.setState(newState)
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const {username, password} = this.state

    await authenticate('http://localhost:9999/api/user/register', {
        username,
        password
      }, (user) => {        
        this.props.history.push('/')
      }, (e) => {
        console.log('Error', e)
      }
    )   
  }

  render() {
    const {username, password, rePassword} = this.state
    
    return (
        <Wrapper>
          <form className={styles.container} onSubmit={this.handleSubmit}>
          <Title title={'Register page'} />
          <Input
          value={username}
          onChange={(e) => this.handleChange(e, 'username')}
          label='Username'
          id='username'
          />
          <Input
          type='password'
          value={password}
          onChange={(e) => this.handleChange(e, 'password')}
          label='Password'
          id='password'
          />
          <Input
          type='password'
          value={rePassword}
          onChange={(e) => this.handleChange(e, 'rePassword')}
          label='Re Password'
          id='re-password'
          />
          <SubmitButton title='Register' />
          </form>
        </Wrapper>
        
    )
  }
}

export default RegisterPage