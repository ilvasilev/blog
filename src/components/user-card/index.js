import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

class UserCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          users: []
        }
      }

      renderUsers = async () => {
        const promise = await fetch(`http://localhost:9999/api/user/users`)
        const users = await promise.json()

        this.setState({
            users
        })             
      }

      componentDidMount() {
          this.renderUsers()
      }

      renderTable() {          
          const users = this.state.users
          console.log(users)
          return users.map((user, index) => {
              return(
                <Fragment>
                <tr>
                <td key={`user${user._id}`} id={`user${index}`} className={styles['table-box']}><Link to={`/profile/${user._id}`} >{user.username}</Link></td>
                <td key={`posts${user._id}`} id={`posts${index}`} className={styles['table-box']}>{user.posts.length}</td>
                <td key={`comments${user._id}`} id={`comments${index}`} className={styles['table-box']}>{user.comments.length}</td>
                </tr>
                </Fragment>
              )
          })
      }

      render() {
          return(
            <div className={styles.container}>
            <table className={styles['user-table']}>
                <thead>
                <tr className={styles['table-head']}>
                    <th className={styles['table-box']}>Username</th>
                    <th className={styles['table-box']}>Articles</th>
                    <th className={styles['table-box']}>Comments</th>
                </tr>
                </thead>
                <tbody>                    
                    {this.renderTable()}                    
                </tbody>    
            </table>
        </div>
          )
      }
}

export default UserCard