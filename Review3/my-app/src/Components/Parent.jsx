import React, { Component, useState } from 'react'
import { Child } from './Child';

export class Parent extends Component {
  
    render(){
    return (
      <div>
        <Child sendText={this.props.sendText}/>
      </div>
    )
  }
}

export default Parent
