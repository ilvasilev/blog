import React, { Component } from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/wrapper'
import Title from '../../components/title'
import Input from '../../components/input'
import SubmitButton from '../../components/button'
import authenticate from '../../utils/authenticate/authenticate'
import UserContext from '../../Context'
class LoginPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  static contextType = UserContext

  handleChange = (event, type) => {
    const newState = {}
    newState[type] = event.target.value

    this.setState(newState)
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const {username, password} = this.state    
    
    await authenticate('http://localhost:9999/api/user/login', {
        username,
        password
      }, (user) => {        
        this.context.logIn(user)     
        this.props.history.push('/')
      }, (e) => {
        console.log('Error', e)
      }
    )
    
  }

  render() {
    const {username, password} = this.state
    
    return (
        <Wrapper>
          <Title title={'Login page'} />
          <form className={styles.container} onSubmit={this.handleSubmit}>
          <Input
          value={username}
          onChange={(e) => this.handleChange(e, 'username')}
          label='Username'
          id='username'
          />
          <Input
          type="password"
          value={password}
          onChange={(e) => this.handleChange(e, 'password')}
          label='Password'
          id='password'
          />
          <SubmitButton title='Login' />
          </form>
        </Wrapper>
    )
  }
}

export default LoginPage