import React, { Component } from 'react';

export default class Cell extends Component{

  constructor(props){
    super(props)
    this.state = {color: this.props.value}
  }

  updateState=()=>{
    const newColor = '#333'
    this.setState({color:newColor})
  }

  render(){
    return(
      <div onClick={this.updateState} className='cell' style={{backgroundColor: this.state.color}}></div>
    )
  }

}
