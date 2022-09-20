import React, { Component } from "react";
import { useEffect } from "react";

export default function Data(props) {
  
   <div>
     <Fetch1/>
     <Api2/>
   </div>

}
  const Fetch1 = () => {
    
    const getUsers = async () => {
      const response =  await fetch('https://api.github.com/users');
  
      const  data = await response.json();
      console.log(data);  
  }
      useEffect(() =>{
        getUsers();
      });
    
    return (
      <div className="main-container">
        <div className="wrapper ">
          <div className=" data-container dark:bg-black">

        <h1>hello</h1>
            </div>
            </div>
            </div>
    )
}




class Api2 extends Component {
  constructor() {
    super();
    this.state = { data: [] };

  }

  async componentDidMount() {
    try {
      const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
}

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(el => (
            <li>
              {el.name}: {el.price_usd}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

