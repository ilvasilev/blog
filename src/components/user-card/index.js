import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

class UserCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          users: [],
          sortValue: ''        
        }
      }

      renderUsers = async () => {
        const {keyword, ascOrDesc} = this.state
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
          return users
          .sort((a, b) => {
              if (this.state.sortValue === 'posts') {
                  return b.posts.length - a.posts.length
              } else if (this.state.sortValue === 'comments') {
                return b.comments.length - a.comments.length
              } 
                return a.username.localeCompare(b.username)
                           
          })
          .map((user, index) => {
              return(
                <Fragment>
                <tr>
                <td key={`user${user._id}`} id={`user${index}`} className={styles['table-box']}><Link className={styles['links-user']} to={`/profile/${user._id}`} >{user.username}</Link></td>
                <td key={`posts${user._id}`} id={`posts${index}`} className={styles['table-box']}>{user.posts.length}</td>
                <td key={`comments${user._id}`} id={`comments${index}`} className={styles['table-box']}>{user.comments.length}</td>
                </tr>
                </Fragment>
              )
          })
      }

      updateSortValue (value) {
          this.setState ({
              sortValue: value
          })
      }

      render() {
          return(
            <div className={styles.container}>
            <table className={styles['user-table']}>
                <thead>
                <tr className={styles['table-head']}>
                    <th className={styles['table-box']}><Link className={styles['links-sort']} onClick={() => this.updateSortValue('users')}>Sort by username</Link></th>
                    <th className={styles['table-box']}><Link className={styles['links-sort']} onClick={() => this.updateSortValue('posts')}>Sort by number of articles</Link></th>
                    <th className={styles['table-box']}><Link className={styles['links-sort']} onClick={() => this.updateSortValue('comments')}>Sort by number of comments</Link></th>
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