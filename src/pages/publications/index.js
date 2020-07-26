import React from 'react'
import Wrapper from '../../components/wrapper'
import Posts from '../../components/posts'
import Title from '../../components/title'

const Publications = () => {
    return (
        <Wrapper>
          <Title title={'Publications'} />
          <Posts />  
        </Wrapper>
    )
}

export default Publications