import React, { Component } from "react";
import "./Home.css";
import Services from "./../../tools/tools";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.auxServices = new Services();
  }

  componentDidMount() {
    this.auxServices.allMovies().then(data => {
      this.setState({ ...this.state, data: data.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.data.map((movie, index) => {
          return (
            <div key={index}>
              <h1>{movie.title}</h1>
              <img src={movie.image_url} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}
