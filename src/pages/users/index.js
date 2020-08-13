import React, { Component } from 'react'
import styles from './index.module.css'
import UserCard from '../../components/user-card'
import Wrapper from '../../components/wrapper'
import Title from '../../components/title'

const Users = () => {

    return ( 
        <Wrapper>
        <Title title='Users' />
        <UserCard />
        </Wrapper>
    )
}

export default Users