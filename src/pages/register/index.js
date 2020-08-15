import React, { Component } from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/wrapper'
import Title from '../../components/title'
import Input from '../../components/input'
import SubmitButton from '../../components/button'
import authenticate from '../../utils/authenticate/authenticate'
import UserContext from '../../Context'
import ErrorMessage from '../../components/error-message'
import ReCAPTCHA from "react-google-recaptcha";

class RegisterPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      rePassword: '',
      errorMsg: '',
      token: ''
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

    const {username, password, rePassword, token} = this.state    

    if (username && token && password === rePassword) {
      await authenticate('http://localhost:9999/api/user/register', {
          username,
          password,
          token
        }, (user) => {     
          this.context.logIn(user)   
          this.props.history.push('/')
        }, (err) => {
          this.setState({errorMsg: err})
        }
      )
    }
    this.setState ({errorMsg: 'One or more fields are missing or password not match'})
    return
  }

  recaptchaSubmit = async (value) => {    
    if(value) {
      this.setState({token: value})
    }  
  }

  render() {
    const {username, password, rePassword} = this.state
    
    return (
        <Wrapper>
          <ErrorMessage message={this.state.errorMsg} />
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
          <ReCAPTCHA          
          sitekey="6LdHJb8ZAAAAABLi0nwYhHIZK7R2GUl491DRGrSI"
          onChange={this.recaptchaSubmit}
          /> 
        </Wrapper>
        
    )
  }
}

export default RegisterPage