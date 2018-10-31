import React, {Component} from 'react'

export default class Cell extends Component {

constructor(props){
  super(props)
  if (this.props.value){
    this.state = { color: this.props.value }
  } else {
  this.state = {
    color: '#F00'
  }
}
}

changeColor = () => {
  console.log('color')
  this.setState({
    color: '#333'
  })
}


  render() {

    console.log(this.state)
    return (
      <div onClick={this.changeColor} className='cell' style={{backgroundColor: this.state.color}}>

      </div>
    )
  }
}
