import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    const image = imageData()

    return(
      <div>
        <h1>Kalvium Gallery</h1>
        <div id="parent">
          {image.map((elements) => {
            return (
              <div>
                <img src={elements.img} alt="img" />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
