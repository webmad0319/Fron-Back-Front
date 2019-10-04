import React, { Component } from 'react'
import "./Home.css"
import Services from "./../../tools/tools";


export default class One extends Component {
  constructor(){
    super()
    this.state={
      data:null
    }
    this.auxServices = new Services();
  }
  componentDidMount(){
    
    this.auxServices.oneMovie()
    .then((data)=>{
      this.setState({...this.state,data:data.data})
    })
  }

  render() {
    console.log(!!this.state.data)
    if(!!this.state.data){
      return (
        <div>
              <h1>{this.state.data.title}</h1>
              <img src={this.state.data.image_url} alt=""/>
        </div>
      )
    }else{
      return (
        <div>
          <h1>LOADING...</h1>
        </div>
      )
    }

  }
}
