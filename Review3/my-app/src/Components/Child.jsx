import React, { Component } from 'react'
import Parent from './Parent';

export class Child extends Component {
    handlechange=(e)=>{
      this.props.sendText(e.target.value);
    }
  render() {

    return (
      <div>
         <input type="text" onChange={this.handlechange} placeholder='Enter any name' />
      </div>
    )
  }
}
export default Child