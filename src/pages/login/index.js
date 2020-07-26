import React from 'react'
import Wrapper from '../../components/wrapper'
import Title from '../../components/title'
import Input from '../../components/input'

const LoginPage = () => {
    return (
        <Wrapper>
          <Title title={'Login page'} />
          <Input
          value='Enter your e-mail here'
          onChange={() => {}}
          label='E-mail'
          id='email'
          />
          <Input
          value='Enter your password here'
          onChange={() => {}}
          label='Password'
          id='password'
          />
        </Wrapper>
    )
}

export default LoginPage