import React, { Component } from 'react'
import "./Home.css"
import Services from "./../../tools/tools";

export default class Home extends Component {
  constructor(){
    super()
    this.state={
      data:""
    }
    this.auxServices = new Services();
    this.getInfo()
  }

  getInfo = ()=>{
    this.auxServices.allMovies()
    .then((data)=>{
      this.setState({...this.state,data:data.data})
    })
  }

  render() {

    // if(this.state.data){
      return (
        <div>
          {this.state.data.map((movie, index)=>{
            return (
              <div key={index}>
              <h1>{movie.title}</h1>
              <img src={movie.image_url} alt=""/>
              </div>
            )
          })}

        </div>
      )
    // }else{
    //   return (
    //     <div>
    //       <h1>LOADING...</h1>
    //     </div>
    //   )
    // }
  }
}
