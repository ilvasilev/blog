import React, { Component } from 'react'
import styles from './index.module.css'
import Origam from '../origam'

class Origamis extends Component {
  constructor(props) {
    super(props)

    this.state = {
      origamis: []
    }
  }

  getOrigamis = async () => {
    const { length } = this.props
    const promise = await fetch(`http://localhost:9999/api/origami`)
    const origamis = await promise.json()    
    this.setState({
      origamis
    })
  }

  renderOrigamis() {
    const { origamis } = this.state
    console.log(origamis)  
    return origamis.map((origam, index) => {
      return (
        <Origam key={origam._id} index={index} {...origam} />
      )
    })
  }

  componentDidMount() {
    this.getOrigamis()
  }

  render() {
    return (
      <div >
        {this.renderOrigamis()}
      </div>
    )
  }
}

export default Origamis