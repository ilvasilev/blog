import React from 'react'
import Wrapper from '../../components/wrapper'
import Articles from '../../components/articles'
import Title from '../../components/title'

const Publications = () => {
    return (
        <Wrapper>
          <Title title={'All blog articles'} />
          <Articles />  
        </Wrapper>
    )
}

export default Publications