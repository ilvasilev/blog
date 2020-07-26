import React from 'react'
import Wrapper from '../../components/wrapper'
import Posts from '../../components/posts'
import Title from '../../components/title'

const HomePage = () => {
    return (
        <Wrapper>
          <Title title={'Home page'} />
          <Posts />  
        </Wrapper>
    )
}

export default HomePage